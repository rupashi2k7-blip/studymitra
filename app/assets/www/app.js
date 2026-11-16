/* ================= StudyMitra app logic ================= */
/* ---------- visible error reporter (helps diagnose blank screens) ---------- */
window.onerror = function (msg, src, line) {
  try {
    var b = document.createElement("div");
    b.style.cssText = "position:fixed;left:0;right:0;bottom:0;z-index:99999;background:#E02424;color:#fff;" +
      "font:12px/1.4 sans-serif;padding:8px 10px;white-space:pre-wrap";
    b.textContent = "StudyMitra error: " + msg + " (line " + line + ")";
    document.body.appendChild(b);
  } catch (e) {}
};


const KEY = "studymitra_state_v1";
const DEFAULT_STATE = {
  name: "Aspirant",
  streak: 1,
  lastDay: "",
  read: [],
  bookmarks: [],
  results: [],
  dark: false,
  exam: "All",
  notes: {},
  known: [],
  exams: [],
  goal: { chapters: 2, tests: 1 },
  activity: {},
  todayRec: { date: "", chapters: 0, tests: 0 }
};

const EXAMS = ["All", "WBCS", "WB Police", "Kolkata Police", "NSOU", "WB GK",
  "WBPSC Clerkship", "SSC CGL", "Banking", "Railways"];

let S = loadState();
let currentScreen = "home";
let player = null;      // active test session
let timerId = null;

function loadState() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return Object.assign({}, DEFAULT_STATE);
    return Object.assign({}, DEFAULT_STATE, JSON.parse(raw));
  } catch (e) {
    return Object.assign({}, DEFAULT_STATE);
  }
}
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {}
}
function today() {
  const d = new Date();
  return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
}
function bumpStreak() {
  const t = today();
  if (S.lastDay !== t) {
    const y = new Date(Date.now() - 86400000);
    const yStr = y.getFullYear() + "-" + (y.getMonth() + 1) + "-" + y.getDate();
    S.streak = S.lastDay === yStr ? (S.streak || 1) + 1 : 1;
    S.lastDay = t;
    save();
  }
}

/* ---------- activity + goals ---------- */
function dayKey(d) {
  d = d || new Date();
  return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
}
function todayRec() {
  const k = dayKey();
  if (!S.todayRec || S.todayRec.date !== k) {
    S.todayRec = { date: k, chapters: 0, tests: 0 };
  }
  return S.todayRec;
}
function logActivity(kind) {
  const k = dayKey();
  const rec = todayRec();
  S.activity[k] = (S.activity[k] || 0) + 1;
  if (kind === "chapter") rec.chapters++;
  else rec.tests++;
  save();
}
function weekStrip() {
  const names = ["S", "M", "T", "W", "T", "F", "S"];
  let out = "";
  for (let i = 6; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400000);
    const k = dayKey(d);
    const n = S.activity[k] || 0;
    out += `<div class="day"><div class="dot ${n ? "on" : ""}">${n ? n : ""}</div><small>${names[d.getDay()]}</small></div>`;
  }
  return `<div class="week">${out}</div>`;
}
function upcomingExams() {
  const t0 = new Date();
  t0.setHours(0, 0, 0, 0);
  return (S.exams || []).map(e => ({
    name: e.name,
    date: e.date,
    days: Math.ceil((new Date(e.date + "T00:00:00") - t0) / 86400000)
  })).sort((a, b) => a.days - b.days);
}

/* ---------- helpers ---------- */
function $(id) { return document.getElementById(id); }
function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function toast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.remove("show"), 1800);
}
function allChapters() {
  const out = [];
  SUBJECTS.forEach(s => s.chapters.forEach(c => out.push({ sub: s, ch: c })));
  return out;
}
function findChapter(id) {
  for (const s of SUBJECTS) for (const c of s.chapters) if (c.id === id) return { sub: s, ch: c };
  return null;
}
function findTest(id) {
  return TESTS.filter(t => t.id === id)[0];
}
function accuracy() {
  if (!S.results.length) return 0;
  let got = 0, tot = 0;
  S.results.forEach(r => { got += r.score; tot += r.total; });
  return tot ? Math.round((got / tot) * 100) : 0;
}
function isBookmarked(type, id) {
  return S.bookmarks.some(b => b.type === type && b.id === id);
}
function toggleBookmark(type, id, label) {
  if (isBookmarked(type, id)) {
    S.bookmarks = S.bookmarks.filter(b => !(b.type === type && b.id === id));
    toast("Removed from saved");
  } else {
    S.bookmarks.push({ type: type, id: id, label: label });
    toast("Saved to your library");
  }
  save();
}

/* ---------- navigation ---------- */
function go(name) {
  if (name !== "player" && name !== "result") stopTimer();
  currentScreen = name;
  document.querySelectorAll(".screen").forEach(el => el.classList.remove("active"));
  const el = $("screen-" + name);
  if (el) el.classList.add("active");

  document.querySelectorAll(".bottomnav button").forEach(b => {
    b.classList.toggle("active", b.dataset.nav === name);
  });

  const render = {
    home: renderHome,
    notes: renderNotes,
    tests: renderTests,
    gk: renderGK,
    profile: renderProfile,
    chapter: renderChapter,
    player: renderPlayer,
    result: renderResult,
    search: renderSearch,
    revise: renderRevise,
    pdf: renderPDF,
    print: renderPrint
  }[name];
  if (render) render();
  window.scrollTo(0, 0);
}

/* ---------- HOME ---------- */
function goalPct() {
  const g = S.goal || { chapters: 2, tests: 1 };
  const rec = todayRec();
  const a = Math.min(1, rec.chapters / Math.max(1, g.chapters));
  const b = Math.min(1, rec.tests / Math.max(1, g.tests));
  return Math.round(((a + b) / 2) * 100);
}
function countdownCard() {
  const up = upcomingExams().filter(e => e.days >= 0)[0];
  if (!up) {
    return `<div class="item" onclick="go('revise')" style="margin-top:12px">
      <div class="badge">\u23F3</div>
      <div class="txt"><b>Add your exam date</b><small>Countdown dikhega yahan \u2014 Revise tab me</small></div>
      <div class="arrow">\u203A</div>
    </div>`;
  }
  return `<div class="hero" style="margin-top:12px;background:linear-gradient(120deg,#0E9F6E,#22C55E)">
    <h3>${esc(up.name)}</h3>
    <p>${up.days === 0 ? "Exam aaj hai \u2014 best of luck!" : up.days + " days left \u00B7 " + up.date}</p>
    <div class="row"><button class="btn btn-ghost" onclick="go('tests')">Take a mock</button>
    <button class="btn btn-ghost" onclick="go('revise')">Revise cards</button></div>
  </div>`;
}

function renderHome() {
  bumpStreak();
  const last = S.read.length ? findChapter(S.read[S.read.length - 1]) : null;
  const daily = dailySet();
  const popular = TESTS.slice(0, 3);

  let heroInner = "";
  if (last) {
    heroInner = `
      <h3>Welcome back, ${esc(S.name)}</h3>
      <p>Continue where you left off \u2014 ${esc(last.ch.title)}</p>
      <div class="row">
        <button class="btn btn-primary" onclick="openChapter('${last.ch.id}')">Resume reading</button>
        <button class="btn btn-ghost" onclick="go('tests')">Mock tests</button>
      </div>`;
  } else {
    heroInner = `
      <h3>Namaste, ${esc(S.name)}</h3>
      <p>Notes, mock tests and GK \u2014 all offline, all free.</p>
      <div class="row">
        <button class="btn btn-primary" onclick="go('notes')">Start studying</button>
        <button class="btn btn-ghost" onclick="go('tests')">Take a mock</button>
      </div>`;
  }

  $("screen-home").innerHTML = `
    <div class="hero">${heroInner}</div>

    <div class="stats">
      <div class="stat"><b>${S.read.length}</b><small>Chapters read</small></div>
      <div class="stat"><b>${S.results.length}</b><small>Tests taken</small></div>
      <div class="stat"><b>${accuracy()}%</b><small>Accuracy</small></div>
    </div>

    <div class="card" style="padding:14px;margin-top:12px">
      <div class="rowline">
        <div>
          <b style="font-size:13.5px">Today's goal</b>
          <div class="muted" style="margin-top:2px">
            ${todayRec().chapters}/${S.goal.chapters} chapters \u00B7 ${todayRec().tests}/${S.goal.tests} tests
          </div>
        </div>
        <div class="ring" style="background:conic-gradient(var(--brand) ${goalPct()}%, var(--line) 0deg)">
          <i>${goalPct()}%</i>
        </div>
      </div>
      <div class="divider" style="margin:12px 0 10px"></div>
      <div class="muted" style="font-size:11px;margin-bottom:6px">Last 7 days</div>
      ${weekStrip()}
    </div>

    ${countdownCard()}

    <div class="quick">
      <div class="qa" onclick="go('notes')"><div class="ic o">\uD83D\uDCD8</div><span>Study notes</span></div>
      <div class="qa" onclick="go('tests')"><div class="ic b">\uD83D\uDCDD</div><span>Mock tests</span></div>
      <div class="qa" onclick="go('pdf')"><div class="ic g">\uD83D\uDCC4</div><span>PDF packs</span></div>
      <div class="qa" onclick="go('gk')"><div class="ic p">\uD83C\uDF10</div><span>GK zone</span></div>
    </div>

    <h2 class="sec">Choose your exam</h2>
    <div class="chips">
      ${EXAMS.map(e => `<div class="chip ${S.exam === e ? "on" : ""}" onclick="pickExam('${e}')">${e}</div>`).join("")}
    </div>

    <h2 class="sec">Daily quiz <span class="link" onclick="startDaily()">Start now \u2192</span></h2>
    <div class="item" onclick="startDaily()">
      <div class="badge">\u26A1</div>
      <div class="txt">
        <b>Today's 5 questions</b>
        <small>Mixed GK \u00B7 5 min \u00B7 keeps your streak alive</small>
      </div>
      <div class="arrow">\u203A</div>
    </div>

    <h2 class="sec">Popular tests <span class="link" onclick="go('tests')">See all</span></h2>
    <div class="list">
      ${popular.map(t => `
        <div class="item" onclick="startTest('${t.id}')">
          <div class="badge">\uD83C\uDFAF</div>
          <div class="txt">
            <b>${esc(t.title)}</b>
            <small>${t.qcount} questions \u00B7 ${t.mins} min \u00B7 ${esc(t.exam)}</small>
          </div>
          <div class="arrow">\u203A</div>
        </div>`).join("")}
    </div>

    <h2 class="sec">PYQ practice sets <span class="link" onclick="go('tests')">All tests</span></h2>
    <div class="list">
      ${TESTS.filter(t => t.tag === "PYQ").slice(0, 3).map(t => `
        <div class="item" onclick="startTest('${t.id}')">
          <div class="badge" style="background:rgba(224,36,36,.1);color:#E02424">PYQ</div>
          <div class="txt">
            <b>${esc(t.title)}</b>
            <small>${t.qcount} Q \u00B7 ${t.mins} min \u00B7 ${t.neg ? "\u2212" + t.neg + " negative" : "no negative"}</small>
          </div>
          <div class="arrow">\u203A</div>
        </div>`).join("")}
    </div>

    <h2 class="sec">Tip of the day</h2>
    <div class="card" style="padding:14px">
      <div class="muted" style="font-size:13px">
        Revise one chapter, then attempt a 10-question test on it the same day. Active recall
        right after reading roughly doubles retention compared with re-reading alone.
      </div>
    </div>
    <div style="height:8px"></div>
  `;
  $("streakNum").textContent = S.streak;
}

function pickExam(e) {
  S.exam = e;
  save();
  go("tests");
}

/* ---------- NOTES ---------- */
function renderNotes() {
  $("screen-notes").innerHTML = `
    <h2 class="sec">Study material <span class="link">${allChapters().length} chapters</span></h2>
    <div class="item" onclick="go('pdf')" style="margin-bottom:10px">
      <div class="badge" style="background:rgba(126,34,206,.12);color:#7E22CE">PDF</div>
      <div class="txt"><b>PDF packs &amp; downloads</b><small>Print-ready packs \u2014 save as PDF on your phone</small></div>
      <div class="arrow">\u203A</div>
    </div>
    <div class="list">
      ${SUBJECTS.map(s => `
        <div class="item" onclick="openSubject('${s.id}')">
          <div class="badge">${s.icon}</div>
          <div class="txt">
            <b>${esc(s.name)}</b>
            <small>${s.chapters.length} chapters \u00B7 ${esc(s.tag)}</small>
          </div>
          <div class="arrow">\u203A</div>
        </div>`).join("")}
    </div>
    <h2 class="sec">My notes</h2>
    ${myNotesHTML()}
    <h2 class="sec">Saved by you</h2>
    ${savedNotesHTML()}
    <div style="height:8px"></div>
  `;
}

function savedNotesHTML() {
  const saved = S.bookmarks.filter(b => b.type === "chapter");
  if (!saved.length) return `<div class="card" style="padding:16px"><div class="muted">Bookmark a chapter while reading and it will appear here.</div></div>`;
  return `<div class="list">${saved.map(b => `
    <div class="item" onclick="openChapter('${b.id}')">
      <div class="badge">\uD83D\uDD16</div>
      <div class="txt"><b>${esc(b.label)}</b><small>Saved chapter</small></div>
      <div class="arrow">\u203A</div>
    </div>`).join("")}</div>`;
}

function openSubject(id) {
  const s = SUBJECTS.filter(x => x.id === id)[0];
  if (!s) return;
  $("screen-notes").innerHTML = `
    <div class="rowline" style="margin-bottom:12px">
      <button class="btn btn-soft" onclick="go('notes')">\u2039 Back</button>
      <span class="muted">${s.chapters.length} chapters</span>
    </div>
    <h1 style="font-size:19px;margin:0 0 2px">${esc(s.name)}</h1>
    <div class="muted" style="margin-bottom:14px">${esc(s.tag)}</div>
    <div class="list">
      ${s.chapters.map((c, i) => `
        <div class="item" onclick="openChapter('${c.id}')">
          <div class="badge">${i + 1}</div>
          <div class="txt">
            <b>${esc(c.title)}</b>
            <small>${c.mins} min read ${S.read.indexOf(c.id) > -1 ? "\u00B7 <span style='color:#0E9F6E'>read</span>" : ""}</small>
          </div>
          <div class="arrow">\u203A</div>
        </div>`).join("")}
    </div>
    <div style="height:8px"></div>
  `;
  currentScreen = "notes";
  window.scrollTo(0, 0);
}

let activeChapter = null;
function openChapter(id) {
  const f = findChapter(id);
  if (!f) return;
  activeChapter = id;
  if (S.read.indexOf(id) === -1) { S.read.push(id); save(); }
  logActivity("chapter");
  go("chapter");
}

function renderChapter() {
  const f = findChapter(activeChapter);
  if (!f) { go("notes"); return; }
  const list = f.sub.chapters;
  const idx = list.findIndex(c => c.id === f.ch.id);
  const next = list[idx + 1];
  const bm = isBookmarked("chapter", f.ch.id);

  $("screen-chapter").innerHTML = `
    <div class="rowline" style="margin-bottom:10px">
      <button class="btn btn-soft" onclick="openSubject('${f.sub.id}')">\u2039 ${esc(f.sub.name)}</button>
      <button class="btn btn-soft" onclick="toggleBookmark('chapter','${f.ch.id}','${esc(f.ch.title).replace(/'/g, "\\'")}');renderChapter();">
        ${bm ? "\u2605 Saved" : "\u2606 Save"}
      </button>
    </div>
    <div class="notehead">
      <h1>${esc(f.ch.title)}</h1>
      <small>${esc(f.sub.name)} \u00B7 ${f.ch.mins} min read \u00B7 Chapter ${idx + 1} of ${list.length}</small>
    </div>
    <div class="notebody">${f.ch.body}</div>

    <h3 style="font-size:14px;margin:18px 0 8px">My note</h3>
    <textarea class="mynote" id="noteBox" placeholder="Apne points likhein \u2014 yeh sirf aapke phone me save honge">${esc(S.notes[f.ch.id] || "")}</textarea>
    <button class="btn btn-soft btn-block" style="margin-top:8px" onclick="saveNote('${f.ch.id}')">Save note</button>

    <div class="divider"></div>
    ${next
      ? `<button class="btn btn-primary btn-block" onclick="openChapter('${next.id}')">Next: ${esc(next.title)} \u2192</button>`
      : `<button class="btn btn-primary btn-block" onclick="go('tests')">Attempt a test on this \u2192</button>`}
    <div style="height:14px"></div>
  `;
  window.scrollTo(0, 0);
}

/* ---------- TESTS ---------- */
function renderTests() {
  const list = S.exam === "All" ? TESTS : TESTS.filter(t => t.exam === S.exam);
  $("screen-tests").innerHTML = `
    <h2 class="sec">Mock tests &amp; practice <span class="link">${TESTS.length} sets</span></h2>
    <div class="chips">
      ${EXAMS.map(e => `<div class="chip ${S.exam === e ? "on" : ""}" onclick="pickExam('${e}')">${e}</div>`).join("")}
    </div>
    <div class="list" style="margin-top:8px">
      ${(list.length ? list : []).map(t => `
        <div class="item" onclick="startTest('${t.id}')">
          <div class="badge">\uD83C\uDFAF</div>
          <div class="txt">
            <b>${esc(t.title)}</b>
            <small><span class="pill ${t.tag === "Free Mock" ? "free" : ""}">${t.tag}</span>${t.qcount} Q \u00B7 ${t.mins} min</small>
          </div>
          <div class="arrow">\u203A</div>
        </div>`).join("") || `<div class="empty">No tests for this filter yet.</div>`}
    </div>
    <h2 class="sec">Recent scores</h2>
    ${recentResultsHTML()}
    <div style="height:8px"></div>
  `;
}

function recentResultsHTML() {
  if (!S.results.length) {
    return `<div class="card" style="padding:16px"><div class="muted">Your scores will show up here after your first test.</div></div>`;
  }
  return `<div class="list">${S.results.slice(-4).reverse().map(r => `
    <div class="item" onclick="reviewTest('${r.testId}')">
      <div class="badge" style="background:rgba(14,159,110,.12);color:#0E9F6E">${r.score}</div>
      <div class="txt"><b>${esc(r.title)}</b><small>${r.score}/${r.total} correct \u00B7 ${r.date}</small></div>
      <div class="arrow">\u203A</div>
    </div>`).join("")}</div>`;
}

/* ---------- QUIZ PLAYER ---------- */
function dailySet() {
  const start = new Date().getDate() % DAILY_POOL.length;
  const out = [];
  for (let i = 0; i < 5; i++) out.push(DAILY_POOL[(start + i) % DAILY_POOL.length]);
  return { id: "daily", title: "Daily Quiz", exam: "Mixed", mins: 5, questions: out };
}

function startDaily() {
  const d = dailySet();
  beginSession({ id: "daily-" + today(), title: "Daily Quiz \u2014 " + today(), mins: 5, questions: d.questions, tag: "Daily" });
}

function startTest(id) {
  const t = findTest(id);
  if (!t) return;
  beginSession({ id: t.id, title: t.title, mins: t.mins, neg: t.neg || 0, questions: t.questions, tag: t.tag });
}

function beginSession(cfg) {
  player = {
    id: cfg.id,
    title: cfg.title,
    mins: cfg.mins,
    neg: cfg.neg || 0,
    questions: cfg.questions,
    answers: cfg.questions.map(() => null),
    idx: 0,
    left: cfg.mins * 60,
    submitted: false
  };
  go("player");
  startTimer();
}

function startTimer() {
  stopTimer();
  timerId = setInterval(() => {
    if (!player || player.submitted) return;
    player.left--;
    const el = $("timerBox");
    if (el) {
      el.textContent = fmt(player.left);
      el.classList.toggle("low", player.left <= 60);
    }
    if (player.left <= 0) submitTest();
  }, 1000);
}
function stopTimer() {
  if (timerId) { clearInterval(timerId); timerId = null; }
}
function fmt(s) {
  if (s < 0) s = 0;
  const m = Math.floor(s / 60), ss = s % 60;
  return (m < 10 ? "0" : "") + m + ":" + (ss < 10 ? "0" : "") + ss;
}

function renderPlayer() {
  if (!player) { go("tests"); return; }
  const q = player.questions[player.idx];
  const chosen = player.answers[player.idx];
  const letters = ["A", "B", "C", "D"];

  $("screen-player").innerHTML = `
    <div class="player-top">
      <div>
        <div class="ttl">${esc(player.title)}</div>
        <div style="font-size:12px;color:var(--ink-3)">Question ${player.idx + 1} of ${player.questions.length}</div>
      </div>
      <div class="timer ${player.left <= 60 ? "low" : ""}" id="timerBox">${fmt(player.left)}</div>
    </div>

    <div class="qbox">
      <div class="qmeta"><span>+1 mark</span><span>${player.neg ? "\u2212" + player.neg + " per wrong answer" : "No negative marking"}</span></div>
      <div class="qtext">${esc(q.q)}</div>
      ${q.o.map((op, i) => `
        <div class="opt ${chosen === i ? "sel" : ""}" onclick="pickOption(${i})">
          <div class="k">${letters[i]}</div><div>${esc(op)}</div>
        </div>`).join("")}
    </div>

    <div class="palette">
      ${player.questions.map((_, i) => `
        <div class="pal ${player.answers[i] !== null ? "ans" : ""} ${i === player.idx ? "cur" : ""}"
             onclick="gotoQ(${i})">${i + 1}</div>`).join("")}
    </div>

    <div class="navrow">
      <button class="btn btn-soft" onclick="gotoQ(${player.idx - 1})" ${player.idx === 0 ? "disabled style='opacity:.45'" : ""}>\u2039 Previous</button>
      ${player.idx === player.questions.length - 1
        ? `<button class="btn btn-primary" onclick="submitTest()">Submit test</button>`
        : `<button class="btn btn-primary" onclick="gotoQ(${player.idx + 1})">Next \u203A</button>`}
    </div>
    <div style="margin:12px 0">
      <button class="btn btn-outline btn-block" onclick="submitTest()">Submit early</button>
    </div>
    <div style="height:8px"></div>
  `;
}

function pickOption(i) {
  if (!player) return;
  player.answers[player.idx] = i;
  renderPlayer();
}
function gotoQ(i) {
  if (!player) return;
  if (i < 0 || i >= player.questions.length) return;
  player.idx = i;
  renderPlayer();
}

function submitTest() {
  if (!player || player.submitted) return;
  const answered = player.answers.filter(a => a !== null).length;
  if (answered < player.questions.length) {
    const ok = confirm(answered + " of " + player.questions.length + " questions answered. Submit anyway?");
    if (!ok) return;
  }
  player.submitted = true;
  stopTimer();

  let score = 0, wrong = 0;
  player.questions.forEach((q, i) => {
    if (player.answers[i] === q.a) score++;
    else if (player.answers[i] !== null) wrong++;
  });
  const marks = Math.round((score - wrong * (player.neg || 0)) * 100) / 100;
  const d = new Date();
  S.results.push({
    testId: player.id,
    title: player.title,
    score: score,
    wrong: wrong,
    marks: marks,
    total: player.questions.length,
    date: d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear()
  });
  logActivity("test");
  go("result");
}

function renderResult() {
  if (!player) { go("tests"); return; }
  const total = player.questions.length;
  let score = 0, skipped = 0;
  player.questions.forEach((q, i) => {
    if (player.answers[i] === q.a) score++;
    if (player.answers[i] === null) skipped++;
  });
  const wrongCount = total - score - skipped;
  const marks = Math.round((score - wrongCount * (player.neg || 0)) * 100) / 100;
  const pct = Math.round((score / total) * 100);
  const letters = ["A", "B", "C", "D"];

  $("screen-result").innerHTML = `
    <div class="scorecard">
      <div class="big">${score}<small>/${total}</small></div>
      <p>${esc(player.title)}</p>
      <p style="font-size:14px;color:#FFA62B;font-weight:700;margin-top:6px">${pct}% \u00B7 ${pct >= 70 ? "Excellent" : pct >= 40 ? "Keep going" : "Revise and retry"}</p>
      ${player.neg ? `<p style="font-size:12.5px;color:#C9D3E6;margin-top:4px">Marks: <b style="color:#fff">${marks}</b> / ${total} after \u2212${player.neg} per wrong answer</p>` : ""}
    </div>

    <div class="resgrid">
      <div class="stat"><b style="color:#0E9F6E">${score}</b><small>Correct</small></div>
      <div class="stat"><b style="color:#E02424">${total - score - skipped}</b><small>Wrong</small></div>
      <div class="stat"><b>${skipped}</b><small>Skipped</small></div>
    </div>

    <h2 class="sec">Solutions</h2>
    <div class="list">
      ${player.questions.map((q, i) => {
        const picked = player.answers[i];
        const ok = picked === q.a;
        return `
        <div class="card" style="padding:14px">
          <div class="qmeta"><span>Q${i + 1}</span><span style="color:${picked === null ? "#8A93A6" : ok ? "#0E9F6E" : "#E02424"}">
            ${picked === null ? "Skipped" : ok ? "Correct" : "Wrong"}</span></div>
          <div class="qtext" style="font-size:14px">${esc(q.q)}</div>
          ${q.o.map((op, j) => `
            <div class="opt ${j === q.a ? "right" : (j === picked ? "wrong" : "")}" style="pointer-events:none">
              <div class="k">${letters[j]}</div><div>${esc(op)}</div>
            </div>`).join("")}
          <div class="exp"><b>Explanation:</b> ${esc(q.e)}</div>
        </div>`;
      }).join("")}
    </div>

    <div class="navrow" style="margin-top:14px">
      <button class="btn btn-soft" onclick="go('tests')">Back to tests</button>
      <button class="btn btn-primary" onclick="retry()">Retry test</button>
    </div>
    <div style="height:8px"></div>
  `;
}

function retry() {
  if (!player) return;
  beginSession({ id: player.id, title: player.title, mins: player.mins, neg: player.neg, questions: player.questions });
}

function reviewTest(id) {
  const r = S.results.slice().reverse().filter(x => x.testId === id)[0];
  const t = findTest(id);
  if (!t) { toast("This was a daily quiz \u2014 retake it from Home"); return; }
  toast("Attempt " + t.title + " again to review");
}

/* ---------- GK ---------- */
function renderGK() {
  $("screen-gk").innerHTML = `
    <h2 class="sec">GK &amp; Current Zone</h2>
    <div class="muted" style="margin-bottom:12px">Static GK, important days, schemes and one-liners \u2014 updated with each app release.</div>
    <div class="list">
      ${GK.map(g => `
        <div class="card" style="padding:14px">
          <div class="rowline" style="margin-bottom:10px">
            <b style="font-size:14px">${g.icon} ${esc(g.title)}</b>
            <span class="muted">${g.items.length}</span>
          </div>
          ${g.items.map(it => `
            <div style="padding:8px 0;border-top:1px solid var(--line)">
              <div style="font-size:13px;font-weight:700;color:var(--ink)">${esc(it[0])}</div>
              <div style="font-size:12.5px;color:var(--ink-2);margin-top:2px">${esc(it[1])}</div>
            </div>`).join("")}
        </div>`).join("")}
    </div>
    <div style="height:8px"></div>
  `;
}

/* ---------- PROFILE ---------- */
function renderProfile() {
  const best = S.results.reduce((m, r) => Math.max(m, Math.round((r.score / r.total) * 100)), 0);
  $("screen-profile").innerHTML = `
    <div class="card" style="padding:16px;display:flex;gap:14px;align-items:center">
      <div class="logo" style="width:52px;height:52px;border-radius:16px;background:linear-gradient(135deg,#E85D04,#FFA62B);font-size:18px">
        ${esc(S.name.slice(0, 2).toUpperCase())}
      </div>
      <div style="flex:1">
        <b style="font-size:16px">${esc(S.name)}</b>
        <div class="muted">Preparing for government exams</div>
      </div>
      <button class="btn btn-soft" onclick="rename()">Edit</button>
    </div>

    <div class="stats">
      <div class="stat"><b>${S.read.length}</b><small>Chapters</small></div>
      <div class="stat"><b>${S.results.length}</b><small>Tests</small></div>
      <div class="stat"><b>${best}%</b><small>Best score</small></div>
    </div>

    <h2 class="sec">Your progress</h2>
    <div class="card" style="padding:14px">
      <div class="rowline" style="margin-bottom:6px">
        <span class="muted">Syllabus covered</span>
        <b style="font-size:13px">${S.read.length}/${allChapters().length} chapters</b>
      </div>
      <div class="progressbar"><i style="width:${Math.min(100, Math.round((S.read.length / allChapters().length) * 100))}%"></i></div>
      <div class="rowline" style="margin:12px 0 6px">
        <span class="muted">Overall accuracy</span>
        <b style="font-size:13px">${accuracy()}%</b>
      </div>
      <div class="progressbar"><i style="width:${accuracy()}%"></i></div>
    </div>

    <h2 class="sec">Saved library</h2>
    ${savedNotesHTML()}

    <h2 class="sec">Daily target</h2>
    <div class="setting" onclick="setGoal()">
      <span>Chapters / tests per day</span>
      <span class="muted">${S.goal.chapters} / ${S.goal.tests} \u203A</span>
    </div>

    <h2 class="sec">Exam countdown</h2>
    ${examListHTML()}

    <h2 class="sec">PDF &amp; downloads</h2>
    <div class="item" onclick="go('pdf')" style="margin-bottom:10px">
      <div class="badge" style="background:rgba(126,34,206,.12);color:#7E22CE">PDF</div>
      <div class="txt"><b>${PACKS.length} printable packs</b><small>Save as PDF from the print sheet</small></div>
      <div class="arrow">\u203A</div>
    </div>

    <h2 class="sec">Settings</h2>
    <div class="setting">
      <span>Dark mode</span>
      <div class="switch ${S.dark ? "on" : ""}" onclick="toggleDark()"><i></i></div>
    </div>
    <div class="setting" onclick="resetAll()">
      <span>Reset all progress</span>
      <span class="muted">\u203A</span>
    </div>
    <div class="card" style="padding:14px;margin-top:6px">
      <div class="muted" style="font-size:12px;line-height:1.6">
        <b style="color:var(--ink)">StudyMitra v1.3</b><br>
        Offline study material app for SSC, Banking, Railway and State PSC aspirants.
        Content is curated static material \u2014 always cross-check with official notifications.
      </div>
    </div>
    <div style="height:8px"></div>
  `;
}

function rename() {
  const n = prompt("Your name", S.name);
  if (n && n.trim()) { S.name = n.trim().slice(0, 20); save(); renderProfile(); toast("Name updated"); }
}
function toggleDark() {
  S.dark = !S.dark;
  save();
  document.body.classList.toggle("dark", S.dark);
  renderProfile();
}
function resetAll() {
  if (!confirm("Clear all progress, scores and saved items?")) return;
  S = Object.assign({}, DEFAULT_STATE);
  save();
  document.body.classList.remove("dark");
  toast("Progress cleared");
  go("home");
}

/* ---------- SEARCH ---------- */
function renderSearch() {
  const q = $("globalSearch").value.trim().toLowerCase();
  if (!q) { go("home"); return; }
  const notes = allChapters().filter(c =>
    c.ch.title.toLowerCase().indexOf(q) > -1 ||
    c.sub.name.toLowerCase().indexOf(q) > -1 ||
    c.ch.body.toLowerCase().indexOf(q) > -1
  ).slice(0, 12);
  const tests = TESTS.filter(t =>
    t.title.toLowerCase().indexOf(q) > -1 || t.exam.toLowerCase().indexOf(q) > -1
  );

  $("screen-search").innerHTML = `
    <h2 class="sec">Results for "${esc(q)}"</h2>
    ${notes.length ? `<div class="muted" style="margin-bottom:8px">Notes</div>
      <div class="list">${notes.map(c => `
        <div class="item" onclick="openChapter('${c.ch.id}')">
          <div class="badge">${c.sub.icon}</div>
          <div class="txt"><b>${esc(c.ch.title)}</b><small>${esc(c.sub.name)}</small></div>
          <div class="arrow">\u203A</div>
        </div>`).join("")}</div>` : ""}
    ${tests.length ? `<div class="muted" style="margin:16px 0 8px">Tests</div>
      <div class="list">${tests.map(t => `
        <div class="item" onclick="startTest('${t.id}')">
          <div class="badge">\uD83C\uDFAF</div>
          <div class="txt"><b>${esc(t.title)}</b><small>${t.qcount} Q \u00B7 ${t.mins} min</small></div>
          <div class="arrow">\u203A</div>
        </div>`).join("")}</div>` : ""}
    ${!notes.length && !tests.length ? `<div class="empty">Nothing matched "${esc(q)}". Try 'polity', 'percentage', 'constitution' or 'Ganga'.</div>` : ""}
    <div style="height:8px"></div>
  `;
  window.scrollTo(0, 0);
}



/* ---------- REVISE: flashcards, weak areas, exams ---------- */
let fcIdx = 0, fcFlipped = false;

function renderRevise() {
  const card = FLASHCARDS[fcIdx] || FLASHCARDS[0];
  const knownPct = Math.round((S.known.length / FLASHCARDS.length) * 100);
  const weak = weakAreas();

  $("screen-revise").innerHTML = `
    <h2 class="sec">Flashcards <span class="link" onclick="resetKnown()">Reset</span></h2>
    <div class="muted" style="margin-bottom:10px">${S.known.length}/${FLASHCARDS.length} known \u00B7 ${knownPct}%</div>
    <div class="progressbar" style="margin-bottom:14px"><i style="width:${knownPct}%"></i></div>

    <div class="flash" onclick="flipCard()">
      <div class="tag">${esc(card.tag)}</div>
      <div class="q">${esc(card.q)}</div>
      ${fcFlipped ? `<div class="a">${esc(card.a)}</div>` : `<div class="hint">Tap to see the answer</div>`}
    </div>

    <div class="navrow" style="margin-top:12px">
      <button class="btn btn-soft" onclick="nextCard(-1)">\u2039 Back</button>
      ${fcFlipped
        ? `<button class="btn btn-primary" onclick="markKnown()">Known \u2713</button>`
        : `<button class="btn btn-primary" onclick="flipCard()">Show answer</button>`}
      <button class="btn btn-soft" onclick="nextCard(1)">Next \u203A</button>
    </div>

    <h2 class="sec">Where you are weak</h2>
    ${weak.length ? `<div class="list">${weak.slice(0, 4).map(w => `
      <div class="item" onclick="${w.subject ? `openSubject('${w.subject}')` : "go('tests')"}">
        <div class="badge" style="background:rgba(224,36,36,.1);color:#E02424">${w.pct}%</div>
        <div class="txt"><b>${esc(w.exam)}</b><small>${w.n} test${w.n > 1 ? "s" : ""} \u00B7 ${w.subject ? "revise notes" : "attempt again"}</small></div>
        <div class="arrow">\u203A</div>
      </div>`).join("")}</div>`
      : `<div class="card" style="padding:16px"><div class="muted">Do 2\u20133 tests and your weak areas will show up here.</div></div>`}

    <h2 class="sec">Exam countdown <span class="link" onclick="addExam()">+ Add exam</span></h2>
    ${examListHTML()}

    <h2 class="sec">Quick GK revision</h2>
    <div class="item" onclick="go('gk')">
      <div class="badge">\uD83C\uDF10</div>
      <div class="txt"><b>GK Zone one-liners</b><small>Symbols, days, schemes, rapid revision</small></div>
      <div class="arrow">\u203A</div>
    </div>
    <div style="height:8px"></div>
  `;
}

function flipCard() { fcFlipped = !fcFlipped; renderRevise(); }
function nextCard(d) {
  fcIdx = (fcIdx + d + FLASHCARDS.length) % FLASHCARDS.length;
  fcFlipped = false;
  renderRevise();
}
function markKnown() {
  if (S.known.indexOf(fcIdx) === -1) S.known.push(fcIdx);
  save();
  toast("Marked as known");
  nextCard(1);
}
function resetKnown() {
  S.known = [];
  save();
  renderRevise();
  toast("Flashcards reset");
}

const EXAM_SUBJECT = {
  "WBCS": "wbcs", "WB Police": "wbpolice", "Kolkata Police": "wbpolice",
  "NSOU": "nsou", "WB GK": "wbgk", "WBPSC Clerkship": "wbcs",
  "SSC CGL": "polity", "Banking": "polity", "Railways": "geography",
  "Polity": "polity", "Quant": "maths", "Reasoning": "reasoning"
};

function weakAreas() {
  const byExam = {};
  S.results.forEach(r => {
    const t = findTest(r.testId);
    const key = t ? t.exam : (String(r.testId).indexOf("daily") === 0 ? "Daily quiz" : "Other");
    if (!byExam[key]) byExam[key] = { got: 0, tot: 0, n: 0 };
    byExam[key].got += r.score;
    byExam[key].tot += r.total;
    byExam[key].n++;
  });
  return Object.keys(byExam)
    .map(k => ({
      exam: k,
      pct: byExam[k].tot ? Math.round((byExam[k].got / byExam[k].tot) * 100) : 0,
      n: byExam[k].n,
      subject: EXAM_SUBJECT[k] || null
    }))
    .sort((a, b) => a.pct - b.pct);
}

function examListHTML() {
  const up = upcomingExams();
  if (!up.length) {
    return `<div class="card" style="padding:16px">
      <div class="muted">Koi exam date add nahi ki gayi. "Add exam" dabakar date daalein \u2014 home pe countdown dikhega.</div>
    </div>`;
  }
  return `<div class="list">${up.map((e, i) => `
    <div class="item">
      <div class="badge" style="background:rgba(14,159,110,.12);color:#0E9F6E">${e.days >= 0 ? e.days : "\u2013"}</div>
      <div class="txt"><b>${esc(e.name)}</b><small>${e.date}${e.days >= 0 ? " \u00B7 " + e.days + " days left" : " \u00B7 past"}</small></div>
      <button class="btn btn-soft" style="padding:7px 10px" onclick="removeExam(${i})">Remove</button>
    </div>`).join("")}</div>`;
}

function addExam() {
  const name = prompt("Exam name (e.g. WBCS Prelims)");
  if (!name || !name.trim()) return;
  const date = prompt("Exam date (YYYY-MM-DD)", "2027-01-15");
  if (!date) return;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date.trim())) { toast("Format: YYYY-MM-DD"); return; }
  S.exams = S.exams || [];
  S.exams.push({ name: name.trim().slice(0, 30), date: date.trim() });
  save();
  renderRevise();
  toast("Exam added");
}
function removeExam(i) {
  S.exams.splice(i, 1);
  save();
  renderRevise();
}
function setGoal() {
  const c = prompt("Chapters per day", S.goal.chapters);
  if (c === null) return;
  const t = prompt("Tests per day", S.goal.tests);
  if (t === null) return;
  S.goal = { chapters: Math.max(1, parseInt(c, 10) || 1), tests: Math.max(1, parseInt(t, 10) || 1) };
  save();
  renderProfile();
  toast("Daily target updated");
}

/* ---------- MY NOTES ---------- */
function saveNote(chId) {
  const el = $("noteBox");
  if (!el) return;
  const v = el.value.trim();
  if (v) S.notes[chId] = v;
  else delete S.notes[chId];
  save();
  toast(v ? "Note saved" : "Note removed");
}
function myNotesHTML() {
  const keys = Object.keys(S.notes || {});
  if (!keys.length) {
    return `<div class="card" style="padding:16px"><div class="muted">Kisi bhi chapter ke neeche "My note" box me apne points likhein \u2014 wo yahan aa jayenge.</div></div>`;
  }
  return `<div class="list">${keys.map(id => {
    const f = findChapter(id);
    if (!f) return "";
    return `<div class="item" onclick="openChapter('${id}')">
      <div class="badge" style="background:rgba(29,78,216,.12);color:#1D4ED8">\u270E</div>
      <div class="txt"><b>${esc(f.ch.title)}</b><small>${esc((S.notes[id] || "").slice(0, 60))}${(S.notes[id] || "").length > 60 ? "\u2026" : ""}</small></div>
      <div class="arrow">\u203A</div>
    </div>`;
  }).join("")}</div>`;
}

/* ---------- PDF LIBRARY ---------- */
function renderPDF() {
  $("screen-pdf").innerHTML = `
    <h2 class="sec">PDF packs &amp; downloads <span class="link">${PACKS.length} packs</span></h2>
    <div class="muted" style="margin-bottom:12px">
      Pack kholne ke baad <b>Save as PDF</b> dabayein \u2014 phone ke print sheet se PDF file ban jayegi,
      bilkul offline. Us PDF ko WhatsApp ya email se share kar sakte hain.
    </div>
    <div class="list">
      ${PACKS.map(p => `
        <div class="item" onclick="openPack('${p.id}')">
          <div class="badge" style="background:rgba(126,34,206,.12);color:#7E22CE">PDF</div>
          <div class="txt"><b>${esc(p.title)}</b><small>${esc(p.desc)}</small></div>
          <div class="arrow">\u203A</div>
        </div>`).join("")}
    </div>
    <h2 class="sec">PYQ &amp; NSOU sets</h2>
    <div class="list">
      ${TESTS.filter(t => t.tag === "PYQ" || t.tag === "NSOU").map(t => `
        <div class="item" onclick="startTest('${t.id}')">
          <div class="badge">\uD83D\uDCDD</div>
          <div class="txt"><b>${esc(t.title)}</b><small>${t.qcount} Q \u00B7 ${t.mins} min</small></div>
          <div class="arrow">\u203A</div>
        </div>`).join("")}
    </div>
    <div style="height:8px"></div>
  `;
}

let currentPack = null;

function openPack(id) {
  currentPack = PACKS.filter(p => p.id === id)[0] || null;
  if (!currentPack) return;
  go("print");
}

function buildPackHTML(p) {
  const letters = ["A", "B", "C", "D"];
  let out = `<h1 style="font-size:22px;margin:0 0 4px">${esc(p.title)}</h1>
    <div class="muted" style="margin-bottom:18px">${esc(p.desc)} \u00B7 StudyMitra</div>`;

  (p.chapters || []).forEach(cid => {
    const f = findChapter(cid);
    if (!f) return;
    out += `<h2 style="font-size:17px;margin:20px 0 6px">${esc(f.ch.title)}</h2>
      <div class="muted" style="font-size:12px;margin-bottom:8px">${esc(f.sub.name)} \u00B7 ${f.ch.mins} min read</div>
      <div class="notebody">${f.ch.body}</div>`;
  });

  (p.tests || []).forEach(tid => {
    const t = findTest(tid);
    if (!t) return;
    out += `<h2 style="font-size:17px;margin:24px 0 4px">${esc(t.title)}</h2>
      <div class="muted" style="font-size:12px;margin-bottom:10px">${t.qcount} questions \u00B7 ${t.mins} min \u00B7 ${t.neg ? "\u2212" + t.neg + " per wrong answer" : "no negative marking"}</div>`;
    t.questions.forEach((q, i) => {
      out += `<div style="margin-bottom:16px;page-break-inside:avoid">
        <div style="font-size:13.5px;font-weight:700;color:var(--ink);margin-bottom:6px">Q${i + 1}. ${esc(q.q)}</div>
        ${q.o.map((o, j) => `<div style="font-size:13px;color:${j === q.a ? "#0E9F6E" : "var(--ink-2)"};margin-bottom:3px">
          <b>${letters[j]}.</b> ${esc(o)}${j === q.a ? "  \u2713" : ""}</div>`).join("")}
        <div class="exp" style="margin-top:8px"><b>Explanation:</b> ${esc(q.e)}</div>
      </div>`;
    });
  });

  out += `<div class="divider"></div>
    <div class="muted" style="font-size:11.5px">Generated by StudyMitra \u00B7 offline study material for NSOU, WBPSC, WB Police, Kolkata Police and other state exams. PYQ sets are previous-year pattern questions, not official question papers. Verify exam patterns and scheme figures with the official notification.</div>`;
  return out;
}

function renderPrint() {
  if (!currentPack) { go("pdf"); return; }
  $("screen-print").innerHTML = `
    <div class="noprint rowline" style="margin-bottom:12px">
      <button class="btn btn-soft" onclick="go('pdf')">\u2039 Packs</button>
      <button class="btn btn-primary" onclick="doPrint()">Save as PDF</button>
    </div>
    <div class="card" style="padding:16px">
      ${buildPackHTML(currentPack)}
    </div>
    <div class="noprint" style="margin:14px 0">
      <button class="btn btn-outline btn-block" onclick="doPrint()">Save as PDF / Print</button>
      <div class="muted" style="text-align:center;margin-top:8px;font-size:11.5px">
        Print dialog me destination \u2014 <b>Save as PDF</b> \u2014 chunein.
      </div>
    </div>
    <div style="height:8px"></div>
  `;
  window.scrollTo(0, 0);
}

function doPrint() {
  try {
    if (window.AndroidPrint && window.AndroidPrint.printPage) {
      window.AndroidPrint.printPage();
    } else {
      window.print();
    }
  } catch (e) {
    toast("Print not available on this device");
  }
}

/* ---------- boot ---------- */
function boot() {
  ["screen-search", "screen-pdf", "screen-print"].forEach(id => {
    if (!$(id)) {
      const sec = document.createElement("section");
      sec.className = "screen";
      sec.id = id;
      $("main").appendChild(sec);
    }
  });
  document.body.classList.toggle("dark", !!S.dark);
  bumpStreak();
  $("streakNum").textContent = S.streak;

  const input = $("globalSearch");
  input.addEventListener("input", () => {
    if (input.value.trim().length >= 2) go("search");
    else if (currentScreen === "search") go("home");
  });

  go("home");
}

document.addEventListener("DOMContentLoaded", boot);

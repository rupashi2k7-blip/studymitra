/* ================= StudyMitra app logic ================= */

const KEY = "studymitra_state_v1";
const DEFAULT_STATE = {
  name: "Aspirant",
  streak: 1,
  lastDay: "",
  read: [],
  bookmarks: [],
  results: [],
  dark: false,
  exam: "All"
};

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
    search: renderSearch
  }[name];
  if (render) render();
  window.scrollTo(0, 0);
}

/* ---------- HOME ---------- */
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

    <div class="quick">
      <div class="qa" onclick="go('notes')"><div class="ic o">\uD83D\uDCD8</div><span>Study notes</span></div>
      <div class="qa" onclick="go('tests')"><div class="ic b">\uD83D\uDCDD</div><span>Mock tests</span></div>
      <div class="qa" onclick="openChapter('mat1')"><div class="ic g">\uD83D\uDCD0</div><span>Formulas</span></div>
      <div class="qa" onclick="go('gk')"><div class="ic p">\uD83C\uDF10</div><span>GK zone</span></div>
    </div>

    <h2 class="sec">Choose your exam</h2>
    <div class="chips">
      ${["All", "SSC CGL", "Banking", "Railways", "Polity", "Quant", "Reasoning"]
        .map(e => `<div class="chip ${S.exam === e ? "on" : ""}" onclick="pickExam('${e}')">${e}</div>`).join("")}
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
      ${["All", "SSC CGL", "Banking", "Railways", "Polity", "Quant", "Reasoning"]
        .map(e => `<div class="chip ${S.exam === e ? "on" : ""}" onclick="pickExam('${e}')">${e}</div>`).join("")}
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
  beginSession({ id: t.id, title: t.title, mins: t.mins, questions: t.questions, tag: t.tag });
}

function beginSession(cfg) {
  player = {
    id: cfg.id,
    title: cfg.title,
    mins: cfg.mins,
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
      <div class="qmeta"><span>+1 mark</span><span>No negative marking</span></div>
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

  let score = 0;
  player.questions.forEach((q, i) => { if (player.answers[i] === q.a) score++; });
  const d = new Date();
  S.results.push({
    testId: player.id,
    title: player.title,
    score: score,
    total: player.questions.length,
    date: d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear()
  });
  save();
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
  const pct = Math.round((score / total) * 100);
  const letters = ["A", "B", "C", "D"];

  $("screen-result").innerHTML = `
    <div class="scorecard">
      <div class="big">${score}<small>/${total}</small></div>
      <p>${esc(player.title)}</p>
      <p style="font-size:14px;color:#FFA62B;font-weight:700;margin-top:6px">${pct}% \u00B7 ${pct >= 70 ? "Excellent" : pct >= 40 ? "Keep going" : "Revise and retry"}</p>
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
  beginSession({ id: player.id, title: player.title, mins: player.mins, questions: player.questions });
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
        <b style="color:var(--ink)">StudyMitra v1.0</b><br>
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

/* ---------- boot ---------- */
function boot() {
  let sp = $("screen-search");
  if (!sp) {
    sp = document.createElement("section");
    sp.className = "screen";
    sp.id = "screen-search";
    $("main").appendChild(sp);
  }
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

# StudyMitra 📚

An **offline study-material app** for Indian competitive exams (SSC, Banking, Railways, State PSC), built in the spirit of Testbook / Adda247 — notes, chapter-wise mock tests and a GK zone, all bundled inside the app with **no internet needed**.

![platform](https://img.shields.io/badge/platform-Android%205.0%2B-3DDC84)
![size](https://img.shields.io/badge/apk-~50%20KB-blue)
![offline](https://img.shields.io/badge/works-100%25%20offline-orange)

## What's inside

| Section | Content |
|---|---|
| **Notes** | 7 subjects · 24 chapters — Indian Polity, Modern History, Geography, General Science, Quantitative Aptitude, Reasoning, English |
| **Mock tests** | 6 test sets · 54 MCQs with timer, question palette, negative-marking-free scoring, full solutions |
| **Daily quiz** | 5 fresh mixed questions every day, keeps your streak alive |
| **GK Zone** | National symbols, important days, government schemes, one-liner revision |
| **Library** | Bookmark chapters, track chapters read, accuracy and best score |
| **Extras** | Global search across notes and tests, dark mode, editable profile, progress saved on the device |

## Features

- **100% offline** — every note, question and explanation ships inside the APK. Nothing is fetched from a server.
- **Exam-style test player** — countdown timer, per-question palette, mark-and-move, submit-early confirmation, and a solutions screen with an explanation for every question.
- **Progress that persists** — streak, chapters read, test history and bookmarks are stored in local storage on the phone.
- **Tiny and fast** — the UI is a single hand-written HTML/CSS/JS bundle rendered inside a native `WebView`; no frameworks, no AndroidX, no Gradle dependencies.
- **Dark mode** for night revision.

## Build from source

No Android Studio or Gradle is required. You need a JDK 17 and the Android SDK (platform 35 + build-tools 34).

```bash
# 1. get a JDK and the Android SDK command-line tools, then:
export ANDROID_HOME=/path/to/android-sdk

# 2. put android.jar and build-tools on the expected paths inside $ANDROID_HOME:
#    $ANDROID_HOME/platforms/android-35/android.jar
#    $ANDROID_HOME/build-tools/34.0.0/{aapt2,d8,zipalign,apksigner}

# 3. build, align, sign (debug key) and verify
bash build_apk.sh
# -> StudyMitra.apk
```

`build_apk.sh` runs the whole chain: `aapt2 compile` → `aapt2 link` (with `assets/www` bundled) → `javac` → `d8` → `zipalign` → `apksigner sign` → `apksigner verify`.

## Project layout

```
app/
├── AndroidManifest.xml                  # single activity, no permissions except INTERNET
├── res/
│   ├── drawable/ic_launcher.png         # app icon
│   └── values/strings.xml
├── src/com/studymitra/app/
│   └── MainActivity.java                # WebView host + back-button handling
└── assets/www/
    ├── index.html                       # app shell, top bar, bottom navigation
    ├── style.css                        # design system (light + dark)
    ├── data.js                          # ALL study content: notes, tests, GK
    └── app.js                           # routing, quiz engine, progress storage
```

## Adding your own content

Everything the app shows comes from `app/assets/www/data.js`:

```js
// a new chapter
SUBJECTS[0].chapters.push({
  id: "pol6", title: "Citizenship", mins: 5,
  body: "<ul><li>Part II, Articles 5–11 …</li></ul>"
});

// a new mock test
TESTS.push({
  id: "t7", title: "My Test", exam: "SSC CGL", qcount: 1, mins: 2,
  tag: "Practice", desc: "…",
  questions: [{ q: "…?", o: ["A","B","C","D"], a: 2, e: "Because …" }]
});
```

Rebuild the APK and the new material appears in the app.

## Install

1. Copy `StudyMitra.apk` to the phone.
2. Allow *Install unknown apps* for your file manager when prompted.
3. Open the file and install — Android 5.0 (API 21) or newer.

> The APK is signed with a debug key. For Play Store distribution, generate a private release keystore and sign with it.

## Notes on content

The material is curated static study content for revision. Exam patterns and government-scheme details change — always cross-check with the official notification or the scheme's portal before relying on a figure.

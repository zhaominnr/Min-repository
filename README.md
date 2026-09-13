# Panda Pal · Kids Learn Chinese

A playful, kid-friendly Mandarin Chinese practice app for children about ages 5–12. Parents can open it on a phone, tablet, or computer. Kids flip flashcards, play three practice games, hear words spoken aloud, and collect stars — all in the browser, with no login.

The repository was empty, so the app lives at the **repo root**.

## Features

- **Home screen** with big, colorful entry buttons
- **Flashcards** in 8 categories (12 words each, 96 words total): Greetings, Numbers, Colors, Animals, Family, Food, Body, School
- Each word includes Chinese characters, pinyin with tone marks, English, and an emoji
- **Three practice modes**
  - Pick the word (multiple choice)
  - Match up (Chinese ↔ English)
  - Listen & choose (Web Speech API, `zh-CN`)
- **Speaker button** on flashcards and quizzes, with a friendly fallback if speech is unavailable
- **Stars and points** saved in `localStorage` on this device
- **English / 简易中文** labels for the app chrome
- Touch-friendly tap targets, keyboard focus styles, and encouraging (never harsh) feedback

## Open on a phone (GitHub Pages)

Permanent URL after Pages is enabled and the workflow has succeeded once:

**https://zhaominnr.github.io/Min-repository/**

Bookmark that link on the phone. Kids open it in mobile Safari or Chrome. No App Store install.

### Enable GitHub Pages (one-time)

This repo is currently **private**. Free GitHub Pages only works for **public** repositories. For a private repo you need GitHub Pro or Team, **or** make the repo public.

1. If you want the free option: GitHub → this repo → **Settings** → scroll to **Danger Zone** → **Change repository visibility** → **Public**.
2. Still in **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, choose **GitHub Actions**.
4. If the workflow has not run yet, open the **Actions** tab → **Deploy GitHub Pages** → **Run workflow** (or push any commit). Approve the `github-pages` environment if GitHub asks.
5. When the workflow is green, open **https://zhaominnr.github.io/Min-repository/** on the phone and bookmark it.

If Pages stays blocked (private repo without Pro/Team), build locally and drag the `dist/` folder onto [Netlify Drop](https://app.netlify.com/drop). That gives a public `*.netlify.app` link without changing repo visibility.

## Run locally

You need Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Vite is configured with base `/Min-repository/` (same as GitHub Pages). Open:

`http://localhost:5173/Min-repository/`

## Build a static site

```bash
npm run build
```

The production files are written to `dist/` with asset paths under `/Min-repository/`. Preview them with:

```bash
npm run preview
```

Then open `http://localhost:4173/Min-repository/`.

## How kids use it

1. Pick **Flashcards** or a game.
2. Choose a topic (or “Mix all words” in games).
3. Tap the card or answers. Tap the blue speaker to hear Mandarin.
4. Visit **My stars** to see words learned and stars per category.

Progress never leaves the device. Use **Reset stars on this device** on the stars screen if you want a fresh start.

## For parents

This is cheerful extra practice, not a full curriculum. Sit nearby at first, keep sessions short, and celebrate effort. Audio uses the device’s built-in Chinese voice when the browser provides one (Chromium usually does).

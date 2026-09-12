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

## Run locally

You need Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Build a static site

```bash
npm run build
```

The production files are written to `dist/`. Preview them with:

```bash
npm run preview
```

You can deploy the `dist/` folder to any static host (GitHub Pages, Netlify, Cloudflare Pages, etc.).

## How kids use it

1. Pick **Flashcards** or a game.
2. Choose a topic (or “Mix all words” in games).
3. Tap the card or answers. Tap the blue speaker to hear Mandarin.
4. Visit **My stars** to see words learned and stars per category.

Progress never leaves the device. Use **Reset stars on this device** on the stars screen if you want a fresh start.

## For parents

This is cheerful extra practice, not a full curriculum. Sit nearby at first, keep sessions short, and celebrate effort. Audio uses the device’s built-in Chinese voice when the browser provides one (Chromium usually does).

# Panda Pal · Kids Learn Chinese

A Chinese practice app for kids ages 5 to 12. Open it on a phone, tablet, or computer. Kids use word cards and three games. They can hear the words. They collect stars. There is no login.

The repository was empty, so the app lives at the **repo root**.

## Features

- **Home screen** with big, colorful entry buttons
- **Word cards** in 8 topics (12 words each, 96 words total): Greetings, Numbers, Colors, Animals, Family, Food, Body, School
- Each word includes Chinese characters, pinyin with tone marks, English, and an emoji
- **Three practice games**
  - Choose the word
  - Match words (Chinese ↔ English)
  - Listen and choose (Web Speech API, `zh-CN`)
- **Speaker button** on cards and games. If sound does not work, kids can still read the words.
- **Stars and points** stay on this device.
- Labels can be **English** or **简易中文**.
- Buttons are large. Wrong answers say try again.

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

1. Choose **Word cards** or a game.
2. Choose a topic. In games you can also choose **All topics**.
3. Tap the card or the answers. Tap the blue speaker to hear Chinese.
4. Open **My stars** to see your stars and the words you know.

Progress stays on this device. To start over, tap **Clear stars on this device**.

## For parents

This is extra practice. It is not a full course.
Sit nearby at first. Keep practice short. Praise effort.
Sound uses this device’s Chinese voice, if the browser has one.

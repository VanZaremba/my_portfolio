# Vanessa Zaremba — Portfolio

UX/UI Designer portfolio built with Next.js 14, ready to deploy on Vercel.

## 🚀 Deploy to Vercel (step by step)

### 1. Install dependencies locally (optional, to preview first)
```bash
npm install
npm run dev
# Open http://localhost:3000
```

### 2. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit — Vanessa Portfolio"
```

Go to https://github.com/new → create a new repo (e.g. `vanessa-portfolio`)

```bash
git remote add origin https://github.com/YOUR_USERNAME/vanessa-portfolio.git
git branch -M main
git push -u origin main
```

### 3. Deploy on Vercel
1. Go to https://vercel.com → Log in / Sign up
2. Click **"Add New Project"**
3. Click **"Import"** next to your `vanessa-portfolio` repo
4. Leave all settings as default (Vercel auto-detects Next.js)
5. Click **Deploy** 🚀

Your site will be live at `https://vanessa-portfolio.vercel.app` (or similar).

---

## 🖼️ Customizing your photo

In `components/Hero.tsx`, replace the `src` in the `<img>` tag with your own image.
Best practice: put your photo in the `/public` folder and reference it as `/your-photo.jpg`.

## ✏️ Updating content

| What | Where |
|---|---|
| Your name, bio | `components/Hero.tsx`, `components/About.tsx` |
| Stats (5+, 20+, etc.) | `components/Stats.tsx` |
| Projects | `components/Work.tsx` |
| Services | `components/Services.tsx` |
| Email & social links | `components/Contact.tsx` |
| Page title & SEO | `app/layout.tsx` |

## 🌐 Custom domain
In Vercel dashboard → your project → **Settings → Domains** → add your domain.

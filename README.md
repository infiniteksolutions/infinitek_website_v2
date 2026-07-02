# Infinitek Solutions — Website

An award-style marketing website for **Infinitek Solutions**, a web, e-commerce, and CRM development studio based in Islamabad. Built with **React + Vite + Tailwind CSS**, with **Framer Motion** animations and **Lenis** smooth scrolling.

---

## ✨ Features

- Counter **preloader** with the animated dot-grid logo and a curtain exit
- **Magnetic custom cursor** (auto-disabled on touch / reduced-motion)
- Animated **dot-weave hero** with traveling pulse + scroll parallax
- **Scroll-triggered reveals** throughout (Framer Motion `whileInView`)
- **Lenis smooth scrolling** with anchor navigation + active-section tracking
- Scroll-progress bar, blur-on-scroll nav, infinite marquee, animated count-up stats
- Process timeline, FAQ accordion, working contact form UI, animated footer wordmark
- Fully **responsive** and **`prefers-reduced-motion`** aware

## 🎨 Brand

| Token | Value |
| --- | --- |
| Lime (primary) | `#d4f938` |
| Soft green | `#eefe98` |
| Ink | `#0c0c0c` |
| Gray | `#898989` |
| Display font | Space Grotesk |
| Body font | Montserrat |

Brand tokens are also available as Tailwind utilities (`bg-lime`, `text-ink`, `font-display`, …) via `tailwind.config.js`.

---

## 🚀 Getting started

Requires **Node.js 18+**.

```bash
# 1. install dependencies
npm install

# 2. start the dev server (http://localhost:5173)
npm run dev

# 3. build for production (outputs to /dist)
npm run build

# 4. preview the production build locally
npm run preview
```

## ☁️ Deploying

The build output in `/dist` is a fully static site. Deploy it anywhere:

- **Vercel** — import the repo, framework preset “Vite”, build command `npm run build`, output `dist`.
- **Netlify** — build command `npm run build`, publish directory `dist`.
- **GitHub Pages / Cloudflare Pages / any static host** — upload the contents of `dist`.

---

## 📁 Project structure

```
infinitek-solutions/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx              # entry: MotionConfig + SmoothScroll provider
    ├── App.jsx               # preloader + scroll-lock + section order
    ├── index.css             # Tailwind + full design system
    ├── data.js               # all site content (services, pricing, FAQ, etc.)
    ├── lib/
    │   └── SmoothScroll.jsx  # Lenis provider + useScrollTo / useLenis hooks
    └── components/
        ├── DotLogo.jsx           Cursor.jsx          ScrollProgress.jsx
        ├── Preloader.jsx         Reveal.jsx          Magnetic.jsx
        ├── Counter.jsx           Navbar.jsx          Hero.jsx
        ├── Marquee.jsx           About.jsx           Services.jsx
        ├── WhyUs.jsx             Process.jsx         Work.jsx
        ├── Team.jsx              Pricing.jsx         FAQ.jsx
        ├── Contact.jsx           Footer.jsx
```

Most copy lives in `src/data.js` so you can edit content without touching components.

---

## ✅ Before you publish — replace these placeholders

This site ships with honest placeholders rather than invented claims. Update them before going live:

- [ ] **Hero stats** (`src/components/Hero.jsx`) — “5+ / 30+ / 25+” are placeholders. Set your real numbers.
- [ ] **Pricing** (`src/data.js` → `PLANS`) — `$499 / $1,299 / $2,999` are illustrative examples only.
- [ ] **Contact form** (`src/components/Contact.jsx`) — currently shows a success state but does **not** send anything. There’s a `TODO` block showing how to wire it to **Formspree** or your own endpoint.
- [ ] **Portfolio** (`src/components/Work.jsx`) — the “browser” graphic is a decorative branded mockup, not a real screenshot. Swap in real project images and add more case studies.
- [ ] **Team** (`src/components/Team.jsx`) — add real teammates / photos beside the founder card.
- [ ] **Social links** (`src/components/Footer.jsx`) — the footer icons point to `#`. Add your real LinkedIn / Facebook / Instagram URLs.
- [ ] **Testimonials** — intentionally omitted. Add a section once you have real client quotes.
- [ ] **SEO / OG** (`index.html`) — update the Open Graph URL and add an `og:image` for nicer link previews.

---

© Infinitek Solutions. Built with React, Vite, Tailwind CSS, Framer Motion & Lenis.

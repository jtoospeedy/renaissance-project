# Renaissance Project · NC A&T

The chapter website, built with **Next.js 14** (App Router) and deployed on **Vercel**.

## Get started

```bash
cd nextjs
npm install
npm run dev
```

Open <http://localhost:3000>.

## File map

```
nextjs/
├── app/
│   ├── layout.jsx          # site shell — fonts, nav, footer, tweaks
│   ├── globals.css         # design tokens, base styles
│   ├── page.jsx            # /         — Home (hero, about, trailer, programs, CTA)
│   ├── members/page.jsx    # /members  — Illuminated e-board cards
│   ├── events/page.jsx     # /events   — Spotlight + tabs + RSVP list
│   ├── gallery/page.jsx    # /gallery  — Masonry grid + lightbox
│   └── faq/page.jsx        # /faq      — FAQ + Join + Contact
├── components/             # All React components (client + server)
├── lib/                    # Data — members, events, photos, FAQ
└── public/
    └── trailer.mp4         # ⬅ Drop your trailer video here
```

## Deploy to Vercel

```bash
npx vercel
```

…or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new).

## Adding the trailer video

Drop `trailer.mp4` (and optionally `trailer.webm`) into `public/`. The Home page picks it up automatically. Keep it under ~20 MB if you can — for anything bigger, use a CDN like Cloudflare Stream or YouTube embed.

## Swapping placeholders

Real content lives in **`lib/`**:
- `lib/members.js` — e-board names, roles, bios, headshot URLs
- `lib/events.js` — event calendar
- `lib/photos.js` — gallery images
- `lib/faq.js` — questions &amp; answers

Replace the placeholder initials and gradients with real images by dropping files into `public/img/` and referencing them as `/img/filename.jpg`.

## Theme controls (tweaks panel)

The on-page tweaks panel persists palette / typography / dark-mode in `localStorage`. To hide it before launch, remove `<TweaksPanel />` from `app/layout.jsx`.

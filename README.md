# FaceMedia website

React + Vite. Creative video production agency site (concept to final cut).

```
yarn          # or npm install
yarn dev      # local dev server
yarn build    # production build to /dist
yarn deploy   # build + publish to GitHub Pages (gh-pages)
```

## Where to change things

| What | File |
|---|---|
| Portfolio projects (add, remove, recategorise) | `src/data/portfolio.js` (instructions at the top of the file) |
| Services, offerings, service images | `src/data/services.js` |
| Process steps, "Why FaceMedia", FAQ | `src/data/content.js` |
| Business email, social links, form endpoint | `src/config/site.js` |
| Hero / About / CTA copy | `src/sections/Hero.jsx`, `About.jsx`, `CTA.jsx` |
| Colours, fonts, spacing | `:root` tokens at the top of `src/styles/global.css` |
| Short-form videos | drop `.mp4` into `/public`, reference in `portfolio.js` |
| Founder photo / logo | `src/assets/founder.png`, `src/assets/logo.png` |

## Contact form

Set `formEndpoint` in `src/config/site.js` (e.g. a free [Formspree](https://formspree.io) URL) and enquiries are POSTed as JSON.
If no endpoint is set but `email` is, the form opens the visitor's mail app.

## Design notes
- Brand colours: cream `#F1EDE6`, orange `#FE5708` (graphics/large text), deep orange `#D14300` (buttons/small text, passes contrast), charcoal `#222`.
- Font: Cabinet Grotesk (unchanged from the previous site).
- Motion respects `prefers-reduced-motion`.
- Chakra UI, framer-motion, react-scroll and react-fast-marquee were removed in favour of plain CSS to keep the site fast.

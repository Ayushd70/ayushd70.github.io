# ayushd70.dev

Personal portfolio of **[Ayush Dubey](https://ayushd70.dev)** — Software Engineer focused on Flutter, cross-platform mobile, and AI-backed products.

Live site: **[https://ayushd70.dev](https://ayushd70.dev)**

## About

A clean, content-driven portfolio covering experience, skills, projects, and education. Highlights include:

- Lead Flutter engineering at [Twin.shop](https://www.twin.shop/)
- Scale work at RentOk (SaaS + white-label SDKs, 20+ store apps)
- Open-source work like [Manthan](https://github.com/Ayushd70/manthan) and Flutter packages on pub.dev

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | [Next.js](https://nextjs.org/) (App Router, static export) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) v4 |
| Motion | [Framer Motion](https://www.framer.com/motion/) |
| Theming | [next-themes](https://github.com/pacocoursey/next-themes) (light / dark) |
| Deploy | GitHub Pages via GitHub Actions |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # static site → out/
npm run lint
```

## Project structure

```
src/
  app/           # layout, styles, page shell
  components/    # hero, about, experience, projects, …
  data/
    resume.ts    # single source of truth for site copy
public/
  Ayush_Dubey_Resume.pdf
```

Most content edits belong in [`src/data/resume.ts`](src/data/resume.ts).
Project write-ups live in [`src/data/projects.ts`](src/data/projects.ts) and render at `/work/` and `/work/[slug]/`.
Blog posts live in [`src/data/blog.ts`](src/data/blog.ts) and render at `/blog/` and `/blog/[slug]/`.

## Deploy

Pushes to `master` trigger [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. `npm ci` + `npm run build`
2. Upload the `out/` artifact
3. Publish to GitHub Pages

Custom domain is configured via `CNAME` → `ayushd70.dev`.

## License

Released under the [MIT License](LICENSE).

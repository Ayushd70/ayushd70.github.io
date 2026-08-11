# ayushd70.dev

Personal portfolio of **[Ayush Dubey](https://ayushd70.dev)** — Software Engineer focused on Flutter, cross-platform mobile, and AI-backed products.

**Live:** [https://ayushd70.dev](https://ayushd70.dev)

## What’s on the site

| Section | Route | Description |
| --- | --- | --- |
| Home | `/` | Hero, about, experience, skills, work preview, featured posts, education, contact |
| Work | [`/work/`](https://ayushd70.dev/work/) | Full project index |
| Case studies | `/work/[slug]/` | Deep dives (overview, highlights, stack, store / GitHub links) |
| Blog | [`/blog/`](https://ayushd70.dev/blog/) | Writing index |
| Posts | `/blog/[slug]/` | Long-form notes tied to projects and packages |

Highlights called out on the site:

- Lead Flutter engineering at [Twin.shop](https://www.twin.shop/)
- Scale work at RentOk (SaaS + white-label SDKs, 20+ store apps)
- Open-source work like [Manthan](https://github.com/Ayushd70/manthan) and Flutter packages on [pub.dev](https://pub.dev/publishers) / GitHub

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | [Next.js](https://nextjs.org/) 16 (App Router, static export) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) v4 |
| Motion | [Framer Motion](https://www.framer.com/motion/) |
| Theming | [next-themes](https://github.com/pacocoursey/next-themes) (light / dark) |
| Deploy | GitHub Pages via GitHub Actions |

Static export uses `trailingSlash: true` so nested `/work/` and `/blog/` routes work cleanly on GitHub Pages.

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

Useful local paths:

- http://localhost:3000/work/
- http://localhost:3000/blog/
- http://localhost:3000/work/manthan/
- http://localhost:3000/blog/introducing-manthan/

## Project structure

```
src/
  app/
    page.tsx              # home
    work/
      page.tsx            # work index
      [slug]/page.tsx     # project case study
    blog/
      page.tsx            # blog index
      [slug]/page.tsx     # blog post
  components/             # hero, about, experience, projects, blog-preview, …
  data/
    resume.ts             # profile, experience, skills, nav
    projects.ts           # work case studies
    blog.ts               # blog posts
public/
  Ayush_Dubey_Resume.pdf
```

### Editing content

| Want to change… | Edit |
| --- | --- |
| Bio, experience, skills, nav | [`src/data/resume.ts`](src/data/resume.ts) |
| Work / case studies | [`src/data/projects.ts`](src/data/projects.ts) |
| Blog posts | [`src/data/blog.ts`](src/data/blog.ts) |
| Resume PDF download | [`public/Ayush_Dubey_Resume.pdf`](public/Ayush_Dubey_Resume.pdf) |

New work or posts need a unique `slug`; static paths are generated at build time via `generateStaticParams`.

## Deploy

Pushes to `master` trigger [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. `npm ci` + `npm run build`
2. Upload the `out/` artifact
3. Publish to GitHub Pages

Custom domain is configured via `CNAME` → `ayushd70.dev`.

## License

Released under the [MIT License](LICENSE).

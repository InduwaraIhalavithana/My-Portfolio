# Portfolio — Plan (draft, 2026-10-24)

Personal portfolio site for **Induwara Ihalavithana**. Repo: https://github.com/InduwaraIhalavithana/My-Portfolio

**Status (2026-10-24):** One-page site built locally in English, Sinhala and Tamil (/en, /si, /ta) with hero, projects, skills, research (poster), about, contact, CV download; dark/light; side rails; phone layout checked in all three languages. CV PDF built from cv/cv.html. Lint, typecheck, 28 tests and build pass. Nothing committed or pushed yet (waiting for the owner's go). Next: deploy to Vercel (owner signs in), then project case-study pages.

## 1. Goal

One site a recruiter / supervisor / collaborator can open and, within 30 seconds, know:
who you are, what you build, how good it is (live demos, tests, deployments), and how to reach you.

## 2. Proposed stack

Decision (2026-10-24): use the current industry-standard modern stack.

| Piece | Choice | Why |
|---|---|---|
| Framework | **Next.js (App Router) + React + TypeScript** | Industry standard; pages pre-rendered as static HTML, so they load fast and rank well in search |
| Styling | **Tailwind CSS v4** | Utility-first, design tokens, built-in dark mode; standard in modern UI work |
| Components | **shadcn/ui** (Radix underneath) | Accessible, good-looking building blocks you own and can restyle |
| Motion | **Motion** (formerly Framer Motion) | Scroll reveals, page transitions, hover effects, animated counters |
| Content | **MDX** for case studies + research; typed `data/*.ts` for cards | Write long pages in Markdown with React components inside |
| Icons / fonts | Lucide icons, `next/font` (self-hosted Google fonts) | Sharp icons, no layout shift |
| Images | `next/image` | Auto resize, WebP/AVIF, lazy loading for all those screenshots |
| Hosting | **Vercel** (free Hobby plan) | Made by the Next.js team; deploys on every push, a preview link per PR, free HTTPS, custom domain later |
| Quality | ESLint + `tsc` + Vitest + Playwright smoke test + Lighthouse in GitHub Actions | Same quality bar as your other repos |
| Contact | Server action + Resend (free tier) or `mailto:` fallback | Real contact form without running a backend |

All versions pinned exactly when the project is scaffolded.

## 3. Sections (single page + one detail page per project)

1. **Hero** — name, one-line focus statement, CTA buttons (Projects, CV, Contact), GitHub/LinkedIn icons
2. **About** — your story and passion, photo (reuse `creator.webp`), quick facts (university, degree, location)
3. **Featured projects** — rich cards, each opening a case-study page:
   - **SmartAgri** — agri platform, 4 roles, ML crop recommendation with XAI, marketplace, EN/SI/TA, live on Azure, CI/CD
   - **Sharing Excess** — food redistribution, donors / recipients / NGOs, district-first, events, payments
   - **ConferenceHub** — conference management, QR tickets + check-in, waitlist, email codes, analytics
   - Each case study: problem → my role → architecture diagram → key features → screenshots / demo video → tests & CI → what I learned → links (repo, live, video)
4. **Research** — papers / research work (titles, abstract, status, PDF/DOI links) — **needs your input**
5. **Skills** — grouped (Frontend, Backend, Data/ML, DevOps/Cloud, Tools), shown as colourful chips linked to the projects that use them
6. **Journey** — timeline: education, projects, deployments, achievements
7. **Contact** — email, LinkedIn, GitHub, CV download

Design: dense, colourful, alive (per your taste) — real screenshots and numbers, micro-animations, no big empty white gaps; dark mode; works at phone width.

## 4. Phases

| # | Phase | Output |
|---|---|---|
| 0 | Content gathering | Your answers below + CV, photo, research PDFs, links |
| 1 | Scaffold | Next.js + TS + Tailwind + shadcn/ui project, theme tokens, layout, CI, first Vercel deploy |
| 2 | Core sections | Hero, About, Skills, Journey, Contact with real content |
| 3 | Project case studies | 3 detail pages reusing existing screenshots / demo videos / branding packs |
| 4 | Research section | Paper cards + detail view |
| 5 | Polish | Animations, dark mode, responsive sweep, SEO (meta, OG image), Lighthouse ≥ 95 |
| 6 | Launch | Custom domain (optional), README, LinkedIn post |

## 5. Open questions for you

1. **Career focus** — what role are you aiming for? (e.g. full-stack engineer, ML/AI engineer, software engineer intern / graduate, research)
2. **Research** — list your research work: title, topic, status (published / under review / ongoing), co-authors, links/PDFs.
3. **Passion statement** — in your own words, what drives you (a few lines; I'll polish it).
4. **Education & experience** — university, degree, year, internships, awards, certifications.
5. **Other projects** — anything beyond SmartAgri, Sharing Excess, ConferenceHub worth showing?
6. **Languages** — English only, or EN/SI/TA like your apps?
7. **Domain** — free Vercel URL (`<name>.vercel.app`) is fine, or buy a custom domain? (You'll need to sign in to Vercel with GitHub yourself.)
8. **CV** — do you have a current PDF to link?

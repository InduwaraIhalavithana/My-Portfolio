# Study Guide — plan

A free study guide on the portfolio for anyone who wants to become a **full-stack engineer** or an
**AI / ML / deep learning engineer**. It's meant as a community service for CS students.

Every topic is written the same way:

1. **One-line meaning:** what it is, in plain words.
2. **Analogy:** a real-life picture (restaurant, coat check, food court…).
3. **Tiny example:** code, a URL or a real situation.
4. **Priority:** Must know / Should know / Good to know.
5. **Where I used it:** a badge linking to SmartAgri, Sharing Excess, ConferenceHub or the research
   project. Only facts I've confirmed get a badge; topics I studied but haven't used have none.

Status (2026-11-21): **phases 1–5 built** on local branch `study-guide`, uncommitted. 249 topics in
English, Sinhala and Tamil. Lint, typecheck, 805 tests and the production build pass. "Where I used it"
badges were left out at your request. Phase 6 (commit/push) waits for your go.

Changes made beyond the plan:
- The desktop navbar now appears from 1280px; below that the hamburger menu is used. The extra
  "Study Guide" link made the Sinhala and Tamil navbars too wide for 1024–1280px screens.
- The Tamil navbar label is the short "வழிகாட்டி", so Tamil fits at 1280px.
- The roadmaps are built from HTML chips (numbered, colour-linked steps), not SVG, so they wrap
  naturally on phones.
- The filter bar is pinned only on large screens; on a phone it would cover a third of the screen.

---

## 1. Research summary (what each role needs in 2026)

- **Full-stack engineer:** strong fundamentals, API design, one frontend framework (React/Next.js),
  one backend, SQL, auth, Git, CI/CD and Docker. Fluency with AI-assisted coding is now expected too.
  Employers care most about *complete, deployed projects*.
- **AI engineer:** builds products **on top of** existing models: LLM APIs, prompting, RAG, vector
  databases, agents and tool use (MCP), evaluation, guardrails, cost and latency. Closest to
  full-stack; it's the fastest-growing title.
- **ML engineer:** **builds, trains and runs** models: classic ML, feature engineering, metrics,
  PyTorch, MLOps (tracking, registry, serving, drift monitoring).
- **Deep learning engineer:** goes deeper on neural networks: backprop, CNN / RNN / Transformer
  internals, attention, fine-tuning (full, LoRA, QLoRA), GPU training, quantization, KV cache.
- **Common to all four:** Python, math basics, data handling, deployment and at least one
  end-to-end project.

Sources:
[KDnuggets, ML vs AI vs LLM engineer](https://www.kdnuggets.com/ml-engineer-ai-engineer-or-llm-engineer-which-role-actually-builds-what-in-2026) ·
[Dataquest, AI vs ML engineer](https://www.dataquest.io/blog/ai-engineer-vs-machine-learning-engineer/) ·
[Scrimba AI engineer roadmap](https://scrimba.com/articles/how-to-become-an-ai-engineer-a-developers-roadmap-for-2026) ·
[Scrimba full-stack roadmap](https://scrimba.com/articles/how-to-become-a-full-stack-developer-in-2026-complete-roadmap/) ·
[TalentSprint, job-ready full stack](https://talentsprint.com/blog/full-stack-developer-job-ready) ·
[KDnuggets LLM engineer roadmap](https://www.kdnuggets.com/the-roadmap-to-becoming-an-llm-engineer-in-2026) ·
[DeepLearning.AI skills map](https://www.deeplearning.ai/the-batch/he-ai-engineering-skills-map-in-detail-building-and-deploying-ai-applications) ·
[JobRise, deep learning skills](https://jobrise.io/en/blog/deep-learning-skills-for-ml-jobs-2026/)

---

## 2. Content map (about 220 topics)

### A. Pick your path (intro)
- What each role does day to day: full-stack / AI / ML / DL engineer, with a comparison table.
- How the roles overlap. Learning order for each path, as a visual roadmap.

### B. Shared foundations (everyone)
- **Programming:** Python, JS/TS, types, OOP (4 pillars), composition vs inheritance.
- **DSA:** Big-O, arrays, hash maps, stacks/queues, trees, graphs, sorting, searching, recursion, DP.
- **Clean code:** SOLID, DRY / KISS / YAGNI, dependency injection, refactoring.
- **Design patterns, all 23:** creational (5), structural (7), behavioral (11).
- **Computer basics:** OS (processes, threads, concurrency, deadlock), networking (HTTP/HTTPS,
  DNS, TCP vs UDP, IP, ports), computer architecture basics.
- **Tools:** Git (merge vs rebase, Git Flow vs trunk-based), Linux / Bash, VS Code, AI coding assistants.
- **Testing:** unit / integration / E2E, TDD, mocks and stubs, coverage.
- **Security basics:** authentication vs authorization, hashing vs encryption, OWASP Top 10, secrets.

### C. Full-stack track
- **Frontend:** HTML / CSS / JS, TypeScript, React (components, hooks, controlled vs uncontrolled),
  CSR / SSR / SSG / ISR, SPA vs MPA, state management, forms, accessibility, responsive design,
  Core Web Vitals, i18n.
- **Backend:** API vs CLI vs MCP; REST vs GraphQL vs gRPC; sync vs async; polling / WebSockets /
  SSE / webhooks; message queues; caching; rate limiting; file uploads; email.
- **Auth:** sessions vs JWT, refresh tokens, OAuth 2.0 / OIDC / SSO, RBAC vs ABAC, CORS, CSRF.
- **Data:** SQL vs NoSQL, ACID vs BASE, CAP, normalization, indexes, joins, transactions, ORM vs raw
  SQL, migrations, sharding vs replication.
- **Architecture:** monolith / microservices / modular monolith, MVC / layered / clean
  architecture, event-driven, stateless vs stateful.
- **DevOps:** containers vs VMs, Docker Compose vs Kubernetes, CI vs CD, IaaS / PaaS / SaaS /
  serverless, reverse proxy, load balancer, CDN, HTTPS certificates, blue-green / canary / rolling
  deploys, logging / monitoring / tracing.
- **System design:** vertical vs horizontal scaling, how to approach a design interview, 3 worked
  examples (URL shortener, chat app, marketplace).

### D. AI / ML / DL track
- **Math you actually need:** vectors and matrices, derivatives and gradients, probability,
  statistics (mean, variance, distributions), and why each one matters.
- **Data:** cleaning, missing values, encoding, scaling, feature engineering, train / val / test
  split, data leakage, class imbalance.
- **Classic ML:** supervised vs unsupervised vs reinforcement learning, classification vs
  regression, linear and logistic regression, decision trees, Random Forest, bagging vs boosting,
  XGBoost, SVM, kNN, k-means, PCA, ensembles (soft voting), anomaly detection (Isolation Forest).
- **Evaluation:** overfitting vs underfitting, bias-variance, cross-validation, confusion matrix,
  accuracy vs precision / recall / F1, ROC-AUC vs PR-AUC, RMSE / MAE, hyperparameter tuning.
- **Deep learning:** neuron, layers, activation functions, loss, gradient descent, backprop,
  optimizers (SGD, Adam), batch / epoch, dropout, batch norm, CNN, RNN / LSTM, autoencoders,
  attention and Transformers, encoder vs decoder (BERT vs GPT), transfer learning, PyTorch vs
  TensorFlow, GPUs.
- **LLMs and GenAI (AI engineer):** tokens, embeddings, context window, temperature, prompting
  techniques, RAG and vector databases, prompt vs RAG vs fine-tuning, full fine-tuning vs LoRA vs
  QLoRA, agents and tool calling, MCP, structured output, evals, hallucinations, guardrails,
  open vs closed models, quantization, KV cache, cost and latency.
- **MLOps:** experiment tracking, model registry, batch vs online inference, model serving
  (FastAPI), drift monitoring, CI/CD for ML, reproducibility.
- **Responsible AI:** bias and fairness, explainability (SHAP), privacy, human-in-the-loop.

### E. Practice layer
- Project ideas per level (beginner → job-ready) for each track.
- Free learning resources per section, linked only, never copied.
- Interview checklist: "Can you explain X in one minute?"

---

## 3. How it looks on the site

- **Its own route:** `/[lang]/guide`. The content is too big for the one-page home. The home page
  gets a colorful teaser card ("Free CS Study Guide → 220 topics") and a navbar link.
- **Layout:** a sticky sidebar with the section list, plus a scroll-spy. The main column holds
  topic cards. On phones the sidebar turns into a top dropdown.
- **Track switcher:** All / Full-stack / AI-ML-DL chips at the top, colored per track.
- **Search box:** filters topics instantly (client-side, no server).
- **Priority filter:** Must / Should / Good to know.
- **Topic card:** a collapsed title + one-liner that expands to show the analogy, example and
  "Where I used it" badge. Comparisons ("X vs Y") render as small side-by-side tables.
- **"I've learned this" checkbox** on each card with a per-section progress bar. This is stored in
  the visitor's browser (localStorage, wrapped in try/catch) and needs no account.
- **Roadmap diagrams:** inline SVG learning paths per role, in both themes.
- **Style:** dense, colorful and alive, with micro-animations through the existing Motion setup and
  no big empty gaps. Dark and light themes use the existing tokens.
- **SEO:** its own metadata and Open Graph image, added to the sitemap, so students can find it
  through Google.

## 4. Code structure

```
src/app/[lang]/guide/page.tsx          route + metadata
src/components/guide/                  sidebar, track-switcher, search, topic-card,
                                       compare-table, roadmap-svg, progress
src/data/guide/types.ts                Topic { id, track, section, priority, usedIn[] }
src/data/guide/foundations.ts          section + topic data (ids, priority, badges)
src/data/guide/fullstack.ts
src/data/guide/ai-ml-dl.ts
src/i18n/guide/en.ts                   the words (one-liners, analogies, examples)
src/i18n/guide/si.ts, ta.ts            translations (phase 5)
src/data/guide/guide.test.ts           every topic has text, unique ids, valid usedIn links
```

The guide text lives in its **own dictionaries** (`src/i18n/guide/*`), not in the main
`en/si/ta.ts`, so the main site's dictionaries stay small. The existing key-matching test pattern
is reused.

## 5. Build phases

| Phase | Work | Check |
|---|---|---|
| 1 | Route, layout, sidebar, track switcher, topic card, search, filters, progress, using ~10 sample topics | lint, typecheck, tests, real Chrome desktop + 375px, both themes |
| 2 | Write Shared foundations + Full-stack content (~110 topics) | content test, read-through |
| 3 | Write AI / ML / DL content (~110 topics) + "Where I used it" badges | badge links verified against project facts |
| 4 | Roadmap SVGs, "Pick your path" intro, practice layer, home teaser, navbar link, SEO, sitemap | Lighthouse, link check |
| 5 | Sinhala + Tamil translation of all guide text (tech terms stay English) | key + script tests |
| 6 | Show you the result → commit / push **only when you say** | Vercel preview, then live |

## 6. Rules carried over

- No commit or push until you say so. Commit messages are plain, with no Claude co-author line.
- "Where I used it" only claims verified facts. TensorFlow / PyTorch are **studied, not used**, so
  they get no badge.
- The research badge never describes the data being collected.
- Resources are linked, never copied.

## 7. Decisions needed from you

1. **Languages:** English first, with Sinhala + Tamil added in phase 5 (recommended), or all three
   from the start? About 220 topics × 3 languages is a lot of text.
2. **Name:** "CS Study Guide", "Engineer's Handbook", "Learn With Me" or your own.
3. **Placement:** its own page with a home teaser (recommended), or a section on the home page.

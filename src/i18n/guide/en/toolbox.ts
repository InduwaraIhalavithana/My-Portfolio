import type { Toolbox } from "../types";

// One row per tool in each deck's `tools` list (src/data/guide), in the same order.
export const toolboxEn: Record<string, Toolbox> = {
  programming: {
    rows: [
      { best: "AI, data, backends, scripts", pick: "You want the biggest AI and data ecosystem" },
      { best: "Web frontends and Node backends", pick: "You build for the browser or full-stack JS" },
      { best: "Fast, simple cloud services", pick: "You need speed and easy deployment" },
      { best: "Big companies, Android apps", pick: "You join enterprise teams or build Android" },
      { best: "Speed with memory safety", pick: "Performance-critical tools and systems" },
      { best: ".NET apps and Unity games", pick: "You work in Microsoft shops or make games" },
    ],
    choose: ["Start with Python or TypeScript; both open many doors.", "Pick by the job you want, not by hype.", "Learn one well before adding a second."],
  },
  dsa: {
    rows: [
      { best: "Interview practice by topic", pick: "Preparing for coding interviews" },
      { best: "A structured problem roadmap", pick: "You don't know which problems to do next" },
      { best: "Animated algorithms", pick: "An idea won't click from text alone" },
      { best: "deque, Counter, defaultdict", pick: "You need fast queues or counting in Python" },
      { best: "Heaps and binary search, built in", pick: "Top-k items or searching sorted lists" },
    ],
    choose: ["Use built-in structures before writing your own.", "Do 2–3 problems a day rather than 30 on a weekend.", "Always say the Big-O of your answer."],
  },
  "clean-code": {
    rows: [
      { best: "Python lint + format, very fast", pick: "Any Python project" },
      { best: "The JS/TS standard pair", pick: "Most JavaScript and TypeScript projects" },
      { best: "One fast tool for JS lint + format", pick: "New JS projects that want speed and fewer configs" },
      { best: "Code quality dashboards for teams", pick: "Larger teams tracking quality over time" },
      { best: "Runs checks before each commit", pick: "Stopping messy code before it's committed" },
    ],
    choose: ["Automate style so reviews focus on logic.", "Run the same checks locally and in CI.", "Fewer, well-configured tools beat many."],
  },
  "patterns-creational": {
    rows: [
      { best: "Dependency injection in Python APIs", pick: "Sharing DB sessions or settings per request" },
      { best: "Full DI containers", pick: "Big TypeScript or Java backends" },
      { best: "Clean data objects", pick: "Building validated objects without boilerplate" },
      { best: "Builder-style queries", pick: "Composing database queries step by step" },
      { best: "Pattern pictures and examples", pick: "Learning or revising a pattern" },
    ],
    choose: ["Use the framework's built-in way first.", "Don't add a pattern until the code asks for it."],
  },
  "patterns-structural": {
    rows: [
      { best: "Wrapping functions with extra behaviour", pick: "Auth, caching or logging in Python" },
      { best: "Wrapping every HTTP request", pick: "Adding tokens or handling errors in one place" },
      { best: "Reverse proxy in front of apps", pick: "HTTPS, routing and caching" },
      { best: "API gateway", pick: "Many services need one front door" },
      { best: "Composite UI trees", pick: "Building UIs from nested components" },
    ],
    choose: ["Most of these patterns come free with good tools: learn to spot them.", "Wrap third-party code so you can swap it later."],
  },
  "patterns-behavioral": {
    rows: [
      { best: "Observer with streams of events", pick: "Complex async UI events" },
      { best: "Command-style actions + central store", pick: "Big React apps with shared state" },
      { best: "State machines", pick: "Flows like checkout or onboarding" },
      { best: "Chain of responsibility", pick: "Auth, logging and limits on every request" },
      { best: "Event streaming between services", pick: "Large systems reacting to events" },
    ],
    choose: ["Start with plain functions; reach for a library when the flow gets hard to follow.", "Draw the states or events first."],
  },
  "computer-basics": {
    rows: [
      { best: "See every request a page makes", pick: "Debugging any website" },
      { best: "Call APIs from the terminal", pick: "Quick tests and scripts" },
      { best: "Save and share API requests", pick: "Testing APIs with a team" },
      { best: "Look up DNS records", pick: "A domain isn't working" },
      { best: "Inspect raw network packets", pick: "Deep network problems" },
      { best: "Live CPU and memory use", pick: "A server feels slow" },
    ],
    choose: ["DevTools first: it answers most questions.", "Reach for deeper tools only when needed."],
  },
  tools: {
    rows: [
      { best: "Free, light editor with huge extensions", pick: "Almost everyone, any language" },
      { best: "Powerful IDEs with deep refactoring", pick: "Big Java, Kotlin or Python codebases" },
      { best: "Code hosting, PRs, Actions", pick: "Every project and portfolio" },
      { best: "Very fast Python packages + venvs", pick: "New Python projects" },
      { best: "Fast, disk-saving JS packages", pick: "JS projects and monorepos" },
      { best: "AI pair programming", pick: "Explaining, drafting and reviewing code" },
    ],
    choose: ["Learn your editor's shortcuts: hours saved every week.", "Pin versions with a lockfile.", "Check AI output like a teammate's code."],
  },
  testing: {
    rows: [
      { best: "Python tests with simple asserts", pick: "Any Python project" },
      { best: "Fast tests for Vite and TS projects", pick: "Modern JS/TS frontends" },
      { best: "Mature JS test runner", pick: "Existing JS projects already using it" },
      { best: "End-to-end browser tests", pick: "Testing real user flows" },
      { best: "Testing UI like a user", pick: "React component tests" },
      { best: "Load and performance testing", pick: "Will it survive 1,000 users?" },
    ],
    choose: ["Use the runner your framework recommends.", "Many unit tests, a few end-to-end tests.", "Run everything in CI."],
  },
  security: {
    rows: [
      { best: "Automatic dependency update PRs", pick: "Any GitHub repository" },
      { best: "Find vulnerable packages and code", pick: "Teams that want deeper scanning" },
      { best: "Free web security scanner", pick: "Checking your site for common holes" },
      { best: "Professional web testing", pick: "Manual security testing" },
      { best: "Storing and rotating secrets", pick: "Many services and keys" },
      { best: "Free HTTPS certificates", pick: "Every public website" },
    ],
    choose: ["Turn on Dependabot on day one.", "Never hand-roll crypto or auth.", "Scan before every release."],
  },
  frontend: {
    rows: [
      { best: "Fast styling with utility classes", pick: "Custom designs, quickly" },
      { best: "Plain CSS scoped to a component", pick: "You prefer writing normal CSS" },
      { best: "Ready-made components", pick: "Admin pages and quick prototypes" },
      { best: "Copy-in accessible components", pick: "Tailwind projects needing polished UI" },
      { best: "Instant dev server and builds", pick: "Any non-Next.js frontend" },
      { best: "Design and prototypes", pick: "Planning screens before coding" },
    ],
    choose: ["Pick one styling approach per project.", "Accessible components save weeks.", "Design on phone width first."],
  },
  react: {
    rows: [
      { best: "Full-stack React with SSR/SSG", pick: "Sites that need SEO and speed" },
      { best: "Routing for single-page apps", pick: "Dashboards behind a login" },
      { best: "Fetching and caching server data", pick: "Almost every app that calls an API" },
      { best: "Tiny global store", pick: "Shared client state like a cart" },
      { best: "Forms with schema validation", pick: "Any non-trivial form" },
      { best: "Other popular frameworks", pick: "Team or job already uses them" },
    ],
    choose: ["Server data → TanStack Query; UI state → useState/Zustand.", "Next.js if you need SEO.", "The best framework is the one your team knows."],
  },
  backend: {
    rows: [
      { best: "Fast typed Python APIs", pick: "APIs, ML serving, async work" },
      { best: "Batteries-included Python", pick: "Admin panel, auth and ORM out of the box" },
      { best: "Structured TypeScript backends", pick: "Large TS teams" },
      { best: "Minimal JS/TS servers", pick: "Small APIs and edge functions" },
      { best: "Enterprise Java/Kotlin", pick: "Banks and large companies" },
      { best: "Fast, simple compiled services", pick: "High-traffic microservices" },
    ],
    choose: ["Match your team's language.", "Need an admin panel fast? Django.", "Serving ML models? FastAPI."],
  },
  auth: {
    rows: [
      { best: "Open-source auth for Next.js", pick: "You want control and no fees" },
      { best: "Drop-in auth with UI", pick: "Fast launch with polished login screens" },
      { best: "Enterprise identity", pick: "SSO and compliance needs" },
      { best: "Auth with a Postgres backend", pick: "Already using Supabase" },
      { best: "Self-hosted identity server", pick: "You must host everything yourself" },
      { best: "Easy auth for mobile apps", pick: "Firebase-based apps" },
    ],
    choose: ["Prefer a proven service over custom auth.", "Check pricing at your expected user count.", "Make sure you can export users later."],
  },
  databases: {
    rows: [
      { best: "The default relational database", pick: "Almost any app" },
      { best: "Popular relational DB", pick: "Existing PHP or hosting stacks" },
      { best: "A database in one file", pick: "Prototypes, mobile and small apps" },
      { best: "Flexible JSON documents", pick: "Changing shapes, content catalogs" },
      { best: "In-memory key-value", pick: "Caches, sessions, rate limits" },
      { best: "ORMs and query builders", pick: "Type-safe queries from code" },
    ],
    choose: ["Start with PostgreSQL unless you have a reason not to.", "Add Redis when you need speed.", "Pick NoSQL for its shape, not because it's trendy."],
  },
  architecture: {
    rows: [
      { best: "Run several services locally", pick: "App + DB + cache on one machine" },
      { best: "Monorepos with clear modules", pick: "Modular monoliths in TS" },
      { best: "Reliable task queues", pick: "Background jobs between services" },
      { best: "High-volume event streams", pick: "Huge event-driven systems" },
      { best: "API gateway", pick: "Many services, one front door" },
      { best: "Standard traces, metrics, logs", pick: "Seeing across many services" },
    ],
    choose: ["Start simple; split only when pain is real.", "Queues before Kafka.", "Add observability before you need it."],
  },
  devops: {
    rows: [
      { best: "CI/CD built into GitHub", pick: "Projects on GitHub" },
      { best: "Deploy with a git push", pick: "Small and medium apps" },
      { best: "Full cloud platforms", pick: "Full control and many services" },
      { best: "Run containers at scale", pick: "Many services and big traffic" },
      { best: "Infrastructure as code", pick: "Repeatable cloud setups" },
      { best: "Dashboards + error tracking", pick: "Seeing problems in production" },
    ],
    choose: ["PaaS first, VMs when you need control, Kubernetes last.", "Automate deploys from day one.", "Track errors before users report them."],
  },
  "system-design": {
    rows: [
      { best: "Quick hand-drawn diagrams", pick: "Interviews and whiteboarding" },
      { best: "Detailed free diagrams", pick: "Documented architecture" },
      { best: "CDN, DNS and protection", pick: "Speed and security for any site" },
      { best: "Caching and queues", pick: "Read-heavy or real-time systems" },
      { best: "Visual system design lessons", pick: "Learning design patterns at scale" },
      { best: "Free design guide", pick: "Interview preparation" },
    ],
    choose: ["Always draw before you build.", "Explain trade-offs, not just choices."],
  },
  math: {
    rows: [
      { best: "Vectors and matrices in Python", pick: "Every ML project" },
      { best: "Statistics and optimisation", pick: "Tests, distributions, solvers" },
      { best: "Symbolic maths", pick: "Checking derivatives by hand" },
      { best: "Interactive graphing", pick: "Seeing a function's shape" },
      { best: "Free maths lessons", pick: "Filling gaps in basics" },
    ],
    choose: ["Learn maths with code: plot it in NumPy.", "Understand the picture before the formula."],
  },
  data: {
    rows: [
      { best: "The standard for tables", pick: "Most data work" },
      { best: "Very fast DataFrames", pick: "Big data on one machine" },
      { best: "SQL on files, super fast", pick: "Analysing CSV/Parquet with SQL" },
      { best: "Notebooks for exploring", pick: "EDA and experiments" },
      { best: "Static charts", pick: "Reports and papers" },
      { best: "Interactive charts", pick: "Dashboards and exploring" },
    ],
    choose: ["pandas first; Polars or DuckDB when it gets slow.", "Move notebook code into scripts once it works."],
  },
  "classic-ml": {
    rows: [
      { best: "Every classic model + tools", pick: "Starting any ML project" },
      { best: "Strong gradient boosting", pick: "Top accuracy on tables" },
      { best: "Very fast boosting", pick: "Large tabular datasets" },
      { best: "Boosting with categories built in", pick: "Many text categories" },
      { best: "Statistical models + reports", pick: "Explaining effects, p-values" },
      { best: "Smart hyperparameter search", pick: "Tuning any model" },
    ],
    choose: ["Baseline in scikit-learn, then try boosting.", "Compare on the same validation split."],
  },
  evaluation: {
    rows: [
      { best: "All standard metrics", pick: "Scoring any model" },
      { best: "Automatic tuning", pick: "Searching settings efficiently" },
      { best: "Experiment dashboards", pick: "Comparing many runs" },
      { best: "Open-source tracking", pick: "Self-hosted experiment logs" },
      { best: "Data and model reports", pick: "Checking drift and quality" },
    ],
    choose: ["Pick the metric before training.", "Log every run, even bad ones."],
  },
  "deep-learning": {
    rows: [
      { best: "Research and most DL jobs", pick: "Default for deep learning" },
      { best: "Production and mobile tools", pick: "Existing TF systems, TF Lite" },
      { best: "Fast research on accelerators", pick: "Advanced research, TPUs" },
      { best: "Thousands of pretrained models", pick: "Text, vision and audio tasks" },
      { best: "Less boilerplate for PyTorch", pick: "Cleaner training code" },
      { best: "Free GPU notebooks", pick: "Learning without a GPU" },
    ],
    choose: ["Learn PyTorch first.", "Start from a pretrained model.", "Prototype on Colab, then move to scripts."],
  },
  llm: {
    rows: [
      { best: "Top hosted models", pick: "Best quality, fast start" },
      { best: "Run open models locally", pick: "Privacy, offline, experiments" },
      { best: "Chains, tools, agents", pick: "Complex LLM workflows" },
      { best: "RAG over your documents", pick: "Document Q&A" },
      { best: "Vector search", pick: "Storing embeddings for RAG" },
      { best: "Fast open-model serving", pick: "Hosting your own models at scale" },
      { best: "Testing LLM outputs", pick: "Evals before every change" },
    ],
    choose: ["Start with an API and plain code; add frameworks only if needed.", "Already on Postgres? pgvector.", "Write evals early."],
  },
  mlops: {
    rows: [
      { best: "Tracking + model registry", pick: "Managing model versions" },
      { best: "Version data like Git", pick: "Datasets that change" },
      { best: "Package and serve models", pick: "Production model APIs" },
      { best: "Schedule pipelines", pick: "Regular retraining and ETL" },
      { best: "Monitor drift", pick: "Models running in production" },
      { best: "Same environment everywhere", pick: "Every deployed model" },
    ],
    choose: ["Start with FastAPI + Docker + MLflow.", "Add orchestration when jobs multiply."],
  },
  "responsible-ai": {
    rows: [
      { best: "Explain any model's predictions", pick: "Tabular model explanations" },
      { best: "Local explanations", pick: "Explaining one prediction simply" },
      { best: "Fairness metrics + fixes", pick: "Checking bias across groups" },
      { best: "Find and hide personal data", pick: "Cleaning text before AI" },
      { best: "Short model documentation", pick: "Every model you publish" },
    ],
    choose: ["Measure fairness per group, every release.", "Document limits honestly."],
  },
  principles: {
    rows: [
      { best: "The profession's ethics rules", pick: "Making a hard decision" },
      { best: "Picking a software licence", pick: "Publishing open source" },
      { best: "Sri Lanka's data protection law", pick: "Apps with Sri Lankan users' data" },
      { best: "EU data protection law", pick: "Apps with European users" },
      { best: "Accessibility checks", pick: "Testing pages for everyone" },
    ],
    choose: ["When unsure, ask: is it honest, legal and fair to users?", "Read the licence before you reuse code."],
  },
  sdlc: {
    rows: [
      { best: "Stories, sprints, tracking", pick: "Teams running Scrum" },
      { best: "Specs and team wikis", pick: "Requirements and meeting notes" },
      { best: "UI design and prototypes", pick: "Showing clients screens early" },
      { best: "Online whiteboards", pick: "Workshops and user journeys" },
      { best: "Shared documents", pick: "Simple specs and sign-offs" },
    ],
    choose: ["Write requirements where the whole team can see them.", "Show prototypes early; it's cheaper than rebuilding."],
  },
  teamwork: {
    rows: [
      { best: "Powerful, customisable tracking", pick: "Larger teams and companies" },
      { best: "Fast, clean issue tracking", pick: "Startups and product teams" },
      { best: "Simple Kanban boards", pick: "Small teams and student projects" },
      { best: "Boards linked to your code", pick: "Teams living in GitHub" },
      { best: "Team chat", pick: "Daily communication" },
      { best: "Meetings and deadlines", pick: "Scheduling stand-ups and demos" },
    ],
    choose: ["Use the simplest board the team will actually update.", "One source of truth for tasks."],
  },
  "docs-tools": {
    rows: [
      { best: "Simple formatted text", pick: "READMEs and notes" },
      { best: "Interactive API docs", pick: "Any public or team API" },
      { best: "Diagrams written as text", pick: "Diagrams that live with code" },
      { best: "Documentation websites", pick: "Bigger projects with many pages" },
      { best: "Team wikis", pick: "Processes and decisions" },
      { best: "Compare library popularity", pick: "Choosing between libraries" },
    ],
    choose: ["Keep docs next to the code.", "Check activity, docs and licence before adopting a tool."],
  },
};

import type { TrackExtras } from "../types";

export const fullstackExtras: TrackExtras = {
  sections: {
    frontend: {
      character: { name: "The Painter", says: "I turn code into something people can see, tap and enjoy, on every screen size." },
      recap: [
        "HTML is the structure, CSS the look, JavaScript the behaviour.",
        "Flexbox for rows, Grid for whole layouts; design phone-first.",
        "Accessibility means everyone can use it.",
        "Measure speed with Core Web Vitals: LCP, INP, CLS.",
      ],
      quiz: [
        { q: "Which tag best wraps a site's main menu?", options: ["<nav>", "<div>", "<span>", "<b>"], why: "Semantic tags like <nav> tell browsers and screen readers what the part is." },
        { q: "A two-dimensional card gallery with rows and columns is easiest with…", options: ["Floats", "Tables", "CSS Grid", "<br> tags"], why: "Grid handles rows and columns together." },
        { q: "Where should a \"dark mode on\" setting be saved?", options: ["A cookie sent with every request", "localStorage", "The URL", "A server log"], why: "localStorage keeps small settings in the browser until cleared." },
        { q: "CLS measures…", options: ["Server cost", "Login speed", "Image size", "How much the layout jumps while loading"], why: "Cumulative Layout Shift: content jumping around makes people mis-tap." },
      ],
    },
    react: {
      character: { name: "The Component Crafter", says: "I build screens like LEGO: small reusable pieces that update themselves when data changes." },
      recap: [
        "Components are reusable UI pieces; props pass data in.",
        "State changes trigger a re-render; effects talk to the outside world.",
        "Most \"state\" is server data: let a library like React Query manage it.",
        "Choose CSR, SSR, SSG or ISR per page; Next.js does all four.",
      ],
      quiz: [
        { q: "Data passed into a component from its parent is called…", options: ["State", "Hooks", "Effects", "Props"], why: "Props flow from parent to child; state lives inside the component." },
        { q: "When a component's state changes, React…", options: ["Reloads the whole page", "Re-renders that component", "Clears localStorage", "Calls the server"], why: "React redraws only the parts that depend on that state." },
        { q: "A blog post that rarely changes and must load fast is best as…", options: ["CSR", "Polling", "SSG", "WebSockets"], why: "Static generation builds the HTML once, ahead of time." },
        { q: "Fetching data when a page opens belongs in…", options: ["useEffect (or a data library)", "The CSS file", "props", "A <form> tag"], why: "Effects run after render to sync with things outside React." },
      ],
    },
    backend: {
      character: { name: "The Chef", says: "Orders come in through my window, I cook with the data, and I send back exactly what was asked for." },
      recap: [
        "APIs let programs talk; REST is the common style.",
        "Methods say what you want; status codes say how it went.",
        "Validate every input on the server; cache what's expensive.",
        "Push slow work to queues; pick the right real-time method.",
      ],
      quiz: [
        { q: "Which HTTP method should only read data?", options: ["POST", "GET", "DELETE", "PATCH"], why: "GET is for reading; it should never change anything." },
        { q: "Sending a welcome email after sign-up without slowing the response needs…", options: ["A bigger server", "A longer timeout", "Polling", "A background job or queue"], why: "The request finishes fast; a worker sends the email." },
        { q: "A payment provider telling your server \"payment done\" uses a…", options: ["Webhook", "Cookie", "CDN", "Cron"], why: "Webhooks are one server calling another's URL when something happens." },
        { q: "Status code 404 means…", options: ["Server crashed", "Created", "Not found", "Not logged in"], why: "404 = the thing you asked for doesn't exist." },
      ],
    },
    auth: {
      character: { name: "The Gatekeeper", says: "I check who you are at the door, and which rooms you may enter once inside." },
      recap: [
        "Never store passwords, only slow salted hashes.",
        "Sessions are easy to revoke; JWTs scale easily.",
        "Short access tokens + refresh tokens limit the damage of leaks.",
        "Roles (RBAC) cover most apps; OAuth powers \"Sign in with Google\".",
      ],
      quiz: [
        { q: "Which is safe for storing passwords?", options: ["MD5", "Plain text", "bcrypt or Argon2", "Base64"], why: "They are slow, salted hashes designed for passwords." },
        { q: "The easiest way to log a user out instantly everywhere is…", options: ["Server-side sessions", "Long-lived JWTs", "localStorage flags", "Bigger cookies"], why: "Deleting the server session ends it at once." },
        { q: "\"Sign in with Google\" is built on…", options: ["CORS", "CSRF", "RBAC", "OAuth 2.0 / OpenID Connect"], why: "OAuth gives permission; OpenID Connect adds who you are." },
        { q: "Your React app on port 5173 can't call your API on 8000. You likely need to set…", options: ["HTTPS", "CORS on the API", "A CDN", "MFA"], why: "The browser blocks cross-origin calls unless the API allows them." },
      ],
    },
    databases: {
      character: { name: "The Librarian", says: "I remember everything your app knows, and I find it for you in milliseconds if you index it well." },
      recap: [
        "SQL for structured, related data; NoSQL for flexible or huge data.",
        "Indexes speed up reads; migrations change structure safely.",
        "Transactions are all-or-nothing (ACID).",
        "Watch for N+1 queries; scale with replicas and shards.",
      ],
      quiz: [
        { q: "Bank transfers need…", options: ["Eventual consistency", "ACID transactions", "No database", "A cache only"], why: "Money must never be half-moved." },
        { q: "Searches on users.email are slow. First try…", options: ["A bigger server", "Deleting old users", "An index on email", "NoSQL"], why: "An index lets the database jump straight to matching rows." },
        { q: "Loading 50 posts, then 1 query per post for its author, is the…", options: ["CAP problem", "Deadlock", "Cold start", "N+1 query problem"], why: "Load authors together with a join or eager loading." },
        { q: "Adding a column to a live production table safely is done with…", options: ["A migration", "Editing rows by hand", "Restarting the server", "A new database"], why: "Migrations are versioned, repeatable structure changes." },
      ],
    },
    architecture: {
      character: { name: "The Architect", says: "Before the bricks, the blueprint. Good structure keeps a growing app from collapsing." },
      recap: [
        "Start as a (modular) monolith; split into services only when needed.",
        "Layers keep routes, rules and data apart.",
        "Stateless servers scale easily.",
        "Events decouple parts; a gateway gives services one front door.",
      ],
      quiz: [
        { q: "A small team building a new product should usually start with…", options: ["A modular monolith", "50 microservices", "Serverless only", "No backend"], why: "It's simple to build and test, and can be split later." },
        { q: "\"Order paid\" triggers email, stock and analytics on their own. That's…", options: ["MVC", "A monolith", "Polling", "Event-driven architecture"], why: "One event, many independent listeners." },
        { q: "Why do stateless servers scale easily?", options: ["They have no database", "They use less CSS", "Any server can handle any request", "They never crash"], why: "No user memory on the server means you can add copies freely." },
        { q: "In a layered app, routes should call…", options: ["The database directly", "Services, which call repositories", "The frontend", "Other routes"], why: "Each layer only talks to the one below." },
      ],
    },
    devops: {
      character: { name: "The Shipper", says: "Code on your laptop helps nobody. I package it, test it and ship it safely to the world." },
      recap: [
        "Docker packs the app so it runs the same everywhere.",
        "CI tests every change; CD ships the ones that pass.",
        "Proxies, load balancers and CDNs sit in front of your app.",
        "Watch production with logs, metrics and traces.",
      ],
      quiz: [
        { q: "\"It works on my machine\" is mainly solved by…", options: ["More RAM", "Code comments", "A CDN", "Containers (Docker)"], why: "The container carries the same environment everywhere." },
        { q: "Running tests automatically on every push is…", options: ["CD", "IaaS", "CI", "SSR"], why: "Continuous integration checks every change." },
        { q: "Sending 5% of users to a new version first is a…", options: ["Canary release", "Blue-green swap", "Rollback", "Migration"], why: "A small group tries it first, like a canary in a mine." },
        { q: "To see how long one slow request spent in each service, use…", options: ["Logs only", "Traces", "A CDN", "Docker Compose"], why: "A trace follows one request across every service." },
      ],
    },
    "system-design": {
      character: { name: "The City Planner", says: "One user is easy. A million at once? Let's plan roads, buses and bridges before the traffic arrives." },
      recap: [
        "Scale up (bigger machine) or out (more machines).",
        "Clarify needs, estimate, sketch, design data, then discuss trade-offs.",
        "Caches, queues and load balancers are your main building blocks.",
        "There's no single right answer, only explained choices.",
      ],
      quiz: [
        { q: "Adding more servers behind a load balancer is…", options: ["Vertical scaling", "Sharding", "Horizontal scaling", "Caching"], why: "Scaling out: more machines instead of a bigger one." },
        { q: "The first step in a system design interview is to…", options: ["Draw microservices", "Clarify the requirements", "Pick a database", "Write code"], why: "You can't design well without knowing what is needed and at what scale." },
        { q: "A URL shortener gets far more reads than writes. The key trick is…", options: ["More writes", "WebSockets", "Bigger IDs", "Caching popular links"], why: "Popular links are served from memory, fast." },
        { q: "1 million users × 10 requests a day is about how many per second?", options: ["≈120", "≈10", "≈10,000", "≈1 million"], why: "10 million ÷ 86,400 seconds ≈ 116." },
      ],
    },
  },
  topics: {
    // Frontend
    "semantic-html": {
      use: ["Every page you build", "Better SEO and screen-reader support"],
      labels: ["<header>", "<nav>", "<main>", "<footer>"],
    },
    "flex-grid": {
      example: "A navbar with a logo left and buttons right: Flexbox. A product gallery of 3×4 cards: Grid.",
      use: ["Flexbox: one row or column", "Grid: whole-page layouts and galleries"],
    },
    responsive: {
      use: ["Every site: most visitors are on phones", "Test at 375px wide"],
      table: { head: ["Screen", "Width", "Cards per row"], rows: [["Phone", "< 768px", "1"], ["Tablet", "768px+", "2"], ["Laptop", "1024px+", "3"]] },
    },
    "dom-events": {
      example: "Clicking \"Add to cart\" updates the little cart counter without reloading the page.",
      use: ["Making a page interactive", "Understanding what React does for you"],
      labels: ["User clicks", "Event fires", "JavaScript runs", "Page updates"],
    },
    accessibility: {
      use: ["Every page, from day one", "Required by law in many countries"],
      table: { head: ["Do this", "Because"], rows: [["Alt text on images", "Screen readers read it aloud"], ["Strong colour contrast", "Readable in sunlight and for low vision"], ["Labels on inputs", "Everyone knows what to type"], ["Visible focus", "Keyboard users see where they are"]] },
    },
    "browser-storage": {
      example: "Login session: an HttpOnly cookie. Dark mode choice: localStorage. Half-typed form: sessionStorage.",
      use: ["Cookies for auth", "localStorage for small preferences"],
    },
    "web-performance": {
      example: "Compressing a 4 MB hero image to 200 KB can cut LCP from 5 seconds to under 2.",
      use: ["Before launch and after big changes", "Check in Lighthouse or PageSpeed Insights"],
    },

    // React
    "components-props": {
      example: "One ProductCard component shows every product: only the name, price and photo props change.",
      use: ["Any UI that repeats", "Splitting big screens into pieces"],
      labels: ["App", "Header", "ProductList", "Logo", "Menu", "ProductCard", "ProductCard"],
    },
    "state-hooks": {
      example: "A like button: tap it, the count state goes up, React redraws the number.",
      use: ["Values that change while the user is on the page", "Keep state as close to where it's used as possible"],
      labels: ["User clicks", "setState", "React re-renders", "Screen shows new value"],
    },
    "use-effect": {
      use: ["Syncing with things outside React", "Timers, subscriptions, the browser title"],
      labels: ["Component renders", "Effect runs", "Fetch data", "Set state"],
    },
    forms: {
      example: "A sign-up form shows \"Email looks wrong\" as you type, and the server still checks it again.",
      use: ["Every form", "Validate twice: browser for speed, server for safety"],
      labels: ["User types", "Browser check", "Submit", "Server check", "Saved"],
    },
    "controlled-uncontrolled": {
      example: "A password strength meter needs controlled input; a simple search box can be uncontrolled.",
      use: ["Controlled: live validation and formatting", "Uncontrolled: simple forms"],
    },
    "state-management": {
      example: "Logged-in user in Context, the shopping cart in Zustand, the product list in React Query.",
      use: ["When many far-apart components need the same data", "Start simple; add a library only when it hurts"],
    },
    "spa-mpa": {
      example: "Gmail is a SPA; a government information site is often an MPA.",
      use: ["SPA: app-like dashboards", "MPA: content sites and blogs"],
    },
    "rendering-modes": {
      example: "Docs page: SSG. Product page with live stock: SSR or ISR. Admin dashboard behind a login: CSR.",
      use: ["Pick per page, not per site", "Public pages that need SEO: SSR or SSG"],
    },
    nextjs: {
      use: ["React sites that need SEO and speed", "Full-stack apps with API routes"],
      labels: ["Routing", "Server rendering", "Image + font optimisation", "React"],
    },
    i18n: {
      use: ["Apps for more than one language", "Plan it early: retro-fitting is painful"],
      table: { head: ["Key", "English", "Sinhala", "Tamil"], rows: [["nav.home", "Home", "මුල් පිටුව", "முகப்பு"], ["cta.buy", "Buy now", "දැන් මිලදී ගන්න", "இப்போது வாங்கவும்"]] },
    },

    // Backend
    "api-cli-mcp": {
      example: "Your app calls a weather API; you deploy with a CLI; Claude reads your files through MCP.",
      use: ["API: app-to-app", "CLI: scripts and automation", "MCP: giving AI tools"],
    },
    "http-methods-status": {
      example: "POST /orders creates an order and answers 201 Created; GET /orders/999 answers 404 Not Found.",
      use: ["Designing every endpoint", "Reading errors in the browser's network tab"],
      table: { head: ["Code", "Meaning"], rows: [["200", "OK"], ["201", "Created"], ["400", "Bad input"], ["401 / 403", "Not logged in / not allowed"], ["404", "Not found"], ["500", "Server error"]] },
    },
    "rest-graphql-grpc": {
      example: "A public shop API: REST. A mobile app that needs exact fields: GraphQL. Internal services: gRPC.",
      use: ["Default to REST", "GraphQL for complex, data-hungry screens", "gRPC between backend services"],
    },
    "api-design": {
      example: "/api/v1/products?page=2 lets you change v2 later without breaking old mobile apps.",
      use: ["Any API others will use", "Keep it consistent everywhere"],
      table: { head: ["Good", "Avoid"], rows: [["GET /products", "GET /getAllProducts"], ["POST /orders", "POST /createOrderNow"], ["/api/v1/...", "No versioning"]] },
    },
    validation: {
      use: ["Every endpoint, every field", "Never trust the frontend"],
      labels: ["Request arrives", "Check types and rules", "Reject: 400", "Accept: run logic"],
    },
    "sync-async": {
      example: "An API that calls three other APIs can wait for all three at once with async, instead of one after another.",
      use: ["Async: lots of network or database waiting", "Sync: simple, CPU-bound code"],
    },
    caching: {
      use: ["Data that's read often and changes rarely", "Expensive calculations and slow APIs"],
      labels: ["Request", "In cache? Return fast", "Not in cache: ask database", "Save copy in cache"],
    },
    "file-uploads": {
      use: ["Profile photos, documents, attachments", "Always limit size and type"],
      labels: ["User uploads", "Check type + size", "Rename + store", "Save path in database"],
    },
    "email-notifications": {
      use: ["Confirmations, password resets, alerts", "Send from a background job"],
    },
    "rate-limiting": {
      use: ["Login and sign-up endpoints", "Public APIs and expensive features like AI calls"],
    },
    "message-queues": {
      use: ["Emails, reports, image processing", "Anything slower than a second"],
      labels: ["API adds job", "Queue holds it", "Worker picks it up", "Job done"],
    },
    realtime: {
      example: "Chat: WebSockets. Live score updates: SSE. Payment confirmed by Stripe: webhook.",
      use: ["Pick the simplest one that fits", "SSE for one-way, WebSockets for two-way"],
    },

    // Auth
    "password-storage": {
      example: "Even if your database leaks, attackers get hashes, not passwords, and slow hashes take ages to crack.",
      use: ["Every app with passwords", "Never write your own crypto"],
      labels: ["Password", "Add salt", "Slow hash", "Store the hash"],
    },
    "sessions-jwt": {
      example: "A banking website uses sessions (instant logout); a mobile app talking to many APIs often uses JWTs.",
      use: ["Sessions: classic web apps", "JWT: APIs and mobile apps"],
    },
    "refresh-tokens": {
      use: ["JWT-based logins", "Keeping users logged in safely for weeks"],
      labels: ["Access token expires", "Send refresh token", "Get new access token", "Continue"],
    },
    cors: {
      use: ["Frontend and API on different domains or ports", "Allow only the origins you trust"],
      labels: ["Page on site A", "Calls API on site B", "API says: A is allowed", "Browser lets it through"],
    },
    "rbac-abac": {
      example: "A farming app with Farmer, Trader and Admin roles (RBAC). \"Only the seller may edit this listing\" (ABAC).",
      use: ["RBAC: most apps", "ABAC: rules about ownership, time or place"],
    },
    mfa: {
      example: "Logging in to your bank sends a one-time code to your phone.",
      use: ["Admin and money-related accounts", "Any app holding sensitive data"],
    },
    "oauth-sso": {
      example: "\"Sign in with Google\" on a new app: you never type your Google password into that app.",
      use: ["Social login", "Company-wide login across many tools"],
      labels: ["Click Sign in with Google", "Google asks you", "App gets a code", "App gets your profile"],
    },

    // Databases
    "sql-nosql": {
      example: "A shop's orders and payments live in PostgreSQL; a chat app's billions of messages might live in Cassandra.",
      use: ["SQL by default", "NoSQL for flexible shapes or huge scale"],
    },
    "sql-joins": {
      example: "Show each order with the customer's name: join orders to users on user_id.",
      use: ["Combining related tables", "Reports and dashboards"],
      table: { head: ["order", "user_id", "→ name", "total"], rows: [["#101", "7", "Nimal", "2,400"], ["#102", "3", "Fathima", "980"]] },
    },
    indexes: {
      example: "Searching 5 million orders by customer goes from 4 seconds to 5 milliseconds with one index.",
      use: ["Columns you filter, sort or join on", "Don't index everything: writes get slower"],
      labels: ["Query", "Index lookup", "Exact row"],
    },
    migrations: {
      example: "Adding a phone column: the migration runs on your laptop, in CI and in production the same way.",
      use: ["Every structure change", "Commit migrations with the code that needs them"],
      labels: ["Change model", "Generate migration", "Review", "Apply everywhere"],
    },
    "orm-raw-sql": {
      example: "Use SQLAlchemy for everyday CRUD; drop to raw SQL for one complicated monthly report.",
      use: ["ORM: everyday queries", "Raw SQL: heavy reports and tuning"],
    },
    normalization: {
      example: "Store a customer's address once in customers, not copied into every order row.",
      use: ["Normalise by default", "Denormalise for read-heavy dashboards"],
    },
    "acid-base": {
      example: "Moving Rs. 5,000: subtract from A and add to B happen together, or not at all.",
      use: ["ACID: money, stock, bookings", "BASE: likes, views, feeds"],
    },
    "n-plus-one": {
      use: ["Lists that show related data", "Check your logs for repeated queries"],
      table: { head: ["Approach", "Queries for 50 posts"], rows: [["One query per author", "51"], ["Join / eager load", "1"]] },
    },
    "nosql-types": {
      example: "MongoDB for product catalogs, Redis for sessions, Neo4j for \"friends of friends\".",
      use: ["Pick the type that matches your data's shape"],
    },
    "connection-pooling": {
      example: "Without a pool, 500 users at once can open 500 connections and crash PostgreSQL.",
      use: ["Every production backend", "Most ORMs do it for you: tune the size"],
    },
    "replication-sharding": {
      example: "Read replicas serve the busy product pages; sharding splits users by country when one server is full.",
      use: ["Replication first: easier", "Sharding only at very large scale"],
    },
    cap: {
      example: "A bank picks consistency (stop if unsure); a social feed picks availability (show slightly old posts).",
      use: ["Distributed databases", "System design interviews"],
    },

    // Architecture
    "monolith-microservices": {
      example: "Netflix runs hundreds of microservices; most startups do great with one well-organised app.",
      use: ["Monolith/modular: most projects", "Microservices: big teams, very different scaling needs"],
    },
    layered: {
      example: "A FastAPI app: routes read the request, services hold the rules, repositories talk to the database.",
      use: ["Any app bigger than a few files", "Makes testing each layer easy"],
      labels: ["Routes (API)", "Services (rules)", "Repositories (data)", "Database"],
    },
    "stateless-stateful": {
      example: "A REST API with JWTs is stateless; a multiplayer game server holding the match is stateful.",
      use: ["Stateless by default", "Stateful only when you must, like live games"],
    },
    "event-driven": {
      example: "When an order is paid, the email, stock and analytics services each react on their own, so a slow email never delays the stock update.",
      use: ["Many reactions to one action", "Keeping services independent"],
      labels: ["Order paid", "Event bus", "Email, stock and analytics react"],
    },
    "api-gateway": {
      example: "The mobile app talks to one gateway; it routes to the users, orders and payments services.",
      use: ["Several backend services", "One place for auth and rate limits"],
      labels: ["App", "API gateway", "Users / Orders / Payments"],
    },
    "twelve-factor": {
      example: "The same Docker image runs in staging and production; only the environment variables differ.",
      use: ["Apps deployed to the cloud", "A checklist for clean deploys"],
      table: { head: ["Factor", "In practice"], rows: [["Config", "Settings in env vars"], ["Processes", "Stateless, disposable"], ["Logs", "Write to stdout"], ["Dev/prod parity", "Same stack everywhere"]] },
    },

    // DevOps
    environments: {
      example: "You test a new checkout on staging with fake cards before real customers ever see it.",
      use: ["Every real project", "Never test risky changes on production"],
      labels: ["Development", "Staging", "Production"],
    },
    "containers-vms": {
      example: "Your app, PostgreSQL and Nginx each run in a container on one cloud VM.",
      use: ["Containers: packaging apps", "VMs: full machines and strong isolation"],
      labels: ["Your app containers", "Docker", "Operating system", "Server hardware"],
    },
    dockerfile: {
      use: ["Every app you deploy", "Same setup for every teammate"],
      labels: ["Dockerfile", "docker build → image", "docker run → container"],
    },
    "ci-cd": {
      example: "Push to main → GitHub Actions runs 800 tests → if green, the new version goes live automatically.",
      use: ["Every team project", "Even solo: catch mistakes before users do"],
      labels: ["Push code", "Lint + test", "Build", "Deploy"],
    },
    "cloud-models": {
      example: "A Next.js site on Vercel is PaaS; renting an Azure VM and installing everything yourself is IaaS.",
      use: ["PaaS to launch fast", "IaaS for full control"],
      table: { head: ["Model", "You manage", "Example"], rows: [["IaaS", "OS and up", "Azure VM"], ["PaaS", "Just your code", "Vercel"], ["SaaS", "Nothing", "Gmail"], ["Serverless", "Single functions", "AWS Lambda"]] },
    },
    "proxy-load-balancer": {
      example: "Nginx terminates HTTPS and forwards /api to FastAPI and everything else to the frontend.",
      use: ["Every production deployment", "Load balancers once you run 2+ copies"],
      labels: ["Visitor", "Nginx / load balancer", "App copy 1 / 2 / 3"],
    },
    cdn: {
      example: "Images for Sri Lankan visitors come from a server in Singapore instead of the USA.",
      use: ["Images, videos, JS and CSS files", "Users spread around the world"],
    },
    "compose-kubernetes": {
      example: "A backend, frontend and database all start with one docker compose up command.",
      use: ["Compose: one server", "Kubernetes: many servers, auto-scaling"],
    },
    observability: {
      example: "Metrics show error rate jumping at 2 pm; logs show the error; a trace shows it came from the payment service.",
      use: ["Every production app", "Set alerts on key metrics"],
    },
    "deploy-strategies": {
      example: "A canary sends 5% of traffic to v2; error rate looks fine, so it rolls out to 100%.",
      use: ["Blue-green: instant rollback", "Canary: risky changes"],
    },
    iac: {
      example: "One Terraform file recreates your whole cloud setup in a new region in minutes.",
      use: ["Cloud setups you'll rebuild or copy", "Teams that review infrastructure changes"],
    },

    // System design
    scaling: {
      example: "A ticket site before a big concert: add more servers for the rush, remove them afterwards.",
      use: ["Vertical first: simple", "Horizontal for big or spiky traffic"],
    },
    "design-steps": {
      use: ["Every system design interview", "Planning any new project"],
      labels: ["Requirements", "Estimate scale", "High-level boxes", "Data model", "Deep dive + trade-offs"],
    },
    estimation: {
      use: ["Sizing servers and storage", "Showing structured thinking in interviews"],
      table: { head: ["Item", "Rough number"], rows: [["Seconds in a day", "≈ 86,400"], ["1 photo", "≈ 2 MB"], ["1M users × 10 req/day", "≈ 120 req/s"]] },
    },
    "design-url-shortener": {
      use: ["Practising read-heavy design", "A classic first interview question"],
      labels: ["Long URL", "Make short code", "Store code → URL", "Redirect visitors"],
    },
    "design-chat": {
      use: ["Practising real-time design", "Messaging, support chat, live comments"],
      labels: ["Sender", "WebSocket server", "Queue + store", "Receiver"],
    },
    "design-marketplace": {
      use: ["Practising transactions and roles", "Shops, booking and delivery apps"],
      labels: ["Browse + search", "Cart", "Checkout (lock stock)", "Pay", "Order"],
    },
  },
};

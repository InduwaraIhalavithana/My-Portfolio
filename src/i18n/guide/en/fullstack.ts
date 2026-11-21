import type { TrackText } from "../types";

export const fullstackText: TrackText = {
  sections: {
    frontend: { title: "Frontend basics", intro: "HTML, CSS and JavaScript: what the browser actually runs." },
    react: { title: "React & modern frontend", intro: "Building screens from components, and choosing where pages are rendered." },
    backend: { title: "Backend & APIs", intro: "How the server receives requests, does the work and answers." },
    auth: { title: "Login & access", intro: "Remembering who is logged in, and what they are allowed to do." },
    databases: { title: "Databases", intro: "Storing data safely, finding it fast and changing its shape over time." },
    architecture: { title: "Software architecture", intro: "How to split a growing app into parts that stay easy to change." },
    devops: { title: "DevOps & deployment", intro: "Packaging, testing and shipping your app to real users, then watching it run." },
    "system-design": { title: "System design", intro: "Planning apps for millions of users. A favourite interview topic." },
  },
  topics: {
    // Frontend
    "semantic-html": {
      title: "Semantic HTML",
      line: "Using tags that describe their meaning (header, nav, main, button) instead of plain divs everywhere.",
      analogy: "Labelling rooms in a house as kitchen and bedroom, not \"room 1\" and \"room 2\".",
      example: "Screen readers, search engines and other developers all understand the page better.",
    },
    "flex-grid": {
      title: "Flexbox vs Grid",
      line: "The two CSS tools for placing things on a page.",
      analogy: "Flexbox: beads on one string. Grid: a chessboard with rows and columns.",
      compare: [
        "One direction: a row or a column. Great for navbars and button groups.",
        "Two directions: rows and columns together. Great for page layouts and card grids.",
      ],
    },
    responsive: {
      title: "Responsive design",
      line: "One page that looks right on phones, tablets and big screens.",
      analogy: "Water takes the shape of whatever glass you pour it into.",
      example: "Design for the phone first, then add columns as the screen grows.",
    },
    "dom-events": {
      title: "The DOM & events",
      line: "The DOM is the page as a tree of objects JavaScript can change. Events are things the user does, like clicks.",
      analogy: "The DOM is a puppet; events are the strings that make it move.",
    },
    accessibility: {
      title: "Accessibility (a11y)",
      line: "Making sure everyone can use your app, including people using screen readers or only a keyboard.",
      analogy: "A ramp beside the stairs: it helps wheelchair users, parents with prams and everyone else.",
      example: "Alt text on images, enough colour contrast, labels on every form field, visible keyboard focus.",
    },
    "browser-storage": {
      title: "Cookies vs localStorage vs sessionStorage",
      line: "Three places a browser can keep small bits of data for a website.",
      analogy: "Cookie: a ticket you show at every visit. localStorage: a locker you keep. sessionStorage: a locker emptied when you leave.",
      compare: [
        "Sent to the server with every request. Used for login sessions. Can be made HttpOnly so JavaScript can't read it.",
        "Stays until cleared. Only JavaScript can read it. Good for settings like dark mode.",
        "Cleared when the tab closes. Good for a half-filled form.",
      ],
    },
    "web-performance": {
      title: "Web performance (Core Web Vitals)",
      line: "Google's three numbers for how fast and stable a page feels to real users.",
      analogy: "A restaurant: how fast food arrives, how fast the waiter responds, and whether the table wobbles.",
      compare: [
        "Largest Contentful Paint: how fast the main content appears. Aim under 2.5 seconds.",
        "Interaction to Next Paint: how fast the page reacts to a click. Aim under 200 ms.",
        "Cumulative Layout Shift: how much things jump around while loading. Aim under 0.1.",
      ],
    },

    // React
    "components-props": {
      title: "Components & props",
      line: "A component is a reusable piece of UI. Props are the values you pass into it.",
      analogy: "A cookie cutter (component) with different icing (props) each time.",
    },
    "state-hooks": {
      title: "State & hooks",
      line: "State is data that changes over time; when it changes, React redraws that part of the screen.",
      analogy: "A scoreboard: change the score and the display updates by itself.",
    },
    "use-effect": {
      title: "useEffect",
      line: "Runs code after the screen updates, for things outside React like fetching data or timers.",
      analogy: "After you move into a house (render), you connect the electricity (effect).",
      example: "Fetch orders when the page opens. Often a data library like React Query does this better.",
    },
    "controlled-uncontrolled": {
      title: "Controlled vs uncontrolled inputs",
      line: "Whether React or the browser holds the current value of a form field.",
      analogy: "Controlled: you write in a notebook the teacher reads every second. Uncontrolled: the teacher reads it only when you hand it in.",
      compare: [
        "React state holds the value. Easy to validate as the user types.",
        "The browser holds the value; you read it on submit. Less code.",
      ],
    },
    "state-management": {
      title: "State management",
      line: "Where shared data lives when many components need it.",
      analogy: "A family notice board everyone checks, instead of passing notes person to person.",
      compare: [
        "Built into React. Fine for things that rarely change, like the theme or the logged-in user.",
        "A central store for complex app state that changes often.",
        "Fetches, caches and refreshes server data for you. Most \"state\" is really server data.",
      ],
    },
    "rendering-modes": {
      title: "CSR vs SSR vs SSG vs ISR",
      line: "Four choices for where and when a page's HTML is built.",
      analogy: "A meal: cooked at your table (CSR), cooked in the kitchen per order (SSR), pre-packed in the morning (SSG), pre-packed but refreshed every hour (ISR).",
      compare: [
        "Client-side rendering: the browser builds the page with JavaScript. Simple; slower first view; weaker for SEO.",
        "Server-side rendering: the server builds HTML on every request. Fresh data, good SEO.",
        "Static site generation: HTML built once at build time. Fastest; best for content that rarely changes.",
        "Incremental static regeneration: static pages that rebuild in the background now and then.",
      ],
    },
    "spa-mpa": {
      title: "SPA vs MPA",
      line: "One page that swaps its content, or many separate pages loaded one by one.",
      analogy: "SPA: one stage where the scenery changes. MPA: walking from room to room.",
      compare: [
        "Single-page app: smooth, app-like moves between screens. Bigger first download.",
        "Multi-page app: each link loads a new page from the server. Simple and SEO-friendly.",
      ],
    },
    nextjs: {
      title: "Next.js",
      line: "A React framework that adds routing, server rendering, image optimisation and API routes.",
      analogy: "React is the engine; Next.js is the whole car around it.",
      example: "Widely used for company websites, online shops, blogs and dashboards.",
    },
    forms: {
      title: "Forms & validation",
      line: "Collecting input and checking it, in the browser for speed and on the server for safety.",
      analogy: "A shop assistant checks your form at the counter, and the bank checks it again later.",
      example: "Never trust the browser alone: anyone can skip its checks.",
    },
    i18n: {
      title: "Internationalisation (i18n)",
      line: "Building an app so it can show any language: text kept in dictionaries, not inside the code.",
      analogy: "One film with subtitle files for each language.",
      example: "One website shown in English, Sinhala and Tamil, all from the same code.",
    },

    // Backend
    "api-cli-mcp": {
      title: "API vs CLI vs MCP",
      line: "Three ways to use a program, depending on who is using it.",
      analogy: "API: the kitchen window where apps order. CLI: ordering by speaking at the counter. MCP: a universal adapter so AI assistants can order too.",
      compare: [
        "Programs talk to programs. Your React app calls your backend API.",
        "Humans type commands: git push, npm install.",
        "Model Context Protocol: a standard way for AI assistants to use tools and data.",
      ],
    },
    "rest-graphql-grpc": {
      title: "REST vs GraphQL vs gRPC",
      line: "Three styles of API.",
      analogy: "REST: a fixed menu. GraphQL: a buffet where you take exactly what you want. gRPC: walkie-talkies between kitchen staff.",
      compare: [
        "One URL per thing (GET /users/5). Simple, cache-friendly, the most common.",
        "One URL; the client asks for exactly the fields it needs. Good for complex screens.",
        "Fast binary calls between services. Mostly used backend-to-backend.",
      ],
    },
    "http-methods-status": {
      title: "HTTP methods & status codes",
      line: "The verb says what you want; the status code says how it went.",
      analogy: "Ordering at a counter: \"show me\", \"make me\", \"change it\", \"cancel it\", then a thumbs up or down.",
      compare: [
        "Read data. Should never change anything.",
        "Create something new.",
        "Update: PUT replaces it all, PATCH changes part of it.",
        "Remove it. Common answers: 200 OK, 201 Created, 400 Bad Request, 401/403 not allowed, 404 Not Found, 500 server error.",
      ],
    },
    "api-design": {
      title: "Good API design",
      line: "Clear names, plural nouns, versions, pagination and the same error format everywhere.",
      analogy: "A well-signposted building: anyone finds the right room without asking.",
    },
    validation: {
      title: "Input validation",
      line: "Check every piece of incoming data on the server before using it.",
      analogy: "A security scanner at the airport: everything is checked, every time.",
      example: "Pydantic in FastAPI rejects a negative quantity before your code even runs.",
    },
    "sync-async": {
      title: "Sync vs async",
      line: "Wait for each task to finish before the next, or start other work while waiting.",
      analogy: "Sync: standing at the kettle until it boils. Async: putting the kettle on and making toast meanwhile.",
      compare: [
        "Simple to follow. Fine when tasks are quick.",
        "Handles many slow waits (network, database) at once. FastAPI's async def.",
      ],
    },
    realtime: {
      title: "Polling vs WebSockets vs SSE vs webhooks",
      line: "Four ways to get updates without the user pressing refresh.",
      analogy: "Polling: asking \"are we there yet?\" every minute. WebSockets: an open phone call. SSE: a radio broadcast. Webhooks: \"call me when it's ready\".",
      compare: [
        "The client asks again and again. Simple but wasteful.",
        "A two-way open line. Chat and live games.",
        "Server-Sent Events: the server pushes one way. Live feeds and notifications.",
        "One server calls another server's URL when something happens. Payment alerts.",
      ],
    },
    "message-queues": {
      title: "Message queues & background jobs",
      line: "Put slow work on a queue so a worker does it later, and the user isn't kept waiting.",
      analogy: "A restaurant gives you a token number; the kitchen cooks orders in turn.",
      example: "Sending emails, making PDFs, resizing photos. Tools: Celery, RabbitMQ, Redis, Kafka.",
    },
    caching: {
      title: "Caching",
      line: "Keep a copy of an answer close by so you don't work it out again each time.",
      analogy: "Keeping your most-used books on your desk instead of walking to the library.",
      example: "Redis for server data, a CDN for images, the browser cache for files. The hard part: knowing when the copy is out of date.",
    },
    "rate-limiting": {
      title: "Rate limiting",
      line: "Cap how many requests one user can send in a time window, to stop abuse and overload.",
      analogy: "\"Maximum 5 items per customer\" during a sale.",
      example: "5 login attempts per minute; the 6th gets a 429 Too Many Requests.",
    },
    "file-uploads": {
      title: "File uploads",
      line: "Accept files safely: check the type and size, rename them, and store them outside your code folder.",
      analogy: "A post office checks parcels before accepting them.",
      example: "Store files on disk or in object storage (like S3), and keep only the path in the database.",
    },
    "email-notifications": {
      title: "Email & notifications",
      line: "Telling users about events by email, in-app alerts or push messages, without slowing the request.",
      analogy: "A shop's SMS when your order is ready.",
      example: "Send emails from a background job, not inside the request.",
    },

    // Auth
    "sessions-jwt": {
      title: "Sessions vs JWT",
      line: "Two ways for a server to remember that you are logged in.",
      analogy: "Session: a coat-check ticket; your coat stays at the counter. JWT: a signed ID card that carries your details.",
      compare: [
        "The server stores who you are; you hold only an ID in a cookie. Easy to log someone out instantly.",
        "A signed token holds your details; the server stores nothing. Scales easily, but is hard to cancel before it expires.",
      ],
    },
    "refresh-tokens": {
      title: "Access & refresh tokens",
      line: "A short-lived access token for requests, plus a longer-lived refresh token to get new ones.",
      analogy: "A day pass to the gym, plus a membership card that prints a new day pass.",
      example: "If an access token leaks, it stops working within minutes.",
    },
    "password-storage": {
      title: "Storing passwords",
      line: "Never store passwords; store a slow, salted hash made with bcrypt or Argon2.",
      analogy: "Keep a fingerprint, not the finger.",
    },
    "oauth-sso": {
      title: "OAuth 2.0, OpenID Connect & SSO",
      line: "Standards that let you log in with another account, or use one login across many apps.",
      analogy: "A hotel key card from reception that opens your room, the pool and the gym.",
      compare: [
        "Lets an app act for you with limited permission, without your password.",
        "Adds \"who you are\" on top of OAuth. Powers \"Sign in with Google\".",
        "Single sign-on: one login for many company apps.",
      ],
    },
    "rbac-abac": {
      title: "RBAC vs ABAC",
      line: "Two ways to decide who may do what.",
      analogy: "RBAC: your job title opens doors. ABAC: rules about you, the thing and the time.",
      compare: [
        "Role-based: admin, trader, customer. Simple and common.",
        "Attribute-based: \"owners can edit their own posts, during office hours\". More flexible.",
      ],
    },
    cors: {
      title: "CORS",
      line: "A browser rule: a page may only call another website's API if that API says it allows it.",
      analogy: "A club with a guest list: the bouncer (browser) checks whether your site is on it.",
      example: "Your React app on port 5173 calling an API on port 8000 needs CORS set on the API.",
    },
    mfa: {
      title: "Multi-factor authentication (MFA)",
      line: "Log in with something you know plus something you have, like a code from your phone.",
      analogy: "A bank locker that needs both your key and the bank's key.",
    },

    // Databases
    "sql-nosql": {
      title: "SQL vs NoSQL",
      line: "Two families of databases: strict linked tables, or flexible documents and key-values.",
      analogy: "SQL: spreadsheets with fixed columns that link to each other. NoSQL: folders of flexible notes.",
      compare: [
        "Clear structure and relationships, strong correctness. PostgreSQL, MySQL. Orders, money, users.",
        "Flexible shapes and huge scale. MongoDB, Redis, Cassandra. Logs, chats, caches, catalogs.",
      ],
    },
    "nosql-types": {
      title: "Kinds of NoSQL",
      line: "NoSQL is not one thing; there are four main kinds.",
      analogy: "Different storage for different things: files, lockers, warehouses, a map of friends.",
      compare: [
        "JSON-like documents. MongoDB.",
        "Super-fast lookup by key. Redis for caches and sessions.",
        "Huge tables spread over many machines. Cassandra.",
        "Nodes and relationships. Neo4j for networks and recommendations.",
      ],
    },
    "sql-joins": {
      title: "SQL basics & joins",
      line: "SELECT, WHERE, GROUP BY and JOIN let you ask questions across linked tables.",
      analogy: "Matching two class lists by student number to see each student's marks and address together.",
    },
    normalization: {
      title: "Normalization vs denormalization",
      line: "Store each fact once, or copy some facts on purpose so reads are faster.",
      analogy: "One master contact list everyone links to, versus a copy of the address in every letter.",
      compare: [
        "No duplicate data; updates happen in one place. The default for SQL.",
        "Some duplicates for faster reads. Common in reporting and NoSQL.",
      ],
    },
    indexes: {
      title: "Indexes",
      line: "An extra lookup structure that makes searches on a column much faster.",
      analogy: "The index at the back of a book: go straight to the page.",
      example: "Faster reads, slightly slower writes. Index the columns you filter and join on.",
    },
    "acid-base": {
      title: "Transactions: ACID vs BASE",
      line: "Strict all-or-nothing correctness, or high availability that becomes correct a moment later.",
      analogy: "ACID: a bank transfer, never half done. BASE: a social media like-count that catches up in a second.",
      compare: [
        "Atomic, Consistent, Isolated, Durable. Typical of SQL databases.",
        "Basically Available, Soft state, Eventually consistent. Typical of large NoSQL systems.",
      ],
    },
    cap: {
      title: "CAP theorem",
      line: "When the network between database servers breaks, you must choose consistency or availability.",
      analogy: "Two shop branches lose their phone line: stop selling (consistent), or keep selling and fix the stock later (available).",
      compare: [
        "Every reader sees the latest data.",
        "Every request gets an answer.",
        "The system keeps working when servers can't talk. In real networks you must have this.",
      ],
    },
    "orm-raw-sql": {
      title: "ORM vs raw SQL",
      line: "Work with the database through code objects, or write the SQL yourself.",
      analogy: "ORM: an interpreter who translates for you. Raw SQL: speaking the language directly.",
      compare: [
        "SQLAlchemy, Prisma. Faster to write and safer by default.",
        "Full control and speed for complex queries.",
      ],
    },
    migrations: {
      title: "Database migrations",
      line: "Versioned scripts that change the database structure step by step, like Git for your tables.",
      analogy: "Renovation plans numbered in order, so every builder does the same steps.",
    },
    "n-plus-one": {
      title: "The N+1 query problem",
      line: "Loading a list with one query, then running one more query for every item in it.",
      analogy: "Going to the shop once per item on your list instead of one trip with the whole list.",
      example: "Fix by loading related data together with a join or eager loading.",
    },
    "replication-sharding": {
      title: "Replication vs sharding",
      line: "Copy the whole database to several servers, or split the data between them.",
      analogy: "Replication: photocopies of the same book in many libraries. Sharding: volume A–M here, N–Z there.",
      compare: [
        "Copies for safety and more read capacity.",
        "Splits for more total capacity when one server is not enough.",
      ],
    },
    "connection-pooling": {
      title: "Connection pooling",
      line: "Reuse a set of open database connections instead of opening a new one for every request.",
      analogy: "A taxi rank: cars wait ready, no need to call a new one each time.",
    },

    // Architecture
    "monolith-microservices": {
      title: "Monolith vs microservices vs modular monolith",
      line: "Three ways to split up a backend.",
      analogy: "Monolith: one big kitchen. Microservices: a food court of small shops. Modular monolith: one kitchen with clear stations.",
      compare: [
        "One app, one deploy. Simple to build and test. Gets tangled as it grows.",
        "Many small services, each deployed alone. Scale each part, but much more complex.",
        "One app with strict internal modules. The usual recommended starting point.",
      ],
    },
    layered: {
      title: "MVC, layered & clean architecture",
      line: "Ways to separate the screen, the business rules and the data access inside an app.",
      analogy: "A restaurant: waiters (routes), chefs (business logic), the store room (database). Each does one job.",
      compare: [
        "Model, View, Controller: data, screen, and the glue between them.",
        "Routes → services → repositories → database, each calling only the layer below.",
        "Business rules in the centre, knowing nothing about frameworks or databases.",
      ],
    },
    "stateless-stateful": {
      title: "Stateless vs stateful",
      line: "Whether a server remembers anything about you between requests.",
      analogy: "Stateless: a vending machine. Stateful: your regular barber who remembers your usual cut.",
      compare: [
        "Each request carries all it needs. Easy to add more servers.",
        "The server keeps memory between requests. Needed for some things, like game sessions.",
      ],
    },
    "event-driven": {
      title: "Request-response vs event-driven",
      line: "Ask and wait for an answer, or announce that something happened and let others react.",
      analogy: "A phone call versus a WhatsApp group announcement.",
      compare: [
        "\"Give me order 42\" and wait for it. Simple and direct.",
        "\"Order 42 was paid!\" Email, stock and analytics each react on their own.",
      ],
    },
    "api-gateway": {
      title: "API gateway",
      line: "One front door for many backend services that handles routing, auth and rate limits.",
      analogy: "A shopping mall's main entrance and information desk.",
    },
    "twelve-factor": {
      title: "The twelve-factor app",
      line: "Twelve habits for apps that deploy cleanly anywhere: config in env vars, stateless processes, logs as streams.",
      analogy: "A packing checklist for moving an app between servers without surprises.",
    },

    // DevOps
    "containers-vms": {
      title: "Containers vs virtual machines",
      line: "Two ways to run apps in isolation on one physical machine.",
      analogy: "VM: a separate house with its own foundations. Container: an apartment sharing the building's foundations.",
      compare: [
        "Shares the host's OS kernel. Starts in seconds, small. Docker.",
        "A full computer with its own OS. Stronger isolation, heavier.",
      ],
    },
    dockerfile: {
      title: "Docker & Dockerfiles",
      line: "A Dockerfile is a recipe that packs your app and everything it needs into one image that runs the same everywhere.",
      analogy: "A shipping container: the same box fits any ship, train or truck.",
      example: "Ends \"it works on my machine\".",
    },
    "compose-kubernetes": {
      title: "Docker Compose vs Kubernetes",
      line: "Tools to run many containers together.",
      analogy: "Compose: a band leader for a small band. Kubernetes: a conductor for a huge orchestra across many stages.",
      compare: [
        "One YAML file runs your app, database and proxy on one machine. Perfect for small projects.",
        "Runs, scales and heals containers across many machines. For big systems.",
      ],
    },
    "ci-cd": {
      title: "CI vs CD",
      line: "Automatically test every change, then automatically ship the changes that pass.",
      analogy: "A factory line: every product is quality-checked (CI), then packed and shipped (CD).",
      compare: [
        "Continuous integration: every push runs lint, tests and a build. GitHub Actions.",
        "Continuous delivery or deployment: passing builds are released automatically.",
      ],
    },
    "cloud-models": {
      title: "IaaS vs PaaS vs SaaS vs serverless",
      line: "How much of the stack you manage yourself, and how much the cloud manages.",
      analogy: "Pizza: make it at home (IaaS), take-and-bake (PaaS), delivery (SaaS), paying per slice (serverless).",
      compare: [
        "Rent virtual servers; you manage the OS and everything above. Azure VMs, AWS EC2.",
        "Push code; the platform runs it. Vercel, Render, Heroku.",
        "Finished software you just use. Gmail, Google Docs.",
        "Upload functions that run on demand; pay per call. AWS Lambda.",
      ],
    },
    "proxy-load-balancer": {
      title: "Reverse proxy vs load balancer",
      line: "Servers that sit in front of your app and forward traffic to it.",
      analogy: "A receptionist (reverse proxy) and a traffic cop sharing cars across lanes (load balancer).",
      compare: [
        "One front door: HTTPS, compression, routing to the right app. Nginx.",
        "Spreads requests across several copies of your app, skipping broken ones.",
      ],
    },
    cdn: {
      title: "CDN",
      line: "A network of servers around the world that keeps copies of your files close to users.",
      analogy: "Local warehouses for an online shop, so parcels arrive faster.",
    },
    environments: {
      title: "Dev, staging & production",
      line: "Separate copies of your app for building, testing and real users.",
      analogy: "Rehearsal room, dress rehearsal, opening night.",
      compare: [
        "Your laptop. Break things freely.",
        "A copy of production for final checks.",
        "Real users and real data. Change carefully.",
      ],
    },
    "deploy-strategies": {
      title: "Blue-green vs canary vs rolling deploys",
      line: "Ways to release a new version without downtime or big risk.",
      analogy: "Blue-green: build a new bridge, then switch traffic. Canary: let a few cars try it first. Rolling: replace one lane at a time.",
      compare: [
        "Two full copies; switch all traffic at once and switch back if needed.",
        "Send a small share of users to the new version first and watch.",
        "Update servers one by one.",
      ],
    },
    observability: {
      title: "Logs, metrics & traces",
      line: "Three ways to see what your app is doing in production.",
      analogy: "A ship's diary (logs), its dashboard dials (metrics), and the map of one journey (trace).",
      compare: [
        "Written records of events and errors.",
        "Numbers over time: requests per second, error rate, memory.",
        "Follow one request through every service it touched.",
      ],
    },
    iac: {
      title: "Infrastructure as code",
      line: "Describe servers, networks and databases in files, so you can create them again exactly.",
      analogy: "A recipe for the whole kitchen, not just the meal.",
      example: "Terraform, Pulumi, Bicep.",
    },

    // System design
    scaling: {
      title: "Vertical vs horizontal scaling",
      line: "Handle more users with a bigger machine, or with more machines.",
      analogy: "A bigger bus, or more buses.",
      compare: [
        "Add CPU and RAM to one server. Simple, but there is a ceiling.",
        "Add more servers behind a load balancer. Nearly no ceiling; the app must be stateless.",
      ],
    },
    "design-steps": {
      title: "How to approach a design question",
      line: "Clarify requirements, estimate scale, sketch the big boxes, design the data, then deep-dive and discuss trade-offs.",
      analogy: "An architect asks how many people will live in the house before drawing it.",
      example: "Say your assumptions out loud. There is no single right answer.",
    },
    estimation: {
      title: "Back-of-the-envelope estimates",
      line: "Rough maths to size a system: users, requests per second, storage per year.",
      analogy: "Estimating how much rice to cook for a wedding.",
      example: "1 million users × 10 requests a day ≈ 120 requests per second on average.",
    },
    "design-url-shortener": {
      title: "Design: a URL shortener",
      line: "Make short codes for long links and redirect fast. Teaches IDs, hashing, caching and read-heavy design.",
      analogy: "Giving each long address a short PO box number.",
      example: "Key ideas: a unique short code, a key-value store, a cache for popular links, redirect with 301 or 302.",
    },
    "design-chat": {
      title: "Design: a chat app",
      line: "Real-time messages between users. Teaches WebSockets, message storage, delivery status and presence.",
      analogy: "A post office that delivers letters the instant they are posted.",
      example: "Key ideas: WebSocket servers, a message queue, messages stored per conversation, online/offline status.",
    },
    "design-marketplace": {
      title: "Design: a marketplace",
      line: "Buyers, sellers, listings, orders and payments. Teaches transactions, search and roles.",
      analogy: "A weekly fair: stalls, customers, cash boxes and an organiser.",
      example: "Key ideas: SQL for orders and payments, a search index, image storage, stock locked during checkout.",
    },
  },
};

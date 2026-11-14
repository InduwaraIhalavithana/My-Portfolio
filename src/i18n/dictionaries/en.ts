// English strings. This file defines the shape every other language must match.
export const en = {
  meta: {
    description:
      "Portfolio of Induwara Ihalavithana, full-stack and AI/ML engineer from Sri Lanka: projects, research and CV.",
  },
  nav: {
    home: "Home",
    projects: "Projects",
    labs: "Labs",
    skills: "Skills",
    research: "Research",
    about: "About",
    contact: "Contact",
    githubProfile: "GitHub profile",
    toggleTheme: "Toggle dark mode",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    sections: "Sections",
  },
  common: {
    location: "Sri Lanka",
    university: "Uva Wellassa University",
    downloadCv: "Download CV",
  },
  hero: {
    greeting: "Hi, I'm",
    role: "Full-stack & AI/ML engineer",
    tagline:
      "I find problems that affect people's lives and build the software that solves them: full-stack platforms and AI for farming, food sharing and safer medicine, in English, Sinhala and Tamil.",
    seeProjects: "See my projects",
    portraitAlt: "Portrait of Induwara Ihalavithana",
    stats: ["Full-stack platforms", "Languages in every app", "Tests in one project", "User roles designed"],
  },
  projects: {
    eyebrow: "Featured work",
    title: "Platforms I've built end to end",
    intro:
      "Each one has a database, an API, a React frontend, role-based dashboards, tests and CI, and works in English, Sinhala and Tamil.",
    sourceCode: "Source code",
    liveDemo: "Live demo",
    techStack: "Tech stack",
    cover: "cover",
    watchDemo: "Watch demo",
    items: {
      smartagri: {
        tagline: "From crop choice to market sale",
        context: "University group project",
        summary:
          "An agriculture platform that takes a Sri Lankan farmer from choosing a crop to selling the harvest. A machine-learning model recommends the three best crops for a plot from its soil, climate and location, and explains why each one was picked. Land owners then track their farms and cultivation tasks, and sell to traders through a built-in marketplace.",
        highlights: [
          "XGBoost crop recommendation: the top 3 of 41 Sri Lankan crops, each with a plain explanation",
          "Cultivation tracker that builds a task schedule for every crop, with growth, fertiliser and pest guides",
          "Marketplace with price negotiation, simulated checkout, PDF receipts and seller ratings",
          "Land Owner, Trader and Admin roles; one account can hold two roles and switch live",
          "7-day weather forecast and farm advice for all 25 districts",
        ],
        stats: ["User roles", "Languages", "Districts"],
      },
      "sharing-excess": {
        tagline: "Surplus food, shared nearest-first",
        context: "Final-year project",
        summary:
          "A food redistribution platform for Sri Lanka. Donors post surplus food with photos, a quantity and an expiry time; people in the same district see it first and can request all or part of it. The amount they ask for is held until the donor answers, and contact details are shared only after the donor accepts. Approved NGOs publish food drives and volunteer events.",
        highlights: [
          "Nearest first: own district, then bordering districts, with the food that spoils soonest on top",
          "Stock is held under a database row lock, so two people are never promised the same food",
          "Donor, Recipient, NGO and Admin roles, with admin approval for every NGO",
          "Live updates over Server-Sent Events, plus in-app and email alerts by district and food type",
          "Map view, two-way ratings, guided tours and an installable PWA that fits 320 px screens",
        ],
        stats: ["Backend tests", "Frontend tests", "Languages"],
      },
      conferencehub: {
        tagline: "Run a conference end to end",
        context: "Individual project",
        summary:
          "A platform for running a conference from the first announcement to the door. Organisers publish an event with a cover, an agenda, speakers and a venue map. Attendees register without an account, confirm their email with a 6-digit code and receive a QR ticket. When a seat frees up the waitlist fills it automatically, and the check-in desk scans tickets with any phone camera.",
        highlights: [
          "Registration without an account: a 6-digit email code, then a QR ticket with add-to-calendar",
          "Camera check-in desk with a live arrival counter",
          "Waitlist with automatic promotion, and reminder emails",
          "Event editor with live preview, agenda, speakers and an OpenStreetMap venue pin",
          "Admin oversight of every organiser and conference, with analytics and a 14-day trend",
        ],
        stats: ["Roles", "Backend tests", "Languages"],
      },
    },
  },
  labs: {
    eyebrow: "Hands-on labs",
    title: "Labs and demos",
    intro: "Smaller, focused builds where I practise infrastructure and system administration on real machines.",
    sourceCode: "Lab files",
    techStack: "Tech stack",
    cover: "cover",
    watchDemo: "Watch demo",
    previousSlide: "Previous slide",
    nextSlide: "Next slide",
    showSlide: "Show slide",
    stepsTitle: "What the demo shows",
    solvedTitle: "Problems I solved along the way",
    items: {
      "network-automation": {
        tagline: "Manual vs automated network setup",
        summary:
          "A two-VM lab on Ubuntu Server and VirtualBox. I set a server's static IP by hand with Netplan, then had a control node do the same job with one Ansible playbook, without logging in to the server.",
        steps: [
          "Manual: write a Netplan YAML file on the server and apply it",
          "Automated: one Ansible playbook pushes and applies the settings over SSH",
        ],
        solved: [
          "Hyper-V slowing VirtualBox down",
          "Cloned VMs keeping the old network card IDs",
          "Ansible timing out on privilege escalation with sudo-rs",
        ],
        slides: [
          "Why manual setup doesn't scale",
          "Netplan: one computer, one settings file",
          "Ansible: one command, many machines",
          "Which tool, when?",
          "The lab: two computers on one laptop",
          "What to remember",
        ],
      },
    },
  },
  skills: {
    eyebrow: "Toolbox",
    title: "What I work with",
    intro: "Every item here is used in at least one of the projects or labs above.",
    groups: {
      frontend: "Frontend",
      backend: "Backend",
      data: "Data & ML",
      devops: "DevOps & Cloud",
      quality: "Quality",
    },
  },
  research: {
    eyebrow: "Research",
    title: "Research work",
    intro:
      "Where AI meets real-world systems: my current research applies machine learning and blockchain to keep counterfeit medicine out of Sri Lanka's supply chain.",
    viewPoster: "View full poster",
    openPoster: "Open the full poster (PDF)",
    posterAlt: "Research poster",
    problemTitle: "The problem",
    objectivesTitle: "Objectives",
    techTitle: "Key technologies",
    downloadPoster: "Download poster (PDF)",
    posterNote: "Presented earlier, under the project's first title.",
    supervisor: "Supervisor",
    roleTitle: "My role",
    progressTitle: "Progress so far",
    previousSlide: "Previous slide",
    nextSlide: "Next slide",
    showSlide: "Show slide",
    items: {
      "pharma-supply-chain": {
        // The paper's title stays in English everywhere; other languages add a translation under it.
        translatedTitle: "",
        status: "Ongoing",
        venue: "Final-year research project",
        affiliation: "Department of Computer Science and Informatics, Uva Wellassa University",
        question:
          "How can blockchain and artificial intelligence be integrated into a supply chain framework to provide secure drug traceability and effective counterfeit detection in Sri Lanka?",
        problem: [
          "Sri Lanka's drug supply chain (NMRA → SPC → MSD → hospitals and pharmacies) runs on fragmented, paper-based records.",
          "In 2023 about 22,500 substandard immunoglobulin vials reached state hospitals through forged documents.",
          "Records can be altered without detection, and suspicious patterns are only found after harm occurs.",
        ],
        objectives: [
          "Analyse supply chain activities and define requirements for tamper-proof traceability",
          "Develop an AI model to detect suspicious and counterfeit drug transactions",
          "Integrate blockchain and AI for real-time supply chain monitoring",
          "Evaluate transparency, security and counterfeit detection performance",
        ],
        technologies: [
          "Permissioned blockchain, smart contracts",
          "Unique IDs for products, locations, parties",
          "Anomaly detection on transactions",
          "Throughput, latency and scalability benchmarks",
        ],
        role:
          "AI lead: I build, tune and validate the Isolation Forest and Autoencoder models that flag suspicious drug transactions.",
        progress: [
          "Research poster presented",
          "Research proposal submitted and presented (November 2026)",
          "Now: reaching out to NMRA, SPC, MSD, a hospital and a pharmacy",
        ],
        slides: [
          "The problem: medicines that cannot be traced",
          "Literature review and research gap",
          "Research question, aim, objectives and scope",
          "Methodology",
          "Expected outcomes and contribution",
        ],
      },
    },
  },
  about: {
    eyebrow: "About me",
    title: "I see a problem. I build the solution.",
    p1Start:
      "I became a software engineer to help people. I see what is happening in the world and in my own country, people struggling with problems that should not exist, and I keep asking the same question: ",
    p1Strong: "what would actually fix this?",
    p1End: " Then I build it and put it live.",
    p2: "That is how my work started: farmers guessing what to plant, good food thrown away while families go without, counterfeit medicine reaching state hospitals. Each answer goes the whole way, from data model and AI to interface, tests and deployment, in Sinhala and Tamil as well as English so it reaches everyone.",
    motto: "Whatever I can help with, I want to.",
    educationLabel: "Education",
    degree: "BSc (Hons) in Computer Science and Technology",
    studyStatus: "Final year · graduating 2027",
    facts: [
      { label: "Based in", value: "Sri Lanka" },
      { label: "Focus", value: "Full-stack · AI/ML" },
      { label: "Builds with", value: "React · FastAPI · PostgreSQL" },
      { label: "Cares about", value: "Tests, accessibility, local languages" },
    ],
  },
  contact: {
    title: "Let's build something useful",
    text: "Open to full-stack and AI/ML engineering roles, research and collaborations. The quickest way to reach me is below.",
    emailMe: "Email me",
  },
  footer: {
    builtWith: "Built with Next.js, Tailwind CSS and Motion",
  },
};

// Widened so other languages can use any string, not just the English literal.
type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : { [K in keyof T]: Widen<T[K]> };

export type Dictionary = Widen<typeof en>;

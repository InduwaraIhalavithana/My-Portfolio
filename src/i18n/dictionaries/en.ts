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
    previousSlide: "Previous screen",
    nextSlide: "Next screen",
    showSlide: "Show screen",
    items: {
      smartagri: {
        tagline: "From crop choice to market sale",
        context: "University group project",
        summary:
          "An agriculture platform for Sri Lankan farmers and traders: AI crop recommendations with explanations, farm and cultivation tracking, district weather and a marketplace with a full order lifecycle.",
        highlights: [
          "XGBoost crop recommendation with explainable results",
          "Land Owner, Trader and Admin roles, with live role switching",
          "Marketplace: negotiate, confirm, simulated checkout, deliver",
          "7-day weather for all 25 districts",
        ],
        stats: ["User roles", "Languages", "Districts"],
        slides: [
          "Home page",
          "AI crop recommendation with explanation",
          "Land owner dashboard",
          "Marketplace: trader browsing crops",
          "Order tracking",
          "7-day district weather",
        ],
      },
      "sharing-excess": {
        tagline: "Surplus food, shared nearest-first",
        context: "Final-year project",
        summary:
          "A food redistribution platform: donors post surplus food, people nearby see it first and request all or part of it, and NGOs run events. Live updates, map view and an installable PWA.",
        highlights: [
          "Nearest-first matching with stock-tracked partial requests",
          "Donor, Recipient, NGO and Admin roles",
          "Live notifications over Server-Sent Events",
          "Installable PWA, responsive down to 320 px",
        ],
        stats: ["Backend tests", "Frontend tests", "Languages"],
        slides: [
          "Home page",
          "Available food near you",
          "Map of food listings",
          "Donor dashboard",
          "NGO events dashboard",
          "Mobile view",
        ],
      },
      conferencehub: {
        tagline: "Run a conference end to end",
        context: "Individual project",
        summary:
          "A conference management platform: organisers build events with agendas, speakers and a venue map; attendees register with email codes, get QR tickets and are checked in at the door.",
        highlights: [
          "QR tickets and a camera check-in desk with a live counter",
          "Waitlist with automatic promotion and reminder emails",
          "Editor with live preview, agenda, speakers and OpenStreetMap venue",
          "Analytics dashboard with a 14-day trend",
        ],
        stats: ["Roles", "Backend tests", "Languages"],
        slides: [
          "Home page",
          "Conference page with registration",
          "Editor with venue map",
          "QR ticket",
          "Check-in desk with live counter",
          "Analytics dashboard",
        ],
      },
    },
  },
  labs: {
    eyebrow: "Hands-on labs",
    title: "Labs and demos",
    intro: "Smaller, focused builds where I practise infrastructure and system administration on real machines.",
    sourceCode: "Lab files",
    techStack: "Tech stack",
    video: "Demo video",
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
    items: {
      "pharma-supply-chain": {
        // The paper's title stays in English everywhere; other languages add a translation under it.
        translatedTitle: "",
        status: "Ongoing",
        venue: "Poster presentation",
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

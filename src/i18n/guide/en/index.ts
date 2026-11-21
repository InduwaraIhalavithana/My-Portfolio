import { mergeTracks, withToolbox } from "../merge";
import type { GuideText } from "../types";
import { aiText } from "./ai";
import { aiExtras } from "./extras-ai";
import { foundationsExtras } from "./extras-foundations";
import { fullstackExtras } from "./extras-fullstack";
import { foundationsText } from "./foundations";
import { fullstackText } from "./fullstack";
import { proExtras, proText } from "./pro";
import { toolboxEn } from "./toolbox";

const merged = mergeTracks(
  [foundationsText, foundationsExtras],
  [fullstackText, fullstackExtras],
  [aiText, aiExtras],
  [proText, proExtras],
);

export const guideEn: GuideText = {
  meta: {
    title: "Become an Engineer: Free Slides",
    description:
      "Free slide decks on everything you need to know to become a full-stack, AI, ML or deep learning engineer, from the fundamentals to the hard parts. Pictures, diagrams, real scenarios and quizzes.",
  },
  ui: {
    eyebrow: "Free presentation series",
    title: "What you need to know to become a full-stack or AI/ML engineer",
    intro:
      "30 short slide decks that take you from the fundamentals to the hard parts. Every idea comes with a picture, a real scenario and when to use it, and every deck ends with a recap and a quick quiz.",
    stats: { topics: "Slides", tracks: "Tracks", languages: "Languages" },
    tracks: { all: "All", foundations: "Foundations", fullstack: "Full-stack", ai: "AI / ML / DL", pro: "Working as an engineer" },
    trackIntro: {
      foundations: "What every engineer needs, whichever path you choose.",
      fullstack: "From the browser to the database to the server it runs on.",
      ai: "From the maths underneath to training models and building LLM apps.",
      pro: "Principles, teamwork, planning and documentation: how real projects get done.",
    },
    priority: { must: "Must know", should: "Should know", good: "Good to know" },
    priorityHint: "Go in order: each deck builds on the ones before it.",
    analogy: "Think of it like",
    example: "Real scenario",
    useWhen: "Use it when",
    backToPortfolio: "Back to portfolio",
    browseTopics: "See all decks",
    decksTitle: "The decks, in order",
    decksIntro: "Start at 1 and work your way up. Each deck takes about 5 to 10 minutes.",
    slides: "{count} slides",
    start: "Start",
    deck: "Deck",
    slideOf: "Slide {n} of {total}",
    previous: "Previous",
    next: "Next",
    allDecks: "All decks",
    outline: "Slides in this deck",
    meet: "Meet your guide",
    youWillLearn: "In this deck",
    recapTitle: "Recap: remember these",
    quizTitle: "Knowledge check",
    quizIntro: "Four quick questions. Optional, but it helps the ideas stick.",
    quizSkip: "Skip quiz",
    check: "Check answer",
    correct: "Correct!",
    wrong: "Not quite.",
    retry: "Try again",
    nextDeck: "Next deck",
    finished: "Deck complete!",
    finishedIntro: "Nice work. Keep the momentum going with the next deck.",
    keyboardHint: "Tip: use the ← → arrow keys or swipe.",
    toolboxTitle: "Toolbox: what people use today",
    toolboxIntro: "Popular tools for this topic, and when each one is the right pick.",
    bestFor: "Best for",
    pickWhen: "Pick it when",
    howToChoose: "How to choose",
  },
  paths: {
    eyebrow: "Start here",
    title: "Pick your path",
    intro: "Four common roles. Read what each one does, then follow its learning order from left to right.",
    roadmapTitle: "Learning order",
    overlapTitle: "How the roles overlap",
    overlap:
      "They share the same base: Python, Git, data and deploying your work. An AI engineer is close to a full-stack engineer who also knows LLMs. ML and deep learning engineers go deeper into training models. In small companies one person often does all of it.",
    roles: {
      fullstack: {
        name: "Full-stack engineer",
        does: "Builds a whole web app: the screens people use, the API behind them and the database underneath.",
        builds: "Shops, booking systems, dashboards, social apps.",
        key: "React, an API framework, SQL, auth, Docker, CI/CD.",
      },
      ai: {
        name: "AI engineer",
        does: "Builds products on top of existing AI models, such as chatbots, assistants and smart search.",
        builds: "Chat assistants, document Q&A, AI agents that use tools.",
        key: "LLM APIs, prompting, RAG, vector databases, agents, evals.",
      },
      ml: {
        name: "ML engineer",
        does: "Trains, tests and runs machine-learning models on real data, and keeps them working in production.",
        builds: "Recommendation, fraud detection, demand forecasting, crop prediction.",
        key: "scikit-learn, feature engineering, metrics, PyTorch, MLOps.",
      },
      dl: {
        name: "Deep learning engineer",
        does: "Designs and trains neural networks for images, speech and text, often on GPUs.",
        builds: "Image recognition, speech-to-text, custom language models.",
        key: "Neural network maths, CNNs, Transformers, fine-tuning, GPUs.",
      },
    },
    labels: { does: "What they do", builds: "What they build", key: "Key skills", steps: "Learning order" },
  },
  practice: {
    eyebrow: "Practice",
    title: "Build to learn",
    intro: "Reading is step one. You really learn a topic when you build something with it. Pick a project at your level.",
    levels: { beginner: "Beginner", intermediate: "Intermediate", advanced: "Job-ready" },
    projects: {
      foundations: {
        beginner: ["A command-line to-do list in Python", "A number-guessing game with tests"],
        intermediate: ["Solve 50 easy LeetCode problems by topic", "Rebuild five design patterns in your own small examples"],
        advanced: ["A tiny Git clone that stores file snapshots", "A multi-threaded file downloader"],
      },
      fullstack: {
        beginner: ["A personal website with HTML, CSS and a dark mode", "A weather page that calls a free API"],
        intermediate: ["A notes app with login, a REST API and PostgreSQL", "A chat room with WebSockets"],
        advanced: ["A marketplace with roles, payments (test mode), tests and CI/CD", "Deploy it with Docker, HTTPS and a custom domain"],
      },
      ai: {
        beginner: ["Predict house prices with linear regression", "Classify flowers or digits with scikit-learn"],
        intermediate: ["A spam filter with proper precision and recall", "An image classifier with a pretrained CNN"],
        advanced: ["A RAG chatbot over your university notes", "Serve a model behind an API with monitoring"],
      },
    },
    resourcesTitle: "Free resources I recommend",
    resourcesIntro: "All free. Pick one per topic and finish it, rather than starting five.",
    resources: {
      cs50: "Harvard's famous intro to computer science, from zero.",
      "refactoring-guru": "Every design pattern with pictures and code.",
      "roadmap-sh": "Step-by-step maps for every developer role.",
      mdn: "The reference for HTML, CSS and JavaScript.",
      "react-dev": "The official React course, with live examples.",
      "full-stack-open": "A free university course: React, Node, databases, testing.",
      "system-design-primer": "How large systems are built, with interview questions.",
      owasp: "The ten most common web security risks.",
      "google-ml": "A fast, practical intro to machine learning.",
      "kaggle-learn": "Short hands-on lessons with free notebooks and data.",
      "3b1b": "Beautiful videos that show how neural networks learn.",
      d2l: "A free interactive deep learning book with code.",
      karpathy: "Build neural networks and a GPT from scratch, step by step.",
      "hugging-face": "Free courses on Transformers, LLMs and AI agents.",
      "made-with-ml": "How to take ML from a notebook to production.",
    },
    interviewTitle: "The one-minute test",
    interview: [
      "Pick a Must know topic and explain it out loud in one minute, without notes.",
      "Give a real example of where it is used.",
      "Say one trade-off: when would you not use it?",
      "If you get stuck, open the card again. That is how it sticks.",
    ],
  },
  sections: withToolbox(merged.sections, toolboxEn),
  topics: merged.topics,
};

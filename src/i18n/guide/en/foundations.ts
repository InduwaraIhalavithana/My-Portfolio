import type { TrackText } from "../types";

export const foundationsText: TrackText = {
  sections: {
    programming: { title: "Programming basics", intro: "The languages and ideas you will write every day." },
    dsa: { title: "Data structures & algorithms", intro: "How to store data and solve problems fast. Every interview asks about these." },
    "clean-code": { title: "Clean code principles", intro: "Rules that keep code easy to read, change and trust." },
    "patterns-creational": { title: "Design patterns: creational", intro: "Five known recipes for making objects." },
    "patterns-structural": { title: "Design patterns: structural", intro: "Seven known recipes for connecting objects together." },
    "patterns-behavioral": { title: "Design patterns: behavioral", intro: "Eleven known recipes for how objects talk and share work." },
    "computer-basics": { title: "How computers & the internet work", intro: "Networks, processes and memory: what happens under your code." },
    tools: { title: "Everyday tools", intro: "Git, the terminal and the other tools every engineer uses daily." },
    testing: { title: "Testing", intro: "How to prove your code works, and keeps working after changes." },
    security: { title: "Security basics", intro: "The common attacks, and the simple habits that stop most of them." },
  },
  topics: {
    // Programming
    python: {
      title: "Python",
      line: "An easy-to-read language used for backends, data, automation and almost all AI work.",
      analogy: "Plain English instructions: you read the code almost like a sentence.",
      example: "FastAPI backends, pandas data analysis and PyTorch models are all Python.",
    },
    "js-ts": {
      title: "JavaScript & TypeScript",
      line: "JavaScript is the language of the browser. TypeScript is JavaScript with types that catch mistakes before you run it.",
      analogy: "JavaScript is writing a note. TypeScript is the same note with a spell-checker switched on.",
      example: "React frontends and Node.js servers are written in JavaScript or TypeScript.",
    },
    "static-dynamic-typing": {
      title: "Static vs dynamic typing",
      line: "Whether a variable's type (number, text…) is checked before the program runs or only while it runs.",
      analogy: "Static: a teacher checks your answers before the exam ends. Dynamic: you find mistakes when the result comes.",
      compare: [
        "Types are checked before running (Java, TypeScript). Catches bugs early, a little more to write.",
        "Types are checked while running (Python, JavaScript). Faster to write, some bugs appear later.",
      ],
    },
    "compiled-interpreted": {
      title: "Compiled vs interpreted",
      line: "Whether code is translated into machine code all at once before running, or read line by line while it runs.",
      analogy: "Compiled: a whole book translated before you read it. Interpreted: a translator beside you, translating each sentence.",
      compare: [
        "Translated fully first (C, Go, Rust). Usually faster to run.",
        "Run line by line (Python, JavaScript). Quicker to try and change.",
      ],
    },
    oop: {
      title: "Object-oriented programming (OOP)",
      line: "Organising code as objects that hold data and the actions on that data, like a User with a name and a login() method.",
      analogy: "A car is an object: it has data (colour, fuel) and actions (start, brake).",
      compare: [
        "Hide the inside details; others use only what you expose.",
        "Show only what matters; hide the complexity.",
        "A child class reuses a parent class (Dog is an Animal).",
        "One method name, different behaviour per class (each animal speaks differently).",
      ],
    },
    "composition-inheritance": {
      title: "Composition vs inheritance",
      line: "Building a class from smaller parts it has, instead of extending a parent class it is.",
      analogy: "Composition: a car has an engine. Inheritance: a sports car is a car.",
      compare: [
        "Has-a. Flexible: swap parts easily. Usually preferred.",
        "Is-a. Reuses code, but deep family trees get hard to change.",
      ],
    },
    "functional-basics": {
      title: "Functional programming basics",
      line: "Writing small functions that take input and return output without changing anything outside them.",
      analogy: "A juice machine: same fruit in, same juice out, and the kitchen stays clean.",
    },
    "error-handling": {
      title: "Error handling",
      line: "Planning for things going wrong (bad input, no internet) so the app reacts calmly instead of crashing.",
      analogy: "A spare tyre in the car: you hope not to need it, but you plan for it.",
    },

    // DSA
    "big-o": {
      title: "Big-O notation",
      line: "A way to describe how much slower code gets as the data grows.",
      analogy: "Finding a name: in a phone book you split pages in half (fast); in an unsorted pile you check every page (slow).",
      compare: [
        "Constant: same speed for any size (look up a dictionary key).",
        "Logarithmic: halves the work each step (binary search).",
        "Linear: grows with the data (check every item once).",
        "Quadratic: every item against every item (nested loops). Gets slow fast.",
      ],
    },
    arrays: {
      title: "Arrays & lists",
      line: "Items stored in order, each with a numbered position (index) starting at 0.",
      analogy: "Numbered seats on a bus: seat 0, seat 1, seat 2… you go straight to any seat.",
      example: "A list of the last 7 days' temperatures.",
    },
    "hash-maps": {
      title: "Hash maps (dictionaries)",
      line: "Stores key → value pairs and finds any value by its key almost instantly.",
      analogy: "A dictionary book: you go straight to the word, you don't read every page.",
    },
    "stacks-queues": {
      title: "Stacks & queues",
      line: "Two ways to line up items: last-in-first-out, or first-in-first-out.",
      analogy: "Stack: a pile of plates. Queue: the line at a bank counter.",
      compare: [
        "The last item added comes out first. Used for undo and the call stack.",
        "The first item added comes out first. Used for job queues and printing.",
      ],
    },
    "linked-lists": {
      title: "Linked lists",
      line: "Items where each one points to the next, so adding or removing in the middle is cheap.",
      analogy: "A treasure hunt: each clue tells you where the next clue is.",
    },
    trees: {
      title: "Trees & binary search trees",
      line: "Data arranged like a family tree: one root, branches and leaves. A binary search tree keeps smaller values left and larger right.",
      analogy: "Folders on your computer: a main folder, sub-folders, then files.",
      example: "The HTML page structure (DOM) and database indexes are trees.",
    },
    heaps: {
      title: "Heaps & priority queues",
      line: "A structure that always gives you the smallest (or largest) item quickly.",
      analogy: "A hospital emergency room: the most urgent patient is seen first, not the first to arrive.",
    },
    graphs: {
      title: "Graphs",
      line: "Points (nodes) joined by lines (edges), for anything connected to anything.",
      analogy: "A bus route map: towns are nodes, roads are edges.",
      example: "Friend networks, maps and route finding.",
    },
    "bfs-dfs": {
      title: "BFS vs DFS",
      line: "Two ways to visit every node in a tree or graph.",
      analogy: "BFS: ripples spreading in water, ring by ring. DFS: a maze, going as deep as you can before turning back.",
      compare: [
        "Breadth-first: level by level. Finds the shortest path in an unweighted graph.",
        "Depth-first: one branch to the end first. Good for exploring every possibility.",
      ],
    },
    "binary-search": {
      title: "Binary search",
      line: "Find an item in a sorted list by checking the middle and throwing away half each time.",
      analogy: "Guess a number from 1 to 100: \"higher or lower?\" finds it in 7 guesses at most.",
    },
    sorting: {
      title: "Sorting algorithms",
      line: "Ways to put items in order. Knowing their speeds matters more than writing them by hand.",
      analogy: "Sorting exam papers: one by one, or split the pile, sort each half and merge.",
      compare: [
        "Swaps neighbours again and again. Simple but slow: O(n²).",
        "Split in halves, sort, then merge. Always O(n log n).",
        "Pick a pivot, put smaller on one side. Usually the fastest in practice.",
      ],
    },
    recursion: {
      title: "Recursion",
      line: "A function that solves a problem by calling itself on a smaller piece, until a simple stop case.",
      analogy: "Russian dolls: open one, there is a smaller one inside, until the tiny last one.",
    },
    "dynamic-programming": {
      title: "Dynamic programming",
      line: "Solve a big problem by solving small overlapping sub-problems once and remembering the answers.",
      analogy: "Climbing stairs: write down how many ways reach each step, so you never count the same step twice.",
      example: "Shortest paths, the fewest coins for change, spell-check edit distance.",
    },
    "two-pointers": {
      title: "Two pointers & sliding window",
      line: "Walk through a list with two positions at once to avoid nested loops.",
      analogy: "Reading a long train timetable with a ruler window you slide down, instead of re-reading from the top.",
      example: "Find the best 7-day sales streak in one pass.",
    },

    // Clean code
    "readable-code": {
      title: "Readable code",
      line: "Clear names, small functions and one job per function, so others (and future you) understand it quickly.",
      analogy: "Labelled boxes when you move house: you find things without opening every box.",
      example: "calculate_delivery_fee() says what it does; calc2() does not.",
    },
    solid: {
      title: "SOLID principles",
      line: "Five rules for writing classes that are easy to extend and hard to break.",
      analogy: "Building with LEGO: each brick has one shape, and new bricks click on without breaking the old ones.",
      compare: [
        "A class should have one job and one reason to change.",
        "Add new behaviour by adding code, not by editing working code.",
        "A child class must work anywhere the parent class works.",
        "Many small, focused interfaces beat one giant one.",
        "Depend on abstractions (an interface), not on concrete classes.",
      ],
    },
    "dry-kiss-yagni": {
      title: "DRY, KISS & YAGNI",
      line: "Three short reminders that keep code small and simple.",
      analogy: "Packing for a trip: don't pack two of the same thing, keep the bag simple, and don't pack for a trip you are not taking.",
      compare: [
        "Don't Repeat Yourself: write a piece of logic once and reuse it.",
        "Keep It Simple, Stupid: the simplest solution that works usually wins.",
        "You Aren't Gonna Need It: don't build features \"just in case\".",
      ],
    },
    "dependency-injection": {
      title: "Dependency injection",
      line: "Give a function what it needs from outside, instead of it creating those things itself.",
      analogy: "A chef who is handed ingredients, instead of growing the vegetables. Easy to swap in test ingredients.",
      example: "FastAPI's Depends() hands each route a database session.",
    },
    refactoring: {
      title: "Refactoring",
      line: "Improving how code is written without changing what it does.",
      analogy: "Tidying your room: the same things, easier to find.",
      example: "Splitting a 200-line function into five small, named ones.",
    },
    "code-review": {
      title: "Code review",
      line: "A teammate reads your change before it is merged, to catch bugs and share knowledge.",
      analogy: "A friend proofreading your essay before you submit it.",
    },
    "tech-debt": {
      title: "Technical debt",
      line: "Shortcuts taken today that make future changes slower, like a loan with interest.",
      analogy: "Throwing clothes on a chair: quick now, but one day you must spend an hour sorting it.",
    },

    // Creational patterns
    singleton: {
      title: "Singleton",
      line: "Makes sure only one copy of something exists in the whole app.",
      analogy: "A country has one president at a time.",
      example: "One shared database connection pool or settings object.",
    },
    "factory-method": {
      title: "Factory method",
      line: "Ask for \"a notifier\" and let one function decide which exact type to make.",
      analogy: "Ordering \"a drink\" at a counter: the staff decide whether it comes in a cup or a bottle.",
    },
    "abstract-factory": {
      title: "Abstract factory",
      line: "A factory that makes a whole matching family of objects.",
      analogy: "A furniture shop's \"modern\" set: the chair, table and sofa all match.",
      example: "A dark-theme factory gives a dark button, dark menu and dark input together.",
    },
    builder: {
      title: "Builder",
      line: "Build a complicated object step by step, then finish it with build().",
      analogy: "Ordering a custom pizza: size, then cheese, then toppings, then bake.",
    },
    prototype: {
      title: "Prototype",
      line: "Make a new object by copying an existing one, then change what differs.",
      analogy: "Photocopying a filled form, then editing only the name.",
    },

    // Structural patterns
    adapter: {
      title: "Adapter",
      line: "A wrapper that makes two things with different shapes work together.",
      analogy: "A travel plug adapter for a foreign socket.",
      example: "Wrap a payment company's odd API so your code just calls pay().",
    },
    bridge: {
      title: "Bridge",
      line: "Keep \"what it is\" and \"how it works\" in separate classes so both can change on their own.",
      analogy: "A TV remote and the TV: new remotes and new TVs can be mixed freely.",
      example: "Shapes (circle, square) × renderers (screen, PDF) without a class for every pair.",
    },
    composite: {
      title: "Composite",
      line: "Treat a group of things the same way as a single thing.",
      analogy: "A box of chocolates and one chocolate can both be asked \"what is your price?\".",
      example: "Folders and files both have size(); a folder adds up its children.",
    },
    decorator: {
      title: "Decorator",
      line: "Wrap something to add a feature, without changing the original.",
      analogy: "Tea, then add milk, then add sugar: the tea itself is unchanged.",
      example: "Python's @login_required adds a login check to any page.",
    },
    facade: {
      title: "Facade",
      line: "One simple entrance in front of many complicated parts.",
      analogy: "A hotel reception desk: one place to ask, and they talk to housekeeping, kitchen and billing.",
      example: "place_order() quietly calls stock, payment and email.",
    },
    flyweight: {
      title: "Flyweight",
      line: "Share the repeated parts of many objects to save memory.",
      analogy: "A forest in a game: 10,000 trees share one tree picture, each stores only its position.",
    },
    proxy: {
      title: "Proxy",
      line: "A stand-in that controls access to the real object.",
      analogy: "A security guard at the door who checks your ID before you meet the manager.",
      example: "A cache in front of a slow API, or lazy loading of big images.",
    },

    // Behavioral patterns
    observer: {
      title: "Observer",
      line: "Things subscribe to an object and are told automatically when it changes.",
      analogy: "Subscribing to a YouTube channel: you get an alert when a new video is posted.",
      example: "React re-renders the screen when state changes; event listeners in JavaScript.",
    },
    strategy: {
      title: "Strategy",
      line: "Swap the way something is done at runtime, behind the same interface.",
      analogy: "Getting to campus by bus, tuk-tuk or bike: same goal, different method.",
    },
    command: {
      title: "Command",
      line: "Turn an action into an object, so it can be queued, logged or undone.",
      analogy: "A waiter's order slip: written down, queued in the kitchen, can be cancelled.",
      example: "Ctrl+Z undo history in an editor.",
    },
    state: {
      title: "State",
      line: "An object behaves differently depending on which state it is in.",
      analogy: "A traffic light: what it allows depends on whether it is red, yellow or green.",
      example: "An order: pending → paid → shipped, each allowing different actions.",
    },
    "template-method": {
      title: "Template method",
      line: "A fixed recipe where some steps are left for each subclass to fill in.",
      analogy: "Making a hot drink: boil water → brew (tea or coffee) → pour. Only the brewing step changes.",
    },
    "chain-of-responsibility": {
      title: "Chain of responsibility",
      line: "Pass a request along a line of handlers until one deals with it.",
      analogy: "A complaint goes to the staff, then the supervisor, then the manager.",
      example: "Web middleware: auth check → logging → rate limit → your route.",
    },
    iterator: {
      title: "Iterator",
      line: "Go through a collection one item at a time, without knowing how it is stored inside.",
      analogy: "A TV remote's \"next channel\" button: you don't need to know how channels are stored.",
      example: "Python's for item in collection.",
    },
    mediator: {
      title: "Mediator",
      line: "Objects talk to one central coordinator instead of directly to each other.",
      analogy: "Air traffic control: planes talk to the tower, not to every other plane.",
      example: "A chat server passing messages between users.",
    },
    memento: {
      title: "Memento",
      line: "Save a snapshot of an object's state so you can restore it later.",
      analogy: "A save point in a video game.",
      example: "Autosaved drafts and \"restore previous version\".",
    },
    visitor: {
      title: "Visitor",
      line: "Add a new operation to many different object types without editing those types.",
      analogy: "A tax officer visiting shops, homes and factories, applying different rules to each.",
      example: "Exporting different shapes to PDF or calculating tax on mixed items.",
    },
    interpreter: {
      title: "Interpreter",
      line: "Define the grammar of a tiny language and a way to run its sentences.",
      analogy: "A calculator reading \"2 + 3 × 4\" and working out the answer.",
      example: "Search filters like price > 100 AND district = \"Kandy\".",
    },

    // Computer basics
    "client-server": {
      title: "Client & server",
      line: "The client (browser or app) asks; the server (a computer somewhere) answers.",
      analogy: "A customer (client) orders at a restaurant; the kitchen (server) prepares the food.",
    },
    http: {
      title: "HTTP & HTTPS",
      line: "The language browsers and servers use to send requests and responses. HTTPS is the encrypted version.",
      analogy: "HTTP is a postcard anyone can read. HTTPS is a sealed envelope.",
    },
    dns: {
      title: "DNS",
      line: "Turns a website name like google.com into the computer address (IP) behind it.",
      analogy: "Your phone's contact list: you tap a name, it dials the number.",
    },
    "tcp-udp": {
      title: "TCP vs UDP",
      line: "Two ways to send data over a network: reliable and ordered, or fast with no guarantees.",
      analogy: "TCP: registered post with a receipt. UDP: shouting across a room.",
      compare: [
        "Checks every piece arrives, in order. Used for websites, email, files.",
        "Sends and forgets. Faster. Used for video calls, live games, streaming.",
      ],
    },
    "ip-ports": {
      title: "IP addresses & ports",
      line: "An IP address finds the computer; a port number finds the program on it.",
      analogy: "The IP is the apartment building's address; the port is the flat number.",
      example: "localhost:5432 is PostgreSQL on your own machine; port 443 is HTTPS.",
    },
    "process-thread": {
      title: "Process vs thread",
      line: "A process is a running program with its own memory. Threads are workers inside it that share that memory.",
      analogy: "A process is a restaurant; threads are the cooks in its one shared kitchen.",
      compare: [
        "Separate memory. Safe from each other, heavier to start.",
        "Shared memory. Light and fast, but must take care not to clash.",
      ],
    },
    "concurrency-parallelism": {
      title: "Concurrency vs parallelism",
      line: "Concurrency is juggling many tasks; parallelism is doing many tasks at the exact same moment.",
      analogy: "Concurrency: one cook switching between three pots. Parallelism: three cooks, one pot each.",
      compare: [
        "Many tasks in progress, taking turns. Great for waiting on networks.",
        "Many tasks running at the same time on several CPU cores. Great for heavy maths.",
      ],
    },
    "race-deadlock": {
      title: "Race conditions & deadlocks",
      line: "Two classic bugs when tasks share things at the same time.",
      analogy: "Race: two people booking the last seat at once. Deadlock: two cars on a narrow bridge, each waiting for the other.",
      compare: [
        "The result depends on who gets there first. Fix with locks or transactions.",
        "Each task waits for something the other holds, forever. Fix by locking in a fixed order.",
      ],
    },
    "stack-heap": {
      title: "Stack vs heap memory",
      line: "Two areas of memory: a fast, tidy one for function calls and a big, flexible one for objects.",
      analogy: "Stack: a neat pile of plates you add to and take from the top. Heap: a big store room where things go anywhere.",
      compare: [
        "Small and very fast; cleaned up automatically when a function ends.",
        "Large and flexible; cleaned by a garbage collector or by you.",
      ],
    },
    "cpu-gpu": {
      title: "CPU vs GPU",
      line: "A CPU does a few complex tasks very fast; a GPU does thousands of simple maths tasks at once.",
      analogy: "CPU: a few professors. GPU: a hall of thousands of students each doing one sum.",
      compare: [
        "Few powerful cores. Runs your OS, web server and normal code.",
        "Thousands of small cores. Why deep learning trains on GPUs.",
      ],
    },

    // Tools
    git: {
      title: "Git",
      line: "Saves the history of your code, so you can go back, work on branches and team up safely.",
      analogy: "Save points in a game, plus parallel worlds (branches) you can merge later.",
    },
    "merge-rebase": {
      title: "Merge vs rebase",
      line: "Two ways to bring changes from one branch into another.",
      analogy: "Merge: two rivers joining, both paths visible. Rebase: re-telling your story as if you started from today.",
      compare: [
        "Keeps the full history, with a merge commit. Safe and simple.",
        "Rewrites your commits on top, for a straight, clean line. Never rebase shared branches.",
      ],
    },
    branching: {
      title: "Git Flow vs trunk-based",
      line: "Two team habits for using branches.",
      analogy: "Git Flow: separate rooms for each job. Trunk-based: everyone in one room, making small changes often.",
      compare: [
        "Long-lived develop, feature and release branches. Fits planned releases.",
        "Short branches merged to main every day or two. Fits fast CI/CD teams.",
      ],
    },
    "linux-bash": {
      title: "Linux & the terminal",
      line: "Most servers run Linux, and you control them by typing commands in a terminal.",
      analogy: "Talking to the computer directly instead of pointing at pictures.",
    },
    "package-managers": {
      title: "Package managers",
      line: "Tools that download the libraries your project needs, at exact versions, with one command.",
      analogy: "An app store for code, with a shopping list (lockfile) so everyone gets the same versions.",
      example: "npm for JavaScript, pip or uv for Python.",
    },
    "env-vars": {
      title: "Environment variables",
      line: "Settings like passwords and database links kept outside the code, different on each machine.",
      analogy: "A house key you keep in your pocket, not taped to the front door.",
    },
    debugging: {
      title: "Debugging",
      line: "Finding why code misbehaves: reproduce the bug, narrow it down, find the cause, fix it, check it.",
      analogy: "A doctor's method: symptoms, tests, diagnosis, treatment, follow-up.",
      example: "Read the error message, add a print or breakpoint, test one idea at a time.",
    },
    "ai-assistants": {
      title: "AI coding assistants",
      line: "Tools that write, explain and review code with you. Employers now expect you to use them well.",
      analogy: "A fast junior helper: great speed, but you check their work.",
      example: "Ask it to explain an error, write tests, or draft a function. Then read and test every line.",
    },

    // Testing
    "test-levels": {
      title: "Unit vs integration vs end-to-end",
      line: "Three sizes of test, from one function to the whole app.",
      analogy: "Testing a car: one bolt, then the engine with the gearbox, then a real drive.",
      compare: [
        "One function alone. Many of these; they run in milliseconds.",
        "Several parts together, like your API with a real database.",
        "The whole app clicked through like a real user. Few, slow, very convincing.",
      ],
    },
    "writing-tests": {
      title: "Writing a test",
      line: "Code that runs your code with a known input and checks the output is what you expect.",
      analogy: "Checking a recipe by tasting the dish every time you change it.",
    },
    tdd: {
      title: "Test-driven development (TDD)",
      line: "Write a failing test first, then the code to make it pass, then clean up.",
      analogy: "Setting the exam questions before you study, so you know when you are done.",
    },
    mocks: {
      title: "Mocks & stubs",
      line: "Fake versions of slow or external things (APIs, email) used inside tests.",
      analogy: "A practice dummy in boxing: you train without hurting a real person.",
      compare: [
        "Returns a fixed answer, e.g. \"payment succeeded\".",
        "Also records how it was called, so you can check \"email sent once\".",
      ],
    },
    coverage: {
      title: "Test coverage",
      line: "The percentage of your code that runs during tests. Useful as a hint, not a goal.",
      analogy: "How many rooms a cleaner visited; it doesn't say how well they cleaned.",
    },
    "lint-format": {
      title: "Linters & formatters",
      line: "Tools that spot likely mistakes and keep code style the same everywhere, automatically.",
      analogy: "A spell-checker and an auto-tidy button for code.",
      example: "ESLint and Prettier for JavaScript, Ruff for Python.",
    },

    // Security
    "authn-authz": {
      title: "Authentication vs authorization",
      line: "Authentication checks who you are. Authorization checks what you are allowed to do.",
      analogy: "At an office: the guard checks your ID (who), your key card opens only some doors (what).",
      compare: [
        "Who are you? Login, password, OTP.",
        "What may you do? Admin-only pages, editing only your own posts.",
      ],
    },
    "hashing-encryption": {
      title: "Hashing vs encryption",
      line: "Hashing is one-way scrambling. Encryption is two-way: it can be unlocked with a key.",
      analogy: "Hashing: blending fruit, you can't un-blend it. Encryption: a locked box with a key.",
      compare: [
        "One-way. Used for passwords: you compare hashes, never decrypt.",
        "Two-way with a key. Used for data you need to read again, like messages.",
      ],
    },
    owasp: {
      title: "OWASP Top 10",
      line: "A well-known list of the ten most common security risks in web apps.",
      analogy: "A list of the ten most common ways thieves break into houses.",
      example: "Broken access control, injection, weak authentication, bad configuration.",
    },
    "sql-injection": {
      title: "SQL injection",
      line: "An attacker types SQL into a form, and unsafe code runs it on your database.",
      analogy: "A cheque where someone adds extra zeros because you left blank space.",
    },
    xss: {
      title: "Cross-site scripting (XSS)",
      line: "An attacker gets their JavaScript to run on your page, in other users' browsers.",
      analogy: "Someone slips a fake notice onto the official notice board.",
      example: "Fix: escape user text before showing it. React does this for you by default.",
    },
    csrf: {
      title: "CSRF",
      line: "A bad site tricks your browser into sending a request to a site where you are logged in.",
      analogy: "Someone gets you to sign a paper without reading it.",
      example: "Fix: CSRF tokens and SameSite cookies.",
    },
    secrets: {
      title: "Secrets management",
      line: "Keep passwords and API keys out of code and Git, and give each place only the keys it needs.",
      analogy: "Never write your ATM PIN on the card.",
      example: "Use .env files (git-ignored) locally and the host's secret store in production.",
    },
    "https-tls": {
      title: "HTTPS & TLS certificates",
      line: "TLS encrypts traffic and proves the site is really who it says; a certificate is that proof.",
      analogy: "A sealed envelope with an official stamp showing who sent it.",
      example: "Let's Encrypt gives free certificates.",
    },
    "least-privilege": {
      title: "Least privilege",
      line: "Give every user, key and service only the permissions it truly needs.",
      analogy: "A cleaner gets keys to the corridors, not to the safe.",
    },
  },
};

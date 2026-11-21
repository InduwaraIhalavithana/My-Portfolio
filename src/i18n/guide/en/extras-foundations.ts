import type { TrackExtras } from "../types";

export const foundationsExtras: TrackExtras = {
  sections: {
    programming: {
      character: { name: "The Builder", says: "Every app you love started as a few lines of code. Let's learn the tools I build with." },
      recap: [
        "Python for backends, data and AI; JavaScript/TypeScript for the browser.",
        "Types catch mistakes: static before running, dynamic while running.",
        "OOP bundles data with actions; prefer composition over deep inheritance.",
        "Plan for errors so the app reacts calmly instead of crashing.",
      ],
      quiz: [
        { q: "Which language runs natively in every web browser?", options: ["Python", "JavaScript", "Java", "C"], why: "Browsers run JavaScript. TypeScript is turned into JavaScript before it reaches the browser." },
        { q: "\"A sports car is a car\" describes…", options: ["Composition", "Encapsulation", "Inheritance", "Recursion"], why: "An \"is-a\" relationship is inheritance. \"Has-a\" (a car has an engine) is composition." },
        { q: "What is the main benefit of static typing?", options: ["Type mistakes are caught before the program runs", "The code always runs faster", "You never need tests", "It removes all bugs"], why: "Static typing checks types early, so many mistakes are found while you write the code." },
        { q: "A user types \"abc\" where a number was expected. Good code should…", options: ["Crash so the developer notices", "Silently use 0", "Restart the server", "Catch the error and ask for a valid number"], why: "Error handling lets the app react calmly with a helpful message." },
      ],
    },
    dsa: {
      character: { name: "The Puzzle Master", says: "Every problem has a shape. Pick the right box to store your data and the right trick to search it." },
      recap: [
        "Arrays for order, hash maps for instant lookup, stacks/queues for taking turns.",
        "Big-O tells you how code slows down as data grows.",
        "Binary search halves the work each step, but needs sorted data.",
        "Trees and graphs model hierarchies and networks; DP remembers answers.",
      ],
      quiz: [
        { q: "You need to look up a product's stock by its name, instantly. Use a…", options: ["Linked list", "Queue", "Hash map", "Sorted array"], why: "A hash map finds a value by its key in about O(1) time." },
        { q: "Which Big-O is the fastest as data grows?", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], why: "O(1) means the time stays the same no matter how much data there is." },
        { q: "The browser's Back button works like a…", options: ["Queue", "Hash map", "Graph", "Stack"], why: "The last page you visited is the first one you go back to: last in, first out." },
        { q: "Binary search only works when the list is…", options: ["Short", "Sorted", "Made of numbers", "Stored in a tree"], why: "It throws away half the list each step, which only works if the list is sorted." },
      ],
    },
    "clean-code": {
      character: { name: "The Tidy Craftsman", says: "Code is read far more often than it is written. Keep it clean and future-you will thank you." },
      recap: [
        "Clear names and small functions beat clever tricks.",
        "DRY, KISS, YAGNI: don't repeat, keep it simple, don't build for maybe.",
        "SOLID keeps classes easy to extend without breaking them.",
        "Refactor in small steps; review each other's code.",
      ],
      quiz: [
        { q: "Which function name is the most readable?", options: ["calculate_delivery_fee()", "calc2()", "doStuff()", "f()"], why: "A good name says exactly what the function does." },
        { q: "Building an export-to-Excel feature \"just in case\" breaks which rule?", options: ["DRY", "SOLID", "KISS", "YAGNI"], why: "You Aren't Gonna Need It: don't build features nobody asked for yet." },
        { q: "The \"S\" in SOLID says a class should…", options: ["Be as small as one line", "Have one job and one reason to change", "Never use inheritance", "Be static"], why: "Single responsibility: one class, one job." },
        { q: "Refactoring means…", options: ["Adding new features", "Deleting tests", "Improving how code is written without changing what it does", "Rewriting in a new language"], why: "Behaviour stays the same; only the structure gets cleaner." },
      ],
    },
    "patterns-creational": {
      character: { name: "The Factory Boss", says: "How you create objects matters. Here are five proven ways to make them." },
      recap: [
        "Singleton: exactly one shared instance.",
        "Factory: one place decides which type to create.",
        "Builder: build complex objects step by step.",
        "Abstract factory makes matching families; prototype copies an existing object.",
      ],
      quiz: [
        { q: "Your app should have exactly one settings object. Use…", options: ["Builder", "Prototype", "Adapter", "Singleton"], why: "Singleton guarantees one shared instance." },
        { q: "A pizza is made with size().cheese().olives().build(). That's the…", options: ["Factory", "Builder", "Prototype", "Observer"], why: "Builder assembles a complex object step by step." },
        { q: "createNotifier(\"sms\") returns the right notifier class. That's a…", options: ["Factory method", "Singleton", "Decorator", "Command"], why: "A factory decides which concrete type to create." },
        { q: "A \"dark theme\" kit gives a matching button, menu and input. That's…", options: ["Prototype", "Singleton", "Abstract factory", "Bridge"], why: "Abstract factory creates whole families of matching objects." },
      ],
    },
    "patterns-structural": {
      character: { name: "The Connector", says: "I fit pieces together: wrap them, plug them in, hide the mess behind a clean front." },
      recap: [
        "Adapter makes mismatched interfaces fit.",
        "Decorator adds features by wrapping.",
        "Facade hides complexity behind one simple entrance.",
        "Proxy guards access; composite treats groups like single items.",
      ],
      quiz: [
        { q: "A travel plug converter is the real-life version of…", options: ["Facade", "Adapter", "Proxy", "Bridge"], why: "Adapter converts one interface into another that your code expects." },
        { q: "Python's @login_required is an example of…", options: ["Singleton", "Composite", "Flyweight", "Decorator"], why: "It wraps a function to add behaviour without changing the function." },
        { q: "place_order() quietly calls stock, payment and email. That's a…", options: ["Visitor", "Adapter", "Facade", "Memento"], why: "A facade is one simple front for many complex parts." },
        { q: "A cache in front of a slow API acts as a…", options: ["Proxy", "Builder", "Observer", "Iterator"], why: "A proxy stands in front of the real object and controls access to it." },
      ],
    },
    "patterns-behavioral": {
      character: { name: "The Director", says: "Objects are actors. I decide who talks to whom, and who does what when something happens." },
      recap: [
        "Observer: subscribe and get notified.",
        "Strategy: swap the method, keep the goal.",
        "Command: actions as objects you can queue or undo.",
        "State, chain of responsibility and mediator organise who handles what.",
      ],
      quiz: [
        { q: "YouTube subscriptions work like the…", options: ["Observer pattern", "Singleton pattern", "Builder pattern", "Proxy pattern"], why: "Subscribers are notified automatically when something changes." },
        { q: "Ctrl+Z undo history is built with…", options: ["Strategy", "Iterator", "Command", "Flyweight"], why: "Each action is stored as a command object that can be undone." },
        { q: "Paying by card, cash or wallet behind one pay() call is…", options: ["Memento", "Visitor", "Mediator", "Strategy"], why: "Strategy swaps how something is done at runtime." },
        { q: "Web middleware (auth → logging → route) is a…", options: ["State", "Chain of responsibility", "Template method", "Composite"], why: "The request passes along a chain until handled." },
      ],
    },
    "computer-basics": {
      character: { name: "The Messenger", says: "I carry every click across the world and back in milliseconds. Here's how the trip works." },
      recap: [
        "Clients ask, servers answer, over HTTP(S).",
        "DNS turns names into IP addresses; ports find the program.",
        "TCP is reliable; UDP is fast.",
        "Processes, threads and cores decide how work runs at the same time.",
      ],
      quiz: [
        { q: "What turns \"google.com\" into an IP address?", options: ["HTTP", "TCP", "DNS", "HTML"], why: "DNS is the internet's phone book." },
        { q: "Live video calls usually prefer…", options: ["TCP, because nothing may be lost", "UDP, because speed matters more than every packet", "FTP", "SMTP"], why: "A dropped frame is better than a delayed call." },
        { q: "Threads inside one process share…", options: ["The same memory", "Nothing at all", "Separate computers", "Separate keyboards"], why: "That makes threads light, but they must avoid clashing." },
        { q: "Two users book the last seat at the same moment. This bug is a…", options: ["Deadlock", "Memory leak", "Syntax error", "Race condition"], why: "The result depends on who gets there first; locks or transactions fix it." },
      ],
    },
    tools: {
      character: { name: "The Toolsmith", says: "Great engineers aren't just coders. They master their tools so the boring parts disappear." },
      recap: [
        "Git saves your history and lets teams work in parallel.",
        "The terminal controls servers; package managers install libraries.",
        "Secrets live in environment variables, never in code.",
        "Debug like a doctor; use AI assistants, then check their work.",
      ],
      quiz: [
        { q: "Where should a database password live?", options: ["In the source code", "In a README", "In a Git commit message", "In an environment variable or secret store"], why: "Secrets stay out of code and Git, so they can't leak with them." },
        { q: "Which command saves a snapshot of staged changes?", options: ["git commit", "git push", "git clone", "git status"], why: "commit records the snapshot locally; push sends it to the remote." },
        { q: "What should you never rebase?", options: ["Your own local branch", "A brand-new branch", "A branch other people are already using", "A branch with one commit"], why: "Rebasing rewrites history, which breaks other people's copies." },
        { q: "The first step of debugging is to…", options: ["Rewrite everything", "Reproduce the bug", "Delete the tests", "Ask for a new laptop"], why: "If you can make it happen again, you can narrow down the cause." },
      ],
    },
    testing: {
      character: { name: "The Inspector", says: "Trust, but verify. Tests prove your code works today, and still works tomorrow." },
      recap: [
        "Many fast unit tests, fewer integration tests, a few end-to-end tests.",
        "Mocks and stubs replace slow or external things.",
        "TDD: red, green, refactor.",
        "Coverage is a hint, not a goal; linters catch mistakes early.",
      ],
      quiz: [
        { q: "A test that checks one function alone is a…", options: ["End-to-end test", "Unit test", "Load test", "Smoke test"], why: "Unit tests are small, fast and isolated." },
        { q: "In TDD, what do you write first?", options: ["A failing test", "The full feature", "The documentation", "The deployment script"], why: "Red (failing test) → green (make it pass) → refactor." },
        { q: "100% test coverage guarantees…", options: ["No bugs", "Fast code", "Good design", "Only that every line ran during tests"], why: "Coverage shows what ran, not whether it was checked well." },
        { q: "You test a checkout without charging a real card. You use a…", options: ["Linter", "Formatter", "Mock or stub", "Profiler"], why: "A fake payment service stands in for the real one." },
      ],
    },
    security: {
      character: { name: "The Guardian", says: "Attackers only need one open door. Let's lock the common ones, which stops most attacks." },
      recap: [
        "Authentication = who you are; authorization = what you may do.",
        "Hash passwords; encrypt data you need to read back.",
        "Never trust user input: injection, XSS and CSRF all start there.",
        "Keep secrets out of code; give everyone the least access they need.",
      ],
      quiz: [
        { q: "Passwords should be stored as…", options: ["Plain text", "Encrypted text you can decrypt", "A slow, salted hash", "Base64"], why: "A hash can't be reversed; you compare hashes at login." },
        { q: "Checking that a user may delete only their own posts is…", options: ["Authentication", "Hashing", "Encryption", "Authorization"], why: "Authorization decides what a known user is allowed to do." },
        { q: "The main defence against SQL injection is…", options: ["Longer passwords", "Parameterised queries", "HTTPS", "A faster database"], why: "Sending values separately means they're never run as SQL." },
        { q: "Giving a reporting service read-only access follows…", options: ["Least privilege", "DRY", "CORS", "Rate limiting"], why: "Everything gets only the permissions it truly needs." },
      ],
    },
  },
  topics: {
    // Programming
    python: { use: ["Backends with FastAPI or Django", "Data analysis, automation and every kind of AI"] },
    "js-ts": { use: ["Anything that runs in the browser", "Use TypeScript for bigger projects and teams"] },
    "static-dynamic-typing": {
      example: "TypeScript warns that you passed text where a price number was expected, before you even run the app.",
      use: ["Static: large codebases and teams", "Dynamic: quick scripts and experiments"],
    },
    "compiled-interpreted": {
      example: "A Go server starts as one fast binary; a Python script runs straight away without a build step.",
      use: ["Compiled: speed-critical services", "Interpreted: fast experiments and scripting"],
    },
    "error-handling": {
      example: "The weather API is down: the page shows \"Weather unavailable, try again\" instead of a blank white screen.",
      use: ["Anything that reads user input, files or the network", "Show a helpful message and log the details"],
    },
    oop: {
      example: "A shop app has Product, Cart and Order classes, each holding its own data and actions like cart.add(product).",
      use: ["Modelling real things with data and behaviour", "Big codebases that need clear structure"],
    },
    "composition-inheritance": {
      example: "Instead of FlyingSwimmingDuck extends ..., a Duck has a Flyer part and a Swimmer part you can swap.",
      use: ["Composition: by default, for flexibility", "Inheritance: only for true \"is-a\" relationships"],
    },
    "functional-basics": {
      example: "Turn a list of prices into prices with tax using map, with no loop and no changed variables.",
      use: ["Transforming lists of data", "Code that must be easy to test and predict"],
    },

    // DSA
    arrays: {
      use: ["Ordered lists you loop through", "Fast access by position"],
      table: { head: ["Index", "0", "1", "2", "3"], rows: [["Temp °C", "29", "31", "30", "28"]] },
    },
    "big-o": {
      example: "Checking 1,000,000 users one by one is O(n); looking one up by ID in a hash map is O(1).",
      use: ["Comparing two solutions before coding", "Every coding interview"],
    },
    "hash-maps": {
      example: "Counting how many times each word appears in a book, or caching user sessions by ID.",
      use: ["Fast lookup by a key", "Counting and grouping things"],
      table: { head: ["Key", "Value"], rows: [["\"rice\"", "40"], ["\"dhal\"", "12"], ["\"sugar\"", "25"]] },
    },
    "stacks-queues": {
      example: "Undo in a text editor is a stack; orders waiting in a print shop are a queue.",
      use: ["Stack: undo, back button, nested calls", "Queue: tasks done in arrival order"],
    },
    "linked-lists": {
      example: "A music playlist where you can insert a song between two others without shifting the rest.",
      use: ["Many inserts and deletes in the middle", "Building stacks, queues and LRU caches"],
      labels: ["Song A", "Song B", "Song C", "end"],
    },
    recursion: {
      example: "Counting all files inside a folder that has folders inside it.",
      use: ["Nested data: folders, trees, menus", "Problems that split into smaller copies of themselves"],
      labels: ["factorial(3)", "3 × factorial(2)", "2 × factorial(1)", "1 → stop"],
    },
    "binary-search": {
      example: "Finding a word in a dictionary by opening near the middle, then going left or right.",
      use: ["Searching sorted data", "Finding the first value that passes a test"],
    },
    sorting: {
      example: "Showing products from cheapest to most expensive.",
      use: ["Use the language's built-in sort", "Know the speeds for interviews"],
      table: { head: ["Algorithm", "Typical speed", "Good for"], rows: [["Bubble", "O(n²)", "Learning only"], ["Merge", "O(n log n)", "Steady, predictable"], ["Quick", "O(n log n)", "Fastest in practice"]] },
    },
    "two-pointers": {
      use: ["Pairs or ranges in a sorted list", "Best sum over a window of days"],
      labels: ["Start window", "Slide one step", "Add new, drop old", "Keep the best"],
    },
    trees: {
      use: ["Hierarchies: folders, menus, the DOM", "Fast sorted search (BST)"],
      labels: ["Home", "Docs", "Photos", "CV.pdf", "Notes.txt", "Trip", "Family"],
    },
    heaps: {
      example: "A task scheduler that always runs the most urgent job next.",
      use: ["Always taking the smallest or largest next", "Top-10 lists and scheduling"],
      labels: ["Critical", "Urgent", "Normal", "Can wait"],
    },
    graphs: {
      use: ["Maps and routes", "Friend networks and recommendations"],
      labels: ["Colombo", "Kandy", "Nuwara Eliya", "Badulla"],
    },
    "bfs-dfs": {
      example: "BFS finds the fewest train changes between two stations; DFS solves a maze or a Sudoku.",
      use: ["BFS: shortest path, nearest friends", "DFS: puzzles, exploring every option"],
    },
    "dynamic-programming": {
      use: ["Counting ways, cheapest paths", "Problems that repeat the same sub-problems"],
      table: { head: ["Step", "1", "2", "3", "4", "5"], rows: [["Ways to climb", "1", "2", "3", "5", "8"]] },
    },

    // Clean code
    "readable-code": {
      use: ["Always: someone will read it later", "Especially in teams and code reviews"],
      table: { head: ["Hard to read", "Easy to read"], rows: [["d = 7", "days_until_due = 7"], ["calc2()", "calculate_delivery_fee()"], ["200-line function", "five small named functions"]] },
    },
    "dry-kiss-yagni": {
      example: "The same tax formula copied into five files? Put it in one function. Building a plugin system for one user? Skip it.",
      use: ["Every time you're about to copy-paste", "Before adding a \"just in case\" feature"],
    },
    refactoring: {
      use: ["Before adding a feature to messy code", "Right after the tests pass"],
      labels: ["Tests pass", "Small change", "Tests still pass", "Repeat"],
    },
    "code-review": {
      example: "A teammate spots that your new endpoint forgets to check the user's role before deleting.",
      use: ["Every change going into the main branch", "Learning a codebase faster"],
      labels: ["Open a pull request", "Teammate reviews", "Fix comments", "Merge"],
    },
    solid: {
      example: "An Invoice class only calculates totals; separate classes print it and email it.",
      use: ["Designing classes in bigger apps", "Interview questions on design"],
    },
    "dependency-injection": {
      use: ["Swapping real services for fakes in tests", "Sharing one database session per request"],
    },
    "tech-debt": {
      example: "Skipping tests to meet a deadline, then losing a week later to bugs nobody can trace.",
      use: ["Note shortcuts as TODOs with a reason", "Pay it down a little every sprint"],
      labels: ["Quick shortcut", "Ship faster", "Code gets messy", "Every change gets slower"],
    },

    // Creational
    singleton: {
      use: ["One shared settings object or connection pool", "Avoid for things that need fresh state in tests"],
    },
    "factory-method": {
      example: "notify(user) picks email, SMS or push based on the user's settings.",
      use: ["The exact type is chosen at runtime", "Hiding complicated creation code"],
      labels: ["Ask for a notifier", "Factory checks the type", "Email or SMS object"],
    },
    builder: {
      example: "Building a complicated search query: .where(...).sort(...).limit(...).",
      use: ["Objects with many optional parts", "Readable step-by-step setup"],
      labels: ["Size", "Cheese", "Toppings", "build()"],
    },
    "abstract-factory": {
      use: ["Themes or platforms with matching parts", "Swapping a whole family at once"],
      table: { head: ["Factory", "Button", "Menu", "Input"], rows: [["Light", "Light button", "Light menu", "Light input"], ["Dark", "Dark button", "Dark menu", "Dark input"]] },
    },
    prototype: {
      example: "\"Duplicate event\" in a calendar copies everything, then you change only the date.",
      use: ["Creating many similar objects", "When building from scratch is expensive"],
    },

    // Structural
    adapter: {
      use: ["Plugging in a third-party library", "Old code meets new interfaces"],
      labels: ["Your code: pay()", "Adapter", "Payment API: makeChargeV2()"],
    },
    decorator: {
      use: ["Adding logging, caching or auth checks", "Mixing features without many subclasses"],
      labels: ["Sugar", "Milk", "Tea"],
    },
    facade: {
      use: ["Hiding a complicated subsystem", "Giving a team one simple entry point"],
      labels: ["place_order()", "Stock", "Payment", "Email"],
    },
    proxy: {
      use: ["Caching slow results", "Checking permissions or loading lazily"],
      labels: ["Client", "Proxy checks / caches", "Real object"],
    },
    composite: {
      use: ["Tree-shaped data: folders, menus, org charts", "Treating groups and items the same way"],
      labels: ["Project/", "src/", "docs/", "app.py", "utils.py", "guide.md", "logo.png"],
    },
    bridge: {
      use: ["Two things that both vary independently", "Avoiding a class explosion"],
      table: { head: ["", "Screen", "PDF"], rows: [["Circle", "draw on screen", "draw in PDF"], ["Square", "draw on screen", "draw in PDF"]] },
    },
    flyweight: {
      example: "A text editor shares one object per letter style instead of one per character typed.",
      use: ["Huge numbers of similar objects", "Saving memory in games and editors"],
    },

    // Behavioral
    observer: {
      use: ["Notifications and live updates", "UI that reacts to data changes"],
      labels: ["Video posted", "Channel notifies", "All subscribers get an alert"],
    },
    strategy: {
      example: "A delivery app calculates fees by distance, by weight or with a flat rate, chosen per city.",
      use: ["Several ways to do the same job", "Replacing long if/else chains"],
      table: { head: ["Strategy", "How it pays"], rows: [["Card", "pay_by_card()"], ["Cash", "pay_by_cash()"], ["Wallet", "pay_by_wallet()"]] },
    },
    iterator: {
      use: ["Looping over any collection", "Reading huge data one piece at a time"],
    },
    command: {
      use: ["Undo/redo", "Job queues and scheduled tasks"],
      labels: ["Click Bold", "Command object", "History list", "Ctrl+Z undoes it"],
    },
    state: {
      use: ["Objects with clear stages", "Replacing big if/else on status"],
      labels: ["Pending", "Paid", "Shipped", "Delivered"],
    },
    "template-method": {
      example: "Every report follows load data → build table → export, but each report builds its table differently.",
      use: ["Same steps, one step differs", "Frameworks that call your code"],
      labels: ["Boil water", "Brew (tea or coffee)", "Pour"],
    },
    "chain-of-responsibility": {
      use: ["Middleware and request pipelines", "Approval flows with levels"],
      labels: ["Auth check", "Logging", "Rate limit", "Your route"],
    },
    mediator: {
      use: ["Many parts that would otherwise all talk to each other", "Chat rooms and form wizards"],
      labels: ["Plane A", "Control tower", "Plane B"],
    },
    memento: {
      use: ["Undo, drafts and save points", "Restoring state after an error"],
    },
    visitor: {
      use: ["Many operations over a fixed set of types", "Compilers and exporters"],
      table: { head: ["", "Shop", "Home", "Factory"], rows: [["Tax visit", "Sales tax", "Property tax", "Industry tax"]] },
    },
    interpreter: {
      use: ["Small rule languages and filters", "Calculators and query parsers"],
    },

    // Computer basics
    "client-server": {
      example: "Your phone (client) asks Instagram's servers for new posts; they send them back.",
      use: ["Almost every app and website", "The base for understanding APIs"],
      labels: ["Client asks", "Server works", "Server answers"],
    },
    "ip-ports": {
      use: ["Setting up servers and Docker", "Debugging \"connection refused\""],
      table: { head: ["Port", "Usually"], rows: [["80", "HTTP"], ["443", "HTTPS"], ["5432", "PostgreSQL"], ["3000", "Dev server"]] },
    },
    dns: {
      example: "You buy a new domain and it takes a while to work everywhere: DNS records are spreading.",
      use: ["Connecting a domain to a server", "Debugging \"site not found\""],
      labels: ["Type google.com", "DNS looks it up", "Gets the IP address", "Browser connects"],
    },
    http: {
      example: "Opening a product page sends GET /products/42; the server answers 200 OK with the details.",
      use: ["Every web page and API call", "Always HTTPS for anything private"],
      labels: ["Request: GET /orders", "Server", "Response: 200 OK + data"],
    },
    "tcp-udp": {
      example: "Downloading a PDF uses TCP; a live cricket stream or online game uses UDP.",
      use: ["TCP: when every byte matters", "UDP: when speed matters more"],
    },
    "cpu-gpu": {
      example: "Your laptop CPU runs the browser; a GPU trains an image model in hours instead of weeks.",
      use: ["CPU: general apps and servers", "GPU: deep learning and graphics"],
    },
    "process-thread": {
      example: "Each Chrome tab is its own process, so one crashing tab doesn't kill the others.",
      use: ["Processes: isolation and safety", "Threads: sharing work inside one app"],
    },
    "concurrency-parallelism": {
      example: "A web server handling 1,000 waiting requests uses concurrency; training a model on 8 cores uses parallelism.",
      use: ["Concurrency: lots of waiting (network, disk)", "Parallelism: heavy maths"],
    },
    "race-deadlock": {
      example: "Two people buy the last concert ticket at once and both get a confirmation email.",
      use: ["Watch for them whenever data is shared", "Use transactions and locks"],
    },
    "stack-heap": {
      example: "A deep recursion with no stop case fills the stack: \"stack overflow\".",
      use: ["Understanding memory errors", "Interview questions on memory"],
    },

    // Tools
    "linux-bash": {
      example: "SSH into your cloud server and run tail -f to watch the app's logs live.",
      use: ["Managing servers and deployments", "Automating boring tasks with scripts"],
    },
    git: {
      example: "You break the login page; git log and git revert bring back the working version in a minute.",
      use: ["Every project, even solo ones", "Team work through branches and pull requests"],
      labels: ["Edit files", "git add", "git commit", "git push"],
    },
    "package-managers": { use: ["Installing libraries", "Keeping everyone on the same versions"] },
    "env-vars": {
      example: "The same code uses a test database on your laptop and the real one in production, just by changing .env.",
      use: ["Passwords, keys and URLs", "Settings that differ per machine"],
    },
    debugging: {
      use: ["Every bug, every day", "Read the full error message first"],
      labels: ["Reproduce", "Narrow down", "Find the cause", "Fix", "Verify"],
    },
    "ai-assistants": {
      use: ["Explaining errors and unfamiliar code", "Drafting tests and boilerplate"],
      labels: ["Ask clearly", "AI drafts", "You read and test", "Commit"],
    },
    "merge-rebase": {
      example: "Before opening a pull request, you rebase your branch on the latest main to tidy your commits.",
      use: ["Merge: shared branches", "Rebase: your own local branch only"],
    },
    branching: {
      example: "A bank app with monthly releases may use Git Flow; a startup deploying 20 times a day uses trunk-based.",
      use: ["Git Flow: scheduled releases", "Trunk-based: continuous deployment"],
    },

    // Testing
    "writing-tests": {
      example: "A test proves the discount code gives 10% off, and keeps proving it after every change.",
      use: ["Every important rule in your code", "Before fixing a bug: first write a test that fails"],
      labels: ["Arrange: set up input", "Act: run the code", "Assert: check the result"],
    },
    "test-levels": {
      example: "Unit: the tax function. Integration: the order API with a real database. End-to-end: a robot clicks through checkout.",
      use: ["Many unit tests, fewer integration tests, a few end-to-end tests"],
      labels: ["End-to-end: few", "Integration: some", "Unit: many"],
    },
    "lint-format": {
      example: "ESLint warns that a variable is never used before your teammate ever sees it.",
      use: ["Every project, run automatically", "In CI so nothing messy gets merged"],
    },
    mocks: {
      example: "Testing \"order placed\" without really emailing a customer or charging a card.",
      use: ["Payments, emails, external APIs", "Slow or random things like time"],
    },
    tdd: {
      example: "Write \"a negative quantity is rejected\" as a test, watch it fail, then add the check.",
      use: ["Clear rules and bug fixes", "Code where mistakes are costly"],
      labels: ["Red: failing test", "Green: make it pass", "Refactor: clean up"],
    },
    coverage: {
      example: "Coverage shows your error-handling branch never ran, so you add a test for it.",
      use: ["Finding untested code", "Not as a target to game"],
    },

    // Security
    "authn-authz": {
      example: "You log in (authentication), but only admins see the Delete User button (authorization).",
      use: ["Every app with accounts", "Check authorization on the server, not only in the UI"],
    },
    "hashing-encryption": {
      example: "Your password is hashed in the database; your WhatsApp messages are encrypted in transit.",
      use: ["Hashing: passwords", "Encryption: data you must read back"],
    },
    "https-tls": {
      use: ["Every website, always", "Any login, payment or personal data"],
      labels: ["Browser says hello", "Server shows certificate", "Keys agreed", "Encrypted traffic"],
    },
    secrets: { use: ["API keys, passwords, tokens", "Rotate a key at once if it leaks"] },
    "least-privilege": {
      example: "A reporting dashboard connects with a read-only database user, so a bug can never delete data.",
      use: ["Database users and API keys", "Team access to cloud accounts"],
    },
    owasp: {
      use: ["A checklist before launching", "Security interview questions"],
      table: { head: ["Risk", "Example"], rows: [["Broken access control", "Seeing other users' orders"], ["Injection", "SQL typed into a form"], ["Weak authentication", "No limit on password guesses"], ["Misconfiguration", "Debug mode on in production"]] },
    },
    "sql-injection": {
      example: "Typing ' OR 1=1 -- into a login form logs an attacker in as the first user.",
      use: ["Any query that includes user input", "Use parameters or an ORM, always"],
      labels: ["Attacker types SQL", "Unsafe code glues it in", "Database runs it"],
    },
    xss: {
      use: ["Showing anything users wrote", "Comments, profiles, reviews"],
      labels: ["Attacker posts a script", "Page shows it", "Victim's browser runs it"],
    },
    csrf: {
      use: ["Cookie-based login sessions", "Forms that change data"],
      labels: ["You're logged in to your bank", "Bad site sends a hidden form", "Browser adds your cookie"],
    },
  },
};

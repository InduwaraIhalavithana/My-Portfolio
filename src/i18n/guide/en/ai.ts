import type { TrackText } from "../types";

export const aiText: TrackText = {
  sections: {
    math: { title: "The maths you actually need", intro: "Just enough maths to understand what models do. No proofs." },
    data: { title: "Working with data", intro: "Good data beats a clever model. This is most of the real work." },
    "classic-ml": { title: "Classic machine learning", intro: "The core models that still solve most real business problems." },
    evaluation: { title: "Evaluating models", intro: "How to know if a model is actually good, and not just lucky." },
    "deep-learning": { title: "Deep learning", intro: "Neural networks: how they learn, and the main kinds." },
    llm: { title: "LLMs & generative AI", intro: "Building with large language models. The core of the AI engineer role." },
    mlops: { title: "MLOps: models in production", intro: "Getting a model out of a notebook and keeping it working." },
    "responsible-ai": { title: "Responsible AI", intro: "Building AI that is fair, private, explainable and safe." },
  },
  topics: {
    // Math
    "vectors-matrices": {
      title: "Vectors & matrices",
      line: "A vector is a list of numbers; a matrix is a table of numbers. Models are mostly matrix maths.",
      analogy: "A vector is one row in a spreadsheet; a matrix is the whole sheet.",
      example: "A house as a vector: [rooms, size, age]. A dot product weighs and adds those numbers in one step.",
    },
    "derivatives-gradients": {
      title: "Derivatives & gradients",
      line: "A derivative says how fast something changes. A gradient points in the direction of steepest change.",
      analogy: "Standing on a hill in fog: feel which way the ground slopes down most, and step that way.",
      example: "Training a model means following the gradient downhill to a smaller error.",
    },
    probability: {
      title: "Probability",
      line: "How likely something is, from 0 (never) to 1 (certain).",
      analogy: "A weather forecast: \"70% chance of rain\".",
      example: "A classifier outputs probabilities: 0.92 spam, 0.08 not spam.",
    },
    statistics: {
      title: "Basic statistics",
      line: "Numbers that summarise data: the centre, and how spread out it is.",
      analogy: "A class's average mark and whether everyone scored close to it or all over the place.",
      compare: [
        "The average: add all values and divide by the count.",
        "The middle value when sorted. Not pulled around by extreme values.",
        "How spread out the values are. Standard deviation is its square root, in the same units.",
      ],
    },
    distributions: {
      title: "Distributions",
      line: "The shape of how values are spread, like the bell curve (normal distribution).",
      analogy: "Heights of students: most near the middle, few very short or very tall.",
    },
    bayes: {
      title: "Bayes' theorem",
      line: "Update how much you believe something when new evidence arrives.",
      analogy: "You hear thunder, so your guess of \"rain today\" goes up.",
      example: "The idea behind Naive Bayes spam filters.",
    },

    // Data
    "data-stack": {
      title: "NumPy, pandas & matplotlib",
      line: "The Python tools for numbers, tables and charts. Almost every ML project starts here.",
      analogy: "NumPy is the calculator, pandas is the spreadsheet, matplotlib is the chart maker.",
    },
    eda: {
      title: "Exploratory data analysis (EDA)",
      line: "Looking at data with summaries and charts before modelling, to understand it and spot problems.",
      analogy: "Walking around a house before buying it.",
      example: "Check value ranges, missing values, odd outliers and how features relate to the target.",
    },
    "data-cleaning": {
      title: "Data cleaning",
      line: "Fixing missing values, duplicates, typos and wrong units before training.",
      analogy: "Washing and cutting vegetables before cooking.",
    },
    "encoding-scaling": {
      title: "Encoding & scaling",
      line: "Turning text categories into numbers, and putting numbers on similar scales.",
      analogy: "Converting prices from different currencies into one currency before comparing.",
      compare: [
        "One 0/1 column per category (district_Kandy, district_Galle…). Safe for most models.",
        "Each category becomes one number. Only safe for tree models or ordered categories.",
        "Standardise (mean 0, std 1) or normalise (0 to 1) so big numbers don't dominate.",
      ],
    },
    "feature-engineering": {
      title: "Feature engineering",
      line: "Creating new, more useful inputs from raw data.",
      analogy: "A doctor uses BMI, worked out from height and weight, because it says more than either alone.",
      example: "From a date, create \"day of week\" and \"is holiday\".",
    },
    "train-val-test": {
      title: "Train, validation & test sets",
      line: "Split the data: learn from one part, tune on another, and judge on a part the model never saw.",
      analogy: "Study from the textbook, practise on past papers, then sit the real exam.",
      compare: [
        "The model learns from this. Often about 70%.",
        "Used to compare settings and choose the best model.",
        "Used once at the end for an honest score. Never tune on it.",
      ],
    },
    "data-leakage": {
      title: "Data leakage",
      line: "When information the model wouldn't have in real life sneaks into training, so scores look falsely good.",
      analogy: "Seeing the exam answers before the exam: a great score that means nothing.",
      example: "Scaling with statistics from all the data before splitting, or a feature recorded after the outcome.",
    },
    "class-imbalance": {
      title: "Class imbalance",
      line: "When one class is rare, like 1 fraud in 1,000 payments, so a model can score well by ignoring it.",
      analogy: "A guard who says \"no thief\" every day is 99.9% accurate and completely useless.",
      example: "Fixes: class weights, resampling, and judging with precision and recall instead of accuracy.",
    },

    // Classic ML
    "ml-types": {
      title: "Supervised vs unsupervised vs reinforcement learning",
      line: "Learning from labelled answers, finding patterns without answers, or learning by trial and reward.",
      analogy: "A teacher with an answer key, a student sorting photos into piles alone, and a puppy learning tricks for treats.",
      compare: [
        "Labelled examples in, predictions out. Spam detection, price prediction.",
        "No labels; find groups or structure. Customer segments, anomaly detection.",
        "An agent acts, gets rewards and improves. Games, robots.",
      ],
    },
    "classification-regression": {
      title: "Classification vs regression",
      line: "Predict a category, or predict a number.",
      analogy: "\"Will it rain: yes or no?\" versus \"How many millimetres of rain?\"",
      compare: [
        "Output is a class: spam or not, which crop.",
        "Output is a number: price, yield, temperature.",
      ],
    },
    "linear-regression": {
      title: "Linear regression",
      line: "Fit the straight line that best predicts a number from inputs.",
      analogy: "Drawing the best line through dots on a graph of house size against price.",
    },
    "logistic-regression": {
      title: "Logistic regression",
      line: "Despite the name, a classifier: it predicts the probability of yes or no.",
      analogy: "A dial from 0 to 1 that says how sure it is the email is spam.",
    },
    "decision-trees": {
      title: "Decision trees",
      line: "A flowchart of yes/no questions that ends in a prediction.",
      analogy: "The \"20 questions\" game.",
      example: "Is rainfall > 1500 mm? → Is the soil clay? → Paddy.",
    },
    "random-forest": {
      title: "Random Forest",
      line: "Many decision trees, each trained on random parts of the data, voting together.",
      analogy: "Asking a hundred people instead of one: the crowd is wiser than any single guess.",
    },
    "bagging-boosting": {
      title: "Bagging vs boosting",
      line: "Two ways to combine many weak models into one strong one.",
      analogy: "Bagging: many students solve the paper separately and vote. Boosting: each student fixes the previous student's mistakes.",
      compare: [
        "Models trained in parallel on random samples, then averaged. Random Forest. Reduces variance.",
        "Models trained one after another, each focusing on earlier errors. XGBoost. Often more accurate.",
      ],
    },
    xgboost: {
      title: "XGBoost & gradient boosting",
      line: "A fast, powerful boosting library. Often the best choice for tables of data.",
      analogy: "A team of specialists, each one fixing what the last one got wrong.",
      example: "Gradient-boosted trees (XGBoost, LightGBM) are hard to beat on tabular competitions.",
    },
    ensembles: {
      title: "Ensembles: hard vs soft voting",
      line: "Combine the predictions of different models to get a better final answer.",
      analogy: "A panel of judges: count their votes, or average how confident each one is.",
      compare: [
        "Each model votes for a class; the majority wins.",
        "Average the predicted probabilities; the highest wins. Usually better when models give good probabilities.",
      ],
    },
    knn: {
      title: "k-nearest neighbours (kNN)",
      line: "Predict by looking at the k most similar examples you already have.",
      analogy: "\"You are like the people you live closest to.\"",
    },
    svm: {
      title: "Support vector machines (SVM)",
      line: "Find the boundary that separates two classes with the widest possible gap.",
      analogy: "Drawing the widest road you can between two villages.",
    },
    "naive-bayes": {
      title: "Naive Bayes",
      line: "A fast, simple classifier that uses word probabilities, assuming each word counts independently.",
      analogy: "Spotting spam by how often words like \"winner\" and \"free\" appear.",
    },
    kmeans: {
      title: "k-means clustering",
      line: "Group data into k clusters, each around a centre point.",
      analogy: "Placing k ice-cream stalls in a park so everyone walks the shortest distance.",
      example: "Customer segments, or grouping districts by climate.",
    },
    pca: {
      title: "PCA (dimensionality reduction)",
      line: "Squash many features into a few new ones that keep most of the information.",
      analogy: "A 2D shadow of a 3D object that still shows its shape.",
      example: "Plot 50-feature data in 2D, or speed up training.",
    },
    "anomaly-detection": {
      title: "Anomaly detection",
      line: "Find the rare data points that don't look like the rest.",
      analogy: "Spotting the one person wearing a raincoat on a sunny beach.",
      example: "Isolation Forest isolates odd points with few splits; an autoencoder flags what it can't rebuild well.",
    },
    "generative-discriminative": {
      title: "Discriminative vs generative models",
      line: "Learn the boundary between classes, or learn what the data looks like so you can create more.",
      analogy: "An art critic who tells styles apart, versus an artist who can paint in each style.",
      compare: [
        "Predicts a label from data. Logistic regression, most classifiers.",
        "Learns the data itself and can make new samples. Naive Bayes, GPT, image generators.",
      ],
    },

    // Evaluation
    overfitting: {
      title: "Underfitting vs overfitting",
      line: "A model too simple to learn the pattern, or one that memorises the training data and fails on new data.",
      analogy: "Underfitting: didn't study. Overfitting: memorised past papers word for word and fails new questions.",
      compare: [
        "Bad on training and test data. Use a stronger model or better features.",
        "Good on both. The goal.",
        "Great on training data, poor on test data. Use more data, simpler models or regularisation.",
      ],
    },
    "bias-variance": {
      title: "The bias-variance trade-off",
      line: "Errors come from wrong assumptions (bias) or from being too sensitive to the training data (variance).",
      analogy: "Darts: always hitting the same wrong spot (bias), or hitting all over the board (variance).",
      compare: ["Too simple. Underfits.", "Too complex. Overfits."],
    },
    baseline: {
      title: "Start with a baseline",
      line: "Before a fancy model, measure a dumb one, like \"always predict the most common class\".",
      analogy: "Know the bus time before celebrating that your new route is \"fast\".",
    },
    "cross-validation": {
      title: "Cross-validation",
      line: "Split the data into k parts, train k times, each time testing on a different part, then average.",
      analogy: "Taking five practice exams instead of one, for a fairer average score.",
    },
    "confusion-matrix": {
      title: "Confusion matrix",
      line: "A 2×2 table of what the model predicted against what was really true.",
      analogy: "A fire alarm: real fires caught, false alarms, fires missed, and quiet days correctly quiet.",
      compare: [
        "Predicted yes, really yes. A caught fraud.",
        "Predicted yes, really no. A false alarm.",
        "Predicted no, really yes. A missed fraud: often the costliest.",
        "Predicted no, really no.",
      ],
    },
    "precision-recall": {
      title: "Accuracy, precision, recall & F1",
      line: "Different ways to score a classifier. With rare classes, accuracy alone misleads.",
      analogy: "A fishing net: precision is how much of the catch is fish; recall is how many of the fish you caught.",
      compare: [
        "Share of all predictions that were right.",
        "Of everything flagged, how much was really positive. Matters when false alarms are costly.",
        "Of all real positives, how many were caught. Matters when misses are costly.",
        "One number that balances precision and recall.",
      ],
    },
    "roc-pr-auc": {
      title: "ROC-AUC vs PR-AUC",
      line: "Scores that judge a model across every decision threshold, not just one.",
      analogy: "Testing a smoke alarm at every sensitivity setting, not only the default.",
      compare: [
        "How well the model ranks positives above negatives. Can look too kind when positives are rare.",
        "Focuses on the positive class. Better for rare events like fraud or anomalies.",
      ],
    },
    "regression-metrics": {
      title: "MAE vs RMSE vs R²",
      line: "Ways to score a model that predicts numbers.",
      analogy: "How far off your guesses of people's ages were, on average.",
      compare: [
        "Mean absolute error: the average miss, in real units.",
        "Root mean squared error: punishes big misses more.",
        "How much of the variation the model explains: 1 is perfect, 0 is no better than the average.",
      ],
    },
    regularization: {
      title: "Regularisation",
      line: "A penalty for complexity that stops a model from overfitting.",
      analogy: "A word limit on an essay: it forces you to keep only what matters.",
      compare: [
        "Pushes some weights to exactly zero, so it also picks features.",
        "Shrinks all weights a little. The most common default.",
      ],
    },
    "hyperparameter-tuning": {
      title: "Hyperparameter tuning",
      line: "Finding the best settings that you choose before training, like tree depth or learning rate.",
      analogy: "Adjusting the oven temperature and timer until the cake comes out right.",
      compare: [
        "Try every combination. Thorough, slow.",
        "Try random combinations. Often just as good, much faster.",
        "Learn from earlier tries to pick the next one. Optuna.",
      ],
    },

    // Deep learning
    "neural-network": {
      title: "Neural networks",
      line: "Layers of simple units (neurons) that each weigh their inputs; stacked together, they learn complex patterns.",
      analogy: "A factory line: each station adds a small step, and the final product is a prediction.",
    },
    activation: {
      title: "Activation functions",
      line: "Small functions inside each neuron that let a network learn curves, not just straight lines.",
      analogy: "A dimmer switch that decides how strongly a neuron passes its signal on.",
      compare: [
        "max(0, x). Fast, simple and the default for hidden layers.",
        "Squashes to 0–1. Used for yes/no outputs.",
        "Turns scores into probabilities that add up to 1. Used for picking one of many classes.",
      ],
    },
    loss: {
      title: "Loss functions",
      line: "A single number for how wrong the model is. Training tries to make it smaller.",
      analogy: "The distance between your dart and the bullseye.",
      compare: [
        "Mean squared error. For predicting numbers.",
        "For classification: punishes confident wrong answers heavily.",
      ],
    },
    "gradient-descent": {
      title: "Gradient descent",
      line: "Improve the model step by step, moving its weights in the direction that lowers the loss most.",
      analogy: "Walking down a foggy hill one careful step at a time, always going the steepest way down.",
    },
    backprop: {
      title: "Backpropagation",
      line: "The way a network works out how much each weight caused the error, from the output back to the input.",
      analogy: "After a failed group project, tracing back how much each member's part caused the problem.",
    },
    "batch-epoch-lr": {
      title: "Batch, epoch & learning rate",
      line: "The three training settings you will touch most often.",
      analogy: "Studying a textbook: pages per sitting (batch), full read-throughs (epochs), and how much you change your notes each time (learning rate).",
      compare: [
        "How many examples the model sees before each update.",
        "One full pass through the whole training set.",
        "How big each update step is. Too big jumps around; too small learns slowly.",
      ],
    },
    optimizers: {
      title: "Optimisers: SGD vs Adam",
      line: "The rules for how weights are updated from the gradients.",
      analogy: "Two hikers: one takes steady steps, one adjusts stride for each kind of ground.",
      compare: [
        "Stochastic gradient descent: simple steps, sometimes with momentum. Can generalise very well.",
        "Adapts the step size for each weight. Fast to converge; the usual default.",
      ],
    },
    "dropout-batchnorm": {
      title: "Dropout, batch norm & early stopping",
      line: "Tricks that make deep networks train faster and overfit less.",
      analogy: "Practising football with random players benched, so the team never relies on one star.",
      compare: [
        "Randomly switch off some neurons during training.",
        "Keep each layer's inputs at a steady scale, so training is smoother.",
        "Stop training when validation loss stops improving.",
      ],
    },
    "vanishing-gradients": {
      title: "Vanishing & exploding gradients",
      line: "In deep networks the learning signal can shrink to nothing or blow up as it travels back through layers.",
      analogy: "A message whispered down a long line of people fades out, or turns into shouting.",
      example: "Helped by ReLU, good weight initialisation, normalisation and skip connections (ResNet).",
    },
    "pytorch-loop": {
      title: "The training loop",
      line: "Predict, measure the loss, work out the gradients, update the weights. Repeat.",
      analogy: "Practise, get marked, see what went wrong, adjust, practise again.",
    },
    cnn: {
      title: "Convolutional neural networks (CNN)",
      line: "Networks that slide small filters over images to find edges, then shapes, then objects.",
      analogy: "Scanning a photo with a magnifying glass, square by square.",
      example: "Image classification, medical scans, plant disease detection from leaf photos.",
    },
    "rnn-lstm": {
      title: "RNNs & LSTMs",
      line: "Networks for sequences that carry a memory from one step to the next.",
      analogy: "Reading a sentence word by word, remembering what came before.",
      example: "Older text and time-series models. Mostly replaced by Transformers for text.",
    },
    "attention-transformer": {
      title: "Attention & Transformers",
      line: "Attention lets every word look at every other word to decide what matters. Transformers are built on it.",
      analogy: "In \"the bank of the river\", you look at \"river\" to know which \"bank\" is meant.",
      example: "GPT, Claude, Gemini and BERT are all Transformers.",
    },
    architectures: {
      title: "CNN vs RNN vs Transformer",
      line: "Which architecture fits which kind of data.",
      analogy: "Different tools for different jobs: a magnifier, a tape recorder and a group discussion.",
      compare: [
        "Images and spatial patterns.",
        "Sequences processed in order. Hard to parallelise.",
        "Text, and now images and audio too. Processes everything in parallel. Today's default.",
      ],
    },
    "encoder-decoder": {
      title: "Encoder vs decoder models",
      line: "Transformers that understand text, generate text, or turn one text into another.",
      analogy: "A reader, a writer, and a translator who does both.",
      compare: [
        "Reads the whole text at once. Classification, search embeddings.",
        "Writes text one token at a time. Chatbots and LLMs.",
        "Reads an input, then writes an output. Translation, summarising.",
      ],
    },
    autoencoders: {
      title: "Autoencoders",
      line: "A network that squeezes data into a small code and rebuilds it. Poor rebuilds mean unusual data.",
      analogy: "Summarising a story in one line and retelling it: odd stories are retold badly.",
      example: "Anomaly detection, denoising images, compression.",
    },
    "transfer-learning": {
      title: "Transfer learning",
      line: "Start from a model already trained on huge data, and adapt it to your smaller task.",
      analogy: "A trained chef learning a new cuisine is faster than someone who has never cooked.",
      example: "Fine-tune a pretrained image model on 500 leaf photos instead of training from zero.",
    },
    "pytorch-tensorflow": {
      title: "PyTorch vs TensorFlow",
      line: "The two big deep learning libraries.",
      analogy: "Two brands of the same power tool. Learn one well and the other is easy.",
      compare: [
        "Pythonic and flexible. Dominant in research and most new job ads.",
        "Mature tools for production and mobile. Keras makes it simple.",
      ],
    },
    "gpu-training": {
      title: "Training on GPUs",
      line: "GPUs do the huge matrix maths of deep learning in parallel, often tens of times faster than CPUs.",
      analogy: "A thousand people each adding one column, instead of one person adding them all.",
      example: "Free GPUs: Google Colab and Kaggle notebooks.",
    },

    // LLM
    tokens: {
      title: "Tokens",
      line: "LLMs read and write text in small chunks called tokens, often parts of words.",
      analogy: "LEGO bricks of language: words are built from a few bricks.",
      example: "Pricing and limits are counted in tokens. Sinhala and Tamil usually need more tokens than English.",
    },
    embeddings: {
      title: "Embeddings",
      line: "A list of numbers that captures the meaning of text, so similar meanings sit close together.",
      analogy: "GPS coordinates for meaning: \"dog\" and \"puppy\" are neighbours, \"tax\" is far away.",
      example: "The basis of semantic search, recommendations and RAG.",
    },
    "context-window": {
      title: "Context window",
      line: "The maximum amount of text a model can look at in one go: your prompt, documents and its answer.",
      analogy: "The size of a desk: only so many papers fit on it at once.",
    },
    temperature: {
      title: "Temperature & sampling",
      line: "Settings that control how random or predictable the model's answers are.",
      analogy: "Low temperature: a careful accountant. High temperature: a creative poet.",
      example: "Low for facts and code; higher for brainstorming.",
    },
    prompting: {
      title: "Prompting techniques",
      line: "How you ask changes what you get: clear instructions, context, examples and the format you want.",
      analogy: "Briefing a new colleague: the clearer the brief, the better the work.",
      compare: [
        "Just the instruction, no examples.",
        "Show a few input → output examples first.",
        "Ask the model to reason through the problem before answering.",
      ],
    },
    "structured-output": {
      title: "Structured output",
      line: "Ask the model to answer in a fixed format like JSON, so your code can use the answer reliably.",
      analogy: "Giving someone a form to fill in, instead of asking for a free essay.",
    },
    "llm-api": {
      title: "Calling an LLM API",
      line: "Send messages to a model provider's API and get the reply back, just like any other API.",
      analogy: "Ordering from an expert service: you send the request, they send the answer.",
      example: "Keep the API key on the server, never in frontend code.",
    },
    rag: {
      title: "RAG (retrieval-augmented generation)",
      line: "Search your own documents for relevant parts, then give them to the model with the question.",
      analogy: "An open-book exam: the model looks up the right pages before answering.",
      example: "A chatbot that answers from your university handbook and quotes the page.",
    },
    "vector-db": {
      title: "Vector databases",
      line: "Databases built to store embeddings and find the most similar ones fast.",
      analogy: "A library sorted by meaning, not by title.",
      example: "pgvector for PostgreSQL, Pinecone, Qdrant, Chroma.",
    },
    "prompt-rag-finetune": {
      title: "Prompting vs RAG vs fine-tuning",
      line: "Three ways to make a model fit your task. Try them in this order.",
      analogy: "Give instructions, give the reference book, or send the person on a training course.",
      compare: [
        "Cheapest and fastest. Always start here.",
        "When the model needs your own or up-to-date knowledge.",
        "When you need a consistent style, format or skill that prompting can't give.",
      ],
    },
    "fine-tuning": {
      title: "Fine-tuning: full vs LoRA vs QLoRA",
      line: "Training an existing model further on your own examples, with different amounts of memory.",
      analogy: "Retraining a whole employee, versus giving them a small set of notes to clip on.",
      compare: [
        "Update every weight. Best control, needs the most GPU memory.",
        "Train small add-on matrices and freeze the rest. A fraction of the cost.",
        "LoRA on a compressed 4-bit model. Fine-tune big models on a single GPU.",
      ],
    },
    agents: {
      title: "Agents & tool calling",
      line: "An LLM that decides which tools to use (search, code, APIs), uses them and loops until the task is done.",
      analogy: "An assistant who can browse, use a calculator and send emails, not just talk.",
      example: "Book a meeting: check the calendar tool, find a slot, send the invite.",
    },
    mcp: {
      title: "MCP (Model Context Protocol)",
      line: "An open standard for connecting AI assistants to tools and data sources.",
      analogy: "USB-C for AI: one plug that fits many devices.",
      example: "One MCP server for your database lets any MCP-aware assistant query it.",
    },
    evals: {
      title: "Evals",
      line: "Tests for AI features: a set of inputs with expected qualities, scored automatically or by people.",
      analogy: "Unit tests for answers, plus a marking scheme.",
      example: "100 real questions checked for correctness, tone and format before every prompt change.",
    },
    hallucination: {
      title: "Hallucinations",
      line: "When a model states something false with confidence.",
      analogy: "A student who doesn't know the answer but writes a confident paragraph anyway.",
      example: "Reduce with RAG, citing sources, saying \"I don't know\" is allowed, and checking facts.",
    },
    guardrails: {
      title: "Guardrails",
      line: "Checks around a model that block unsafe input, leaks or bad output.",
      analogy: "Barriers along a mountain road.",
      example: "Watch for prompt injection: text hidden in a document trying to give the model new orders.",
    },
    "open-closed": {
      title: "Closed vs open-weight models",
      line: "Use a model through a company's API, or download the model weights and run it yourself.",
      analogy: "Taking a taxi versus buying your own car.",
      compare: [
        "Usually the most capable and easy to start. You pay per token and send data to the provider.",
        "Run on your own hardware. More control and privacy; you manage the servers.",
      ],
    },
    "cost-latency": {
      title: "Cost & latency",
      line: "Every token costs money and time. Real AI products balance quality, speed and price.",
      analogy: "Choosing between express and standard delivery.",
      example: "Use a smaller model for easy steps, cache repeated prompts, and stream answers so users see text sooner.",
    },
    quantization: {
      title: "Quantisation",
      line: "Store model weights with fewer bits so models are smaller and faster, with a small quality loss.",
      analogy: "Saving a photo as a smaller JPEG: nearly the same picture, much less space.",
    },
    "kv-cache": {
      title: "KV cache",
      line: "While writing a reply, the model saves work from earlier tokens so it doesn't redo it for each new word.",
      analogy: "Keeping your rough working on the page instead of recalculating from the start for each line.",
    },
    multimodal: {
      title: "Multimodal models",
      line: "Models that understand more than text: images, audio, PDFs and video.",
      analogy: "A person who can read, look at pictures and listen at the same time.",
      example: "Photograph a diseased leaf and ask what is wrong.",
    },

    // MLOps
    "ml-lifecycle": {
      title: "The ML lifecycle",
      line: "Problem → data → features → train → evaluate → deploy → monitor → retrain. It is a loop, not a line.",
      analogy: "Farming: prepare, plant, grow, harvest, check the soil, plant again.",
    },
    "model-serving": {
      title: "Serving a model",
      line: "Put the trained model behind an API so apps can send inputs and get predictions.",
      analogy: "A vending machine: put in the inputs, out comes a prediction.",
    },
    "batch-online": {
      title: "Batch vs online inference",
      line: "Predict for many rows on a schedule, or predict instantly for each request.",
      analogy: "Baking bread every morning for the day, versus cooking each order to order.",
      compare: [
        "Nightly jobs: tomorrow's demand forecast for every shop.",
        "Real time: a fraud check during each payment.",
      ],
    },
    "experiment-tracking": {
      title: "Experiment tracking",
      line: "Record every training run's settings, data version and scores, so you know what worked.",
      analogy: "A lab notebook for experiments.",
      example: "MLflow, Weights & Biases.",
    },
    "model-registry": {
      title: "Model registry",
      line: "A store of trained models with versions and stages like staging and production.",
      analogy: "Git, but for model files.",
    },
    reproducibility: {
      title: "Reproducibility",
      line: "Anyone can re-run your training and get the same result: fixed seeds, pinned versions, saved data.",
      analogy: "A recipe precise enough that anyone bakes the same cake.",
    },
    drift: {
      title: "Data drift vs concept drift",
      line: "Over time the world changes, and a model trained on old data gets worse.",
      analogy: "A map that slowly goes out of date as new roads are built.",
      compare: [
        "The inputs change: new kinds of customers, a new phone camera.",
        "The meaning changes: what counted as fraud last year no longer does.",
      ],
    },
    "ml-ci-cd": {
      title: "CI/CD for ML",
      line: "Automatic tests and deployment for data, training code and models, not just app code.",
      analogy: "A quality check line that also inspects the ingredients.",
    },

    // Responsible AI
    "bias-fairness": {
      title: "Bias & fairness",
      line: "Models copy unfair patterns from their data unless you check them for every group.",
      analogy: "A recipe tested only on one family's taste.",
      example: "Compare error rates across groups such as gender, district or language.",
    },
    explainability: {
      title: "Explainability",
      line: "Showing why a model made a prediction, so people can trust and check it.",
      analogy: "A teacher who shows the working, not just the final answer.",
      example: "SHAP values and feature importance show which inputs pushed a prediction up or down.",
    },
    "ai-privacy": {
      title: "Privacy & data protection",
      line: "Collect only the data you need, protect it, and never send sensitive data to tools without permission.",
      analogy: "A doctor keeps patient files locked and shares only what is needed.",
    },
    "human-in-loop": {
      title: "Human in the loop",
      line: "For important decisions, AI suggests and a person makes the final call.",
      analogy: "A co-pilot assists; the captain decides.",
      example: "An anomaly model flags suspicious transactions for a person to review.",
    },
    "ai-safety": {
      title: "AI safety & misuse",
      line: "Thinking ahead about how an AI feature could be misused or fail, and building limits in.",
      analogy: "Childproof locks on medicine bottles.",
    },
  },
};

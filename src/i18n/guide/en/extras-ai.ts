import type { TrackExtras } from "../types";

export const aiExtras: TrackExtras = {
  sections: {
    math: {
      character: { name: "The Mathematician", says: "Don't panic. You need just four ideas from maths, and I'll show each one as a picture." },
      recap: [
        "Statistics summarises data: centre and spread.",
        "Probability measures how likely something is, from 0 to 1.",
        "Vectors and matrices are lists and tables of numbers; models multiply them.",
        "Gradients point downhill to a smaller error.",
      ],
      quiz: [
        { q: "Which is least affected by one billionaire in the data?", options: ["Mean", "Median", "Sum", "Maximum"], why: "The median is the middle value, so extremes barely move it." },
        { q: "A probability of 1 means…", options: ["Certain", "Impossible", "50/50", "Unknown"], why: "Probabilities run from 0 (never) to 1 (certain)." },
        { q: "During training, the gradient tells the model…", options: ["How many layers to add", "Which data to delete", "The final answer", "Which way to change the weights to reduce error"], why: "Training follows the gradient downhill." },
        { q: "A table of numbers is called a…", options: ["Scalar", "Vector", "Matrix", "Token"], why: "A vector is one row or column; a matrix is the whole table." },
      ],
    },
    data: {
      character: { name: "The Data Chef", says: "A great model with dirty data is a great chef with rotten vegetables. Let's prepare the ingredients." },
      recap: [
        "Look at the data first (EDA), then clean it.",
        "Turn categories into numbers; put numbers on similar scales.",
        "Split into train, validation and test, and never peek at test.",
        "Watch for leakage and rare classes.",
      ],
      quiz: [
        { q: "Which set should you use only once, at the very end?", options: ["Test set", "Training set", "Validation set", "All of them"], why: "The test set gives the final, honest score." },
        { q: "Scaling the whole dataset before splitting it causes…", options: ["Overfitting", "Faster training", "Data leakage", "Class imbalance"], why: "Test-set statistics sneak into training." },
        { q: "1 fraud in 1,000 payments is an example of…", options: ["Data drift", "Class imbalance", "Normalisation", "Encoding"], why: "One class is very rare, so accuracy alone misleads." },
        { q: "Turning \"district\" into district_Kandy, district_Galle columns is…", options: ["Scaling", "PCA", "Label smoothing", "One-hot encoding"], why: "One 0/1 column per category." },
      ],
    },
    "classic-ml": {
      character: { name: "The Forest Ranger", says: "Before neural networks, there were trees, and on tables of data they still win most of the time." },
      recap: [
        "Supervised learns from answers; unsupervised finds patterns alone.",
        "Classification predicts a label; regression predicts a number.",
        "Trees → Random Forest (bagging) → XGBoost (boosting).",
        "k-means groups, PCA compresses, Isolation Forest spots the odd one out.",
      ],
      quiz: [
        { q: "Predicting tomorrow's rainfall in mm is…", options: ["Clustering", "Classification", "Reinforcement learning", "Regression"], why: "The output is a number." },
        { q: "Random Forest combines many trees using…", options: ["Boosting", "Bagging and voting", "Backpropagation", "PCA"], why: "Trees trained on random samples vote together." },
        { q: "Grouping customers with no labels is…", options: ["Supervised learning", "Regression", "Unsupervised learning", "Transfer learning"], why: "There are no answers to learn from, only patterns." },
        { q: "For a table of farm data, a strong first choice is often…", options: ["XGBoost or Random Forest", "A Transformer", "A CNN", "An RNN"], why: "Tree ensembles are hard to beat on tabular data." },
      ],
    },
    evaluation: {
      character: { name: "The Judge", says: "A model that says it's 99% accurate might be useless. I ask the hard questions." },
      recap: [
        "Always compare with a simple baseline.",
        "Overfitting: great on training, bad on new data.",
        "With rare classes, use precision, recall, F1 and PR-AUC.",
        "Cross-validate and tune on validation data, never on test data.",
      ],
      quiz: [
        { q: "Train accuracy 99%, test accuracy 60%. The model is…", options: ["Underfitting", "Perfect", "Overfitting", "Leaking test data into production"], why: "It memorised the training data." },
        { q: "For finding rare fraud, missing a fraud is costly. Focus on…", options: ["Recall", "Accuracy", "R²", "MAE"], why: "Recall = how many real frauds you caught." },
        { q: "\"Of everything flagged, how much was really positive?\" is…", options: ["Recall", "Precision", "Accuracy", "RMSE"], why: "Precision is about false alarms." },
        { q: "Cross-validation gives…", options: ["A bigger dataset", "Faster training", "No need for a test set", "A fairer average score"], why: "Several train/test splits are averaged." },
      ],
    },
    "deep-learning": {
      character: { name: "The Brain Builder", says: "I stack simple neurons into layers until they can see, hear and read. Here's how they learn." },
      recap: [
        "Layers of neurons + activations learn complex patterns.",
        "Loss measures error; backprop and gradient descent reduce it.",
        "CNNs for images, Transformers for text (and more).",
        "Transfer learning: start from a pretrained model.",
      ],
      quiz: [
        { q: "Which step works out how much each weight caused the error?", options: ["Dropout", "Backpropagation", "Tokenisation", "Normalisation"], why: "Backprop sends the error backwards through the layers." },
        { q: "One full pass through all training data is…", options: ["A batch", "A step", "A layer", "An epoch"], why: "An epoch = every example seen once." },
        { q: "GPT, Claude and BERT are all…", options: ["Transformers", "CNNs", "Decision trees", "RNNs"], why: "They're built on attention." },
        { q: "You have only 500 leaf photos. Best start?", options: ["Train a huge model from zero", "Use linear regression", "Fine-tune a pretrained image model", "Collect no more data"], why: "Transfer learning reuses what a big model already knows." },
      ],
    },
    llm: {
      character: { name: "The Language Wizard", says: "I read and write in tokens. Give me a clear prompt, the right documents and good tools, and I'll do surprising things." },
      recap: [
        "LLMs read tokens; embeddings capture meaning.",
        "Try prompting → RAG → fine-tuning, in that order.",
        "Agents loop: think, use a tool, check, repeat.",
        "Evals, guardrails and cost control turn demos into products.",
      ],
      quiz: [
        { q: "A chatbot must answer from your university handbook. Use…", options: ["RAG", "A bigger temperature", "Fewer tokens", "A CNN"], why: "Retrieve the right pages, then let the model answer from them." },
        { q: "For exact facts and code, temperature should be…", options: ["As high as possible", "Random", "Exactly 2.0", "Low"], why: "Low temperature = predictable answers." },
        { q: "LoRA is a way to…", options: ["Search vectors", "Store prompts", "Fine-tune cheaply with small add-on weights", "Count tokens"], why: "It trains small extra matrices instead of every weight." },
        { q: "Hidden text in a document telling the model to leak data is…", options: ["Hallucination", "Prompt injection", "Quantisation", "Overfitting"], why: "Guardrails and careful tool permissions defend against it." },
      ],
    },
    mlops: {
      character: { name: "The Launcher", says: "A model in a notebook helps nobody. I put it into production and keep it healthy." },
      recap: [
        "ML is a loop: data → train → deploy → monitor → retrain.",
        "Serve models behind an API; batch or real time.",
        "Track experiments and version models.",
        "Watch for drift: the world changes.",
      ],
      quiz: [
        { q: "Your fraud model gets worse as shopping habits change. That's…", options: ["Overfitting", "Leakage", "Drift", "Quantisation"], why: "The world moved away from the training data." },
        { q: "Scoring every shop's demand once a night is…", options: ["Online inference", "Batch inference", "Fine-tuning", "Streaming"], why: "Many predictions on a schedule." },
        { q: "MLflow and Weights & Biases are used for…", options: ["Experiment tracking", "Front-end design", "DNS", "Password hashing"], why: "They record settings, data versions and scores." },
        { q: "Why fix random seeds and pin library versions?", options: ["Faster GPUs", "Smaller models", "Better UI", "Reproducible results"], why: "Anyone can re-run training and get the same model." },
      ],
    },
    "responsible-ai": {
      character: { name: "The Conscience", says: "Just because we can build it doesn't mean it's fair or safe. I make sure AI helps everyone." },
      recap: [
        "Check model errors for every group, not just the average.",
        "Explain predictions so people can trust and challenge them.",
        "Collect less data; protect what you keep.",
        "Keep a human in the loop for important decisions.",
      ],
      quiz: [
        { q: "A loan model is accurate overall but often wrong for one district. This is…", options: ["Drift", "A fairness problem", "Overfitting", "A token limit"], why: "Average accuracy hides group-level harm." },
        { q: "SHAP values help with…", options: ["Speed", "Storage", "Explaining which inputs drove a prediction", "Tokenising"], why: "They show each feature's push up or down." },
        { q: "Flagged transactions are checked by a person before action. That's…", options: ["Batch inference", "Quantisation", "Fine-tuning", "Human in the loop"], why: "AI suggests; a human decides." },
        { q: "The safest default for personal data is…", options: ["Collect only what you need", "Collect everything", "Share it with every tool", "Store it in prompts"], why: "Less data = less to leak or misuse." },
      ],
    },
  },
  topics: {
    // Math
    statistics: {
      example: "Average salary in a company with one billionaire CEO is misleading; the median tells the real story.",
      use: ["First look at any dataset", "Spotting outliers and odd values"],
      table: { head: ["Marks: 45, 50, 52, 55, 98", "Value"], rows: [["Mean", "60"], ["Median", "52"], ["Standard deviation", "≈ 19"]] },
    },
    probability: {
      use: ["Reading model outputs", "Deciding thresholds for alerts"],
      table: { head: ["Event", "Probability"], rows: [["Coin lands heads", "0.5"], ["Rain tomorrow", "0.7"], ["Email is spam", "0.92"]] },
    },
    distributions: {
      example: "Exam marks, heights and measurement errors often follow a bell curve.",
      use: ["Understanding your data's shape", "Spotting unusual values"],
    },
    "vectors-matrices": {
      use: ["Every model's inputs and weights", "Understanding embeddings"],
      table: { head: ["House", "Rooms", "Size (m²)", "Age"], rows: [["A", "3", "120", "10"], ["B", "4", "160", "2"]] },
    },
    "derivatives-gradients": {
      use: ["Understanding how models learn", "Tuning the learning rate"],
    },
    bayes: {
      use: ["Updating beliefs with new evidence", "Spam filters and medical tests"],
      labels: ["Before: 30% rain", "Hear thunder", "After: 80% rain"],
    },

    // Data
    "data-stack": {
      example: "Load 10,000 crop records with pandas, find the average yield per district, and plot it with matplotlib.",
      use: ["Every ML and data project", "Quick analysis in a notebook"],
      table: { head: ["Tool", "Job"], rows: [["NumPy", "Fast maths on arrays"], ["pandas", "Tables: load, filter, group"], ["matplotlib", "Charts"]] },
    },
    eda: {
      use: ["Before any model", "Finding problems early"],
      labels: ["Load", "Describe", "Plot", "Spot problems"],
    },
    "data-cleaning": {
      example: "Rainfall recorded as \"1,200mm\", \"1200\" and blank: make them all numbers and fill the blank with the median.",
      use: ["Every real dataset", "Before training"],
      table: { head: ["Before", "After"], rows: [["\"1,200mm\"", "1200"], ["(blank)", "1150 (median)"], ["Kandy / kandy", "Kandy"]] },
    },
    "encoding-scaling": {
      example: "District names become 0/1 columns; rainfall (0–3000) and pH (4–9) are scaled so rainfall doesn't dominate.",
      use: ["Before most models", "Trees need less scaling than neural networks"],
      table: { head: ["District", "is_Kandy", "is_Galle"], rows: [["Kandy", "1", "0"], ["Galle", "0", "1"]] },
    },
    "feature-engineering": {
      use: ["When raw columns don't tell the story", "Often the biggest boost on tabular data"],
      labels: ["Raw date", "Day of week", "Is holiday", "Better prediction"],
    },
    "train-val-test": {
      example: "10,000 rows: 7,000 to train, 1,500 to tune, 1,500 locked away for the final score.",
      use: ["Every model you train", "Split by time for forecasting"],
      labels: ["Train 70%", "Validation 15%", "Test 15%"],
    },
    "data-leakage": {
      use: ["Check whenever scores look too good", "Split before any scaling"],
    },
    "class-imbalance": {
      use: ["Fraud, disease, defects", "Anything rare but important"],
      table: { head: ["Model", "Accuracy", "Frauds caught"], rows: [["\"Never fraud\"", "99.9%", "0"], ["Real model", "97%", "85%"]] },
    },

    // Classic ML
    "ml-types": {
      example: "Spam filter (supervised), customer groups (unsupervised), a robot learning to walk (reinforcement).",
      use: ["Supervised: you have labelled answers", "Unsupervised: you don't"],
    },
    "classification-regression": {
      example: "Which crop to grow is classification; how many kilos it will yield is regression.",
      use: ["Look at what you're predicting: a label or a number"],
    },
    "linear-regression": {
      example: "Predicting a flat's rent from its size: every extra 10 m² adds about Rs. 5,000.",
      use: ["A first, explainable baseline", "Relationships that are roughly straight"],
    },
    "logistic-regression": {
      example: "Will this customer cancel? The model says 0.81, so flag them for a call.",
      use: ["Yes/no problems", "When you need a simple, explainable model"],
    },
    "decision-trees": {
      use: ["Explaining decisions in plain rules", "Building block for forests and boosting"],
      labels: ["Rainfall > 1500mm?", "Soil clay?", "Soil sandy?", "Paddy", "Tea", "Cassava", "Chilli"],
    },
    knn: {
      example: "Recommend a movie because the 5 users most similar to you loved it.",
      use: ["Small datasets", "Simple recommendations"],
    },
    "naive-bayes": {
      example: "An email full of \"winner\", \"free\" and \"claim now\" gets a high spam probability in a few microseconds.",
      use: ["Text classification", "A very fast baseline"],
      table: { head: ["Word", "In spam", "In normal mail"], rows: [["\"winner\"", "often", "rarely"], ["\"meeting\"", "rarely", "often"]] },
    },
    "random-forest": {
      example: "Predicting crop suitability from soil and climate with 200 trees voting.",
      use: ["Strong default for tables", "When you want feature importance"],
      labels: ["Random sample 1, 2, 3…", "One tree each", "Trees vote", "Final answer"],
    },
    "bagging-boosting": {
      example: "Random Forest is bagging; XGBoost and LightGBM are boosting.",
      use: ["Bagging: stable, less overfitting", "Boosting: maximum accuracy on tables"],
    },
    xgboost: {
      use: ["Tabular competitions and business data", "When you need top accuracy fast"],
      labels: ["Tree 1 predicts", "Tree 2 fixes errors", "Tree 3 fixes more", "Sum = strong model"],
    },
    ensembles: {
      example: "Combining a Random Forest and XGBoost by averaging their probabilities.",
      use: ["Squeezing out extra accuracy", "Models that make different mistakes"],
    },
    svm: {
      example: "Separating spam from normal email with the widest possible margin.",
      use: ["Small to medium clean datasets", "High-dimensional text features"],
    },
    kmeans: {
      use: ["Customer segments", "Grouping places or products"],
    },
    pca: {
      use: ["Visualising many features", "Speeding up training"],
    },
    "anomaly-detection": {
      use: ["Fraud and intrusion detection", "Faulty sensors and odd transactions"],
    },
    "generative-discriminative": {
      example: "A spam classifier is discriminative; an image generator that paints new pictures is generative.",
      use: ["Discriminative: labelling things", "Generative: creating new content"],
    },

    // Evaluation
    baseline: {
      example: "If \"predict last week's sales\" is 85% accurate, your fancy model at 86% isn't impressive.",
      use: ["Before every new model", "Explaining results to managers"],
    },
    overfitting: {
      example: "A model memorises 500 photos perfectly but fails on a new phone's photos.",
      use: ["Compare training and validation scores", "Fix with more data, simpler models or regularisation"],
    },
    "bias-variance": {
      example: "A straight line through curved data has high bias; a wiggly line through every point has high variance.",
      use: ["Diagnosing why a model is bad", "Choosing model complexity"],
    },
    "cross-validation": {
      example: "With only 800 rows, 5-fold cross-validation gives a much fairer score than one split.",
      use: ["Small datasets", "Comparing models fairly"],
      table: { head: ["Round", "Test fold", "Score"], rows: [["1", "Part 1", "0.84"], ["2", "Part 2", "0.81"], ["3", "Part 3", "0.86"], ["Average", "", "0.84"]] },
    },
    "confusion-matrix": {
      example: "A disease test with many false negatives sends sick people home, which is the worst kind of error here.",
      use: ["Every classifier", "Choosing which mistake is worse"],
    },
    "precision-recall": {
      example: "Spam filter: high precision (don't hide real mail). Cancer screening: high recall (don't miss cases).",
      use: ["Rare classes", "When false alarms and misses cost differently"],
      table: { head: ["Case", "Care most about"], rows: [["Spam filter", "Precision"], ["Disease screening", "Recall"], ["Balanced need", "F1"]] },
    },
    "roc-pr-auc": {
      example: "For fraud (0.1% positives), PR-AUC shows the real difficulty; ROC-AUC can look great anyway.",
      use: ["Comparing classifiers across thresholds", "PR-AUC for rare events"],
    },
    "regression-metrics": {
      example: "Predicting yields: MAE of 120 kg means you're off by 120 kg on average.",
      use: ["Any number prediction", "RMSE when big misses hurt most"],
      table: { head: ["Metric", "Read it as"], rows: [["MAE = 120", "Off by 120 on average"], ["RMSE = 180", "Big misses are pulling it up"], ["R² = 0.82", "Explains 82% of the variation"]] },
    },
    regularization: {
      example: "Adding L2 to a model that overfits brings validation accuracy up from 72% to 80%.",
      use: ["When the model overfits", "L1 when you want fewer features"],
    },
    "hyperparameter-tuning": {
      example: "Trying tree depths 3–10 and learning rates 0.01–0.3 to find the best XGBoost settings.",
      use: ["After a working baseline", "Always tune on validation data"],
    },

    // Deep learning
    "neural-network": {
      example: "28×28 handwritten digit → 2 hidden layers → 10 outputs, one per digit.",
      use: ["Images, sound, text", "Very complex patterns with lots of data"],
      labels: ["Input layer", "Hidden layer 1", "Hidden layer 2", "Output"],
    },
    activation: {
      example: "Hidden layers use ReLU; the last layer of a 10-class digit classifier uses softmax.",
      use: ["ReLU in hidden layers", "Sigmoid or softmax at the output"],
    },
    loss: {
      example: "Predicting house prices: MSE. Predicting cat vs dog: cross-entropy.",
      use: ["Numbers: MSE", "Classes: cross-entropy"],
    },
    "gradient-descent": {
      example: "Each step nudges the weights a little; after thousands of steps the error is small.",
      use: ["Training almost every model", "Pick a learning rate that's not too big or small"],
    },
    backprop: {
      example: "The model guesses \"dog\" for a cat; backprop works out which weights pushed it there.",
      use: ["Inside every neural network training step", "Frameworks do it for you with loss.backward()"],
      labels: ["Prediction", "Error", "Backward through layers", "Each weight's blame"],
    },
    "pytorch-loop": {
      example: "These six lines run thousands of times while a model learns.",
      use: ["Training any PyTorch model", "Understanding what fit() does inside"],
      labels: ["Predict", "Measure loss", "Backward", "Update weights"],
    },
    "batch-epoch-lr": {
      example: "10,000 images, batch size 100 → 100 steps per epoch; train for 20 epochs.",
      use: ["Every training run", "Learning rate matters most"],
    },
    optimizers: {
      example: "Start with Adam at learning rate 0.001; try SGD with momentum later for the final few percent.",
      use: ["Adam: default start", "SGD: when you have time to tune"],
    },
    "dropout-batchnorm": {
      example: "Adding dropout 0.3 and early stopping stops a model from memorising a small dataset.",
      use: ["Deep networks that overfit", "Training that's unstable or slow"],
    },
    "vanishing-gradients": {
      use: ["Understanding why very deep nets were hard", "Why ReLU and ResNets matter"],
    },
    cnn: {
      use: ["Image classification and detection", "Medical scans, leaf diseases, number plates"],
      labels: ["Image", "Edges", "Shapes", "Object: leaf blight"],
    },
    "rnn-lstm": {
      use: ["Older sequence work", "Small time-series problems"],
      labels: ["Word 1", "Word 2 + memory", "Word 3 + memory", "Meaning"],
    },
    "attention-transformer": {
      use: ["Text, translation, chat", "Now also images, audio and code"],
      labels: ["Words in", "Each word looks at all others", "Weighted meaning", "Next word out"],
    },
    architectures: {
      example: "Detect plant disease from photos: CNN. Translate English to Tamil: Transformer.",
      use: ["Match the architecture to the data type"],
    },
    "encoder-decoder": {
      example: "Sorting support tickets by topic: encoder. A chatbot: decoder. English→Sinhala translation: encoder-decoder.",
      use: ["Understanding: encoder", "Generating: decoder"],
    },
    autoencoders: {
      use: ["Anomaly detection without labels", "Compression and denoising"],
      labels: ["Input", "Squeeze to small code", "Rebuild", "Big error = unusual"],
    },
    "transfer-learning": {
      use: ["Small datasets", "Saving time and GPU money"],
      labels: ["Model trained on millions of images", "Replace last layer", "Train on your 500 photos", "Your model"],
    },
    "pytorch-tensorflow": {
      example: "Most new research code and job ads use PyTorch; many older production systems use TensorFlow.",
      use: ["Learn PyTorch first", "Know TensorFlow exists"],
    },
    "gpu-training": {
      use: ["Deep learning of any size", "Use free Colab or Kaggle GPUs to start"],
    },

    // LLM
    tokens: {
      use: ["Estimating cost and limits", "Understanding odd model behaviour with words"],
      labels: ["\"unbelievable\"", "un", "believ", "able"],
    },
    embeddings: {
      use: ["Semantic search", "Recommendations and RAG"],
    },
    "context-window": {
      example: "Pasting a 300-page PDF may not fit; RAG sends only the relevant pages.",
      use: ["Long documents and chats", "Deciding when you need RAG"],
    },
    temperature: {
      use: ["Low for facts, code, data extraction", "Higher for ideas and creative writing"],
      table: { head: ["Temperature", "Behaviour", "Use for"], rows: [["0 – 0.3", "Predictable", "Code, facts"], ["0.7", "Balanced", "Chat"], ["1.0+", "Creative", "Brainstorming"]] },
    },
    prompting: {
      example: "\"Summarise this\" is weak; \"Summarise for a farmer in 3 bullet points, in simple Sinhala\" is strong.",
      use: ["Always: the cheapest improvement", "Give role, context, examples and format"],
    },
    "structured-output": {
      example: "Extract name, date and amount from receipts as JSON and save them straight to a database.",
      use: ["When code reads the answer", "Extraction and classification tasks"],
    },
    "llm-api": {
      use: ["Adding AI to any app", "Keep keys server-side"],
      labels: ["Your server", "LLM API", "Reply", "Show to user"],
    },
    hallucination: {
      use: ["Expect it in every LLM feature", "Design for checking and citing"],
    },
    "vector-db": {
      use: ["RAG and semantic search", "Start with pgvector if you already use PostgreSQL"],
    },
    rag: {
      use: ["Answers from your own or recent documents", "Reducing hallucinations"],
      labels: ["Question", "Search your documents", "Top pages + question to LLM", "Answer with sources"],
    },
    "prompt-rag-finetune": {
      example: "A support bot: start with a good prompt, add RAG for your help articles, fine-tune only if the tone is still wrong.",
      use: ["Always try them in order", "Most products never need fine-tuning"],
      table: { head: ["Method", "Cost", "Adds"], rows: [["Prompting", "Low", "Instructions"], ["RAG", "Medium", "Your knowledge"], ["Fine-tuning", "High", "Style or skill"]] },
    },
    "fine-tuning": {
      example: "Fine-tune a small open model with LoRA on 2,000 examples of your company's support replies.",
      use: ["Consistent style or format", "LoRA/QLoRA when GPU memory is limited"],
    },
    agents: {
      use: ["Multi-step tasks with tools", "Automating research or workflows"],
      labels: ["Think", "Pick a tool", "Use it", "Check the result"],
    },
    mcp: {
      use: ["Connecting assistants to your data", "Reusing one tool across many AI apps"],
      labels: ["AI assistant", "MCP", "Database / Files / Calendar"],
    },
    evals: {
      use: ["Before changing prompts or models", "Measuring quality over time"],
      table: { head: ["Question", "Expected", "Pass?"], rows: [["Paddy season?", "Maha + Yala", "✓"], ["Fertiliser dose?", "From the guide", "✓"], ["Off-topic joke", "Polite refusal", "✗"]] },
    },
    guardrails: {
      use: ["Public-facing AI features", "Any agent with real tools"],
      labels: ["User input", "Input check", "LLM", "Output check", "User"],
    },
    "open-closed": {
      example: "A startup prototype uses a closed API; a hospital keeping data on-site runs an open-weight model.",
      use: ["Closed: best quality, fast start", "Open: privacy, control, offline"],
    },
    "cost-latency": {
      use: ["Every production AI feature", "Measure cost per user action"],
      table: { head: ["Trick", "Saves"], rows: [["Smaller model for easy steps", "Money"], ["Cache repeated prompts", "Money + time"], ["Stream the answer", "Perceived wait"]] },
    },
    multimodal: {
      use: ["Photos, PDFs, screenshots", "Voice assistants"],
    },
    quantization: {
      example: "A 16 GB model shrinks to about 4 GB in 4-bit and runs on a gaming laptop.",
      use: ["Running models on smaller hardware", "Cheaper, faster serving"],
      table: { head: ["Precision", "Size", "Quality"], rows: [["16-bit", "16 GB", "Best"], ["8-bit", "8 GB", "Nearly the same"], ["4-bit", "4 GB", "Small drop"]] },
    },
    "kv-cache": {
      example: "Why the second word of a reply appears much faster than the time it takes to read your whole prompt.",
      use: ["Understanding LLM speed", "Serving models efficiently"],
    },

    // MLOps
    "ml-lifecycle": {
      example: "A crop model is retrained every season as new yield data arrives.",
      use: ["Planning any ML project", "Remember: it never really ends"],
      labels: ["Data", "Train", "Evaluate", "Deploy", "Monitor"],
    },
    "model-serving": {
      example: "A FastAPI endpoint /predict returns the best crop for a farmer's soil in 50 ms.",
      use: ["Any app that needs predictions", "Load the model once at startup"],
      labels: ["App sends input", "API loads features", "Model predicts", "Answer returned"],
    },
    "batch-online": {
      example: "Nightly demand forecasts for every shop: batch. Fraud check during a card payment: online.",
      use: ["Batch: many predictions on a schedule", "Online: one prediction right now"],
    },
    "experiment-tracking": {
      use: ["Every training run", "Comparing ideas with a team"],
      table: { head: ["Run", "Model", "Depth", "F1"], rows: [["#1", "RF", "8", "0.81"], ["#2", "XGB", "6", "0.86"], ["#3", "XGB", "10", "0.84"]] },
    },
    reproducibility: {
      example: "Six months later, an auditor asks how the model was made, and you re-run it exactly.",
      use: ["Research and regulated industries", "Debugging \"it worked last week\""],
    },
    "model-registry": {
      example: "v12 is in production, v13 is in staging; one click rolls back to v12 if v13 misbehaves.",
      use: ["More than one model version", "Teams sharing models"],
      labels: ["Trained model", "Registry v13", "Staging", "Production"],
    },
    drift: {
      example: "After a new payment app launches, customers behave differently and the fraud model's precision drops.",
      use: ["Monitor inputs and accuracy after launch", "Retrain when drift appears"],
    },
    "ml-ci-cd": {
      example: "A new model must beat the current one on the test set before it can be deployed.",
      use: ["Models that are retrained often", "Teams shipping models weekly"],
      labels: ["New data", "Retrain", "Auto-evaluate", "Deploy if better"],
    },

    // Responsible AI
    "bias-fairness": {
      use: ["Any model that affects people", "Loans, hiring, health, education"],
      table: { head: ["Group", "Error rate"], rows: [["District A", "4%"], ["District B", "5%"], ["District C", "19% ⚠"]] },
    },
    "ai-privacy": {
      example: "Removing names and phone numbers from chat logs before using them to improve a model.",
      use: ["Personal, health or financial data", "Before sending data to any AI tool"],
    },
    explainability: {
      use: ["Decisions people may challenge", "Debugging surprising predictions"],
      table: { head: ["Input", "Push on \"Paddy\""], rows: [["Rainfall 1,800mm", "+ strong"], ["Clay soil", "+ medium"], ["Altitude 900m", "− small"]] },
    },
    "human-in-loop": {
      use: ["High-stakes decisions", "Early versions of any AI system"],
      labels: ["Model flags", "Person reviews", "Decision", "Feedback improves model"],
    },
    "ai-safety": {
      example: "A chatbot connected to email can only draft messages; a person must press Send.",
      use: ["AI with real tools or actions", "Public-facing features"],
    },
  },
};

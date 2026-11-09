# Signal-to-Action Growth Demo

A small growth intelligence demo that turns public YouTube signals into qualified opportunities and human-reviewed actions.

The repository has two parts:

- A lightweight frontend case-study demo built with HTML, CSS, and vanilla JavaScript.
- A Python pipeline for collecting YouTube signals, classifying them with Claude, and evaluating the classifier against human labels.

## What the project demonstrates

- Monitoring public conversations and creator activity
- Filtering irrelevant signals before deeper review
- Classifying signals as user intent, creator lead, partnership fit, or irrelevant
- Assigning a priority score and recommended next action
- Keeping a human in the loop for review and evaluation

## Project structure

```text
signal-to-action-growth-demo/
  index.html            # Frontend demo page
  styles.css            # Frontend styles
  app.js                # Frontend content and interactions
  collect_signals.py    # Step 1: collect YouTube videos and comments
  classify.py           # Step 2: classify signals with Claude
  evaluate.py           # Step 3: compare model labels with human labels
  README.md
```

## Frontend demo

Open `index.html` in a browser, or serve the project directory with any static file server.

The page content is controlled in `app.js`, including the brand, hero copy, metrics, workflow, examples, and opportunity cards.

## Signal pipeline

### 1. Install Python dependencies

Python 3.9+ is recommended.

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install requests anthropic
```

### 2. Collect YouTube signals

Create a YouTube Data API v3 key, then set it in your shell. The script searches a small set of creator and AI-tool queries, collects video metadata and top comments, and writes one JSON object per line.

```bash
export YT_API_KEY="your-youtube-api-key"
python collect_signals.py
```

Output:

```text
signals.jsonl
```

### 3. Classify signals with Claude

Set an Anthropic API key and run the classifier. Each signal receives a type, priority score, explanation, recommended action, and—when appropriate—a draft message.

```bash
export ANTHROPIC_API_KEY="your-anthropic-api-key"
python classify.py
```

The default model is defined in `classify.py`. If your account uses a different available model, set it explicitly:

```bash
export MODEL="your-available-model-id"
python classify.py
```

Output:

```text
predictions.jsonl
```

### 4. Evaluate against human labels

Create a blinded sample for manual labeling:

```bash
python evaluate.py sample 100
```

Fill the `human_label` column in `label_me.csv` with one of:

```text
user_intent
creator_lead
partnership_fit
irrelevant
```

Then calculate agreement, Cohen's kappa, per-class precision and recall, and precision@10:

```bash
python evaluate.py score
```

## API key and data hygiene

Do not put API keys in source files, commit them to Git, or paste them into public issues. Generated files such as `signals.jsonl`, `predictions.jsonl`, and `label_me.csv` may contain public text and should be reviewed before sharing.

## Good fits

This template can be adapted for creator platforms, SaaS products, early-stage AI startups, community-led products, partnership workflows, and growth operations case studies.

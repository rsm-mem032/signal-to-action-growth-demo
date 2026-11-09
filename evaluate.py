"""Step 3: measure the classifier against YOUR hand labels.
  python evaluate.py sample 100   -> label_me.csv  (fill the human_label column with one of:
                                     user_intent / creator_lead / partnership_fit / irrelevant)
  python evaluate.py score        -> prints the real numbers to put on the resume
"""
import sys, csv, json, random
from collections import Counter

LABELS = ["user_intent", "creator_lead", "partnership_fit", "irrelevant"]

def load(p):
    return [json.loads(l) for l in open(p)]

def sample(n):
    rows = [r for r in load("predictions.jsonl") if r["pred_type"] != "error"]
    random.seed(0); random.shuffle(rows)
    with open("label_me.csv", "w", newline="") as f:   # model label hidden to avoid anchoring
        w = csv.writer(f); w.writerow(["id", "kind", "text", "url", "human_label"])
        for r in rows[:n]:
            w.writerow([r["id"], r["kind"], r["text"][:500], r["url"], ""])
    print(f"wrote label_me.csv with {min(n, len(rows))} rows")

def score():
    pred = {r["id"]: r for r in load("predictions.jsonl")}
    lab = [r for r in csv.DictReader(open("label_me.csv")) if r["human_label"].strip() in LABELS]
    n = len(lab); assert n, "no labelled rows"
    h = [r["human_label"].strip() for r in lab]; m = [pred[r["id"]]["pred_type"] for r in lab]
    po = sum(a == b for a, b in zip(h, m)) / n
    ch, cm = Counter(h), Counter(m)
    pe = sum(ch[l] / n * cm[l] / n for l in LABELS)
    kappa = (po - pe) / (1 - pe) if pe < 1 else 1.0
    print(f"labelled signals N = {n}\nagreement = {po:.1%}   Cohen's kappa = {kappa:.2f}")
    for l in LABELS:
        tp = sum(a == b == l for a, b in zip(h, m))
        p = tp / cm[l] if cm[l] else float('nan'); r = tp / ch[l] if ch[l] else float('nan')
        print(f"{l:16s} precision {p:.0%}  recall {r:.0%}  (human n={ch[l]})")
    top = sorted(lab, key=lambda r: -pred[r["id"]]["pred_score"])[:10]
    k = sum(r["human_label"].strip() != "irrelevant" for r in top)
    print(f"precision@10 (top-scored 10 are truly relevant) = {k}/10")

if __name__ == "__main__":
    sample(int(sys.argv[2]) if len(sys.argv) > 2 else 100) if sys.argv[1] == "sample" else score()

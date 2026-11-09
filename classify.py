"""Step 2: LLM classification into structured JSON.
Setup: pip install anthropic ; export ANTHROPIC_API_KEY=... ; optional MODEL=<model id>
Run:   python classify.py            -> predictions.jsonl
"""
import os, json, anthropic

client = anthropic.Anthropic()
MODEL = os.environ.get("MODEL", "claude-sonnet-5-5")
SYSTEM = """You help the overseas growth team of an AI creative platform find opportunities in public posts.
Classify the signal and return ONLY a JSON object with keys:
type: one of "user_intent" (wants to make/solve something the product helps with), "creator_lead" (a creator worth supporting/featuring),
      "partnership_fit" (channel/community with distribution potential), "irrelevant"
score: integer 0-100 (priority for the team)
why_this_matters: one sentence
recommended_action: one of "draft_reply", "draft_dm", "shortlist", "ignore"
draft: a short, non-spammy draft message if action is draft_reply or draft_dm, else ""
Never claim to be a human. Be conservative: use "irrelevant" when unsure."""

def classify(sig):
    payload = {k: sig.get(k) for k in ("platform", "kind", "text", "author", "channel_subs")}
    msg = client.messages.create(model=MODEL, max_tokens=500, system=SYSTEM,
                                 messages=[{"role": "user", "content": json.dumps(payload)}])
    t = msg.content[0].text
    return json.loads(t[t.find("{"): t.rfind("}") + 1])

def main(inp="signals.jsonl", out="predictions.jsonl"):
    with open(inp) as f, open(out, "w") as g:
        for line in f:
            sig = json.loads(line)
            try:
                pred = classify(sig)
            except Exception as e:
                pred = {"type": "error", "score": 0, "why_this_matters": str(e), "recommended_action": "ignore", "draft": ""}
            g.write(json.dumps({**sig, **{f"pred_{k}": v for k, v in pred.items()}}) + "\n")
    print("done ->", out)

if __name__ == "__main__":
    main()

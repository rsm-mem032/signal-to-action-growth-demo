"""Step 1: pull real YouTube signals (video titles/descriptions + top comments).
Setup: pip install requests ; export YT_API_KEY=...  (YouTube Data API v3, free quota)
Run:   python collect_signals.py            -> signals.jsonl
"""
import os, json, requests

KEY = os.environ["YT_API_KEY"]
BASE = "https://www.googleapis.com/youtube/v3"
QUERIES = ["AI art generator tutorial", "AI video generator review", "best AI image tool for creators",
           "Midjourney alternative", "AI art for beginners", "AI creator workflow"]

def get(path, **p):
    p["key"] = KEY
    r = requests.get(f"{BASE}/{path}", params=p, timeout=30)
    r.raise_for_status()
    return r.json()

def main(out="signals.jsonl", videos_per_query=10, comments_per_video=20):
    seen, n = set(), 0
    with open(out, "w") as f:
        for q in QUERIES:
            for v in get("search", part="snippet", q=q, type="video", maxResults=videos_per_query)["items"]:
                vid = v["id"]["videoId"]
                if vid in seen:
                    continue
                seen.add(vid)
                sn = v["snippet"]
                ch = get("channels", part="statistics", id=sn["channelId"])["items"]
                subs = int(ch[0]["statistics"].get("subscriberCount", 0)) if ch else None
                base = {"platform": "youtube", "author": sn["channelTitle"], "channel_subs": subs,
                        "url": f"https://youtube.com/watch?v={vid}", "query": q}
                f.write(json.dumps({**base, "id": vid, "kind": "video",
                                    "text": f'{sn["title"]}. {sn["description"]}'}) + "\n"); n += 1
                try:
                    items = get("commentThreads", part="snippet", videoId=vid,
                                maxResults=comments_per_video, order="relevance")["items"]
                except requests.HTTPError:
                    continue  # comments disabled
                for c in items:
                    s = c["snippet"]["topLevelComment"]["snippet"]
                    f.write(json.dumps({**base, "id": c["id"], "kind": "comment",
                                        "text": s["textDisplay"], "author": s["authorDisplayName"]}) + "\n"); n += 1
    print(f"saved {n} signals to {out}")

if __name__ == "__main__":
    main()

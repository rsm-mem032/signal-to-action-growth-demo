const siteConfig = {
  meta: {
    title: "Signal-to-Action Growth Demo"
  },
  brand: {
    eyebrow: "Reusable Growth Demo • Multi-channel Signals • Human-in-the-Loop",
    mark: "GR",
    name: "Growth Radar Template",
    sub: "Reusable case-study demo for early-stage teams",
    status: "Portfolio-ready template"
  },
  hero: {
    title: "AI Growth Copilot for Global Expansion",
    description:
      "A reusable workflow for turning fragmented community signals into qualified opportunities, action suggestions, and human-reviewed next steps.",
    primaryCta: "Watch Demo",
    secondaryCta: "View Workflow",
    cardLabel: "Why this template",
    cardBody:
      "This template is designed for product, growth, and GTM case studies. Swap the configuration and sample opportunities to adapt it to creator platforms, SaaS tools, marketplaces, or community-led products."
  },
  summaryCards: [
    { label: "Use Case", value: "Growth, GTM, creator ops, community ops" },
    { label: "Format", value: "Reusable frontend case-study template" },
    { label: "Channels", value: "Reddit, X, TikTok, YouTube, community surfaces" },
    { label: "Output", value: "Qualification, action suggestions, shortlist" }
  ],
  whyNow: {
    kicker: "Why This Format",
    title: "Early-stage teams often need a signal-to-action operating layer.",
    challenges: [
      {
        title: "Signals live across too many places",
        body: "Useful demand and growth opportunities are spread across communities, comments, and creator conversations."
      },
      {
        title: "High-value opportunities are mixed with noise",
        body: "Teams need a way to surface serious users, creators, or partners without manually digging all day."
      },
      {
        title: "Execution needs speed and judgment",
        body: "AI can help qualify and draft, but final actions usually still require brand, context, and human review."
      }
    ]
  },
  dashboard: {
    kicker: "Live Demo Dashboard",
    title: "Signal monitoring for users, creators, and partnership opportunities",
    scanLabel: "Run Scan",
    exportLabel: "Export Shortlist",
    metrics: [
      { key: "scanned", label: "Signals Scanned", value: 286, footnote: "Across multiple public channels" },
      { key: "users", label: "High-Intent Users", value: 34, footnote: "Likely product demand" },
      { key: "creators", label: "Creator Leads", value: 12, footnote: "Potential program or content fit" },
      { key: "partners", label: "Partnership Matches", value: 6, footnote: "Affiliate, workflow, or GTM fit" }
    ],
    filters: [
      { value: "all", label: "All" },
      { value: "user", label: "Users" },
      { value: "creator", label: "Creators" },
      { value: "partner", label: "Partnerships" },
      { value: "shortlisted", label: "Shortlisted" }
    ]
  },
  workflow: {
    kicker: "Workflow Logic",
    title: "A simple system built for growth judgment, not vanity automation",
    steps: [
      { title: "Signal Monitoring", body: "Track relevant conversations across product, creator, and community surfaces." },
      { title: "Relevance Filtering", body: "Remove noise before deeper review so the team spends time only on useful signals." },
      { title: "AI Qualification", body: "Classify whether the signal looks like user intent, creator potential, or a partnership opportunity." },
      { title: "Action Recommendation", body: "Suggest the next move: reply, outreach, content follow-up, or internal handoff." },
      { title: "Human Review", body: "Keep final engagement manual to protect context, trust, and brand quality." }
    ]
  },
  examples: {
    kicker: "Example Opportunities",
    title: "How one template can support different growth motions",
    cards: [
      {
        type: "User Growth",
        title: "Product demand discovery",
        body: "A user asking for help with a repeated workflow can be routed toward a relevant product path instead of a generic sales pitch."
      },
      {
        type: "Creator Growth",
        title: "Program or ecosystem scouting",
        body: "A small creator with early momentum may be more valuable as a long-term ecosystem fit than as a one-off user."
      },
      {
        type: "Partnership Growth",
        title: "Workflow and GTM collaboration",
        body: "A niche operator asking how to scale output may be a strong match for templates, workflows, affiliate motions, or partnerships."
      }
    ]
  },
  decisions: {
    kicker: "Key Product Decisions",
    items: [
      "Prioritize signal quality over raw volume.",
      "Use AI for qualification and drafting, not unchecked posting.",
      "Separate user growth from creator and partnership workflows.",
      "Design the dashboard around action speed, not vanity metrics.",
      "Keep the workflow measurable, repeatable, and brand-safe."
    ]
  },
  takeaway: {
    kicker: "Takeaway",
    body:
      "This project shows a reusable way to present growth thinking: identify fragmented external signals, structure them into qualified opportunities, and use AI to support faster, more consistent human judgment.",
    tags: ["GTM", "Growth Ops", "AI Workflow", "Community Signals", "Portfolio Template"]
  }
};

const opportunities = [
  {
    id: 1,
    platform: "Reddit",
    type: "user",
    score: 0.91,
    topic: "workflow pain point",
    title: "User asks for the best tool to keep outputs consistent across multiple AI videos",
    why: "The person is comparing workflows, not casually exploring, which suggests serious product evaluation intent.",
    action: "Draft a helpful reply that points to a relevant workflow, capability, or onboarding path.",
    status: "active",
    source: "r/aivideo · 2h ago"
  },
  {
    id: 2,
    platform: "TikTok",
    type: "creator",
    score: 0.88,
    topic: "creator momentum",
    title: "Micro creator is publishing episodic AI story clips with rising engagement",
    why: "This signal suggests recurring content behavior and potential fit for a creator program, community support, or collaboration motion.",
    action: "Draft a creator outreach message offering early support, feedback, or a pilot collaboration.",
    status: "active",
    source: "@framebyframe.ai · 6h ago"
  },
  {
    id: 3,
    platform: "YouTube",
    type: "user",
    score: 0.82,
    topic: "image-to-video",
    title: "Comment asks how to turn still artwork into cinematic short-form video",
    why: "This reflects a clear workflow need and a useful education moment for the growth or community team.",
    action: "Draft an educational reply and tag the topic as a candidate for future content or documentation.",
    status: "active",
    source: "Comment thread · 9h ago"
  },
  {
    id: 4,
    platform: "X",
    type: "partner",
    score: 0.84,
    topic: "operator pain point",
    title: "Freelance operator asks how to scale client content output without losing consistency",
    why: "This looks like a workflow-driven GTM or partnership opportunity rather than a simple top-of-funnel lead.",
    action: "Share a workflow example and flag the account for follow-up by growth, partnerships, or GTM.",
    status: "active",
    source: "@opswithmaya · 1d ago"
  },
  {
    id: 5,
    platform: "Reddit",
    type: "creator",
    score: 0.79,
    topic: "creator ambition",
    title: "Small creator asks how to keep a recurring content series sustainable",
    why: "The signal points to long-term creator potential and a need for structure, support, or ecosystem fit.",
    action: "Shortlist for creator follow-up and log as a candidate for a future program or relationship track.",
    status: "shortlisted",
    source: "r/creatorgrowth · 4h ago"
  },
  {
    id: 6,
    platform: "TikTok",
    type: "partner",
    score: 0.76,
    topic: "template demand",
    title: "Comment thread asks for reusable templates and faster repeatable output",
    why: "This suggests demand for workflow packaging, educational distribution, and possible affiliate or ecosystem opportunities.",
    action: "Recommend a content follow-up first, then decide whether the creator is partnership-ready.",
    status: "active",
    source: "@performancecuts · 12h ago"
  }
];

const metricsMap = {};
const toast = document.getElementById("toast");
const tabs = document.getElementById("tabs");
const list = document.getElementById("opportunityList");
const note = document.getElementById("toolbarNote");

let currentFilter = "all";

function setText(id, value) {
  document.getElementById(id).textContent = value;
}

function renderStaticContent() {
  document.title = siteConfig.meta.title;
  setText("eyebrow", siteConfig.brand.eyebrow);
  setText("brandMark", siteConfig.brand.mark);
  setText("brandName", siteConfig.brand.name);
  setText("brandSub", siteConfig.brand.sub);
  setText("statusPill", siteConfig.brand.status);
  setText("heroTitle", siteConfig.hero.title);
  setText("heroDescription", siteConfig.hero.description);
  setText("primaryCta", siteConfig.hero.primaryCta);
  setText("secondaryCta", siteConfig.hero.secondaryCta);
  setText("heroCardLabel", siteConfig.hero.cardLabel);
  setText("heroCardBody", siteConfig.hero.cardBody);

  setText("whyKicker", siteConfig.whyNow.kicker);
  setText("whyTitle", siteConfig.whyNow.title);
  setText("dashboardKicker", siteConfig.dashboard.kicker);
  setText("dashboardTitle", siteConfig.dashboard.title);
  setText("workflowKicker", siteConfig.workflow.kicker);
  setText("workflowTitle", siteConfig.workflow.title);
  setText("examplesKicker", siteConfig.examples.kicker);
  setText("examplesTitle", siteConfig.examples.title);
  setText("decisionsKicker", siteConfig.decisions.kicker);
  setText("takeawayKicker", siteConfig.takeaway.kicker);
  setText("takeawayCopy", siteConfig.takeaway.body);
  setText("scanButton", siteConfig.dashboard.scanLabel);
  setText("exportButton", siteConfig.dashboard.exportLabel);

  document.getElementById("summaryCards").innerHTML = siteConfig.summaryCards
    .map((card) => `<article class="mini-card"><span class="mini-label">${card.label}</span><p>${card.value}</p></article>`)
    .join("");

  document.getElementById("challengeGrid").innerHTML = siteConfig.whyNow.challenges
    .map((item) => `<article class="challenge-card"><h3>${item.title}</h3><p>${item.body}</p></article>`)
    .join("");

  document.getElementById("metricGrid").innerHTML = siteConfig.dashboard.metrics
    .map((metric) => {
      metricsMap[metric.key] = metric.value;
      return `
        <article class="metric-card">
          <span class="metric-label">${metric.label}</span>
          <strong class="metric-value" data-metric="${metric.key}">${metric.value}</strong>
          <span class="metric-footnote">${metric.footnote}</span>
        </article>
      `;
    })
    .join("");

  document.getElementById("workflowGrid").innerHTML = siteConfig.workflow.steps
    .map((step, index) => `<article class="workflow-step"><span class="step-number">${index + 1}</span><h3>${step.title}</h3><p>${step.body}</p></article>`)
    .join("");

  document.getElementById("exampleGrid").innerHTML = siteConfig.examples.cards
    .map((card) => `<article class="example-card"><div class="example-type">${card.type}</div><h3>${card.title}</h3><p>${card.body}</p></article>`)
    .join("");

  document.getElementById("decisionList").innerHTML = siteConfig.decisions.items
    .map((item) => `<li>${item}</li>`)
    .join("");

  document.getElementById("tagRow").innerHTML = siteConfig.takeaway.tags
    .map((tag) => `<span>${tag}</span>`)
    .join("");

  document.getElementById("tabs").innerHTML = siteConfig.dashboard.filters
    .map((filter, index) => `<button class="tab ${index === 0 ? "active" : ""}" data-filter="${filter.value}">${filter.label}</button>`)
    .join("");
}

function typeLabel(type) {
  if (type === "user") return "User Intent";
  if (type === "creator") return "Creator Lead";
  return "Partnership Fit";
}

function countByType(type) {
  return opportunities.filter((item) => item.type === type).length;
}

function getVisibleItems() {
  if (currentFilter === "all") return opportunities;
  if (currentFilter === "shortlisted") return opportunities.filter((item) => item.status === "shortlisted");
  return opportunities.filter((item) => item.type === currentFilter);
}

function cardButtons(item) {
  const primary = item.type === "creator" ? "Draft DM" : "Draft Reply";
  const secondary = item.type === "partner" ? "Share Workflow" : "View Context";
  const shortlistText = item.status === "shortlisted" ? "Shortlisted" : "Shortlist";

  return `
    <button class="card-button primary" data-action="draft" data-id="${item.id}">${primary}</button>
    <button class="card-button secondary" data-action="context" data-id="${item.id}">${secondary}</button>
    <button class="card-button success" data-action="shortlist" data-id="${item.id}">${shortlistText}</button>
    <button class="card-button danger" data-action="skip" data-id="${item.id}">Skip</button>
  `;
}

function renderCards() {
  const visible = getVisibleItems();
  note.textContent = `Showing ${visible.length} active opportunities`;

  if (!visible.length) {
    list.innerHTML = `
      <article class="opportunity-card">
        <h3 class="card-title">No opportunities in this view yet</h3>
        <p class="detail-copy">Try another filter or run a scan to repopulate the list.</p>
      </article>
    `;
    return;
  }

  list.innerHTML = visible
    .map(
      (item) => `
        <article class="opportunity-card ${item.status === "shortlisted" ? "shortlisted" : ""}">
          <div class="card-header">
            <div class="card-tags">
              <span class="platform-badge">${item.platform}</span>
              <span class="type-badge type-${item.type}">${typeLabel(item.type)}</span>
              <span class="score-badge">Score ${item.score.toFixed(2)}</span>
              <span class="topic-badge">${item.topic}</span>
              <span class="status-badge ${item.status === "shortlisted" ? "shortlisted" : ""}">${
                item.status === "shortlisted" ? "Shortlisted" : "Active"
              }</span>
            </div>
          </div>
          <h3 class="card-title">${item.title}</h3>
          <div class="card-detail-grid">
            <div class="detail-panel">
              <span class="detail-label">Why this matters</span>
              <p class="detail-copy">${item.why}</p>
            </div>
            <div class="detail-panel">
              <span class="detail-label">Recommended action</span>
              <p class="detail-copy">${item.action}</p>
            </div>
          </div>
          <div class="card-actions">${cardButtons(item)}</div>
          <div class="card-meta">Source: ${item.source}</div>
        </article>
      `
    )
    .join("");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("visible"), 1800);
}

function animateMetric(element, target) {
  const start = Number(element.textContent) || 0;
  const diff = target - start;
  const duration = 500;
  const startTime = performance.now();

  function step(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    element.textContent = Math.round(start + diff * progress);
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

function setFilter(filter) {
  currentFilter = filter;
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.filter === filter);
  });
  renderCards();
}

function initEvents() {
  tabs.addEventListener("click", (event) => {
    const button = event.target.closest(".tab");
    if (!button) return;
    setFilter(button.dataset.filter);
  });

  list.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;

    const item = opportunities.find((entry) => entry.id === Number(button.dataset.id));
    if (!item) return;

    if (button.dataset.action === "shortlist") {
      item.status = item.status === "shortlisted" ? "active" : "shortlisted";
      renderCards();
      showToast(item.status === "shortlisted" ? "Added to shortlist" : "Removed from shortlist");
      return;
    }

    if (button.dataset.action === "draft") {
      showToast(item.type === "creator" ? "Draft DM prepared" : "Reply draft prepared");
      return;
    }

    if (button.dataset.action === "context") {
      showToast("Context opened for review");
      return;
    }

    if (button.dataset.action === "skip") {
      item.status = "skipped";
      const index = opportunities.indexOf(item);
      opportunities.splice(index, 1);
      renderCards();
      showToast("Opportunity skipped");
    }
  });

  document.getElementById("scanButton").addEventListener("click", () => {
    const scanned = metricsMap.scanned + Math.floor(Math.random() * 18) + 4;
    animateMetric(document.querySelector('[data-metric="scanned"]'), scanned);
    animateMetric(document.querySelector('[data-metric="users"]'), countByType("user"));
    animateMetric(document.querySelector('[data-metric="creators"]'), countByType("creator"));
    animateMetric(document.querySelector('[data-metric="partners"]'), countByType("partner"));
    showToast("Scan completed. New signals qualified.");
  });

  document.getElementById("exportButton").addEventListener("click", () => {
    const shortlistedItems = opportunities.filter((item) => item.status === "shortlisted");
    const blob = new Blob([JSON.stringify(shortlistedItems, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "signal-to-action-shortlist.json";
    link.click();
    URL.revokeObjectURL(url);
    showToast(`Shortlist exported with ${shortlistedItems.length} item${shortlistedItems.length === 1 ? "" : "s"}`);
  });
}

renderStaticContent();
renderCards();
initEvents();

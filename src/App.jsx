import { useState } from "react";

const cities = [
  {
    name: "Portland, OR",
    score: 2,
    status: "CONTRACTING",
    unemployment: "5.5%",
    jobGrowth: "-1.0%",
    jobsChanged: "-20,000 since 2023",
    swOpenings: "107-213",
    applicantsPerJob: "76",
    totalTech: "811",
    techPct: "~9%",
    majorEmployers: "Intel (cutting), Nike (cutting), OHSU",
    techTrend: "Shrinking; employers leaving city",
    avgTechSalary: "$120-135K",
    stateTax: "9.9% + local surcharges",
    colIndex: "~110",
    rent1br: "$1,400-1,800",
    salaryCol: "Poor — high tax erodes take-home",
    officeVacancy: "34.6% (worst in US)",
    popTrend: "Outmigration; losing $1B/yr taxable income",
    capitalRank: "80th of 81 (ULI)",
    biggestRisk: "Structural economic decline; urban doom loop",
    findings: [
      "80th of 81 cities for capital investment — only Hartford, CT is worse",
      "35% downtown office vacancy — highest in US among top 25 CBDs",
      "Multnomah County lost 20,000 jobs since June 2023; 40,000 below pre-pandemic",
      "Oregon had ~9,000 mass layoffs in 2025 — near Great Recession levels",
      "Only 107 SW eng openings with 76 applicants each",
      "9.9% state income tax + Metro + County + City surcharges",
      "IRS data: departing residents earn $32K/yr more than arriving ones",
      "Employment CONTRACTING while national economy EXPANDING — structural, not cyclical"
    ]
  },
  {
    name: "Austin, TX",
    score: 6,
    status: "GROWING",
    unemployment: "3.4-3.5%",
    jobGrowth: "+1.2-1.5%",
    jobsChanged: "+15,000-20,000",
    swOpenings: "~2,500-3,000",
    applicantsPerJob: "~40-50 est.",
    totalTech: "~8,000-10,000",
    techPct: "16.3%",
    majorEmployers: "Oracle, Apple, Tesla, Meta, Dell, Samsung",
    techTrend: "Growing but saturated with talent",
    avgTechSalary: "$135K",
    stateTax: "0%",
    colIndex: "~105 (rising fast)",
    rent1br: "$1,500-2,000",
    salaryCol: "Good — no tax, moderate COL",
    officeVacancy: "~18-20%",
    popTrend: "Strong inflow (moderating)",
    capitalRank: "Top 10",
    biggestRisk: "Oversaturation of talent; rising COL",
    findings: [
      "3.4-3.5% unemployment, +1.2-1.5% job growth — healthy but moderating",
      "16.3% of jobs are tech-related (vs 9% national average)",
      "No state income tax — massive advantage over high-tax states",
      "UT Austin produces thousands of CS grads/year; talent pool oversaturated",
      "Cost of living has risen sharply — rent doubled since 2015",
      "Oracle, Tesla, Apple layoff cycles flood local market with displaced workers",
      "Strong for W-2 roles; brutal competition for mid-level positions"
    ]
  },
  {
    name: "Raleigh-Durham, NC",
    score: 7,
    status: "GROWING",
    unemployment: "~3.1%",
    jobGrowth: "+1.5-2.0%",
    jobsChanged: "+12,000-15,000",
    swOpenings: "~1,500-2,000",
    applicantsPerJob: "~30-40 est.",
    totalTech: "~4,000-5,000",
    techPct: "~14%",
    majorEmployers: "IBM, Cisco, GSK, Epic, Red Hat, SAS",
    techTrend: "Growing; biotech + software intersection",
    avgTechSalary: "$122K",
    stateTax: "4.5-4.75%",
    colIndex: "~95.4",
    rent1br: "$1,200-1,500",
    salaryCol: "Best — low COL, decent salary, below-avg tax",
    officeVacancy: "~14-16%",
    popTrend: "Strong inflow",
    capitalRank: "Top 15",
    biggestRisk: "Smaller market; fewer senior-level roles",
    findings: [
      "~3.1% unemployment — lowest of all compared cities",
      "Only US tech hub with cost of living BELOW national average (index: 95.4)",
      "26.8% STEM job growth from 2019-2024 (14th nationally)",
      "Research Triangle is a strong biotech + software intersection",
      "4,000 tech companies, 60,000+ tech workers, 600+ life science companies",
      "Architecture/Engineering has 5 jobs per seeker — extreme demand",
      "IT job postings dropped 14.38% YoY statewide (Oct 2024 to Oct 2025)",
      "Smaller market = fewer senior-level roles; mid-size companies are the play"
    ]
  },
  {
    name: "Seattle, WA",
    score: 5,
    status: "CONTRACTING",
    unemployment: "4.9-5.1%",
    jobGrowth: "-0.2%",
    jobsChanged: "-6,600 statewide",
    swOpenings: "~1,800-2,500",
    applicantsPerJob: "~50-60 est.",
    totalTech: "~6,000-8,000",
    techPct: "~15%",
    majorEmployers: "Amazon (cutting), Microsoft (cutting), Boeing",
    techTrend: "Past 'golden age'; structural reset underway",
    avgTechSalary: "$135-155K",
    stateTax: "0%",
    colIndex: "~142",
    rent1br: "$2,200-3,000",
    salaryCol: "Moderate — high salary offset by very high COL",
    officeVacancy: "~22-25%",
    popTrend: "Slowing; some outflow",
    capitalRank: "Top 20 (declining)",
    biggestRisk: "Tech sector contraction; 2nd worst job posting decline in US",
    findings: [
      "SECOND WORST drop in job postings in the US — down 35% since 2020",
      "Software dev postings down 68% from pre-COVID benchmark",
      "Tech employment fell 6% from mid-2022 to early 2025",
      "Amazon cut 16,000 globally; Microsoft cut 3,200+ in WA state",
      "Senior SW engineers reporting 2+ years, 1,000+ applications, 25% pay cuts",
      "No state income tax is real advantage — but JumpStart tax driving employer exits",
      "High salaries offset by extreme cost of living — especially housing"
    ]
  },
  {
    name: "Dallas-Fort Worth, TX",
    score: 5,
    status: "GROWING",
    unemployment: "3.8-4.0%",
    jobGrowth: "+1.5-1.8%",
    jobsChanged: "+25,000-30,000",
    swOpenings: "~2,000-2,500",
    applicantsPerJob: "~35-45 est.",
    totalTech: "~6,000-8,000",
    techPct: "~10%",
    majorEmployers: "AT&T, Texas Instruments, Salesforce, JPMorgan",
    techTrend: "Growing; diversified economy",
    avgTechSalary: "$120-130K",
    stateTax: "0%",
    colIndex: "~97",
    rent1br: "$1,200-1,600",
    salaryCol: "Good — no tax, low COL",
    officeVacancy: "~20-22%",
    popTrend: "Strong inflow",
    capitalRank: "Top 10",
    biggestRisk: "Less tech-dense; more enterprise/corporate",
    findings: [
      "Healthy job growth, no state income tax, low cost of living",
      "Less tech-dense than Austin or Seattle — more enterprise/corporate focused",
      "AT&T, Texas Instruments anchor employers; telecom/defense/finance",
      "Lower competition than Austin for the same Texas no-tax advantage",
      "Growing AI and cloud adoption in enterprise sector",
      "Strong diversified economy reduces single-sector risk"
    ]
  },
  {
    name: "San Francisco, CA",
    score: 5,
    status: "CONTRACTING",
    unemployment: "3.7%",
    jobGrowth: "-0.5%",
    jobsChanged: "-4,400 in 2025; -12,400 in Q1 2026",
    swOpenings: "~7,500-9,000",
    applicantsPerJob: "~50-70 est.",
    totalTech: "~8,500-9,000",
    techPct: "20.8%",
    majorEmployers: "Meta (cutting), Google (cutting), Amazon (cutting), Salesforce (cutting), Apple, Broadcom (cutting)",
    techTrend: "AI hiring surging (+24% YoY); all other tech contracting sharply",
    avgTechSalary: "$175-231K",
    stateTax: "13.3%",
    colIndex: "~189",
    rent1br: "$3,500-3,790",
    salaryCol: "Poor — extreme COL erodes even top-tier comp",
    officeVacancy: "32.8% (improving from 35.8%)",
    popTrend: "Stagnant; +0.05% growth (effectively flat)",
    capitalRank: "#1 globally for AI/tech talent concentration",
    biggestRisk: "AI startup shakeout + Big Tech layoffs; dual contraction risk",
    findings: [
      "Bay Area lost 4,400 jobs in 2025; information sector down 4.5% — Q1 2026 added 12,400 more cuts",
      "33% of all open AI roles in the US are in the Bay Area — 3x higher than New York",
      "1BR rent hit all-time high of $3,790 (Zumper Q1 2026, +18.4% YoY)",
      "Office vacancy improving: down to 32.8% from 35.8% — AI companies leased 1M+ sq ft",
      "13.3% state income tax on top of extreme COL makes take-home purchasing power poor",
      "Population growth stalled to near-zero: only 4,000 people added in 2024-2025 vs 50,000 prior year",
      "VCs warning of AI startup 'weeding out' in 2026 — could reverse leasing and hiring gains",
      "Software engineer avg salary $231K (Glassdoor) is 55% above national — but COL is 89% above"
    ]
  },
  {
    name: "Los Angeles, CA",
    score: 4,
    status: "CONTRACTING",
    unemployment: "5.4-5.6%",
    jobGrowth: "-0.4%",
    jobsChanged: "-53,934 residents lost; tech restructuring ongoing",
    swOpenings: "~2,500-3,000",
    applicantsPerJob: "~50-60 est.",
    totalTech: "~13,000",
    techPct: "~12%",
    majorEmployers: "Netflix (hiring), SpaceX (hiring), Riot Games (hiring), Snap (cutting), Amazon (cutting)",
    techTrend: "Shifting from general SWE to AI/ML and cloud; entry-level collapsing",
    avgTechSalary: "$115-140K",
    stateTax: "13.3%",
    colIndex: "~166",
    rent1br: "$2,100-2,400",
    salaryCol: "Poor — 66% above-national COL with average-tier salaries",
    officeVacancy: "16-33.3% (downtown 33.3%)",
    popTrend: "Losing; LA County lost 53,934 residents (largest US county decline)",
    capitalRank: "Top 4 in US for VC deployment",
    biggestRisk: "Population exodus + entry-level job collapse from AI displacement",
    findings: [
      "LA County saw largest single-year population decline of any US county — 53,934 residents lost (2024-2025)",
      "Downtown LA office vacancy reached 33.3% as of Q3 2025 with negative absorption",
      "Tech salaries ($115-117K avg) have not kept pace with 66% above-national cost of living",
      "Entry-level tech market collapsing — graduates struggling to land junior roles as AI eliminates positions",
      "Ranks 4th in US for venture capital deployment; strong in AI, fintech, and creator economy",
      "55% of US hiring managers expect 2026 layoffs; 44% cite AI as primary driver",
      "Netflix, Riot Games, SpaceX actively hiring while Snap and Amazon cutting significantly",
      "13.3% CA income tax + high COL makes LA less competitive vs remote/distributed roles"
    ]
  },
  {
    name: "San Diego, CA",
    score: 5,
    status: "STAGNANT",
    unemployment: "4.7%",
    jobGrowth: "+1.4%",
    jobsChanged: "+5,800 through Nov 2025; but pro services -2.3%",
    swOpenings: "~1,500-2,000",
    applicantsPerJob: "~40-50 est.",
    totalTech: "~5,000+",
    techPct: "~12%",
    majorEmployers: "Qualcomm (stable), Illumina, ServiceNow, Brain Corp, Cubic Corp",
    techTrend: "Defense tech growing; mainstream tech flat; life sciences VC down 47%",
    avgTechSalary: "$130-143K",
    stateTax: "13.3%",
    colIndex: "~145",
    rent1br: "$2,100-2,200",
    salaryCol: "Moderate — decent salaries offset by high COL and CA tax",
    officeVacancy: "14.1-21.1%",
    popTrend: "Losing; county lost 5,300 residents (first decline since 2021)",
    capitalRank: "Strong VC ($3B+ Q1 2026); heavily defense/life sciences",
    biggestRisk: "Military-industrial dependence; innovation cluster stagnation",
    findings: [
      "San Diego County lost 5,300 residents in 2025 — first population decline since 2021, largest in 15 years",
      "Professional/business services declined 2.3% in Q4 2025; technical services down 3.3%",
      "Life sciences VC funding plummeted 47% from 2024; NIH-funded projects fell from 402 to 336",
      "Q1 2026 saw $3B+ in VC funding — but heavily skewed to defense tech (Shield AI $2B round)",
      "14,201 fewer tech jobs entered the market (2022-2024) than tech degrees awarded — oversupply of talent",
      "Median 1BR rent declined 5.6% YoY with 15% surge in available listings — rare affordability signal",
      "Qualcomm anchors market with 49,000 global employees; FY2025 revenue $44B (+13% YoY)",
      "Military supports 357,000 jobs and $61.3B economic output — single-sector risk"
    ]
  },
  {
    name: "Sacramento, CA",
    score: 3,
    status: "CONTRACTING",
    unemployment: "5.0%",
    jobGrowth: "-0.1%",
    jobsChanged: "-800 (Nov-Dec 2025)",
    swOpenings: "~290-650",
    applicantsPerJob: "~50-60 est.",
    totalTech: "~1,400",
    techPct: "~5%",
    majorEmployers: "Intel (cutting 15,000+), HPE (cutting 2,500), Apple, Bosch (investing), Accenture",
    techTrend: "Anchor employers contracting; Bosch semiconductor investment is bright spot",
    avgTechSalary: "$130-151K",
    stateTax: "13.3%",
    colIndex: "~124",
    rent1br: "$1,400-1,700",
    salaryCol: "Moderate — lower rent than other CA cities but 13.3% tax still bites",
    officeVacancy: "21.9% (record high)",
    popTrend: "Modest growth (+0.47% city, +1.16% metro)",
    capitalRank: "Bosch $1.9B semiconductor investment; otherwise limited",
    biggestRisk: "Intel + HPE cutting simultaneously; concentrated employer risk",
    findings: [
      "Intel cutting 15,000+ jobs globally (14% of workforce) with next round July 2026; HPE cutting 2,500",
      "Office vacancy hit record 21.9% in Q1 2025 — driven by state government move-outs",
      "Only 289-651 software engineer openings across Indeed and LinkedIn — smallest CA market",
      "Entry-level SWE salary ($112K) is 11% below national average despite 13.3% CA income tax",
      "Bosch investing $1.9B in semiconductor facility — largest private investment in region",
      "Tech sector contributed $12B annually and employs ~50,000 — but heavily concentrated in few employers",
      "50% cheaper than SF Bay Area for housing — best affordability among CA tech markets",
      "Recent monthly job decline (-800 in Dec 2025) indicates softening momentum heading into 2026"
    ]
  }
];

const statusColor = (s) => {
  if (s === "CONTRACTING") return { bg: "#1a0000", text: "#ff4444", border: "#3a0000", glow: "rgba(255,68,68,0.06)" };
  if (s === "GROWING") return { bg: "#0a1a0a", text: "#4ade80", border: "#0a3a0a", glow: "rgba(74,222,128,0.06)" };
  return { bg: "#1a1a00", text: "#facc15", border: "#3a3a00", glow: "rgba(250,204,21,0.06)" };
};

const scoreColor = (s) => {
  if (s <= 3) return "#ef4444";
  if (s <= 5) return "#f59e0b";
  if (s <= 7) return "#4ade80";
  return "#34d399";
};

const topRatedCity = [...cities].sort((a, b) => b.score - a.score)[0];

const ScoreBar = ({ score }) => (
  <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
    <span style={{ color: "#4b5563", fontSize: 10, fontFamily: "'JetBrains Mono', monospace", marginRight: 6 }}>Score</span>
    {Array.from({ length: 10 }, (_, i) => (
      <div key={i} style={{
        width: 10, height: 16, borderRadius: 2,
        background: i < score ? scoreColor(score) : "#1a1a1a",
        border: `1px solid ${i < score ? scoreColor(score) + "55" : "#222"}`,
        opacity: i < score ? 1 : 0.3
      }} />
    ))}
    <span style={{ marginLeft: 6, fontSize: 13, fontWeight: 700, color: scoreColor(score), fontFamily: "'JetBrains Mono', monospace" }}>{score}/10</span>
  </div>
);

const getSections = (city) => [
  {
    title: "Employment & Economy",
    icon: "📊",
    highlights: [
      { value: city.unemployment, label: "Unemployment" },
      { value: city.jobGrowth, label: "Job Growth YOY" },
      { value: city.jobsChanged, label: "Jobs Changed" }
    ],
    details: [
      { label: "Office Vacancy", value: city.officeVacancy },
      { label: "Applicants/Job", value: city.applicantsPerJob }
    ]
  },
  {
    title: "Tech Ecosystem",
    icon: "⚙",
    highlights: [
      { value: city.swOpenings, label: "SW Eng Openings" },
      { value: city.totalTech, label: "Total Tech Jobs" },
      { value: city.majorEmployers.split(",").slice(0, 2).join(", ") + "...", label: "Major Employers" }
    ],
    details: [
      { label: "Tech % of Economy", value: city.techPct },
      { label: "Tech Trend", value: city.techTrend }
    ]
  },
  {
    title: "Cost & Compensation",
    icon: "💲",
    highlights: [
      { value: city.avgTechSalary, label: "Avg Tech Salary" },
      { value: city.stateTax, label: "State Income Tax" },
      { value: city.colIndex, label: "COL Index" }
    ],
    details: [
      { label: "1BR Rent", value: city.rent1br },
      { label: "Salary/COL Ratio", value: city.salaryCol }
    ]
  },
  {
    title: "Market Dynamics & Outlook",
    icon: "📈",
    highlights: [
      { value: city.capitalRank, label: "Capital Investment" },
      { value: city.popTrend.split(";")[0], label: "Population Trend" },
      { value: city.biggestRisk.split(";")[0], label: "Biggest Risk" }
    ],
    details: [
      { label: "Office Vacancy", value: city.officeVacancy },
      { label: "Full Risk", value: city.biggestRisk }
    ]
  }
];

const DataCard = ({ section, sc, isOpen, onToggle }) => (
  <div style={{ background: "#111", borderRadius: 6, border: "1px solid #1f1f1f", overflow: "hidden" }}>
    <div onClick={onToggle} style={{
      padding: "10px 14px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ fontSize: 11, opacity: 0.5 }}>{section.icon}</span>
        <span style={{ color: "#d1d5db", fontSize: 11, fontWeight: 600 }}>{section.title}</span>
      </div>
      <span style={{ color: "#4b5563", fontSize: 14, transform: isOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>⌄</span>
    </div>
    {isOpen && (
      <div style={{ padding: "0 14px 12px" }}>
        <div style={{ display: "flex", gap: 16 }}>
          {section.highlights.map((h, i) => (
            <div key={i} style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#e5e7eb", fontFamily: "'JetBrains Mono', monospace", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{h.value}</div>
              <div style={{ fontSize: 9, color: "#4b5563", marginTop: 2, fontFamily: "'JetBrains Mono', monospace" }}>{h.label}</div>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

const findingColor = (f) => {
  if (f.includes("BUT") || f.includes("worst") || f.includes("CONTRACTING") || f.includes("SECOND WORST") || f.includes("cutting") || f.includes("lost") || f.includes("dropped") || f.includes("fell") || f.includes("plummeted") || f.includes("collapsing") || f.includes("decline") || f.includes("collapsed")) return "#ef4444";
  if (f.includes("STRONG") || f.includes("Best") || f.includes("lowest") || f.includes("No state income tax") || f.includes("Healthy") || f.includes("investing")) return "#4ade80";
  return "#444";
};

export default function App() {
  const [selected, setSelected] = useState(() => topRatedCity.name);
  const [sortBy, setSortBy] = useState("score");

  const sorted = [...cities].sort((a, b) => {
    if (sortBy === "score") return b.score - a.score;
    if (sortBy === "unemployment") return parseFloat(a.unemployment) - parseFloat(b.unemployment);
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  const [openCards, setOpenCards] = useState(new Set(["Employment & Economy", "Tech Ecosystem", "Cost & Compensation", "Market Dynamics & Outlook"]));

  const toggleCard = (title) => {
    const next = new Set(openCards);
    next.has(title) ? next.delete(title) : next.add(title);
    setOpenCards(next);
  };

  const city = cities.find(c => c.name === selected) || cities[0];
  const sc = statusColor(city.status);
  const sections = getSections(city);

  return (
    <div style={{ background: "#0c0c0c", minHeight: "100vh", fontFamily: "'Inter', -apple-system, sans-serif", color: "#e5e7eb" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* Header */}
      {(() => {
        const growing = cities.filter(c => c.status === "GROWING").length;
        const contracting = cities.filter(c => c.status === "CONTRACTING").length;
        const stagnant = cities.filter(c => c.status === "STAGNANT").length;
        const statStyle = { textAlign: "center", padding: "0 20px" };
        const statNum = (color, size = 22) => ({ fontSize: size, fontWeight: 700, color, fontFamily: "'JetBrains Mono', monospace", lineHeight: 1 });
        const statLabel = { fontSize: 9, color: "#4b5563", letterSpacing: 1.5, marginTop: 2, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase" };
        const divider = { width: 1, height: 36, background: "#1f1f1f", flexShrink: 0 };
        return (
          <div style={{ borderBottom: "1px solid #1f1f1f", padding: "16px 24px", display: "flex", alignItems: "center", background: "#0c0c0c" }}>
            <div style={{ marginRight: "auto" }}>
              <h1 style={{ color: "#e5e7eb", fontSize: 18, margin: 0, fontWeight: 600, fontFamily: "'JetBrains Mono', monospace" }}>Job Market Intelligence</h1>
              <p style={{ color: "#4b5563", fontSize: 10, margin: "3px 0 0", fontFamily: "'JetBrains Mono', monospace", letterSpacing: 0.5 }}>US TECH MARKET COMPARISON · APRIL 2026</p>
            </div>
            <div style={statStyle}>
              <div style={statNum("#e5e7eb")}>{cities.length}</div>
              <div style={statLabel}>Cities Tracked</div>
            </div>
            <div style={divider} />
            <div style={statStyle}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
                <span style={{ color: "#4ade80", fontSize: 12 }}>↗</span>
                <span style={statNum("#4ade80")}>{growing}</span>
                <span style={{ color: "#4ade80", fontSize: 12 }}>↗</span>
              </div>
              <div style={statLabel}>Growing</div>
            </div>
            <div style={divider} />
            <div style={statStyle}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
                <span style={{ color: "#ef4444", fontSize: 12 }}>↘</span>
                <span style={statNum("#ef4444")}>{contracting}</span>
                <span style={{ color: "#ef4444", fontSize: 12 }}>↘</span>
              </div>
              <div style={statLabel}>Contracting</div>
            </div>
            <div style={divider} />
            <div style={statStyle}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
                <span style={{ color: "#f59e0b", fontSize: 12 }}>—</span>
                <span style={statNum("#f59e0b")}>{stagnant}</span>
                <span style={{ color: "#f59e0b", fontSize: 12 }}>—</span>
              </div>
              <div style={statLabel}>Stagnant</div>
            </div>
            <div style={divider} />
            <div style={{ ...statStyle, display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ color: "#f59e0b", fontSize: 16 }}>☆</span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: scoreColor(topRatedCity.score) }}>{topRatedCity.name.split(",")[0]}</div>
                <div style={{ ...statLabel, textAlign: "left" }}>Top Rated</div>
              </div>
            </div>
          </div>
        );
      })()}

      <div style={{ display: "flex", height: "calc(100vh - 52px)" }}>
        {/* Sidebar */}
        <div style={{ width: 200, background: "#0f0f0f", borderRight: "1px solid #1f1f1f", overflowY: "auto", flexShrink: 0, display: "flex", flexDirection: "column" }}>
          <div style={{ padding: "12px 12px 8px" }}>
            <div style={{ display: "flex", gap: 4 }}>
              {[["score", "Score"], ["unemployment", "Unemp."], ["name", "A-Z"]].map(([key, label]) => (
                <button key={key} onClick={() => setSortBy(key)} style={{
                  background: sortBy === key ? "#1a1a1a" : "transparent",
                  border: `1px solid ${sortBy === key ? "#333" : "#1a1a1a"}`,
                  color: sortBy === key ? "#d1d5db" : "#4b5563",
                  padding: "3px 7px", borderRadius: 3, cursor: "pointer",
                  fontSize: 9, fontFamily: "'JetBrains Mono', monospace"
                }}>{label}</button>
              ))}
            </div>
          </div>

          <div style={{ flex: 1, overflowY: "auto" }}>
            {sorted.map(c => {
              const csc = statusColor(c.status);
              const isSel = selected === c.name;
              return (
                <div key={c.name} onClick={() => setSelected(c.name)} style={{
                  padding: "8px 12px", cursor: "pointer", display: "flex", alignItems: "center", gap: 8,
                  background: isSel ? "#161616" : "transparent",
                  borderLeft: isSel ? `2px solid ${csc.text}` : "2px solid transparent"
                }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
                    background: csc.text, opacity: isSel ? 1 : 0.6
                  }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontSize: 11, color: isSel ? "#e5e7eb" : "#9ca3af", fontWeight: isSel ? 600 : 400,
                      whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"
                    }}>{c.name}</div>
                  </div>
                  <div style={{
                    fontSize: 11, fontWeight: 600, color: scoreColor(c.score),
                    fontFamily: "'JetBrains Mono', monospace", flexShrink: 0
                  }}>{c.score}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detail Panel */}
        <div style={{ flex: 1, overflowY: "auto", background: "#0c0c0c" }}>
          <div style={{ padding: "20px 24px" }}>
            {/* City header */}
            <div style={{ marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <h2 style={{ margin: 0, fontSize: 18, color: "#e5e7eb", fontWeight: 600, fontFamily: "'JetBrains Mono', monospace" }}>{city.name}</h2>
                <div style={{ width: 1, height: 20, background: "#333" }} />
                <span style={{
                  padding: "2px 10px", fontSize: 9, fontWeight: 600, borderRadius: 3,
                  background: sc.bg, color: sc.text, border: `1px solid ${sc.border}`,
                  fontFamily: "'JetBrains Mono', monospace", letterSpacing: 0.5, textTransform: "uppercase"
                }}>{city.status}</span>
              </div>
              <ScoreBar score={city.score} />
            </div>

            {/* 2x2 Data Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {sections.map((section) => (
                <DataCard key={section.title} section={section} sc={sc} isOpen={openCards.has(section.title)} onToggle={() => toggleCard(section.title)} />
              ))}
            </div>

            {/* Key Findings */}
            <div style={{ marginTop: 16, padding: 14, background: "#0f0f0f", borderRadius: 6, border: "1px solid #1f1f1f" }}>
              <div style={{ color: "#4b5563", fontSize: 9, fontWeight: 600, letterSpacing: 1.5, marginBottom: 8, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase" }}>Key Findings</div>
              {city.findings.map((f, i) => (
                <div key={i} style={{
                  padding: "4px 0", fontSize: 10, color: "#9ca3af", lineHeight: 1.5,
                  borderBottom: i < city.findings.length - 1 ? "1px solid #1a1a1a" : "none",
                  fontFamily: "'JetBrains Mono', monospace"
                }}>
                  <span style={{ color: findingColor(f), marginRight: 6 }}>▸</span>
                  {f}
                </div>
              ))}
            </div>

            {/* Score Summary Footer */}
            <div style={{
              marginTop: 16, padding: "12px 14px", background: "#111", borderRadius: 6,
              border: "1px solid #1f1f1f", display: "flex", alignItems: "center", justifyContent: "space-between"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ color: "#4b5563", fontSize: 9, fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1 }}>FIT SCORE</span>
                <span style={{ fontSize: 20, fontWeight: 700, color: scoreColor(city.score), fontFamily: "'JetBrains Mono', monospace" }}>{city.score}/10</span>
              </div>
              <div style={{ fontSize: 10, color: "#4b5563", fontFamily: "'JetBrains Mono', monospace" }}>
                {cities.length} MARKETS · DATA AS OF APRIL 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

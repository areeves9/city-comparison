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
  }
];

const statusColor = (s) => {
  if (s === "CONTRACTING") return { bg: "#1a0000", text: "#ff4444", border: "#4a0000", glow: "rgba(255,68,68,0.08)" };
  if (s === "GROWING") return { bg: "#001a00", text: "#44ff44", border: "#004a00", glow: "rgba(68,255,68,0.08)" };
  return { bg: "#1a1a00", text: "#ffff44", border: "#4a4a00", glow: "rgba(255,255,68,0.08)" };
};

const scoreColor = (s) => {
  if (s <= 3) return "#ff4444";
  if (s <= 5) return "#ffaa44";
  if (s <= 7) return "#44dd44";
  return "#44ffaa";
};

const ScoreBar = ({ score }) => (
  <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
    {Array.from({ length: 10 }, (_, i) => (
      <div key={i} style={{
        width: 14, height: 22, borderRadius: 2,
        background: i < score ? scoreColor(score) : "#1a1a1a",
        border: `1px solid ${i < score ? scoreColor(score) + "88" : "#333"}`,
        opacity: i < score ? 1 : 0.3,
        boxShadow: i < score ? `0 0 6px ${scoreColor(score)}33` : "none"
      }} />
    ))}
    <span style={{ marginLeft: 8, fontSize: 20, fontWeight: 800, color: scoreColor(score), fontFamily: "'JetBrains Mono', monospace", textShadow: `0 0 12px ${scoreColor(score)}44` }}>{score}/10</span>
  </div>
);

const MetricRow = ({ label, value, highlight }) => (
  <div style={{
    display: "flex", justifyContent: "space-between", alignItems: "flex-start",
    padding: "7px 0", borderBottom: "1px solid #141414"
  }}>
    <span style={{ color: "#666", fontSize: 11, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: 0.5, flex: "0 0 40%" }}>{label}</span>
    <span style={{
      color: highlight === "bad" ? "#ff6666" : highlight === "good" ? "#66ff66" : highlight === "warn" ? "#ffaa44" : "#bbb",
      fontSize: 12, fontWeight: highlight ? 600 : 400, textAlign: "right", flex: "0 0 58%",
      fontFamily: "'JetBrains Mono', monospace"
    }}>{value}</span>
  </div>
);

const CityCard = ({ city, isExpanded, onToggle }) => {
  const sc = statusColor(city.status);
  return (
    <div style={{
      background: "#0d0d0d", border: `1px solid ${sc.border}`,
      borderRadius: 6, overflow: "hidden", transition: "all 0.2s",
      boxShadow: isExpanded ? `0 4px 24px ${sc.glow}, 0 0 1px ${sc.border}` : `0 1px 4px rgba(0,0,0,0.3)`
    }}>
      <div onClick={onToggle} style={{
        padding: "18px 24px", cursor: "pointer",
        borderBottom: isExpanded ? `1px solid ${sc.border}` : "none",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: isExpanded ? `linear-gradient(135deg, ${sc.glow}, transparent 60%)` : "transparent",
        transition: "background 0.2s"
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <h2 style={{ margin: 0, fontSize: 20, color: "#eee", fontFamily: "'Space Mono', monospace" }}>{city.name}</h2>
            <span style={{
              padding: "2px 10px", fontSize: 10, fontWeight: 700, borderRadius: 3,
              background: sc.bg, color: sc.text, border: `1px solid ${sc.border}`,
              fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1,
              textShadow: `0 0 8px ${sc.text}44`
            }}>{city.status}</span>
          </div>
          <ScoreBar score={city.score} />
        </div>
        <div style={{
          color: "#444", fontSize: 20, transform: isExpanded ? "rotate(180deg)" : "rotate(0)",
          transition: "transform 0.25s ease", width: 32, height: 32, display: "flex",
          alignItems: "center", justifyContent: "center", borderRadius: 4,
          background: isExpanded ? "#1a1a1a" : "transparent"
        }}>▾</div>
      </div>

      {isExpanded && (
        <div style={{ padding: "20px 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <div>
              <div style={{ color: sc.text, fontSize: 10, fontWeight: 700, letterSpacing: 2, marginBottom: 10, fontFamily: "'JetBrains Mono', monospace", textShadow: `0 0 8px ${sc.text}33` }}>EMPLOYMENT</div>
              <MetricRow label="Unemployment" value={city.unemployment} highlight={parseFloat(city.unemployment) > 4.5 ? "bad" : "good"} />
              <MetricRow label="Job Growth YoY" value={city.jobGrowth} highlight={city.jobGrowth.startsWith("-") ? "bad" : "good"} />
              <MetricRow label="Jobs Changed" value={city.jobsChanged} highlight={city.jobsChanged.startsWith("-") ? "bad" : "good"} />
              <MetricRow label="Office Vacancy" value={city.officeVacancy} />

              <div style={{ color: sc.text, fontSize: 10, fontWeight: 700, letterSpacing: 2, marginBottom: 10, marginTop: 20, fontFamily: "'JetBrains Mono', monospace", textShadow: `0 0 8px ${sc.text}33` }}>TECH MARKET</div>
              <MetricRow label="SW Eng Openings" value={city.swOpenings} />
              <MetricRow label="Applicants/Job" value={city.applicantsPerJob} highlight={parseInt(city.applicantsPerJob) > 50 ? "bad" : parseInt(city.applicantsPerJob) < 40 ? "good" : "warn"} />
              <MetricRow label="Total Tech Jobs" value={city.totalTech} />
              <MetricRow label="Tech % of Economy" value={city.techPct} />
              <MetricRow label="Major Employers" value={city.majorEmployers} />
              <MetricRow label="Tech Trend" value={city.techTrend} highlight={city.techTrend.includes("Shrinking") || city.techTrend.includes("Past") ? "bad" : city.techTrend.includes("Growing") ? "good" : "warn"} />
            </div>

            <div>
              <div style={{ color: sc.text, fontSize: 10, fontWeight: 700, letterSpacing: 2, marginBottom: 10, fontFamily: "'JetBrains Mono', monospace", textShadow: `0 0 8px ${sc.text}33` }}>COMPENSATION & COST</div>
              <MetricRow label="Avg Tech Salary" value={city.avgTechSalary} />
              <MetricRow label="State Income Tax" value={city.stateTax} highlight={city.stateTax === "0%" ? "good" : parseFloat(city.stateTax) > 5 ? "bad" : "warn"} />
              <MetricRow label="COL Index" value={city.colIndex} />
              <MetricRow label="1BR Rent" value={city.rent1br} />
              <MetricRow label="Salary/COL Ratio" value={city.salaryCol} highlight={city.salaryCol.includes("Poor") ? "bad" : city.salaryCol.includes("Best") || city.salaryCol.includes("Good") ? "good" : "warn"} />

              <div style={{ color: sc.text, fontSize: 10, fontWeight: 700, letterSpacing: 2, marginBottom: 10, marginTop: 20, fontFamily: "'JetBrains Mono', monospace", textShadow: `0 0 8px ${sc.text}33` }}>MARKET OUTLOOK</div>
              <MetricRow label="Capital Investment" value={city.capitalRank} />
              <MetricRow label="Population Trend" value={city.popTrend} highlight={city.popTrend.includes("Outmigration") || city.popTrend.includes("outflow") ? "bad" : "good"} />
              <MetricRow label="Biggest Risk" value={city.biggestRisk} />
            </div>
          </div>

          <div style={{ marginTop: 24, padding: 18, background: "#080808", borderRadius: 6, border: "1px solid #1a1a1a" }}>
            <div style={{ color: "#666", fontSize: 10, fontWeight: 700, letterSpacing: 2, marginBottom: 12, fontFamily: "'JetBrains Mono', monospace" }}>KEY FINDINGS</div>
            {city.findings.map((f, i) => (
              <div key={i} style={{
                padding: "6px 0", fontSize: 12, color: "#999", lineHeight: 1.6,
                borderBottom: i < city.findings.length - 1 ? "1px solid #111" : "none",
                fontFamily: "'JetBrains Mono', monospace"
              }}>
                <span style={{ color: f.includes("BUT") || f.includes("worst") || f.includes("CONTRACTING") || f.includes("SECOND WORST") || f.includes("cutting") || f.includes("lost") || f.includes("dropped") || f.includes("fell") ? "#ff6666" : f.includes("STRONG") || f.includes("Best") || f.includes("lowest") || f.includes("No state income tax") || f.includes("Healthy") ? "#66ff66" : "#555", marginRight: 8 }}>▸</span>
                {f}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const SummaryStats = ({ cities }) => {
  const growing = cities.filter(c => c.status === "GROWING").length;
  const contracting = cities.filter(c => c.status === "CONTRACTING").length;
  const avgScore = (cities.reduce((s, c) => s + c.score, 0) / cities.length).toFixed(1);
  const bestCity = [...cities].sort((a, b) => b.score - a.score)[0];

  return (
    <div style={{
      display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12,
      marginBottom: 24
    }}>
      {[
        { label: "CITIES TRACKED", value: cities.length, color: "#88aaff" },
        { label: "GROWING", value: growing, color: "#44ff44" },
        { label: "CONTRACTING", value: contracting, color: "#ff4444" },
        { label: "TOP RATED", value: bestCity.name.split(",")[0], color: scoreColor(bestCity.score) },
      ].map(({ label, value, color }) => (
        <div key={label} style={{
          background: "#0a0a0a", borderRadius: 6, padding: "14px 16px",
          border: "1px solid #1a1a1a", textAlign: "center"
        }}>
          <div style={{ fontSize: 22, fontWeight: 800, color, fontFamily: "'JetBrains Mono', monospace", textShadow: `0 0 12px ${color}33` }}>{value}</div>
          <div style={{ fontSize: 9, color: "#555", letterSpacing: 1.5, marginTop: 4, fontFamily: "'JetBrains Mono', monospace" }}>{label}</div>
        </div>
      ))}
    </div>
  );
};

export default function App() {
  const [expanded, setExpanded] = useState(new Set());
  const [sortBy, setSortBy] = useState("score");

  const sorted = [...cities].sort((a, b) => {
    if (sortBy === "score") return b.score - a.score;
    if (sortBy === "unemployment") return parseFloat(a.unemployment) - parseFloat(b.unemployment);
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  const toggle = (name) => {
    const next = new Set(expanded);
    next.has(name) ? next.delete(name) : next.add(name);
    setExpanded(next);
  };

  return (
    <div style={{ background: "#050505", minHeight: "100vh", padding: "32px 20px", fontFamily: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace" }}>
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />

      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div style={{ marginBottom: 32, borderBottom: "1px solid #1a1a1a", paddingBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 8 }}>
            <span style={{ color: "#44ff44", fontSize: 14, fontFamily: "'JetBrains Mono', monospace" }}>$</span>
            <h1 style={{ color: "#eee", fontSize: 24, margin: 0, fontFamily: "'Space Mono', monospace", fontWeight: 700 }}>
              Job Market Intelligence
            </h1>
          </div>
          <p style={{ color: "#444", fontSize: 11, margin: 0, letterSpacing: 1, fontFamily: "'JetBrains Mono', monospace" }}>
            US TECH MARKET COMPARISON · APRIL 2026 · SOURCES: BLS, INDEED, LINKEDIN, COLLIERS, ULI
          </p>
        </div>

        <SummaryStats cities={cities} />

        <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ color: "#444", fontSize: 10, letterSpacing: 1.5, marginRight: 4, fontFamily: "'JetBrains Mono', monospace" }}>SORT</span>
          {[["score", "Score"], ["unemployment", "Unemployment"], ["name", "Name"]].map(([key, label]) => (
            <button key={key} onClick={() => setSortBy(key)} style={{
              background: sortBy === key ? "#1a1a2a" : "transparent",
              border: `1px solid ${sortBy === key ? "#444" : "#1a1a1a"}`,
              color: sortBy === key ? "#ddd" : "#555",
              padding: "5px 14px", borderRadius: 4, cursor: "pointer",
              fontSize: 11, fontFamily: "'JetBrains Mono', monospace", letterSpacing: 0.5,
              transition: "all 0.15s"
            }}>{label}</button>
          ))}
          <button onClick={() => setExpanded(expanded.size === cities.length ? new Set() : new Set(cities.map(c => c.name)))} style={{
            background: "transparent", border: "1px solid #1a1a1a", color: "#555",
            padding: "5px 14px", borderRadius: 4, cursor: "pointer", marginLeft: "auto",
            fontSize: 11, fontFamily: "'JetBrains Mono', monospace",
            transition: "all 0.15s"
          }}>{expanded.size === cities.length ? "Collapse All" : "Expand All"}</button>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
          gap: 8,
          marginBottom: 24, padding: 14, background: "#0a0a0a", borderRadius: 6, border: "1px solid #1a1a1a"
        }}>
          {sorted.map(c => {
            const sc = statusColor(c.status);
            return (
              <div key={c.name} onClick={() => toggle(c.name)} style={{
                textAlign: "center", cursor: "pointer", padding: "10px 6px", borderRadius: 6,
                background: expanded.has(c.name) ? "#111" : "transparent",
                border: `1px solid ${expanded.has(c.name) ? sc.border : "transparent"}`,
                transition: "all 0.15s"
              }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: scoreColor(c.score), textShadow: `0 0 16px ${scoreColor(c.score)}33` }}>{c.score}</div>
                <div style={{ fontSize: 10, color: "#777", marginTop: 3, fontFamily: "'JetBrains Mono', monospace" }}>{c.name.split(",")[0]}</div>
                <div style={{ fontSize: 9, color: sc.text, marginTop: 3, letterSpacing: 0.5 }}>{c.status}</div>
              </div>
            );
          })}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {sorted.map(city => (
            <CityCard key={city.name} city={city} isExpanded={expanded.has(city.name)} onToggle={() => toggle(city.name)} />
          ))}
        </div>

        <div style={{
          marginTop: 40, padding: "16px 20px", background: "#0a0a0a", borderRadius: 6,
          border: "1px solid #141414", display: "flex", justifyContent: "space-between", alignItems: "center"
        }}>
          <span style={{ color: "#333", fontSize: 10, fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1 }}>
            DATA AS OF APRIL 2026 · NOT FINANCIAL ADVICE
          </span>
          <span style={{ color: "#333", fontSize: 10, fontFamily: "'JetBrains Mono', monospace" }}>
            {cities.length} MARKETS
          </span>
        </div>
      </div>
    </div>
  );
}

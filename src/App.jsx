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
    aiDemand: "Minimal",
    bioOverlap: "OHSU only",
    consultViability: "Low — no capital flowing in",
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
    biggestRisk: "Oversaturation of talent; rising COL; UT grads flood market",
    aiDemand: "High but very competitive",
    bioOverlap: "Some (Samsung fabs, biotech startups)",
    consultViability: "High — many funded startups",
    findings: [
      "3.4-3.5% unemployment, +1.2-1.5% job growth — healthy but moderating",
      "16.3% of jobs are tech-related (vs 9% national average)",
      "No state income tax — massive advantage over Portland and Seattle",
      "BUT: UT Austin produces thousands of CS grads/year; talent pool oversaturated",
      "Cost of living has risen sharply — rent doubled since 2015",
      "Oracle, Tesla, Apple layoff cycles flood local market with displaced workers",
      "Strong for W-2 if you can land something; brutal competition for mid-level roles"
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
    aiDemand: "Moderate; growing",
    bioOverlap: "STRONG — Research Triangle is biotech + software",
    consultViability: "Moderate — enterprise-focused clients",
    findings: [
      "~3.1% unemployment — lowest of all compared cities",
      "Only US tech hub with cost of living BELOW national average (index: 95.4)",
      "26.8% STEM job growth from 2019-2024 (14th nationally)",
      "UNIQUE for your profile: Research Triangle is biotech + software intersection",
      "4,000 tech companies, 60,000+ tech workers, 600+ life science companies",
      "Architecture/Engineering has 5 jobs per seeker — extreme demand",
      "BUT: IT job postings dropped 14.38% YoY statewide (Oct 2024 to Oct 2025)",
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
    aiDemand: "High but contracting",
    bioOverlap: "Moderate (biotech corridor exists)",
    consultViability: "High — enterprise clients if you can land them",
    findings: [
      "SECOND WORST drop in job postings in the US — down 35% since 2020",
      "Software dev postings down 68% from pre-COVID benchmark",
      "Tech employment fell 6% from mid-2022 to early 2025",
      "Amazon cut 16,000 globally; Microsoft cut 3,200+ in WA state",
      "Senior SW engineer: 2+ years, 1,000+ applications, 25% pay cut to land a role",
      "No state income tax is real advantage — but JumpStart tax driving employer exits",
      "You have FREE HOUSING via relative — changes math entirely for short-term",
      "NOT recommended for job search; GOOD as low-cost staging ground"
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
    aiDemand: "Moderate; growing",
    bioOverlap: "Low",
    consultViability: "Moderate — enterprise + energy sector",
    findings: [
      "Healthy job growth, no state income tax, low cost of living",
      "Less tech-dense than Austin or Seattle — more enterprise/corporate focused",
      "AT&T, Texas Instruments anchor employers; telecom/defense/finance",
      "Lower competition than Austin for the same Texas no-tax advantage",
      "BUT: Less relevant to your AI/infrastructure specialization",
      "Weak biotech/chemistry overlap for your cross-domain profile"
    ]
  }
];

const statusColor = (s) => {
  if (s === "CONTRACTING") return { bg: "#1a0000", text: "#ff4444", border: "#4a0000" };
  if (s === "GROWING") return { bg: "#001a00", text: "#44ff44", border: "#004a00" };
  return { bg: "#1a1a00", text: "#ffff44", border: "#4a4a00" };
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
        opacity: i < score ? 1 : 0.3
      }} />
    ))}
    <span style={{ marginLeft: 8, fontSize: 20, fontWeight: 800, color: scoreColor(score), fontFamily: "'JetBrains Mono', monospace" }}>{score}/10</span>
  </div>
);

const MetricRow = ({ label, value, highlight }) => (
  <div style={{
    display: "flex", justifyContent: "space-between", alignItems: "flex-start",
    padding: "6px 0", borderBottom: "1px solid #1a1a1a"
  }}>
    <span style={{ color: "#777", fontSize: 12, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: 0.5, flex: "0 0 40%" }}>{label}</span>
    <span style={{
      color: highlight === "bad" ? "#ff6666" : highlight === "good" ? "#66ff66" : highlight === "warn" ? "#ffaa44" : "#ccc",
      fontSize: 13, fontWeight: highlight ? 600 : 400, textAlign: "right", flex: "0 0 58%",
      fontFamily: "'JetBrains Mono', monospace"
    }}>{value}</span>
  </div>
);

const CityCard = ({ city, isExpanded, onToggle }) => {
  const sc = statusColor(city.status);
  return (
    <div style={{
      background: "#0d0d0d", border: `1px solid ${sc.border}`,
      borderRadius: 4, overflow: "hidden", transition: "all 0.2s"
    }}>
      <div onClick={onToggle} style={{
        padding: "16px 20px", cursor: "pointer",
        borderBottom: isExpanded ? `1px solid ${sc.border}` : "none",
        display: "flex", justifyContent: "space-between", alignItems: "center"
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <h2 style={{ margin: 0, fontSize: 20, color: "#eee", fontFamily: "'Space Mono', monospace" }}>{city.name}</h2>
            <span style={{
              padding: "2px 8px", fontSize: 10, fontWeight: 700, borderRadius: 2,
              background: sc.bg, color: sc.text, border: `1px solid ${sc.border}`,
              fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1
            }}>{city.status}</span>
          </div>
          <ScoreBar score={city.score} />
        </div>
        <div style={{ color: "#555", fontSize: 24, transform: isExpanded ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>▾</div>
      </div>

      {isExpanded && (
        <div style={{ padding: "16px 20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div>
              <div style={{ color: sc.text, fontSize: 10, fontWeight: 700, letterSpacing: 2, marginBottom: 8, fontFamily: "'JetBrains Mono', monospace" }}>EMPLOYMENT</div>
              <MetricRow label="Unemployment" value={city.unemployment} highlight={parseFloat(city.unemployment) > 4.5 ? "bad" : "good"} />
              <MetricRow label="Job Growth YoY" value={city.jobGrowth} highlight={city.jobGrowth.startsWith("-") ? "bad" : "good"} />
              <MetricRow label="Jobs Changed" value={city.jobsChanged} highlight={city.jobsChanged.startsWith("-") ? "bad" : "good"} />
              <MetricRow label="Office Vacancy" value={city.officeVacancy} />

              <div style={{ color: sc.text, fontSize: 10, fontWeight: 700, letterSpacing: 2, marginBottom: 8, marginTop: 16, fontFamily: "'JetBrains Mono', monospace" }}>TECH MARKET</div>
              <MetricRow label="SW Eng Openings" value={city.swOpenings} />
              <MetricRow label="Applicants/Job" value={city.applicantsPerJob} highlight={parseInt(city.applicantsPerJob) > 50 ? "bad" : parseInt(city.applicantsPerJob) < 40 ? "good" : "warn"} />
              <MetricRow label="Total Tech Jobs" value={city.totalTech} />
              <MetricRow label="Tech % of Economy" value={city.techPct} />
              <MetricRow label="Major Employers" value={city.majorEmployers} />
              <MetricRow label="Tech Trend" value={city.techTrend} highlight={city.techTrend.includes("Shrinking") || city.techTrend.includes("Past") ? "bad" : city.techTrend.includes("Growing") ? "good" : "warn"} />
            </div>

            <div>
              <div style={{ color: sc.text, fontSize: 10, fontWeight: 700, letterSpacing: 2, marginBottom: 8, fontFamily: "'JetBrains Mono', monospace" }}>COMPENSATION & COST</div>
              <MetricRow label="Avg Tech Salary" value={city.avgTechSalary} />
              <MetricRow label="State Income Tax" value={city.stateTax} highlight={city.stateTax === "0%" ? "good" : parseFloat(city.stateTax) > 5 ? "bad" : "warn"} />
              <MetricRow label="COL Index" value={city.colIndex} />
              <MetricRow label="1BR Rent" value={city.rent1br} />
              <MetricRow label="Salary/COL Ratio" value={city.salaryCol} highlight={city.salaryCol.includes("Poor") ? "bad" : city.salaryCol.includes("Best") || city.salaryCol.includes("Good") ? "good" : "warn"} />

              <div style={{ color: sc.text, fontSize: 10, fontWeight: 700, letterSpacing: 2, marginBottom: 8, marginTop: 16, fontFamily: "'JetBrains Mono', monospace" }}>YOUR PROFILE FIT</div>
              <MetricRow label="AI/Infra Demand" value={city.aiDemand} highlight={city.aiDemand.includes("Minimal") ? "bad" : city.aiDemand.includes("High") ? "good" : "warn"} />
              <MetricRow label="Chem/Bio Overlap" value={city.bioOverlap} highlight={city.bioOverlap.includes("STRONG") ? "good" : city.bioOverlap.includes("Low") || city.bioOverlap === "OHSU only" ? "bad" : "warn"} />
              <MetricRow label="Consulting Viability" value={city.consultViability} highlight={city.consultViability.includes("Low") ? "bad" : city.consultViability.includes("High") ? "good" : "warn"} />
              <MetricRow label="Capital Investment" value={city.capitalRank} />
              <MetricRow label="Population Trend" value={city.popTrend} highlight={city.popTrend.includes("Outmigration") || city.popTrend.includes("outflow") ? "bad" : "good"} />
              <MetricRow label="Biggest Risk" value={city.biggestRisk} />
            </div>
          </div>

          <div style={{ marginTop: 20, padding: 16, background: "#080808", borderRadius: 4, border: `1px solid #1a1a1a` }}>
            <div style={{ color: "#888", fontSize: 10, fontWeight: 700, letterSpacing: 2, marginBottom: 10, fontFamily: "'JetBrains Mono', monospace" }}>KEY FINDINGS</div>
            {city.findings.map((f, i) => (
              <div key={i} style={{
                padding: "5px 0", fontSize: 12, color: "#aaa", lineHeight: 1.5,
                borderBottom: i < city.findings.length - 1 ? "1px solid #111" : "none",
                fontFamily: "'JetBrains Mono', monospace"
              }}>
                <span style={{ color: f.includes("BUT") || f.includes("worst") || f.includes("CONTRACTING") || f.includes("SECOND WORST") || f.includes("cutting") || f.includes("lost") || f.includes("dropped") ? "#ff6666" : f.includes("UNIQUE") || f.includes("STRONG") || f.includes("Best") || f.includes("lowest") || f.includes("0%") ? "#66ff66" : "#888", marginRight: 6 }}>▸</span>
                {f}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [expanded, setExpanded] = useState(new Set(["Portland, OR"]));
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
    <div style={{ background: "#050505", minHeight: "100vh", padding: "24px 16px", fontFamily: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace" }}>
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />

      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ color: "#eee", fontSize: 22, margin: 0, fontFamily: "'Space Mono', monospace", fontWeight: 700 }}>
            Job Market Intelligence
          </h1>
          <p style={{ color: "#555", fontSize: 12, margin: "6px 0 0", letterSpacing: 1 }}>
            EMPIRICAL COMPARISON · APRIL 2026 · SOURCES: BLS, INDEED, LINKEDIN, COLLIERS, ULI, PORTLAND METRO CHAMBER, NC TECH ASSN
          </p>
        </div>

        <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
          <span style={{ color: "#555", fontSize: 11, alignSelf: "center", marginRight: 4 }}>SORT:</span>
          {[["score", "Fit Score"], ["unemployment", "Unemployment"], ["name", "Name"]].map(([key, label]) => (
            <button key={key} onClick={() => setSortBy(key)} style={{
              background: sortBy === key ? "#1a1a1a" : "transparent",
              border: `1px solid ${sortBy === key ? "#444" : "#222"}`,
              color: sortBy === key ? "#eee" : "#555",
              padding: "4px 12px", borderRadius: 2, cursor: "pointer",
              fontSize: 11, fontFamily: "'JetBrains Mono', monospace", letterSpacing: 0.5
            }}>{label}</button>
          ))}
          <button onClick={() => setExpanded(expanded.size === cities.length ? new Set() : new Set(cities.map(c => c.name)))} style={{
            background: "transparent", border: "1px solid #222", color: "#555",
            padding: "4px 12px", borderRadius: 2, cursor: "pointer", marginLeft: "auto",
            fontSize: 11, fontFamily: "'JetBrains Mono', monospace"
          }}>{expanded.size === cities.length ? "Collapse All" : "Expand All"}</button>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8,
          marginBottom: 24, padding: 12, background: "#0a0a0a", borderRadius: 4, border: "1px solid #1a1a1a"
        }}>
          {sorted.map(c => {
            const sc = statusColor(c.status);
            return (
              <div key={c.name} onClick={() => toggle(c.name)} style={{
                textAlign: "center", cursor: "pointer", padding: 8, borderRadius: 4,
                background: expanded.has(c.name) ? "#111" : "transparent",
                border: `1px solid ${expanded.has(c.name) ? sc.border : "transparent"}`,
                transition: "all 0.15s"
              }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: scoreColor(c.score) }}>{c.score}</div>
                <div style={{ fontSize: 10, color: "#888", marginTop: 2 }}>{c.name.split(",")[0]}</div>
                <div style={{ fontSize: 9, color: sc.text, marginTop: 2 }}>{c.status}</div>
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
          marginTop: 32, padding: 20, background: "#0a0a0a", borderRadius: 4,
          border: "1px solid #1a1a1a"
        }}>
          <div style={{ color: "#ffaa44", fontSize: 10, fontWeight: 700, letterSpacing: 2, marginBottom: 12 }}>BOTTOM LINE</div>
          <div style={{ fontSize: 13, color: "#ccc", lineHeight: 1.8 }}>
            <div style={{ marginBottom: 8 }}><span style={{ color: "#66ff66" }}>▸</span> <strong style={{ color: "#eee" }}>If staying in US:</strong> Raleigh-Durham is the strongest fit for your specific cross-domain profile (chemistry + biotech + AI infrastructure).</div>
            <div style={{ marginBottom: 8 }}><span style={{ color: "#66ff66" }}>▸</span> <strong style={{ color: "#eee" }}>If optimizing for runway:</strong> Tbilisi at $1,500/mo beats every US option for building consulting practice.</div>
            <div style={{ marginBottom: 8 }}><span style={{ color: "#ffaa44" }}>▸</span> <strong style={{ color: "#eee" }}>Immediate move:</strong> Seattle with free housing as staging ground while you decide.</div>
            <div><span style={{ color: "#ff4444" }}>▸</span> <strong style={{ color: "#eee" }}>Portland:</strong> No rational case to stay. Every metric confirms structural decline.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
    name: "Boston, MA",
    score: 6,
    status: "STAGNANT",
    unemployment: "4.2%",
    jobGrowth: "~0% (flat)",
    jobsChanged: "-2,200 metro YoY; -11,600 in key sectors statewide",
    swOpenings: "1,700-2,000",
    applicantsPerJob: "~50-70 est.",
    totalTech: "~7,400-7,500",
    techPct: "~14.7%",
    majorEmployers: "Raytheon (hiring), HubSpot (stable), Toast (hiring), Vertex (cutting), Moderna (cutting), Sage (cutting all 338)",
    techTrend: "Worst two-year stretch in a decade; 8,200 tech jobs lost statewide in 2024",
    avgTechSalary: "$150-165K",
    stateTax: "5% flat + 4% surtax >$1.08M",
    colIndex: "~146-153",
    rent1br: "$2,900-3,600",
    salaryCol: "Moderate — salary premium eroded by 46-53% above-avg COL",
    officeVacancy: "23.9% office; 38%+ lab space",
    popTrend: "Slowing; immigration-dependent; +11,991 in 2024-25 (slowest post-pandemic year)",
    capitalRank: "8th (ULI 2025)",
    biggestRisk: "NIH funding cuts threatening university-to-biotech pipeline",
    aiDemand: "Moderate",
    bioOverlap: "High — 1,200+ biotech firms; oligonucleotide roles at Wave Life Sciences, Eli Lilly (Cambridge)",
    consultViability: "Moderate — biotech clients currently capital-constrained; $1,100-1,700/day rates",
    findings: [
      "Boston-Cambridge metro lost ~2,200 nonfarm jobs YoY (BLS June 2025); statewide shed 11,600–13,200 in professional/technical services and information sectors",
      "4,100+ biopharma layoffs in 2025 — Sage Therapeutics eliminated entire 338-person Cambridge workforce; Sarepta cut 36% (BioSpace/FierceBiotech)",
      "NIH cuts will cost Massachusetts $463M+ vs. prior year — directly threatens the university-to-biotech pipeline that is Boston's core competitive advantage (MassBio 2025)",
      "Lab space vacancy exceeds 38% regionally and office vacancy sits at 23.9% — direct fallout from a post-pandemic build cycle the market cannot absorb (Colliers Q4 2025, Axios)",
      "COL runs 46–53% above national average; $160K Boston salary has equivalent purchasing power to ~$130K in Austin or Raleigh after housing and taxes",
      "AI/infra consulting day rates $1,100–$1,700; 2,800+ AI job listings; institutional demand from pharma, financial services, and defense is real (NicolaLazzari.ai, Glassdoor)",
      "Oligonucleotide/HPLC background maps directly to active roles at Wave Life Sciences (Lexington), Eli Lilly (Cambridge), and CDMOs — near-unique niche fit in this market",
      "Population growth slowed to near-zero as international immigration fell by half in 2024-25; federal immigration headwinds could flip this growth driver negative (Boston.com Mar 2026)"
    ]
  },
  {
    name: "New York City, NY",
    score: 7,
    status: "STAGNANT",
    unemployment: "5.7% (city); ~4.5-4.7% (metro)",
    jobGrowth: "+0.1% city private sector",
    jobsChanged: "+5,100 city private sector Jan-Aug 2025; +95,300 metro year to May 2025",
    swOpenings: "~12,000-17,000",
    applicantsPerJob: "62.2",
    totalTech: "~12,000-17,000",
    techPct: "7% direct; 28% of citywide GDP",
    majorEmployers: "JPMorgan (hiring), Bloomberg (hiring), Schrodinger (hiring), Amazon (cutting), Microsoft (cutting), Meta (cutting)",
    techTrend: "1-in-5 job postings require AI skills; tech grew 26.2% since 2019 vs. 2-3% broader economy",
    avgTechSalary: "$164-167K",
    stateTax: "6.25-6.85% state + 3.876% NYC local",
    colIndex: "~187-195",
    rent1br: "$4,400-5,200",
    salaryCol: "Poor — 10-11% combined state+city tax + extreme COL erodes top-tier comp",
    officeVacancy: "13.9% availability (improving; 7th consecutive quarter of tightening)",
    popTrend: "Gaining (+87,000 city 2023-24); immigration-dependent; domestic outflow -137,586 continues",
    capitalRank: "#11 Manhattan, #1 globally Midtown (EY/ULI 2025); $42.3B VC/PE in 2025",
    biggestRisk: "Federal tariff shock + $10-13.6B budget gap projected by FY2027-2029",
    aiDemand: "High",
    bioOverlap: "Yes — Schrodinger (Midtown HQ, computational chem), Regeneron (Tarrytown), Formation Bio",
    consultViability: "Strong — $1,800-2,400/day rates; deepest enterprise client pool outside SF",
    findings: [
      "NYC private sector added only 5,100 jobs Jan–Aug 2025 — 97% deceleration from 2022 pace; record employment but momentum near-stalled (NYC Comptroller)",
      "Tech sector grew 26.2% since 2019; 1-in-5 job postings require AI skills — bifurcated market strongly favoring technical/AI roles (Tech:NYC / NYC Future, May 2025)",
      "62.2 applicants per open position (ResumeTarget, Dec 2025) — one of the highest competition ratios of any U.S. metro; Data Engineer roles see 125 applicants/position",
      "Schrodinger (Midtown HQ), Regeneron (Tarrytown), and Formation Bio create genuine pharma-AI intersection opportunities not available in most tech markets",
      "$165K average software salary vs. $4,400–$5,200/mo rent and 10–11% combined state+city tax = real purchasing power of ~$95–105K in Austin (Glassdoor, Zumper, NY Tax.gov)",
      "NYC Comptroller projects $10–13.6B budget gaps by FY2027–2029; tariff-driven recession models show 71,000–150,000 potential job losses (NYC Comptroller OSC)",
      "Manhattan office market genuinely recovering: 41.92M SF leased in 2025 (+27% YoY, highest since 2019); availability down for 7 consecutive quarters (CBRE Q4 2025)",
      "AI consulting rates $1,800–$2,400/day senior; $42.3B in VC/PE in 2025 with AI taking 22% — most viable independent consulting market outside SF for this profile"
    ]
  },
  {
    name: "Philadelphia, PA",
    score: 7,
    status: "GROWING",
    unemployment: "4.3% (metro MSA)",
    jobGrowth: "+1.3%",
    jobsChanged: "+36,400 YoY; 79% from health care alone",
    swOpenings: "~800-1,000",
    applicantsPerJob: "~40-60 est.",
    totalTech: "~100,000 tech occupations across all industries",
    techPct: "Not isolated; health care is 32% of city jobs",
    majorEmployers: "AstraZeneca (hiring), Penn Medicine/CHOP (hiring), Comcast (stable), GSK (mixed), Merck (cutting), Spark/Roche (cutting 50%+)",
    techTrend: "AI/data roles growing but thin volume; pharma-corridor remains anchor for technical employment",
    avgTechSalary: "$120-155K",
    stateTax: "3.07% PA flat + 3.74% Philadelphia city wage tax",
    colIndex: "~104",
    rent1br: "$1,500-1,650",
    salaryCol: "Good — modest COL premium with affordable rents; city wage tax is a real drag",
    officeVacancy: "~19.9-20.4% CBD",
    popTrend: "Gaining (+10,500 in 2023-24); immigration-driven; domestic outflow continues",
    capitalRank: "#4 U.S. life sciences market (Colliers 2025); 7th biopharma hub nationally",
    biggestRisk: "Health care monoculture + $2B+ NIH grant exposure; federal funding cuts are live",
    aiDemand: "Moderate",
    bioOverlap: "Strong — #4 U.S. life sciences market; 88K+ workers; 40+ cell/gene therapy firms; HPLC/oligonucleotide skills directly applicable",
    consultViability: "Moderate-to-Good — large pharma AI adoption; niche AI+pharma practice viable but smaller ecosystem than NYC/Boston",
    findings: [
      "~79% of net new jobs in past 12 months came from health care and social assistance alone — single-supersector dependence is a structural vulnerability if federal Medicaid/NIH cuts accelerate (BLS)",
      "Philadelphia is #4 U.S. life sciences market with 88,000+ workers and 40+ cell/gene therapy companies — HPLC/LC-MS/oligonucleotide background is directly applicable in King of Prussia–Malvern–Conshohocken pharma belt (Colliers 2025)",
      "Merck closed PA manufacturing facility (163 jobs) and announced 6,000 global cuts; Spark/Roche eliminated 50%+ of Philadelphia workforce in 2025 — live local disruption, not abstract national news",
      "Philadelphia raised only $656M in biopharma VC in 2024 vs. $5-7B in Boston/SF — region generates discovery but loses commercialization to capital-rich hubs (BioBuzz Aug 2025)",
      "$2B+ in NIH grants flow annually to Penn, CHOP, and Drexel; EPA and IRS offices already cut hundreds of local jobs — federal funding exposure is active (Economy League, Apr 2026)",
      "Combined PA state + Philadelphia city wage tax of 6.81% = ~$10,200/year more than a zero-income-tax state at $150K salary (City of Philadelphia, Alloy Silverstein)",
      "COL index ~104 with 1BR rents $1,500–1,650 (23% below national median) — strongest COL-to-salary ratio of any Northeast peer market",
      "800-1,000+ AI/ML postings exist but Philadelphia is not an AI infrastructure hub — enterprise and pharma-adjacent AI dominates; full-time AI infra roles are thin"
    ]
  },
  {
    name: "Pittsburgh, PA",
    score: 6,
    status: "STAGNANT",
    unemployment: "3.9-4.1%",
    jobGrowth: "+1.4% (Aug 2025)",
    jobsChanged: "+17,300 (Aug 2024-Aug 2025); still ~1.25% below 2019 peak",
    swOpenings: "~330-483",
    applicantsPerJob: "~50-100 est.",
    totalTech: "~2,000-5,000 active openings",
    techPct: "~23.2% of SW PA 13-county workforce",
    majorEmployers: "Aurora Innovation (hiring), Skild AI (hiring), Abridge (hiring), CMU (hiring), Google (stable), BNY Mellon (cutting), Duolingo (contractor cuts)",
    techTrend: "CMU-anchored AI/robotics cluster is legitimate; Skild ($300M), Aurora ($483M), Abridge ($150M) actively hiring",
    avgTechSalary: "$105-140K",
    stateTax: "3.07% PA flat + 3.0% Pittsburgh city EIT",
    colIndex: "~91.8",
    rent1br: "$1,375-1,545",
    salaryCol: "Good — 8% below-avg COL more than offsets 9% below-avg tech salary",
    officeVacancy: "17.2% overall; 21.8% CBD (JLL Q4 2024)",
    popTrend: "Metro losing (-3,160 in 2024-25); city proper gaining (+2,900); structurally oldest large U.S. metro (21.6% aged 65+)",
    capitalRank: "#145 of 403 metros (Milken 2025)",
    biggestRisk: "30-year structural demographic decline; shrinking labor force masks unemployment rate",
    aiDemand: "Moderate — CMU ecosystem produces real AI/robotics roles but small absolute volume",
    bioOverlap: "Limited — Krystal Biotech, UPMC research; thin absolute biotech job volume vs. Boston or Philadelphia",
    consultViability: "Moderate — AI-native startup clients viable; small market and low remote-work culture require national client base",
    findings: [
      "Metro employment remains ~1.25% below May 2019 peak — ranked near-last among large metros in pandemic recovery (Allegheny Institute / BLS)",
      "Labor force shrank 11,400 workers in 12 months ending May 2025 — the low unemployment rate is partly a participation artifact, not pure job market strength (WESA Jul 2025)",
      "CMU flywheel is legitimate: Aurora ($483M raised, scaling driverless trucking), Skild AI ($300M Series A, Bezos/SoftBank), Abridge ($150M healthcare AI) are well-funded and actively hiring in Pittsburgh",
      "Metro lost 3,160 residents in 2024-25; 30+ years of structural natural population decrease; 21.6% of population aged 65+ — deepest long-term constraint on economic growth (WESA / Axios Mar 2026)",
      "Downtown CBD vacancy at 21.8% (JLL Q4 2024); Q4 2025 showed first positive net absorption in years (+197,315 sq ft) but recovery is fragile (CBRE Q4 2025)",
      "Biotech/pharma depth is thin: only 55-67 active biotech postings; oligonucleotide expertise is largely underutilized here vs. Boston, Philadelphia, or San Diego corridors",
      "COL index 91.8 and 1BR rents $1,375–$1,545 are genuine advantages; combined 6.07% state+local income tax partially offsets vs. Sun Belt but still competitive (BestPlaces, PA DCED)",
      "Duolingo's AI-first contractor cuts signal emerging displacement risk for independent consultants from Pittsburgh's most prominent native tech success (Technical.ly / CNBC Sep 2025)"
    ]
  },
  {
    name: "Chicago, IL",
    score: 6,
    status: "GROWING",
    unemployment: "4.4%",
    jobGrowth: "+0.8%",
    jobsChanged: "+28,800 YoY; still ~31,000 below pre-pandemic peak",
    swOpenings: "~6,000-7,000",
    applicantsPerJob: "~40-60 est.",
    totalTech: "~6,000-7,000 active listings",
    techPct: "~8% of metro workforce; $39.3B annual output",
    majorEmployers: "AbbVie (hiring), Google (hiring), Salesforce (hiring), Tempus AI (hiring), CME Group (hiring), McDonald's Tech (hiring), Microsoft/Amazon (cutting nationally)",
    techTrend: "Enterprise AI adoption growing; Lake County pharma corridor (AbbVie, Abbott, Baxter) is direct-fit for analytical chem background",
    avgTechSalary: "$130-160K",
    stateTax: "4.95% IL flat; no city income tax",
    colIndex: "~105.7",
    rent1br: "$2,010",
    salaryCol: "Moderate — better take-home than coastal peers; property taxes punishing for homeowners (~2.1% effective)",
    officeVacancy: "28.6% (Q1 2026, 15th consecutive quarterly record)",
    popTrend: "Declining; city -~27,000/yr; metro flat due to international immigration offset that is now slowing",
    capitalRank: "Outside top 10 ULI 2025; institutional capital deprioritizing vs. Sun Belt",
    biggestRisk: "Pension crisis — $1.15B 2026 budget shortfall; 40-46% of city budget consumed by pension + debt service; BBB bond rating",
    aiDemand: "Moderate",
    bioOverlap: "Strong — AbbVie (LC-MS/MS, biologics, North Chicago campus), Abbott, Baxter in Lake County pharma corridor",
    consultViability: "Moderate — enterprise adoption creates demand; conservative client culture slows deal cycles vs. coastal peers",
    findings: [
      "Chicago nonfarm employment ~31,000 below November 2019 peak as of late 2024 — pandemic recovery not yet complete despite 18 months of positive YoY growth (BLS)",
      "Downtown office vacancy reached 28.6% in Q1 2026 — 15th consecutive quarterly record; 46.67M sq ft available is the highest in recorded Chicago history (CBRE, Crain's)",
      "Pension crisis is structural, not cyclical: $1.15B 2026 budget gap; pension + debt service consumes 40-46% of city budget; S&P bond rating BBB — two notches above junk (WTTW, Civic Federation)",
      "AbbVie (North Chicago) actively posts Senior Scientist roles requiring LC-MS/MS, GC-MS, HPLC, and biologics analytical development — near-exact match to candidate profile (AbbVie careers)",
      "99,000+ tech workers, 8% of metro workforce, $39.3B annual output — but AI work is enterprise-weighted, not AI infrastructure tooling; cutting-edge MCP/agentic roles are sparse (World Business Chicago)",
      "City population has declined from 2.88M (2000) to ~2.75M (2025); domestic outmigration to Sun Belt ongoing; international immigration offset is now slowing under federal policy (CMAP, Census)",
      "4.95% flat state income tax with no city income tax — meaningfully better combined burden than NY (10-11%), MA (5%+), or MN (7.85-9.85%); property taxes for homeowners offset this at ~2.1% effective rate",
      "Tempus AI, Relativity, and CME Group represent enterprise AI opportunity; independent consulting is viable but procurement cycles lag SF/NYC by 6-18 months in this market"
    ]
  },
  {
    name: "Minneapolis, MN",
    score: 5,
    status: "STAGNANT",
    unemployment: "3.6% (Sep 2025); +1.6 pp spike YoY in Dec 2025",
    jobGrowth: "Essentially unchanged YoY (BLS Dec 2025)",
    jobsChanged: "Flat to modestly negative; metro still ~3.5% below 2019 levels",
    swOpenings: "484-606",
    applicantsPerJob: "~40-60 est.",
    totalTech: "~2,000-3,000 active",
    techPct: "12.4% of state workforce; Twin Cities concentrates majority",
    majorEmployers: "Boston Scientific (hiring), Cargill (hiring), UnitedHealth Group (cutting 30K buyouts), Medtronic (cutting), Target (cutting 815-1,800), 3M/Solventum (mixed)",
    techTrend: "Healthcare/medtech drove growth through 2024; UHG + Medtronic simultaneous restructuring in 2025 creates near-term softness",
    avgTechSalary: "$110-135K",
    stateTax: "7.85% effective (most SWE income); 9.85% top rate above $198,631 single",
    colIndex: "~107 (Minneapolis city)",
    rent1br: "$1,220-1,500",
    salaryCol: "Moderate — affordable rents offset by one of the highest state income tax rates in the U.S.",
    officeVacancy: "30.8% Minneapolis; 39.5% St. Paul (Colliers Q3 2025)",
    popTrend: "Metro gaining (+0.83% 2024-25); city flat-to-declining; domestic migration turned net positive for first time since 2018",
    capitalRank: "ULI downgraded to bottom half of major markets for 2026",
    biggestRisk: "UHG + Medtronic simultaneous restructuring; concentrated employer risk in highest-paying sectors",
    aiDemand: "Moderate — demand exists at large enterprises; no hyperscaler center; MCP/infra roles are thin",
    bioOverlap: "Yes — world-class medtech cluster (Medtronic, Boston Scientific, Bio-Techne); thin on oligonucleotide-specific roles",
    consultViability: "Low-to-Moderate — enterprise client base exists but strong FTE-preference culture; national/remote clients needed",
    findings: [
      "Unemployment jumped +1.6 pp YoY in December 2025 — largest increase among large U.S. metros; BLS characterized employment as 'essentially unchanged' over the year (BLS Metro Summary Dec 2025)",
      "UnitedHealth Group offered buyouts to ~30,000 eligible employees (Feb 2025); Medtronic cut at Coon Rapids R&D lab (May 2025); Target cut 815-1,800 corporate employees — three major employers contracting simultaneously in the metro core",
      "Downtown Minneapolis office vacancy at 30.8%; St. Paul at 39.5% (Colliers Q3 2025); Colliers headline: 'No end to the high vacancy rates in Twin Cities office market'; ULI downgraded for 2026",
      "Minnesota 9.85% top marginal income tax rate kicks in at $198,631 (single filer) — among the highest in the U.S.; Minneapolis exploring city income tax as of Oct 2025 (MPR News)",
      "Boston Scientific investing $309M+ in Maple Grove campus (440 new FTEs by 2030); federal MedTech Hub 3.0 designation (eligible for $75M) — strongest growth story in the metro (Star Tribune)",
      "AI/infra demand is shallow: only 393 AI/ML job listings across all of Greater MSP (LinkedIn April 2026); no hyperscaler engineering center; MCP/agentic infrastructure is niche-within-niche here",
      "Oligonucleotide-specific roles are sparse — Minneapolis is a medtech (devices) hub, not an oligonucleotide/RNA therapeutics hub; HPLC/LC-MS skills apply to devices context but with limited depth",
      "Minnesota domestic net migration turned positive in 2025 (+8,300; national rank improved from 41st to 17th) — a modest structural positive after years of outflow (Census / MN Patch)"
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
  <div style={{ background: "#1e1e1e", borderRadius: 6, border: "1px solid #2a2a2a", overflow: "hidden" }}>
    <div onClick={onToggle} style={{
      padding: "12px 14px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between",
      borderBottom: isOpen ? "1px solid #1f1f1f" : "none"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 13, opacity: 0.5 }}>{section.icon}</span>
        <span style={{ color: "#e5e7eb", fontSize: 14, fontWeight: 600 }}>{section.title}</span>
      </div>
      <span style={{ color: "#4b5563", fontSize: 16, transform: isOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>⌄</span>
    </div>
    {isOpen && (
      <div style={{ padding: "12px 14px" }}>
        <div style={{ display: "flex", gap: 16 }}>
          {section.highlights.map((h, i) => (
            <div key={i} style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#e5e7eb", fontFamily: "'JetBrains Mono', monospace", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{h.value}</div>
              <div style={{ fontSize: 10, color: "#4b5563", marginTop: 2, fontFamily: "'JetBrains Mono', monospace" }}>{h.label}</div>
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

const isNegativeFinding = (f) => /BUT|worst|CONTRACTING|SECOND WORST|cutting|lost|dropped|fell|plummeted|collapsing|decline|collapsed|down\b/i.test(f);

const getHighlightPills = (city) => {
  const pills = [];
  const unemp = parseFloat(city.unemployment);
  if (unemp < 4) pills.push({ text: `(${city.unemployment})`, sub: "Low Unemployment", type: "good" });
  else if (unemp > 4.5) pills.push({ text: `(${city.unemployment})`, sub: "High Unemployment", type: "bad" });

  if (city.techTrend.includes("biotech") || city.techTrend.includes("Growing")) {
    pills.push({ text: city.techTrend.split(";")[0], sub: "Tech Trend", type: "good", icon: "⚗" });
  } else if (city.techTrend.includes("Shrinking") || city.techTrend.includes("Past") || city.techTrend.includes("contracting")) {
    pills.push({ text: city.techTrend.split(";")[0], sub: "Tech Trend", type: "bad", icon: "⚠" });
  }

  if (city.totalTech) pills.push({ text: `${city.totalTech} Tech Jobs`, sub: "Total Openings", type: "neutral" });

  const negFinding = city.findings.find(f => isNegativeFinding(f));
  if (negFinding) {
    const short = negFinding.length > 50 ? negFinding.slice(0, 50) + "..." : negFinding;
    pills.push({ text: short, sub: "", type: "bad", icon: "⚠" });
  }

  return pills.slice(0, 4);
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
  const [findingsOpen, setFindingsOpen] = useState(false);

  const toggleCard = (title) => {
    const next = new Set(openCards);
    next.has(title) ? next.delete(title) : next.add(title);
    setOpenCards(next);
  };

  const city = cities.find(c => c.name === selected) || cities[0];
  const sc = statusColor(city.status);
  const sections = getSections(city);

  return (
    <div style={{ background: "#1a1a1a", minHeight: "100vh", fontFamily: "'Inter', -apple-system, sans-serif", color: "#e5e7eb" }}>
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
          <div style={{ borderBottom: "1px solid #2a2a2a", padding: "16px 24px", display: "flex", alignItems: "center", background: "#1a1a1a" }}>
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
        <div style={{ width: 300, background: "rgb(26, 26, 26)", borderRight: "1px solid #2a2a2a", overflowY: "auto", flexShrink: 0, display: "flex", flexDirection: "column" }}>
          <div style={{ padding: "10px 14px 6px", display: "flex", justifyContent: "flex-end" }}>
            <span style={{ color: "#4b5563", fontSize: 14, cursor: "pointer" }} title="Filter">▽</span>
          </div>

          <div style={{ flex: 1, overflowY: "auto" }}>
            {sorted.map((c, idx) => {
              const csc = statusColor(c.status);
              const isSel = selected === c.name;
              const rank = idx + 1;
              const statusIcon = c.status === "GROWING" ? { symbol: "G", color: "#4ade80" }
                : c.status === "CONTRACTING" ? { symbol: "C", color: "#ef4444" }
                : { symbol: "↗", color: "#f59e0b" };
              return (
                <div key={c.name} onClick={() => setSelected(c.name)} style={{
                  padding: "10px 14px", cursor: "pointer", display: "flex", alignItems: "center", gap: 0,
                  background: isSel ? "#161616" : "transparent",
                  border: isSel ? `1px solid #2a2a2a` : "1px solid transparent",
                  borderRadius: isSel ? 6 : 0,
                  margin: isSel ? "2px 6px" : "0 6px"
                }}>
                  <span style={{
                    fontSize: 13, color: "#4b5563", fontFamily: "'JetBrains Mono', monospace",
                    width: 20, flexShrink: 0, textAlign: "center"
                  }}>{rank}</span>
                  <div style={{ width: 1, height: 18, background: "#2a2a2a", margin: "0 10px", flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0, display: "flex", alignItems: "center", gap: 4 }}>
                    {rank === 1 && <span style={{ color: "#f59e0b", fontSize: 12 }}>☆</span>}
                    <span style={{
                      fontSize: 13, color: isSel ? "#e5e7eb" : "#9ca3af", fontWeight: isSel ? 600 : 400,
                      whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"
                    }}>{c.name}</span>
                  </div>
                  <span style={{
                    fontSize: 11, fontWeight: 700, color: statusIcon.color,
                    fontFamily: "'JetBrains Mono', monospace", flexShrink: 0, marginRight: 4
                  }}>{statusIcon.symbol}</span>
                  <span style={{
                    fontSize: 12, fontWeight: 500, color: "#9ca3af",
                    fontFamily: "'JetBrains Mono', monospace", flexShrink: 0
                  }}>{c.score}/10</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detail Panel */}
        <div style={{ flex: 1, overflowY: "auto", background: "#1a1a1a" }}>
          <div style={{ padding: "20px 24px" }}>
            {/* City header */}
            <div style={{ marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <h2 style={{ margin: 0, fontSize: 20, color: "#e5e7eb", fontWeight: 600, fontFamily: "'JetBrains Mono', monospace" }}>{city.name}</h2>
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

            {/* Key Finding Highlights */}
            <div style={{ marginTop: 16 }}>
              <div style={{ color: "#4b5563", fontSize: 10, fontWeight: 600, letterSpacing: 1.5, marginBottom: 10, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase" }}>Key Finding Highlights</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {getHighlightPills(city).map((pill, i) => {
                  const isGood = pill.type === "good";
                  const isBad = pill.type === "bad";
                  return (
                    <div key={i} style={{
                      flex: "1 1 0", minWidth: 120, padding: "10px 12px", borderRadius: 6,
                      background: isBad ? "#1a0a0a" : isGood ? "#0a1a0a" : "#111",
                      border: `1px solid ${isBad ? "#3a1515" : isGood ? "#153a15" : "#1f1f1f"}`,
                      display: "flex", alignItems: "flex-start", gap: 8
                    }}>
                      {pill.icon && <span style={{ fontSize: 14, opacity: 0.7, flexShrink: 0, marginTop: 1 }}>{pill.icon}</span>}
                      <div style={{ minWidth: 0 }}>
                        <div style={{
                          fontSize: 12, fontWeight: 600, fontFamily: "'JetBrains Mono', monospace",
                          color: isBad ? "#ef4444" : isGood ? "#4ade80" : "#d1d5db",
                          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"
                        }}>{pill.text}</div>
                        {pill.sub && <div style={{ fontSize: 10, color: "#4b5563", marginTop: 2 }}>{pill.sub}</div>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Full Key Finding Details (collapsible) */}
            <div style={{ marginTop: 12, background: "#222", borderRadius: 6, border: "1px solid #2a2a2a", overflow: "hidden" }}>
              <div onClick={() => setFindingsOpen(!findingsOpen)} style={{
                padding: "10px 14px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between"
              }}>
                <span style={{ color: "#d1d5db", fontSize: 11, fontWeight: 600, fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1, textTransform: "uppercase" }}>Full Key Finding Details</span>
                <span style={{ color: "#4b5563", fontSize: 14, transform: findingsOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>⌄</span>
              </div>
              {findingsOpen && (
                <div style={{ padding: "0 14px 12px" }}>
                  {city.findings.map((f, i) => (
                    <div key={i} style={{
                      padding: "5px 0", fontSize: 11, color: "#9ca3af", lineHeight: 1.6,
                      borderBottom: i < city.findings.length - 1 ? "1px solid #2a2a2a" : "none",
                      fontFamily: "'JetBrains Mono', monospace"
                    }}>
                      <span style={{ color: findingColor(f), marginRight: 6 }}>▸</span>
                      {f}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

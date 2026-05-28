import { useState, useEffect } from "react";
import { BarChart2, Cpu, DollarSign, TrendingUp, FlaskConical, AlertTriangle, Star, Check, ChevronDown, ArrowUpDown } from "lucide-react";

const cities = [
  {
    name: "Portland, OR",
    score: 4,
    status: "CONTRACTING",
    unemployment: "5.2%",
    jobGrowth: "-0.2%",
    jobsChanged: "~Flat YoY; Intel 500+ Hillsboro July 2026, Nike ~1,400 April 2026",
    swOpenings: "~280",
    applicantsPerJob: "~70-80 est.",
    totalTech: "811",
    techPct: "~9%",
    majorEmployers: "Intel (cutting — 500+ Hillsboro July 2026), Nike (cutting — ~1,400 April 2026), Lam Research (stable)",
    techTrend: "Silicon Forest contracting; Intel manufacturing pivot and Nike tech cuts dominate",
    avgTechSalary: "$120-160K",
    stateTax: "9.9% + local surcharges",
    colIndex: "~130",
    rent1br: "$1,395-$1,500",
    salaryCol: "Poor — high tax erodes take-home",
    officeVacancy: "34.7% downtown; 15.2% metro (CBRE Q1 2026)",
    popTrend: "Slight rebound: +1,400 residents in 2024, first gain since 2020; still 17,000 below peak",
    capitalRank: "80th of 81 (ULI)",
    biggestRisk: "Structural economic decline; Intel/Nike simultaneous contraction",
    findings: [
      "Intel cut ~6,000 Oregon jobs over recent years; 500+ additional Hillsboro layoffs effective July 15, 2026",
      "Nike announced ~1,400 cuts in April 2026, concentrated in tech and global ops",
      "Portland-Hillsboro MSA unemployment 5.2% (March 2026) — tied for highest in cohort",
      "Downtown office direct vacancy ~34.7% in Q1 2026; leasing shifted to suburbs",
      "City gained ~1,400 residents in 2024 — first positive year since 2020 — but still 17,000 below 2020 peak",
      "1BR median ~$1,395–$1,500 — most affordable West Coast city in cohort",
      "CompTIA forecasts only marginal tech rebound in 2026 after two straight years of declines",
      "Employment CONTRACTING while national economy EXPANDING — structural, not cyclical"
    ],
    sources: {
      employment: [
        { label: "BLS Oregon Area Employment Statistics", url: "https://www.bls.gov/regions/west/oregon.htm" },
        { label: "Oregon Employment Dept — Monthly Labor Force Data", url: "https://www.qualityinfo.org/" },
        { label: "Colliers Portland Office Report Q4 2025", url: "https://www.colliers.com/en/research/portland" },
        { label: "ULI/PwC Emerging Trends in Real Estate 2025 (#80 of 81)", url: "https://americas.uli.org/emerging-trends-in-real-estate-2025/" }
      ],
      techSalaries: [
        { label: "Glassdoor — Software Engineer Salaries, Portland OR", url: "https://www.glassdoor.com/Salaries/portland-software-engineer-salary-SRCH_IL.0,8_IM700_KO9,26.htm" },
        { label: "Indeed — Software Engineer Salary Portland", url: "https://www.indeed.com/career/software-engineer/salaries/Portland--OR" },
        { label: "LinkedIn Job Postings — Portland Metro Area", url: "https://www.linkedin.com/jobs/software-engineer-jobs-portland-or/" }
      ],
      costLiving: [
        { label: "Zumper Portland Rent Research 2025", url: "https://www.zumper.com/rent-research/portland-or" },
        { label: "BestPlaces — Portland OR Cost of Living (C2ER)", url: "https://www.bestplaces.net/cost_of_living/city/oregon/portland" },
        { label: "Oregon Dept. of Revenue — Tax Rates & Surcharges", url: "https://www.oregon.gov/dor/programs/individuals/Pages/PIT.aspx" }
      ],
      populationInvestment: [
        { label: "IRS SOI Migration Data — Oregon Inflow/Outflow", url: "https://www.irs.gov/statistics/soi-tax-stats-migration-data" },
        { label: "Census Bureau — Portland Metro Population Estimates", url: "https://www.census.gov/quickfacts/portlandcityoregon" },
        { label: "Oregon Office of Economic Analysis — 2025 Forecast", url: "https://www.oregon.gov/das/oea/pages/index.aspx" }
      ]
    }
  },
  {
    name: "Austin, TX",
    score: 8,
    status: "GROWING",
    unemployment: "3.7%",
    jobGrowth: "+2.0%",
    jobsChanged: "+27,200 in 2025; ~+8,300 net new tech jobs in 2026",
    swOpenings: "~4,000+",
    applicantsPerJob: "~40-50 est.",
    totalTech: "~8,000-10,000",
    techPct: "16.3%",
    majorEmployers: "Dell (~14,000, stable), Tesla (stable/selective), Samsung (~9,000+, hiring), Apple (hiring at new campus), Oracle (cutting thousands company-wide 2026)",
    techTrend: "Bifurcated — generalist SWE growth flat, AI/ML infra and chip design roles talent-starved at sub-1% effective unemployment",
    avgTechSalary: "$126-144K avg SWE; senior total comp $180-240K",
    stateTax: "0%",
    colIndex: "~103-105",
    rent1br: "~$1,500 (down 5.3% YoY)",
    salaryCol: "Good — no tax, moderate COL",
    officeVacancy: "~26.7-27% downtown (Colliers Q1 2026)",
    popTrend: "Austin crossed 1M residents in 2024-25 (+2.3% YoY); suburbs absorbing most growth",
    capitalRank: "#1 of 50 largest US metros for job growth in 2025",
    biggestRisk: "Bifurcated market — Oracle/Indeed/Expedia cuts alongside AI/chip expansion; generalist SWE oversaturated",
    findings: [
      "Austin ranked #1 of 50 largest US metros for job growth in 2025 (+2.0%, 27,200 jobs)",
      "Tech-job growth bifurcated: ~+8,300 net new tech jobs in 2026 concentrated in AI infra and chips; generalist SWE near flat",
      "Texas Instruments building four 300mm wafer fabs in Sherman; JPMorgan scaling from 4,000 to ~18,000 employees",
      "Oracle executed thousands of layoffs in 2026 reorganization for AI; Indeed reduced Austin headcount 15% across 2023–24; Expedia cut 100 in Feb 2026",
      "Office vacancy among highest in cohort — downtown ~27%, metro ~26.7% — but suburban submarkets in 'flight to quality'",
      "No state income tax — massive advantage over high-tax states",
      "1BR rent down 5.3% YoY to ~$1,500 — Texas markets posting broad rent declines",
      "Austin became 12th US city to cross 1M residents in 2024–25 (+2.3%)"
    ],
    sources: {
      employment: [
        { label: "BLS Austin-Round Rock-Georgetown MSA Employment Statistics", url: "https://www.bls.gov/regions/southwest/news-release/areaemployment_austin.htm" },
        { label: "Texas Workforce Commission — Austin Area Labor Market", url: "https://www.twc.texas.gov/news/local-area-unemployment-statistics" },
        { label: "Colliers Austin Office Market Report 2025", url: "https://www.colliers.com/en/research/austin" },
        { label: "Austin Chamber of Commerce — Economic Indicators 2025", url: "https://www.austinchamber.com/economic-development/austin-profile/economy" }
      ],
      techSalaries: [
        { label: "Glassdoor — Software Engineer Salaries Austin TX", url: "https://www.glassdoor.com/Salaries/austin-software-engineer-salary-SRCH_IL.0,6_IM60_KO7,24.htm" },
        { label: "Indeed — Software Engineer Salary Austin TX", url: "https://www.indeed.com/career/software-engineer/salaries/Austin--TX" },
        { label: "CompTIA — State of the Tech Workforce 2025", url: "https://www.comptia.org/content/research/cybersecurity-supply-demand-heat-map" }
      ],
      costLiving: [
        { label: "Zumper Austin Rent Research 2025", url: "https://www.zumper.com/rent-research/austin-tx" },
        { label: "BestPlaces — Austin TX Cost of Living (C2ER)", url: "https://www.bestplaces.net/cost_of_living/city/texas/austin" },
        { label: "Zillow — Austin Rental Market Overview", url: "https://www.zillow.com/rental-manager/market-trends/austin-tx/" }
      ],
      populationInvestment: [
        { label: "ULI/PwC Emerging Trends in Real Estate 2025 (Top 10)", url: "https://americas.uli.org/emerging-trends-in-real-estate-2025/" },
        { label: "Census Bureau — Austin Metro Population Estimates", url: "https://www.census.gov/quickfacts/austincitytexas" },
        { label: "Texas Demographic Center — Migration Analysis 2025", url: "https://demographics.texas.gov/" }
      ]
    }
  },
  {
    name: "Raleigh-Durham, NC",
    score: 9,
    status: "GROWING",
    unemployment: "Raleigh 2.9%, Durham 3.1%",
    jobGrowth: "+2.8-3.5% projected 2026",
    jobsChanged: "42,190 new jobs announced statewide since Jan 2025 with $0.8B+ investment",
    swOpenings: "Several thousand across Triangle",
    applicantsPerJob: "~30-40 est.",
    totalTech: "~4,000-5,000",
    techPct: "~18% (projected to grow another 20%)",
    majorEmployers: "IBM (hiring, watsonx/Vela), Apple ($1B campus, 3,000+ jobs, hiring), Google ($1B Durham hub, 1,000+, hiring), Microsoft (2,500+ dev center, stable), Red Hat (stable), SAS (stable)",
    techTrend: "Cleanest top-15 metro on net basis; Apple/Google/Microsoft build-outs are net additive; market is talent-constrained not demand-constrained",
    avgTechSalary: "$120-155K",
    stateTax: "4.5-4.75%",
    colIndex: "~98-102",
    rent1br: "~$1,217 (flat YoY)",
    salaryCol: "Best — near-national-average COL, decent salary, low-avg tax",
    officeVacancy: "~10.7% blended (Raleigh 11.1%, Durham 9.8%; Avison Young Q1 2026)",
    popTrend: "Strong gains; Wake & Durham counties both adding residents",
    capitalRank: "#3 Southern tech hub; Top 15 nationally",
    biggestRisk: "Smaller absolute market; growth capped by talent supply, not demand",
    findings: [
      "Raleigh-Cary unemployment 2.9%, Durham 3.1% — lowest in the 15-city cohort",
      "Apple's $1B RTP campus expansion creating 3,000+ jobs; Google's $1B Durham engineering hub adds 1,000+",
      "Blended Raleigh-Durham office vacancy ~10.7% — among the healthiest CBDs in the US (vs 27%+ in Austin, 30%+ in Chicago)",
      "Tech sector ~18% of local employment; projected to grow another 20% by end of 2026",
      "Raleigh ranked #3 Southern tech hub (after Austin and DC); Durham ranked #7",
      "1BR rent ~$1,217 — among cheapest in cohort",
      "Growth is talent-constrained, not demand-constrained — 2.8–3.5% growth projection capped by supply",
      "42,190 new jobs announced in NC since Jan 2025 with $0.8B+ private investment"
    ],
    sources: {
      employment: [
        { label: "BLS Raleigh-Durham-Chapel Hill MSA Employment Statistics", url: "https://www.bls.gov/regions/southeast/news-release/areaemployment_raleigh.htm" },
        { label: "NC Commerce Dept — Labor Market Statistics", url: "https://www.nccommerce.com/research-publications/labor-market-info" },
        { label: "Colliers Raleigh-Durham Office Report 2025", url: "https://www.colliers.com/en/research/raleigh-durham" },
        { label: "Research Triangle Regional Partnership — 2025 Report", url: "https://www.researchtriangle.org/" }
      ],
      techSalaries: [
        { label: "Glassdoor — Software Engineer Salaries Raleigh NC", url: "https://www.glassdoor.com/Salaries/raleigh-software-engineer-salary-SRCH_IL.0,7_IM734_KO8,25.htm" },
        { label: "Indeed — Software Engineer Salary Raleigh-Durham", url: "https://www.indeed.com/career/software-engineer/salaries/Raleigh--NC" },
        { label: "CompTIA — Tech Town Index 2025", url: "https://www.comptia.org/content/research/best-cities-for-tech-jobs" }
      ],
      costLiving: [
        { label: "C2ER Cost of Living Index — Raleigh-Durham (95.4)", url: "https://www.coli.org/" },
        { label: "Zumper Raleigh Rent Research 2025", url: "https://www.zumper.com/rent-research/raleigh-nc" },
        { label: "Zillow — Raleigh-Durham Rental Market Overview", url: "https://www.zillow.com/rental-manager/market-trends/raleigh-nc/" }
      ],
      populationInvestment: [
        { label: "ULI/PwC Emerging Trends 2025 (Top 15)", url: "https://americas.uli.org/emerging-trends-in-real-estate-2025/" },
        { label: "Census Bureau — Raleigh Metro Population Estimates", url: "https://www.census.gov/quickfacts/fact/table/raleighcitynorthcarolina" },
        { label: "Milken Institute 2025 Best-Performing Cities", url: "https://milkeninstitute.org/content-hub/research-and-reports/research-and-data-tools/2025-best-performing-cities-mapping-economic-growth-across-us" }
      ]
    }
  },
  {
    name: "Seattle, WA",
    score: 6,
    status: "CONTRACTING",
    unemployment: "4.8% (King County, March 2026)",
    jobGrowth: "-0.2%",
    jobsChanged: "Amazon -2,198 WA (Q1 2026); Meta -1,395 King County (July 2026); Microsoft -3,200+ WA",
    swOpenings: "~8,000+",
    applicantsPerJob: "~83",
    totalTech: "~6,000-8,000",
    techPct: "~15%",
    majorEmployers: "Amazon (cutting — 4,500+ corp WA workers in <1yr), Microsoft (cutting — postings -46.5%), Meta (cutting — 1,395 King County), Google (cutting — postings -23.7%), T-Mobile (stable), Providence/Swedish (hiring)",
    techTrend: "Acute managed contraction across cloud giants — postings down 20-50% at four largest employers; healthcare absorbing some workforce slack",
    avgTechSalary: "$150-200K base; ~$202K average total comp",
    stateTax: "0%",
    colIndex: "~155-158",
    rent1br: "~$1,700-$1,900 (+3% YoY)",
    salaryCol: "Moderate — high salary offset by very high COL",
    officeVacancy: "28.0% Seattle; 22.4% Eastside/Bellevue (Colliers Q1 2026)",
    popTrend: "Seattle city +1.8% in 2024 (top-5 nationally); driven heavily by international migration",
    capitalRank: "Top 20 (declining — cloud giant retrenchment is structural)",
    biggestRisk: "Meta/Amazon/Microsoft simultaneous structural cuts; standard job search stretched to 12-18 months",
    findings: [
      "Amazon laid off 2,198 in WA in early 2026 — ~33% software development engineers; >1,400 in Seattle proper",
      "Meta cut 1,395 King County jobs effective July 22, 2026 — 20% of local Meta workforce; Bellevue Spring District hit hardest (699)",
      "Microsoft (-46.5%), Boeing (-31.8%), Google (-23.7%), Blue Origin (-21.4%) all sharply reduced job postings in Q1 2026",
      "Standard tech job-search length stretched from 4–9 months to 12–18 months per local recruiters",
      "Seattle office vacancy hit 28.0% in Q1 2026, a fresh high; Eastside healthier at 22.4%",
      "Healthcare hiring is the bright spot — Providence +60.7%, Soliant +47.1%, Swedish +32.5%, Seattle Children's +30.8%",
      "No state income tax is real advantage — but cloud-giant JumpStart tax driving employer cost scrutiny",
      "King County unemployment dropped from 5.7% (Jan) to 4.8% (March) — partly from labor force exiting"
    ],
    sources: {
      employment: [
        { label: "BLS Seattle-Tacoma-Bellevue MSA Employment Statistics", url: "https://www.bls.gov/regions/west/news-release/areaemployment_seattle.htm" },
        { label: "Washington State ESD — Labor Market Information", url: "https://esd.wa.gov/labormarketinfo" },
        { label: "Colliers Seattle Office Report 2025", url: "https://www.colliers.com/en/research/seattle" },
        { label: "JLL Seattle Market Dynamics Q4 2025", url: "https://www.jll.com/en-us/insights/market-dynamics/seattle-office" }
      ],
      techSalaries: [
        { label: "Glassdoor — Software Engineer Salaries Seattle WA", url: "https://www.glassdoor.com/Salaries/seattle-software-engineer-salary-SRCH_IL.0,7_IM781_KO8,25.htm" },
        { label: "Pragmatic Engineer — State of the Tech Market 2025", url: "https://newsletter.pragmaticengineer.com/p/state-of-the-tech-market-in-2025" },
        { label: "Levels.fyi — Seattle Total Compensation Data", url: "https://www.levels.fyi/t/software-engineer/locations/seattle-area" }
      ],
      costLiving: [
        { label: "Zumper Seattle Rent Research 2025", url: "https://www.zumper.com/rent-research/seattle-wa" },
        { label: "BestPlaces — Seattle WA Cost of Living (C2ER: 142)", url: "https://www.bestplaces.net/cost_of_living/city/washington/seattle" },
        { label: "C2ER COLI — Seattle Metro", url: "https://www.coli.org/" }
      ],
      populationInvestment: [
        { label: "ULI/PwC Emerging Trends in Real Estate 2025", url: "https://americas.uli.org/emerging-trends-in-real-estate-2025/" },
        { label: "King County — Population & Demographics Division", url: "https://kingcounty.gov/en/dept/records-licensing/recordings/data-and-stats/demographics" },
        { label: "Washington State OFM — Population Estimates 2025", url: "https://ofm.wa.gov/washington-data-research/population-demographics" }
      ]
    }
  },
  {
    name: "Dallas-Fort Worth, TX",
    score: 7,
    status: "GROWING",
    unemployment: "~3.7-4.0%",
    jobGrowth: "+1.5% (decelerating from +56,100/mo pace)",
    jobsChanged: "Tech workforce 227,220 — +26% since 2021; JPMorgan scaling 4,000→18,000",
    swOpenings: "~1,000+",
    applicantsPerJob: "~35-45 est.",
    totalTech: "~6,000-8,000",
    techPct: "~10%",
    majorEmployers: "AT&T (hiring AI engineers), Texas Instruments (hiring — 4 new fabs in Sherman), JPMorgan Chase (hiring aggressively), Charles Schwab (hiring in Westlake), Toyota NA (stable)",
    techTrend: "Financial-services AI buildout dominant; semiconductor capacity expansion at TI; Class A suburban absorption strong",
    avgTechSalary: "$130-160K; lead AI engineers $161-259K+",
    stateTax: "0%",
    colIndex: "~103-107",
    rent1br: "~$1,300-$1,400 (down 5.6% YoY)",
    salaryCol: "Good — no tax, low COL",
    officeVacancy: "~28.5% metro availability; Dallas CBD 33% (CBRE Q1 2026)",
    popTrend: "Strong suburban growth (Collin Co +43,000; Princeton fastest-growing US city +30%); Dallas County itself -2,616",
    capitalRank: "Top 10; 2nd to NYC in raw tech-job growth since 2021",
    biggestRisk: "Class B/C office glut; job-add pace decelerated from 56,100 to 18,500/month",
    findings: [
      "DFW tech workforce 227,220 — second to NYC in raw tech-job growth (+26% since 2021)",
      "JPMorgan Chase scaling DFW presence from 4,000 to ~18,000 — among largest single corporate buildouts in country",
      "Texas Instruments constructing 4 new 300mm wafer fabs in Sherman; first online ~early 2026",
      "Dallas CBD office vacancy 33% — Class B is the structural laggard; Class A in Uptown/Plano absorbing demand",
      "Job-add pace slowed from 56,100/mo (early 2025) to 18,500 (Nov 2025) — deceleration but still positive",
      "Professional & Business Services lost 14,300 jobs in 2025; Healthcare/Education added 15,700 (+3.0%)",
      "1BR rent down 5.6% YoY to ~$1,300–$1,400 — among most affordable major tech metros",
      "No state income tax — significant advantage over high-tax coastal markets"
    ],
    sources: {
      employment: [
        { label: "BLS Dallas-Fort Worth-Arlington MSA Employment Statistics", url: "https://www.bls.gov/regions/southwest/news-release/areaemployment_dallas.htm" },
        { label: "Texas Workforce Commission — DFW Area Labor Market", url: "https://www.twc.texas.gov/news/local-area-unemployment-statistics" },
        { label: "Colliers DFW Office Market Report 2025", url: "https://www.colliers.com/en/research/dallas-fort-worth" },
        { label: "DFW Chamber of Commerce — Economic Reports", url: "https://dfwchamber.org/" }
      ],
      techSalaries: [
        { label: "Glassdoor — Software Engineer Salaries Dallas TX", url: "https://www.glassdoor.com/Salaries/dallas-software-engineer-salary-SRCH_IL.0,6_IM218_KO7,24.htm" },
        { label: "Indeed — Software Engineer Salary Dallas-Fort Worth", url: "https://www.indeed.com/career/software-engineer/salaries/Dallas--TX" },
        { label: "Robert Half Technology Salary Guide 2026", url: "https://www.roberthalf.com/us/en/insights/salary-guide/technology" }
      ],
      costLiving: [
        { label: "Zumper Dallas Rent Research 2025", url: "https://www.zumper.com/rent-research/dallas-tx" },
        { label: "BestPlaces — Dallas TX Cost of Living (C2ER: 97)", url: "https://www.bestplaces.net/cost_of_living/city/texas/dallas" },
        { label: "Zillow — Dallas-Fort Worth Rental Market", url: "https://www.zillow.com/rental-manager/market-trends/dallas-tx/" }
      ],
      populationInvestment: [
        { label: "ULI/PwC Emerging Trends in Real Estate 2025 (Top 10)", url: "https://americas.uli.org/emerging-trends-in-real-estate-2025/" },
        { label: "Census Bureau — Dallas-Fort Worth Population Estimates", url: "https://www.census.gov/quickfacts/dallascitytexas" },
        { label: "North Texas Commission — Economic Impact Reports", url: "https://northtexascommission.com/" }
      ]
    }
  },
  {
    name: "San Francisco, CA",
    score: 7,
    status: "STAGNANT",
    unemployment: "3.6% (SF MSA, March 2026 — lowest in CA major metros)",
    jobGrowth: "+0.3%",
    jobsChanged: "AI startups hiring hundreds; Information sector -4,500 jobs (-4%) in 2025",
    swOpenings: "~6,000+",
    applicantsPerJob: "~50-70 est.",
    totalTech: "~8,500-9,000",
    techPct: "20.8%",
    majorEmployers: "OpenAI (hiring — hundreds in SF), Anthropic (hypergrowth — 1,500 employees, 392+ open roles), Salesforce (cutting), Pinterest (cutting — 15%), Stripe (stable), Databricks (hiring), Scale AI (hiring)",
    techTrend: "AI capital paradox — record VC, all-time-high rents, but Information sector shed 4,500 jobs in 2025; hiring concentrated at elite AI labs",
    avgTechSalary: "$201K-376K range; ~$273K avg total comp (Levels.fyi 2026) — highest in US",
    stateTax: "13.3%",
    colIndex: "~178-185",
    rent1br: "$4,000 (all-time high May 2026, +21% YoY — fastest rent growth in US)",
    salaryCol: "Poor — extreme COL erodes even top-tier comp",
    officeVacancy: "30.4% (CBRE Q1 2026); +2.27M sq ft net absorption — possible trough",
    popTrend: "SF-Oakland-Fremont metro returned to positive growth; SF city still -8.11% vs 2020 census",
    capitalRank: "#1 globally for AI/tech talent concentration; Anthropic $61.5B valuation",
    biggestRisk: "Hiring concentrated in elite AI labs only; generalist SWE market oversaturated; 13.3% tax + $4K rent",
    findings: [
      "SF 1BR rent crossed $4,000 for first time ever in May 2026 (+21% YoY — #1 rent growth in the nation)",
      "Information sector lost 4,500 jobs (~4%) in 2025 despite AI boom — steepest annual sectoral drop",
      "OpenAI plans hundreds of new hires (vast majority in SF); Anthropic has 392+ open roles with no layoffs",
      "Office vacancy 30.4% in Q1 2026 — still among worst nationally, but +2.27M sf net absorption signals possible trough",
      "SF MSA unemployment 3.6% (March 2026) — lowest in California major metros",
      "Average SWE total comp ~$273K — highest in US by ~40% margin",
      "Meta cut only 252 jobs in SF vs 1,395 in Seattle area — Meta is shifting AI work to Bay Area",
      "SF-Oakland-Fremont metro turned population-positive in 2023–24; city still 8% below 2020 census"
    ],
    sources: {
      employment: [
        { label: "BLS San Francisco-Oakland-Hayward MSA Employment Statistics", url: "https://www.bls.gov/regions/west/news-release/areaemployment_sanfrancisco.htm" },
        { label: "CA EDD — Bay Area Labor Market Info 2025-2026", url: "https://www.labormarketinfo.edd.ca.gov/" },
        { label: "CBRE San Francisco Office Figures Q4 2025", url: "https://www.cbre.com/insights/figures/san-francisco-office-figures-q4-2025" },
        { label: "Axios SF — Tech Layoff Tracker 2025-2026", url: "https://www.axios.com/local/san-francisco" }
      ],
      techSalaries: [
        { label: "Glassdoor — Software Engineer Salaries San Francisco", url: "https://www.glassdoor.com/Salaries/san-francisco-software-engineer-salary-SRCH_IL.0,13_IM759_KO14,31.htm" },
        { label: "Levels.fyi — Bay Area Total Compensation Data", url: "https://www.levels.fyi/t/software-engineer/locations/san-francisco-bay-area" },
        { label: "Indeed — Software Engineer Salary San Francisco CA", url: "https://www.indeed.com/career/software-engineer/salaries/San-Francisco--CA" }
      ],
      costLiving: [
        { label: "Zumper Q1 2026 — San Francisco Rent Report (+18.4% YoY)", url: "https://www.zumper.com/rent-research/san-francisco-ca" },
        { label: "BestPlaces — San Francisco CA Cost of Living (C2ER: 189)", url: "https://www.bestplaces.net/cost_of_living/city/california/san_francisco" },
        { label: "Zillow — SF Bay Area Rental Market Overview", url: "https://www.zillow.com/rental-manager/market-trends/san-francisco-ca/" }
      ],
      populationInvestment: [
        { label: "ULI/PwC Emerging Trends 2025 (#1 AI/Tech Talent Concentration)", url: "https://americas.uli.org/emerging-trends-in-real-estate-2025/" },
        { label: "SF Planning Dept — Population Estimates 2025", url: "https://sfplanning.org/resource/population-projections" },
        { label: "NVCA MoneyTree Report — Bay Area VC Funding 2025", url: "https://nvca.org/research/" }
      ]
    }
  },
  {
    name: "Los Angeles, CA",
    score: 5,
    status: "CONTRACTING",
    unemployment: "5.9% (LA County, March 2026 — first time below 6% since Oct 2025)",
    jobGrowth: "-0.4%",
    jobsChanged: "84% of CA Information-sector layoffs in 2026 landed in LA County",
    swOpenings: "~2,000+",
    applicantsPerJob: "~50-60 est.",
    totalTech: "~13,000",
    techPct: "~12%",
    majorEmployers: "SpaceX (hiring), Riot Games (stable), Snap (cutting), Warner Bros Discovery (cutting), Activision/Microsoft (cutting); Aerospace (Lockheed, Northrop — stable/hiring)",
    techTrend: "Entertainment + tech AI overlap = double exposure; 84% of CA Information-sector layoffs in 2026. Aerospace and SpaceX-adjacent provide only consistent hiring",
    avgTechSalary: "$140-185K; entertainment-tech and aerospace premium",
    stateTax: "13.3%",
    colIndex: "~150-155",
    rent1br: "$2,200-2,400 (modestly declining)",
    salaryCol: "Poor — high COL with average-tier salaries vs. coastal peers",
    officeVacancy: "25.3% Greater LA (Colliers Q1 2026); sublease availability declining 7 straight quarters",
    popTrend: "LA city added 31,000 in 2024 (3rd nationally), but metro losing population YoY",
    capitalRank: "Top 4 in US for VC deployment",
    biggestRisk: "Entertainment+tech AI shock: streaming consolidation + SWE AI displacement hitting simultaneously",
    findings: [
      "LA County unemployment 5.9% (March 2026) — labor force shrank 22,000 even as headline rate dipped",
      "84% of California's Information-sector layoffs occurred in LA County in 2026 — entertainment + tech overlap is double-exposed to AI",
      "Greater LA office vacancy 25.3% (Colliers Q1 2026); sublease availability declining 7 straight quarters to 3.5% — early stabilization signal",
      "California tech sector lost 13,200 positions in custom software services / systems design in March 2026 alone",
      "LA city added 31,000 residents in 2024 (3rd nationally), but more recent estimates show metro losing population YoY",
      "Aerospace (SpaceX, Lockheed, Northrop) is the most reliable tech-adjacent hiring vertical",
      "Streaming consolidation under Warner Bros, Disney, NBCU continues to cut tech and creative roles",
      "13.3% CA income tax + high COL makes LA less competitive vs remote/distributed roles"
    ],
    sources: {
      employment: [
        { label: "BLS Los Angeles-Long Beach-Anaheim MSA Employment Statistics", url: "https://www.bls.gov/regions/west/news-release/areaemployment_losangeles.htm" },
        { label: "CA EDD — LA County Labor Market Statistics", url: "https://www.labormarketinfo.edd.ca.gov/" },
        { label: "CBRE Los Angeles Office Market Q3 2025", url: "https://www.cbre.com/insights/figures/los-angeles-office-figures-q3-2025" },
        { label: "Los Angeles County — Economic Development Office", url: "https://lacountyworks.org/" }
      ],
      techSalaries: [
        { label: "Glassdoor — Software Engineer Salaries Los Angeles CA", url: "https://www.glassdoor.com/Salaries/los-angeles-software-engineer-salary-SRCH_IL.0,11_IM508_KO12,29.htm" },
        { label: "Indeed — Software Engineer Salary Los Angeles", url: "https://www.indeed.com/career/software-engineer/salaries/Los-Angeles--CA" },
        { label: "Hired — State of Software Engineers Report 2025", url: "https://hired.com/state-of-software-engineers" }
      ],
      costLiving: [
        { label: "Zumper Los Angeles Rent Research 2025", url: "https://www.zumper.com/rent-research/los-angeles-ca" },
        { label: "BestPlaces — Los Angeles CA Cost of Living (C2ER: 166)", url: "https://www.bestplaces.net/cost_of_living/city/california/los_angeles" },
        { label: "Apartments.com — LA Rental Market Trends", url: "https://www.apartments.com/los-angeles-ca/" }
      ],
      populationInvestment: [
        { label: "ULI/PwC Emerging Trends 2025 (Top 4 VC Deployment)", url: "https://americas.uli.org/emerging-trends-in-real-estate-2025/" },
        { label: "LA County Dept. of Regional Planning — Population Data", url: "https://planning.lacounty.gov/census" },
        { label: "NVCA — Los Angeles VC Funding Data 2025", url: "https://nvca.org/research/" }
      ]
    }
  },
  {
    name: "San Diego, CA",
    score: 7,
    status: "STAGNANT",
    unemployment: "4.3% (March 2026), 4.1% (April 2026) — improving steadily",
    jobGrowth: "+0.5-1%",
    jobsChanged: "+8,100 jobs Feb→Mar 2026; +7,200 jobs Mar→Apr 2026",
    swOpenings: "~1,500-2,000",
    applicantsPerJob: "~40-50 est.",
    totalTech: "~5,000+",
    techPct: "~12%",
    majorEmployers: "Qualcomm (stable/selective), General Atomics (hiring — defense tech), Northrop Grumman (hiring), Illumina (cutting, cost-restructure), ServiceNow (stable), Booz Allen/Leidos/SAIC (hiring)",
    techTrend: "Defense-tech and life-sciences are resilient cores; less exposed to AI-driven cuts than SF/Seattle/LA",
    avgTechSalary: "$130-165K; defense-cleared SWE roles command premium",
    stateTax: "13.3%",
    colIndex: "~150",
    rent1br: "~$2,195 (Zumper May 2026; stable)",
    salaryCol: "Moderate — decent salaries offset by high COL and CA tax",
    officeVacancy: "14.3% metro (CBRE Q1 2026); downtown 2 consecutive quarters of positive net absorption",
    popTrend: "Metro modestly declined in 2024-25 per Census vintage estimates; city-level near flat",
    capitalRank: "Strong defense-tech VC; $3B+ in Q1 2026 (Shield AI $2B anchor)",
    biggestRisk: "Military-industrial concentration; biotech facing margin pressure (NIH cuts, Illumina restructuring)",
    findings: [
      "San Diego County unemployment 4.3% in March 2026, 4.1% in April — improving steadily",
      "Metro added 8,100 jobs Feb→Mar 2026 and 7,200 jobs Mar→Apr 2026; among healthier large-metro labor markets",
      "Office vacancy 14.3% — significantly better than LA (25%) and SF (30%); downtown posted 2 consecutive quarters of positive absorption",
      "Qualcomm holding strong as anchor; defense-tech (General Atomics, Northrop, Booz Allen) hiring on AI/autonomy programs",
      "Illumina restructuring; biotech sector facing margin pressure from NIH cuts",
      "1BR rent ~$2,195 — high relative to wages but stable; significantly below SF ($4,000) and NYC ($4,680)",
      "Less AI-driven layoff exposure than SF/Seattle/LA — defense/life-sciences anchors insulate the market",
      "Population modestly declined in 2024–25 per Census vintage estimates"
    ],
    sources: {
      employment: [
        { label: "BLS San Diego-Chula Vista-Carlsbad MSA Employment Statistics", url: "https://www.bls.gov/regions/west/news-release/areaemployment_sandiego.htm" },
        { label: "CA EDD — San Diego County Labor Market Info", url: "https://www.labormarketinfo.edd.ca.gov/" },
        { label: "CBRE San Diego Office Figures Q3 2025", url: "https://www.cbre.com/insights/figures/san-diego-office-figures-q3-2025" },
        { label: "San Diego Regional EDC — Economic Outlook 2025", url: "https://www.sandiegobusiness.org/research/" }
      ],
      techSalaries: [
        { label: "Glassdoor — Software Engineer Salaries San Diego CA", url: "https://www.glassdoor.com/Salaries/san-diego-software-engineer-salary-SRCH_IL.0,9_IM758_KO10,27.htm" },
        { label: "Indeed — Software Engineer Salary San Diego", url: "https://www.indeed.com/career/software-engineer/salaries/San-Diego--CA" },
        { label: "Motion Recruitment — San Diego Salary Guide 2026", url: "https://www.motionrecruitment.com/salary-guides" }
      ],
      costLiving: [
        { label: "Zumper San Diego Rent Research 2025 (−5.6% YoY)", url: "https://www.zumper.com/rent-research/san-diego-ca" },
        { label: "BestPlaces — San Diego CA Cost of Living (C2ER: 145)", url: "https://www.bestplaces.net/cost_of_living/city/california/san_diego" },
        { label: "Zillow — San Diego Rental Market Overview", url: "https://www.zillow.com/rental-manager/market-trends/san-diego-ca/" }
      ],
      populationInvestment: [
        { label: "Colliers — Greater San Diego Life Sciences Report 2025", url: "https://www.colliers.com/en/research/san-diego" },
        { label: "Census Bureau — San Diego Population Estimates", url: "https://www.census.gov/quickfacts/sandiegocitycalifornia" },
        { label: "Qualcomm FY2025 Annual Report; Shield AI $2B Funding Round", url: "https://investor.qualcomm.com/financial-information/annual-reports" }
      ]
    }
  },
  {
    name: "Boston, MA",
    score: 8,
    status: "GROWING",
    unemployment: "2.9% (Boston-Cambridge-Newton MSA, March 2026 — among lowest in cohort)",
    jobGrowth: "Hiring rebounded in March 2026 (Boston Globe); MA overall stable",
    jobsChanged: "Net positive; healthcare anchors growth; biotech/tech selective hiring",
    swOpenings: "1,000+",
    applicantsPerJob: "~50-70 est.",
    totalTech: "~7,400-7,500",
    techPct: "~14.7%",
    majorEmployers: "HubSpot (hiring — Breeze AI), Wayfair (hiring, ~$140K+), Toast (hiring), Amazon Robotics (hiring), Akamai (~11,000, stable), DraftKings (stable), Moderna (stable/selective), Biogen (cutting)",
    techTrend: "Healthcare + biotech remain structural drivers; AI/ML drug discovery roles in acute shortage; office market fastest recovery in US",
    avgTechSalary: "~$137K avg / $151K total comp SWE; AI Product Manager median $320K",
    stateTax: "5% flat + 4% surtax >$1.08M",
    colIndex: "~150",
    rent1br: "$3,000 (3rd highest nationally after NYC and SF)",
    salaryCol: "Moderate — salary premium partially eroded by high COL",
    officeVacancy: "6th consecutive quarterly decline in Q1 2026 — fastest recovery in region; trending below 17% downtown",
    popTrend: "Boston-Cambridge-Newton crossed 5M residents in 2023–24; positive growth continuing",
    capitalRank: "8th (ULI 2025); biotech up 20% since 2020",
    biggestRisk: "NIH funding cuts threatening university-to-biotech pipeline; Biogen restructuring",
    aiDemand: "Moderate",
    bioOverlap: "High — 1,200+ biotech firms; oligonucleotide roles at Wave Life Sciences, Eli Lilly (Cambridge)",
    consultViability: "Moderate — biotech clients currently capital-constrained; $1,100-1,700/day rates",
    findings: [
      "Boston-Cambridge-Newton unemployment 2.9% in March 2026 — among the lowest in the 15-city cohort",
      "Biotech jobs up 20% since 2020; life-sciences unemployment <2.0%; specialty roles take 90+ days to fill",
      "HubSpot AI engine 'Breeze' anchoring local AI hiring; Wayfair/Toast/DraftKings hiring at scale",
      "Downtown Boston posted 6th consecutive quarter of vacancy decline in Q1 2026 — fastest recovery in US",
      "Biotech faces cyclical hiring slowdown after pandemic boom; Biogen restructuring; Moderna selective",
      "Boston metro crossed 5M residents in 2023–24; immigration-dependent growth continuing",
      "1BR rent $3,000 — third highest in US after NYC and SF; COL ~50% above national",
      "AI Product Manager median compensation $320K (highest in country tied with SF Bay Area)"
    ],
    sources: {
      employment: [
        { label: "BLS Boston Area Employment, June 2025", url: "https://www.bls.gov/regions/northeast/news-release/areaemployment_boston.htm" },
        { label: "Boston.gov Spring 2025 Labor Market Report", url: "https://www.boston.gov/news/spring-2025-boston-labor-market-report" },
        { label: "MassBio 2025 Industry Snapshot — Rare Job Decline", url: "https://www.massbio.org/news/recent-news/industry-snapshot-massachusetts-biopharma-sees-rare-job-decline/" },
        { label: "Colliers Greater Boston Office Report Q4 2025", url: "https://www.colliers.com/en/research/boston/greater-boston-office-report-2025-q4" }
      ],
      techSalaries: [
        { label: "Glassdoor — Boston Software Engineer Salaries (Dec 2025, 25,571 submissions)", url: "https://www.glassdoor.com/Salaries/boston-software-engineer-salary-SRCH_IL.0,6_IM109_KO7,24.htm" },
        { label: "Indeed — Software Engineer Salary Boston MA", url: "https://www.indeed.com/career/software-engineer/salaries/Boston--MA" },
        { label: "Salem News / BLS — Post-Pandemic Innovation Sector Job Data", url: "https://www.salemnews.com/news/state_news/post-pandemic-data-shows-anemic-job-growth-in-massachusetts/article_0a0628a5-c8d1-5cfc-9f8d-3647f2808e38.html" }
      ],
      costLiving: [
        { label: "Zumper Boston Rent Research 2025-2026", url: "https://www.zumper.com/rent-research/boston-ma" },
        { label: "Salary.com / C2ER — Boston Cost of Living Index (~146-153)", url: "https://www.salary.com/research/cost-of-living/boston-ma" },
        { label: "Massachusetts Dept. of Revenue — Income Tax & Millionaires Surtax", url: "https://www.mass.gov/info-details/massachusetts-4-surtax-on-taxable-income" }
      ],
      populationInvestment: [
        { label: "ULI/PwC Emerging Trends in Real Estate 2025 (#8 overall)", url: "https://americas.uli.org/emerging-trends-in-real-estate-2025/" },
        { label: "Boston.com — Population Growth Data March 2026", url: "https://www.boston.com/news/local-news/2026/03/29/2025-marked-boston-areas-slowest-year-of-post-pandemic-population-growth-data-shows/" },
        { label: "Axios Boston — Lab Space Vacancy Amid NIH Cuts, May 2025", url: "https://www.axios.com/local/boston/2025/05/28/development-news-lab-space-sits-vacant-amid-nih-funding-cuts" }
      ]
    }
  },
  {
    name: "New York City, NY",
    score: 7,
    status: "STAGNANT",
    unemployment: "5.6% city (April 2026, sa); NY State 4.6% (March 2026)",
    jobGrowth: "+0.1% city private sector",
    jobsChanged: "Outside Health & Social Assistance, no net job creation in 2025; Wall Street bonuses at record highs",
    swOpenings: "~10,000+",
    applicantsPerJob: "62.2",
    totalTech: "~12,000-17,000",
    techPct: "7% direct; 28% of citywide GDP",
    majorEmployers: "Bloomberg LP (~10,000 NYC engineers, stable/hiring), JPMorgan (hiring fintech/AI), Google (~14,000 NYC, stable), Meta (cutting — part of 8,000-person round), Two Sigma/Citadel (hiring — quant), Datadog (stable)",
    techTrend: "Bifurcated — finance-tech and quant funds aggressively hiring AI/ML; consumer/social tech contracting; NYC ranked #2 nationally for AI-engineering postings after SF Bay",
    avgTechSalary: "$138-277K range; ~$194K avg total comp (Levels.fyi)",
    stateTax: "6.25-6.85% state + 3.876% NYC local",
    colIndex: "~187",
    rent1br: "$4,680 (all-time high, May 2026 +3.1% MoM)",
    salaryCol: "Poor — 10-11% combined state+city tax + extreme COL erodes top-tier comp",
    officeVacancy: "2.9% prime Midtown (tightest in US); 14.6% overall Manhattan (down from 17.3% YoY)",
    popTrend: "NYC metro added 198,000+ in 2023–24 (#2 in US); slipped to #13 in 2024–25 as immigration slowed",
    capitalRank: "Midtown #1 globally (EY/ULI); $42.3B VC/PE in 2025; #2 US for AI-engineering postings",
    biggestRisk: "NYC city unemployment 5.6% and recent-grad outcomes deteriorating; federal tariff shock fiscal risk",
    aiDemand: "High",
    bioOverlap: "Yes — Schrodinger (Midtown HQ, computational chem), Regeneron (Tarrytown), Formation Bio",
    consultViability: "Strong — $1,800-2,400/day rates; deepest enterprise client pool outside SF",
    findings: [
      "NYC city unemployment 5.6% (April 2026, sa) — above state and national; college-graduate unemployment rising sharply",
      "Manhattan Midtown prime office vacancy just 2.9% (CBRE Q1 2026) — tightest in US; Midtown leasing hit highest total since 2018",
      "Wall Street bonuses at record highs in early 2026; finance-tech hiring (JPMorgan, Goldman, quant funds) is the strongest segment",
      "1BR rent hit all-time high $4,680 in May 2026 (+3.1% MoM) — most expensive in the US",
      "NYC metro added 198,000 residents in 2023–24 (#2 in US) but immigration slowdown dropped it to #13 in 2024–25",
      "Bloomberg LP, Google, and the largest banks anchor a tech workforce that ranks #2 to SF Bay in raw size",
      "Outside Health & Social Assistance there was no net job creation in 2025 — Information sector mixed",
      "AI consulting rates $1,800–$2,400/day senior; $42.3B in VC/PE in 2025 with AI taking 22%"
    ],
    sources: {
      employment: [
        { label: "BLS New York Area Employment, May 2025", url: "https://www.bls.gov/regions/northeast/news-release/areaemployment_newyork.htm" },
        { label: "NYC Comptroller — Annual State of the City's Economy 2025", url: "https://comptroller.nyc.gov/reports/annual-state-of-the-citys-economy-and-finances-2025/" },
        { label: "NY DOL — Labor Statistics NYC Region", url: "https://dol.ny.gov/labor-statistics-new-york-city-region" },
        { label: "Colliers Manhattan Office Report Q4 2025 (13.9% availability)", url: "https://www.colliers.com/en/research/new-york/nyc-q4-2025-manhattan-office-report" }
      ],
      techSalaries: [
        { label: "Glassdoor — NYC Software Engineer Salaries 2025", url: "https://www.glassdoor.com/Salaries/new-york-city-software-engineer-salary-SRCH_IL.0,13_IM615_KO14,31.htm" },
        { label: "Indeed — Software Engineer Salary New York NY", url: "https://www.indeed.com/career/software-engineer/salaries/New-York--NY" },
        { label: "ResumeTarget — NYC Job Market 2026 (62.2 applicants/job)", url: "https://www.resumetarget.com/job-market/new-york/new-york-city/" },
        { label: "Levels.fyi — NYC Total Compensation Data", url: "https://www.levels.fyi/t/software-engineer/locations/new-york-city-area" }
      ],
      costLiving: [
        { label: "Zumper — NYC Rent Research 2026 ($4,500/mo median)", url: "https://www.zumper.com/rent-research/new-york-ny" },
        { label: "NY Tax.gov — 2025 Income Tax Tables", url: "https://www.tax.ny.gov/pit/file/tax-tables/2025.htm" },
        { label: "NerdWallet — New York State Income Tax Rates 2026", url: "https://www.nerdwallet.com/taxes/learn/new-york-state-tax" }
      ],
      populationInvestment: [
        { label: "ULI/PwC Emerging Trends 2025 (Manhattan #11; Midtown #1 globally, EY/ULI)", url: "https://americas.uli.org/emerging-trends-in-real-estate-2025/" },
        { label: "NYC DCP — Population Estimates May 2025", url: "https://www.nyc.gov/assets/planning/downloads/pdf/our-work/reports/new-york-city-population-estimates-and-trends_may-2025.pdf" },
        { label: "NYCEDC — NYC AI Advantage 2025 Report", url: "https://edc.nyc/sites/default/files/2025-01/NYCEDC-NYC-AI-Advantage-2025-Report.pdf" },
        { label: "NYC Comptroller — Taking Trump's Tariffs Seriously (fiscal risk modeling)", url: "https://comptroller.nyc.gov/reports/taking-trumps-tariffs-seriously-the-fiscal-and-economic-impact-for-nyc/" }
      ]
    }
  },
  {
    name: "Philadelphia, PA",
    score: 5,
    status: "STAGNANT",
    unemployment: "~5.0-5.3% (city Jan 2026 5.3%; metro ~4.8-5.0%)",
    jobGrowth: "Slow; Information sector wages -1% in Q2 2025",
    jobsChanged: "Healthcare and Education leading; Information sector contracting",
    swOpenings: "~724",
    applicantsPerJob: "~40-60 est.",
    totalTech: "~100,000 tech occupations across all industries",
    techPct: "Not isolated; health care is 32% of city jobs",
    majorEmployers: "Comcast (HQ Philadelphia, stable), SAP (stable/hiring), Susquehanna International Group (hiring — quant), Vanguard (Malvern, stable), Penn Medicine/CHOP (hiring), GSK (mixed)",
    techTrend: "Slow-growth secondary tech market; Comcast/SAP anchor a workforce that is stable but not expanding; AI exposure and Information-sector wage declines reflect broader US tech cooling",
    avgTechSalary: "Full-stack ~$120K; Data architect ~$153K",
    stateTax: "3.07% PA flat + 3.74% Philadelphia city wage tax",
    colIndex: "~102-105",
    rent1br: "~$1,500-1,700 (14% below national median)",
    salaryCol: "Moderate — affordable rents partially offset by city wage tax drag",
    officeVacancy: "~21-24% CBD (trend-based Q1 2026 estimate)",
    popTrend: "Philly added +10,500 residents (+0.7%) between 2023–24",
    capitalRank: "#4 U.S. life sciences market (Colliers 2025); 7th biopharma hub nationally",
    biggestRisk: "Health care monoculture + $2B+ NIH grant exposure; city unemployment consistently above national",
    aiDemand: "Moderate",
    bioOverlap: "Strong — #4 U.S. life sciences market; 88K+ workers; 40+ cell/gene therapy firms",
    consultViability: "Moderate — large pharma AI adoption; smaller ecosystem than NYC/Boston",
    findings: [
      "Philadelphia city unemployment 5.3% (Jan 2026) — consistently above PA and national averages",
      "Information-sector wages declined 1% in Q2 2025 — reflects broader Eastern-corridor tech cooling",
      "Comcast remains the gravitational center of Philly tech; ~724 SWE openings on Indeed metro-wide",
      "Healthcare and Education are the actual net job-creation drivers, not tech",
      "Philly added 10,500 residents in 2023–24 (+0.7%); immigration-driven",
      "1BR rent ~$1,500–$1,700 — 14% below national median; C2ER COL ~102–105",
      "Susquehanna International Group (quant trading) is one of the more aggressively hiring tech-finance employers",
      "#4 U.S. life sciences market with 88,000+ workers — but Philadelphia raises far less biopharma VC ($656M in 2024) than Boston/SF ($5–7B)"
    ],
    sources: {
      employment: [
        { label: "BLS Philadelphia Area Employment, March 2025", url: "https://www.bls.gov/regions/mid-atlantic/news-release/areaemployment_philadelphia.htm" },
        { label: "Center City District — Philadelphia Employment Report 2025", url: "https://centercityphila.org/research-reports/philadelphia-employment-report-2025" },
        { label: "Economy League of Greater Philadelphia — 2024 Update", url: "https://www.economyleague.org/resources/philadelphia-employment-and-job-growth-2024-update" },
        { label: "Colliers Philadelphia Regional Office Report Q1 2025", url: "https://www.colliers.com/en/research/philadelphia/2025-q1-philadelphia-regional-office-report" }
      ],
      techSalaries: [
        { label: "Glassdoor — Philadelphia Software Engineer Salaries", url: "https://www.glassdoor.com/Salaries/philadelphia-software-engineer-salary-SRCH_IL.0,12_IC1152672_KO13,30.htm" },
        { label: "Indeed — Software Engineer Salary Philadelphia PA", url: "https://www.indeed.com/career/software-engineer/salaries/Philadelphia--PA" },
        { label: "BLS Occupational Employment & Wages — Philadelphia MSA, May 2024", url: "https://www.bls.gov/regions/mid-atlantic/news-release/occupationalemploymentandwages_philadelphia.htm" }
      ],
      costLiving: [
        { label: "BestPlaces — Philadelphia PA Cost of Living (C2ER: ~104)", url: "https://www.bestplaces.net/cost_of_living/city/pennsylvania/philadelphia" },
        { label: "Zumper — Philadelphia Rent Research 2025 ($1,557/mo median)", url: "https://www.zumper.com/rent-research/philadelphia-pa" },
        { label: "City of Philadelphia — Wage Tax Rates (3.74% residents, July 2025)", url: "https://www.phila.gov/services/payments-assistance-taxes/taxes/business-taxes/business-taxes-by-type/wage-tax-employers/" }
      ],
      populationInvestment: [
        { label: "Colliers — Greater Philadelphia Life Sciences Report 2025 (#4 US)", url: "https://pci.upenn.edu/greater-philadelphia-maintains-4-u-s-life-sciences-market-rank-in-colliers-2025-report/" },
        { label: "ULI/PwC Emerging Trends in Real Estate 2026", url: "https://americas.uli.org/pwc-uli-report-reveals-2026-real-state-trends/" },
        { label: "BioBuzz — Venture Capital Gap Pushes Philadelphia Down Rankings, Aug 2025", url: "https://biobuzz.io/2025/08/20/venture-capital-gap-pushes-philadelphia-down-in-biopharma-rankings/" }
      ]
    }
  },
  {
    name: "Pittsburgh, PA",
    score: 7,
    status: "GROWING",
    unemployment: "4.0% (Pittsburgh MSA, March 2026 — below PA and US averages)",
    jobGrowth: "Slight positive; first full year of positive office absorption since 2019",
    jobsChanged: "AI/robotics cluster ~6,300 employees and growing; CMU pipeline actively placing talent",
    swOpenings: "~617",
    applicantsPerJob: "~50-100 est.",
    totalTech: "~2,000-5,000 active openings",
    techPct: "~23.2% of SW PA 13-county workforce",
    majorEmployers: "Aurora Innovation (~800, hiring — driverless trucking), Duolingo (hiring full-time $158-300K, also replacing contractors with AI), Google Pittsburgh (~800, stable), Gecko Robotics (hiring), Abridge (hiring), CMU Robotics (~1,001, stable)",
    techTrend: "Robotics/autonomy/AI-applied cluster is the cleanest small-metro story; 'AI Avenue' in East Liberty hosts 21+ AI firms including Nvidia's inaugural AI Tech Community",
    avgTechSalary: "Duolingo $158-300K; broader market $110-150K SWE",
    stateTax: "3.07% PA flat + 3.0% Pittsburgh city EIT",
    colIndex: "~88-92",
    rent1br: "~$1,200-$1,400",
    salaryCol: "Good — among most affordable in cohort; COL advantage is a real recruiting tool vs. coastal markets",
    officeVacancy: "17.3-24.4%; Class A capturing 250K+ sf net gains; ZERO new office under construction (first time in city history)",
    popTrend: "Pittsburgh city grew in both 2024 (+3,000) and 2025; metro slightly declined (-3,160) — city reversing while suburbs lose",
    capitalRank: "#145 of 403 metros (Milken 2025); growing applied-AI VC activity",
    biggestRisk: "Duolingo AI-first contractor cuts signal automation risk; small absolute job volume; metro demographic decline continues",
    aiDemand: "Moderate — CMU ecosystem produces real AI/robotics roles but small absolute volume",
    bioOverlap: "Limited — Krystal Biotech, UPMC research; thin absolute biotech job volume vs. Boston or Philadelphia",
    consultViability: "Moderate — AI-native startup clients viable; national client base required for consulting",
    findings: [
      "Pittsburgh MSA unemployment 4.0% (March 2026) — below PA and US averages; among healthiest in cohort",
      "Robotics/AI cluster employs 6,300+: CMU Robotics ~1,001; Aurora ~800; Google ~800",
      "Duolingo CEO announced AI-first shift: replacing contractors with AI, but actively hiring full-time tech roles ($158–$300K)",
      "First full calendar year ever with ZERO new office construction — extreme supply discipline",
      "Office market posted first full year of positive net absorption since 2019; Class A capturing 250K+ sf",
      "'AI Avenue' in East Liberty hosts 21+ AI firms including Nvidia's inaugural AI Tech Community hub",
      "Pittsburgh city population grew in both 2024 (+3,000) and 2025; metro slightly declined (-3,160)",
      "Cost of living ~88–92 — one of the most affordable in cohort; COL gap vs. Boston/NYC/SF is a real recruiting advantage"
    ],
    sources: {
      employment: [
        { label: "BLS Pittsburgh Economy at a Glance", url: "https://www.bls.gov/eag/eag.pa_pittsburgh_msa.htm" },
        { label: "PA DLI — Pittsburgh MSA Employment Press Release, Sep 2025", url: "https://www.pa.gov/content/dam/copapwp-pagov/en/dli/documents/cwia/products/press-releases/pghmesa_pr.pdf" },
        { label: "Allegheny Institute — Pittsburgh Employment Indicators (Long-Term & Post-Pandemic)", url: "https://www.alleghenyinstitute.org/pittsburgh-employment-indicators-long-term-and-post-pandemic/" },
        { label: "JLL Pittsburgh Office Market Dynamics Q4 2025", url: "https://www.jll.com/en-us/insights/market-dynamics/pittsburgh-office" }
      ],
      techSalaries: [
        { label: "Glassdoor — Pittsburgh Software Engineer Salaries", url: "https://www.glassdoor.com/Salaries/pittsburgh-pa-software-engineer-salary-SRCH_IL.0,13_IM684_KO14,31.htm" },
        { label: "Technical.ly — 5 Stats to Explain Pittsburgh's Tech Economy", url: "https://technical.ly/professional-development/pittsburgh-tech-economy-dashboard-jobs-stats/" },
        { label: "Built In Pittsburgh — Software Engineer Salaries", url: "https://www.builtinpittsburgh.com/salaries" }
      ],
      costLiving: [
        { label: "BestPlaces — Pittsburgh PA Cost of Living (C2ER: 91.8)", url: "https://www.bestplaces.net/cost_of_living/city/pa/pittsburgh" },
        { label: "Zumper — Pittsburgh Rent Research March 2026 ($1,375/mo)", url: "https://www.zumper.com/rent-research/pittsburgh-pa" },
        { label: "PA DCED — Local Earned Income Tax Rates (Pittsburgh: 3.0% city EIT)", url: "https://www.pa.gov/agencies/revenue/resources/tax-rates" }
      ],
      populationInvestment: [
        { label: "Milken Institute 2025 Best-Performing Cities (#145 of 403 metros)", url: "https://milkeninstitute.org/content-hub/research-and-reports/research-and-data-tools/2025-best-performing-cities-mapping-economic-growth-across-us" },
        { label: "WESA — Pittsburgh Population & Immigration Slows, March 2026", url: "https://www.wesa.fm/identity-community/2026-03-30/pittsburgh-population-immigration-slows-2025" },
        { label: "Axios Pittsburgh — Metro Population Decline, March 2026", url: "https://www.axios.com/local/pittsburgh/2026/03/26/pittsburgh-metro-population-decline-2025" }
      ]
    }
  },
  {
    name: "Chicago, IL",
    score: 6,
    status: "STAGNANT",
    unemployment: "5.0% (Chicago metro, March 2026 — consistently above national since Jan 2020)",
    jobGrowth: "Modest; Chicago's job market 'thrives but slows'",
    jobsChanged: "Information sector +2,900 jobs YoY; tech sector employs ~245,800 (5.2% of workforce)",
    swOpenings: "~6,007 (Glassdoor Chicago, April 2026)",
    applicantsPerJob: "~40-60 est.",
    totalTech: "~6,000-7,000 active listings",
    techPct: "~8% of metro workforce; $39.3B annual output",
    majorEmployers: "Google (tech hub, stable), Salesforce (regional HQ, stable), Cisco (stable), Citadel/Citadel Securities (hiring), CME Group (stable), Northern Trust (stable), Tempus AI (stable), CDW (stable)",
    techTrend: "Resilient #4 US tech hub; AI, fintech, healthtech, logistics tech growing; $2.5B in 2024 VC; less exposed to coastal AI-driven cuts",
    avgTechSalary: "$130-155K base; entry-level $86K",
    stateTax: "4.95% IL flat; no city income tax",
    colIndex: "~110-115",
    rent1br: "~$1,700-$1,900 (all-property avg $2,295, +9% YoY)",
    salaryCol: "Moderate — better take-home than coastal peers; property taxes punishing for homeowners (~2.1% effective)",
    officeVacancy: "28.6% downtown (Q1 2026, 15th consecutive quarterly record — all-time high; Class A 21.5%, Class B 32.3%)",
    popTrend: "Roughly net zero in 2024–25; domestic outmigration to Sun Belt ongoing; immigration offset slowing",
    capitalRank: "Outside top 10 ULI 2026; $2.5B in 2024 VC; 4th US tech hub (CompTIA)",
    biggestRisk: "Pension crisis — $1.15B 2026 budget shortfall; 40-46% of city budget consumed by pension + debt service; BBB bond rating",
    aiDemand: "Moderate",
    bioOverlap: "Strong — AbbVie (LC-MS/MS, biologics, North Chicago campus), Abbott, Baxter in Lake County pharma corridor",
    consultViability: "Moderate — enterprise adoption creates demand; conservative client culture slows deal cycles vs. coastal peers",
    findings: [
      "Chicago metro unemployment 5.0% (March 2026) — consistently above national 4.3% since January 2020",
      "Tech sector employs ~245,800 (5.2% of workforce); Chicago ranks #4 US tech hub per CompTIA",
      "Information sector added 2,900 jobs YoY — one of the few growing segments; $2.5B in 2024 venture funding",
      "Downtown office vacancy hit all-time high 28.6% in Q1 2026 — 15th consecutive quarterly increase; Class B at 32.3%",
      "Pension crisis is structural: $1.15B 2026 budget gap; pension + debt service consumes 40-46% of city budget; S&P BBB rating",
      "1BR rent ~$1,700–$1,900; all-property rent up 9% YoY — accelerating above most cohort cities",
      "Boeing left Chicago HQ for Arlington VA but ~1,200 corporate workers remain; no major HQ departures otherwise",
      "4.95% flat state income tax with no city income tax — better combined burden than NY (10-11%), MA (5%+), or MN (9.85%)"
    ],
    sources: {
      employment: [
        { label: "IDES — Chicago Metro Employment, December 2025 (18 consecutive months YoY growth)", url: "https://ides.illinois.gov/newsroom/2025/dec/chicago-metro-ends-2025-with-record-number-of-december-jobs--yea.html" },
        { label: "BLS Chicago-Naperville-Schaumburg Metro Division Statistics", url: "https://www.bls.gov/regions/midwest/il_chicago_msa.htm" },
        { label: "CBRE Chicago Downtown Office Figures Q4 2025 (26.6%)", url: "https://www.cbre.com/insights/figures/chicago-downtown-office-figures-q4-2025" },
        { label: "Crain's Chicago Business — Office Vacancy 15th Consecutive Record, Q1 2026", url: "https://www.chicagobusiness.com/commercial-real-estate/downtown-office-vacancy-ended-2025-another-record-high/" }
      ],
      techSalaries: [
        { label: "Glassdoor — Chicago Software Engineer Salaries", url: "https://www.glassdoor.com/Salaries/chicago-software-engineer-salary-SRCH_IL.0,7_IM167_KO8,25.htm" },
        { label: "Built In Chicago — Software Engineer Salary Data", url: "https://www.builtinchicago.org/salaries/dev-engineer/software-engineer/chicago" },
        { label: "World Business Chicago — Tech Workforce Report 2024 ($39.3B output)", url: "https://worldbusinesschicago.com/allnews/chicagos-tech-workforce-growth-top-employers-and-the-education-pipeline-fueling-the-regions-digital-economy/" }
      ],
      costLiving: [
        { label: "BestPlaces — Chicago IL Cost of Living (C2ER: 105.7)", url: "https://www.bestplaces.net/cost_of_living/city/illinois/chicago" },
        { label: "Zumper — Chicago Rent Research April 2026 ($2,010/mo)", url: "https://www.zumper.com/rent-research/chicago-il" },
        { label: "Tax Foundation — Illinois Tax Burden; LevyIO Chicago Property Tax Analysis", url: "https://taxfoundation.org/location/illinois/" }
      ],
      populationInvestment: [
        { label: "ULI/PwC Emerging Trends in Real Estate 2025", url: "https://americas.uli.org/emerging-trends-in-real-estate-2025/" },
        { label: "CMAP — Stagnant International Immigration Slows Chicago Region Growth", url: "https://cmap.illinois.gov/news-updates/stagnant-international-immigration-slows-population-growth-in-the-chicago-region/" },
        { label: "WTTW — Chicago $1.15B Budget Shortfall 2026", url: "https://news.wttw.com/2025/08/29/chicago-faces-115b-budget-shortfall-2026-146m-gap-2025-johnson" },
        { label: "Civic Federation — FY2025 Chicago Budget Structural Imbalance Analysis", url: "https://civicfed.org/blog/chicagos-fy2025-proposed-budget-exacerbates-structural-imbalance/" }
      ]
    }
  },
  {
    name: "Minneapolis, MN",
    score: 5,
    status: "STAGNANT",
    unemployment: "4.5% (MN state, March 2026); Minneapolis metro ~3.5-4.0%",
    jobGrowth: "Roughly flat; 16 largest MN employers employ 1% fewer than year ago",
    jobsChanged: "Target cut ~1,800 corporate (815 in MN, 528 downtown Minneapolis) effective Jan 3, 2026; UnitedHealth, US Bancorp, Wells Fargo reducing headcount",
    swOpenings: "~1,000 (LinkedIn Twin Cities est.)",
    applicantsPerJob: "~40-60 est.",
    totalTech: "~2,000-3,000 active",
    techPct: "12.4% of state workforce; Twin Cities concentrates majority",
    majorEmployers: "UnitedHealth Group (cutting — lower profits), Target (cutting — 1,800 corp eliminations Jan 2026), Best Buy (cutting/stable), Medtronic (stable/cutting), 3M (stable), Mayo Clinic (hiring — Rochester)",
    techTrend: "Corporate-IT-anchored tech market under pressure as Fortune 500 anchors restructure; AI displacement of entry-level corporate roles cited as driver",
    avgTechSalary: "$110-140K",
    stateTax: "7.85% effective (most SWE income); 9.85% top rate above $198,631 single",
    colIndex: "~100-105",
    rent1br: "~mid-$1,000s",
    salaryCol: "Moderate — affordable rents offset by one of the highest state income tax rates in the U.S.",
    officeVacancy: "Metro 17.7% (April 2026); downtown Minneapolis 30.8%, downtown St. Paul 39.5%",
    popTrend: "Modest gains overall; Operation Metro Surge stabilized state employment at 4.5%",
    capitalRank: "ULI downgraded to bottom half of major markets for 2026",
    biggestRisk: "7 of 10 largest MN companies cut jobs in past year; Fortune 500 restructuring is the dominant tech-job force",
    aiDemand: "Moderate — demand exists at large enterprises; no hyperscaler center; AI/ML listings shallow",
    bioOverlap: "Yes — world-class medtech cluster (Medtronic, Boston Scientific, Bio-Techne); thin on oligonucleotide-specific roles",
    consultViability: "Low-to-Moderate — enterprise client base exists but strong FTE-preference culture; national/remote clients needed",
    findings: [
      "Target cut ~1,800 corporate jobs (~8% global workforce) in late 2025; 528 downtown Minneapolis layoffs effective Jan 3, 2026",
      "7 of 10 largest MN companies cut jobs over the past year, reducing employment >43,000 total",
      "Minnesota unemployment 4.5% (March 2026) — stable but above national 4.3%",
      "Downtown Minneapolis office vacancy ~30.8%, downtown St. Paul ~39.5% — among worst Midwest CBDs",
      "Metro office vacancy 17.7% (April 2026) — actually closest large Midwest market to US national average",
      "Fortune 500 corporate restructuring (Target, UnitedHealth, US Bancorp, Wells Fargo) is the dominant tech-job-market force",
      "1BR rent ~mid-$1,000s — affordable relative to coastal markets",
      "Healthcare-tech demand remains via UnitedHealth, Mayo Clinic, Medtronic — but UnitedHealth itself is cutting"
    ],
    sources: {
      employment: [
        { label: "BLS Metropolitan Area Employment Summary, December 2025 (+1.6pp YoY spike)", url: "https://www.bls.gov/news.release/metro.nr0.htm" },
        { label: "MN DEED — State of Metro Labor Market, June 2025", url: "https://mn.gov/deed/newscenter/publications/trends/june-2025/metro.jsp" },
        { label: "Colliers Twin Cities Office Report Q3 2025 (30.8% Minneapolis; 39.5% St. Paul)", url: "https://rejournals.com/no-end-to-the-high-vacancy-rates-in-twin-cities-office-market/" },
        { label: "MPR News — Medtronic Layoffs Coon Rapids / Target Layoffs, 2025", url: "https://www.mprnews.org/story/2025/10/28/layoffs-at-target-could-be-an-early-warning-sign-for-the-economy" }
      ],
      techSalaries: [
        { label: "Glassdoor — Minneapolis Software Engineer Salaries", url: "https://www.glassdoor.com/Salaries/minneapolis-software-engineer-salary-SRCH_IL.0,11_IM567_KO12,29.htm" },
        { label: "Built In Minneapolis — Software Engineer Salary Data", url: "https://builtin.com/salaries/us/minneapolis%E2%80%93saint-paul-mn/software-engineer" },
        { label: "MN Chamber of Commerce — Tech Sector Chapter 2030 (12.4% of workforce)", url: "https://www.mnchamber.com/minnesota-chamber-foundation/minnesota-2030-industry-chapter-tech-sector" }
      ],
      costLiving: [
        { label: "BestPlaces — Minneapolis MN Cost of Living (C2ER: 107.2)", url: "https://www.bestplaces.net/cost_of_living/city/minnesota/minneapolis" },
        { label: "Zumper — Minneapolis Rent Research 2025 ($1,330/mo median)", url: "https://www.zumper.com/rent-research/minneapolis-mn" },
        { label: "MN Dept. of Revenue — 2025 Income Tax Brackets (9.85% top rate)", url: "https://www.revenue.state.mn.us/minnesota-income-tax-rates-and-brackets" }
      ],
      populationInvestment: [
        { label: "ULI/PwC Emerging Trends in Real Estate 2026 (downgraded to bottom half)", url: "https://americas.uli.org/pwc-uli-report-reveals-2026-real-state-trends/" },
        { label: "MN Patch / Census Bureau — Population & Migration Data 2025", url: "https://patch.com/minnesota/minneapolis/good-news-people-moving-minnesota-larger-population-challenges-loom" },
        { label: "Star Tribune — Boston Scientific Maple Grove $309M Campus Expansion", url: "https://www.startribune.com/boston-scientific-minnetonka-office-for-sale-list-maple-grove-expansion-commercial-real-estate/601369796" }
      ]
    }
  },
  {
    name: "Sacramento, CA",
    score: 5,
    status: "STAGNANT",
    unemployment: "4.9% (Sacramento County, March 2026)",
    jobGrowth: "Negative on tech side; Professional/Scientific/Technical Services -2,800",
    jobsChanged: "PST sector -2,800 jobs; state-government RTO mandate delayed to mid-2026",
    swOpenings: "~207 IT / ~1,413 broader tech (Glassdoor May 2026)",
    applicantsPerJob: "~50-60 est.",
    totalTech: "~1,400",
    techPct: "~5%",
    majorEmployers: "State of California (largest employer, ~31% WFH, stable), Intel (Folsom IT presence, stable/cutting), Sutter Health / UC Davis Health (hiring), VSP Vision Care (stable), Inductive Automation (stable)",
    techTrend: "Government-IT-anchored secondary market in slight contraction; private PST sector shedding jobs; less AI-startup activity than coast metros",
    avgTechSalary: "$110-140K SWE; County IT Analyst $85-121K",
    stateTax: "13.3%",
    colIndex: "~120-125",
    rent1br: "$1,500 (Zumper May 2026)",
    salaryCol: "Moderate — lower rent than other CA cities but 13.3% tax still bites",
    officeVacancy: "Downtown <10% (government anchor); metro availability declined 14.5%→14.0% YoY — outperforming CA peers",
    popTrend: "Slight gains; less acute decline than Bay Area or LA",
    capitalRank: "Bosch $1.9B semiconductor investment; otherwise limited; state government is the economic anchor",
    biggestRisk: "High unemployment (4.9%) + PST sector losing jobs; private tech is small relative to other West Coast metros",
    findings: [
      "Sacramento County unemployment 4.9% in March 2026 — tied with Portland for highest in cohort",
      "Professional/Scientific/Technical Services -2,800 jobs in the period",
      "Downtown office vacancy <10% — actually one of the best Western US CBDs due to state-government anchor",
      "State of CA RTO mandate delayed to mid-2026; 31% of state workers still WFH most days",
      "1BR rent ~$1,500 — most affordable major California city in cohort",
      "Intel maintains Folsom IT presence; major Intel layoffs hit Oregon (Hillsboro), not Sacramento significantly",
      "207 IT openings / 1,413 broader tech openings (Glassdoor May 2026)",
      "Government and healthcare are the dominant employment categories; private tech sector is small relative to other West Coast metros"
    ],
    sources: {
      employment: [
        { label: "BLS Sacramento-Roseville-Folsom MSA Employment Statistics", url: "https://www.bls.gov/regions/west/news-release/areaemployment_sacramento.htm" },
        { label: "CA EDD — Sacramento Area Labor Market Statistics", url: "https://www.labormarketinfo.edd.ca.gov/" },
        { label: "Colliers Sacramento Office Market Report Q1 2025", url: "https://www.colliers.com/en/research/sacramento" },
        { label: "SACOG — Greater Sacramento Economic Outlook 2025", url: "https://www.sacog.org/" }
      ],
      techSalaries: [
        { label: "Glassdoor — Software Engineer Salaries Sacramento CA", url: "https://www.glassdoor.com/Salaries/sacramento-software-engineer-salary-SRCH_IL.0,10_IM747_KO11,28.htm" },
        { label: "Indeed — Software Engineer Salary Sacramento", url: "https://www.indeed.com/career/software-engineer/salaries/Sacramento--CA" },
        { label: "LinkedIn Job Postings — Sacramento Metro Area", url: "https://www.linkedin.com/jobs/software-engineer-jobs-sacramento-ca/" }
      ],
      costLiving: [
        { label: "Zumper Sacramento Rent Research 2025", url: "https://www.zumper.com/rent-research/sacramento-ca" },
        { label: "BestPlaces — Sacramento CA Cost of Living (C2ER: 124)", url: "https://www.bestplaces.net/cost_of_living/city/california/sacramento" },
        { label: "Zillow — Sacramento Rental Market Overview", url: "https://www.zillow.com/rental-manager/market-trends/sacramento-ca/" }
      ],
      populationInvestment: [
        { label: "Bosch Press Release — Sacramento Semiconductor Facility Investment", url: "https://www.bosch.com/news-and-stories/" },
        { label: "Census Bureau — Sacramento Population Estimates 2025", url: "https://www.census.gov/quickfacts/sacramentocitycalifornia" },
        { label: "Intel / HPE Restructuring Announcements 2025-2026", url: "https://investor.intc.com/news-releases/news-release-details/intel-reports-fourth-quarter-and-full-year-2024-financial-results" }
      ]
    }
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
    <span style={{ color: "#9ca3af", fontSize: 12, fontFamily: "'JetBrains Mono', monospace", marginRight: 6 }}>Score</span>
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
    icon: BarChart2,
    highlights: [
      { value: city.unemployment, label: "Unemployment" },
      { value: city.jobGrowth, label: "Job Growth YOY" },
      { value: city.jobsChanged, label: "Jobs Changed" }
    ]
  },
  {
    title: "Tech Ecosystem",
    icon: Cpu,
    highlights: [
      { value: city.swOpenings, label: "SW Eng Openings" },
      { value: city.totalTech, label: "Total Tech Jobs" },
      { value: city.majorEmployers.split(",").slice(0, 2).join(", ") + "...", label: "Major Employers" }
    ]
  },
  {
    title: "Cost & Compensation",
    icon: DollarSign,
    highlights: [
      { value: city.avgTechSalary, label: "Avg Tech Salary" },
      { value: city.stateTax, label: "State Income Tax" },
      { value: city.colIndex, label: "COL Index" }
    ]
  },
  {
    title: "Market Dynamics & Outlook",
    icon: TrendingUp,
    highlights: [
      { value: city.capitalRank, label: "Capital Investment" },
      { value: city.popTrend.split(";")[0], label: "Population Trend" },
      { value: city.biggestRisk.split(";")[0], label: "Biggest Risk" }
    ]
  }
];

const DataCard = ({ section, isOpen, onToggle }) => (
  <div style={{ background: "#1e1e1e", borderRadius: 6, border: "1px solid #2a2a2a", overflow: "hidden" }}>
    <div onClick={onToggle} style={{
      padding: "12px 14px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between",
      borderBottom: isOpen ? "1px solid #1f1f1f" : "none"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <section.icon size={14} style={{ opacity: 0.5, flexShrink: 0 }} />
        <span style={{ color: "#e5e7eb", fontSize: 14, fontWeight: 600 }}>{section.title}</span>
      </div>
      <ChevronDown size={14} style={{ color: "#9ca3af", transform: isOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s", flexShrink: 0 }} />
    </div>
    {isOpen && (
      <div style={{ padding: "12px 14px" }}>
        <div style={{ display: "flex", gap: 16 }}>
          {section.highlights.map((h, i) => (
            <div key={i} style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#e5e7eb", fontFamily: "'JetBrains Mono', monospace", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{h.value}</div>
              <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 2, fontFamily: "'JetBrains Mono', monospace" }}>{h.label}</div>
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
  return "#9ca3af";
};

const isNegativeFinding = (f) => /BUT|worst|CONTRACTING|SECOND WORST|cutting|lost|dropped|fell|plummeted|collapsing|decline|collapsed|down\b/i.test(f);

const getHighlightPills = (city) => {
  const pills = [];
  const unemp = parseFloat(city.unemployment);
  if (unemp < 4) pills.push({ text: `(${city.unemployment})`, sub: "Low Unemployment", type: "good" });
  else if (unemp > 4.5) pills.push({ text: `(${city.unemployment})`, sub: "High Unemployment", type: "bad" });

  if (city.techTrend.includes("biotech") || city.techTrend.includes("Growing")) {
    pills.push({ text: city.techTrend.split(";")[0], sub: "Tech Trend", type: "good", icon: FlaskConical });
  } else if (city.techTrend.includes("Shrinking") || city.techTrend.includes("Past") || city.techTrend.includes("contracting")) {
    pills.push({ text: city.techTrend.split(";")[0], sub: "Tech Trend", type: "bad", icon: AlertTriangle });
  }

  if (city.totalTech) pills.push({ text: `${city.totalTech} Tech Jobs`, sub: "Total Openings", type: "neutral" });

  const negFinding = city.findings.find(f => isNegativeFinding(f));
  if (negFinding) {
    const short = negFinding.length > 50 ? negFinding.slice(0, 50) + "..." : negFinding;
    pills.push({ text: short, sub: "", type: "bad", icon: AlertTriangle });
  }

  return pills.slice(0, 4);
};

export default function App() {
  const [selected, setSelected] = useState(() => topRatedCity.name);
  const [sortBy, setSortBy] = useState("score");
  const [sortMenuOpen, setSortMenuOpen] = useState(false);

  const sorted = [...cities].sort((a, b) => {
    if (sortBy === "score") return b.score - a.score;
    if (sortBy === "unemployment") return parseFloat(a.unemployment) - parseFloat(b.unemployment);
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  const [openCards, setOpenCards] = useState(new Set(["Employment & Economy", "Tech Ecosystem", "Cost & Compensation", "Market Dynamics & Outlook"]));
  const [findingsOpen, setFindingsOpen] = useState(false);
  const [bibOpen, setBibOpen] = useState(false);

  useEffect(() => {
    setFindingsOpen(false);
    setBibOpen(false);
  }, [selected]);

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
      <style>{`
        @media (max-width: 768px) {
          .app-header { flex-wrap: wrap; gap: 0; padding: 12px 16px !important; }
          .app-header-stats { display: flex !important; flex-wrap: nowrap; width: 100%; border-top: 1px solid #2a2a2a; margin-top: 10px; padding-top: 10px; }
          .app-header-stats .stat-item { flex: 1 1 0; padding: 0 !important; text-align: center; }
          .app-header-stats .stat-item:last-child { justify-content: center; }
          .app-header-stats .stat-divider { display: none; }
          .app-body { flex-direction: column !important; height: auto !important; }
          .app-sidebar { width: 100% !important; height: auto !important; border-right: none !important; border-bottom: 1px solid #2a2a2a; flex-shrink: unset !important; }
          .app-sidebar-list { max-height: 240px; overflow-y: auto; }
          .app-detail { height: auto !important; }
          .data-card-grid { grid-template-columns: 1fr !important; }
          .bib-grid { grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)) !important; }
        }
      `}</style>

      {/* Header */}
      {(() => {
        const growing = cities.filter(c => c.status === "GROWING").length;
        const contracting = cities.filter(c => c.status === "CONTRACTING").length;
        const stagnant = cities.filter(c => c.status === "STAGNANT").length;
        const statStyle = { textAlign: "center", padding: "0 20px" };
        const statNum = (color, size = 22) => ({ fontSize: size, fontWeight: 700, color, fontFamily: "'JetBrains Mono', monospace", lineHeight: 1 });
        const statLabel = { fontSize: 11, color: "#9ca3af", letterSpacing: 1.5, marginTop: 2, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase" };
        const divider = { width: 1, height: 36, background: "#1f1f1f", flexShrink: 0 };
        return (
          <div className="app-header" style={{ borderBottom: "1px solid #2a2a2a", padding: "16px 24px", display: "flex", alignItems: "center", background: "#1a1a1a" }}>
            <div style={{ marginRight: "auto" }}>
              <h1 style={{ color: "#e5e7eb", fontSize: 18, margin: 0, fontWeight: 600, fontFamily: "'JetBrains Mono', monospace" }}>Job Market Intelligence</h1>
              <p style={{ color: "#9ca3af", fontSize: 12, margin: "3px 0 0", fontFamily: "'JetBrains Mono', monospace", letterSpacing: 0.5 }}>US TECH MARKET COMPARISON · APRIL 2026</p>
            </div>
            <div className="app-header-stats" style={{ display: "contents" }}>
            <div className="stat-item" style={statStyle}>
              <div style={statNum("#e5e7eb")}>{cities.length}</div>
              <div style={statLabel}>Cities Tracked</div>
            </div>
            <div className="stat-divider" style={divider} />
            <div className="stat-item" style={statStyle}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
                <span style={{ color: "#4ade80", fontSize: 12 }}>↗</span>
                <span style={statNum("#4ade80")}>{growing}</span>
                <span style={{ color: "#4ade80", fontSize: 12 }}>↗</span>
              </div>
              <div style={statLabel}>Growing</div>
            </div>
            <div className="stat-divider" style={divider} />
            <div className="stat-item" style={statStyle}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
                <span style={{ color: "#ef4444", fontSize: 12 }}>↘</span>
                <span style={statNum("#ef4444")}>{contracting}</span>
                <span style={{ color: "#ef4444", fontSize: 12 }}>↘</span>
              </div>
              <div style={statLabel}>Contracting</div>
            </div>
            <div className="stat-divider" style={divider} />
            <div className="stat-item" style={statStyle}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
                <span style={{ color: "#f59e0b", fontSize: 12 }}>—</span>
                <span style={statNum("#f59e0b")}>{stagnant}</span>
                <span style={{ color: "#f59e0b", fontSize: 12 }}>—</span>
              </div>
              <div style={statLabel}>Stagnant</div>
            </div>
            <div className="stat-divider" style={divider} />
            <div className="stat-item" style={{ ...statStyle, display: "flex", alignItems: "center", gap: 6 }}>
              <Star size={16} style={{ color: "#f59e0b" }} />
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: scoreColor(topRatedCity.score) }}>{topRatedCity.name.split(",")[0]}</div>
                <div style={{ ...statLabel, textAlign: "left" }}>Top Rated</div>
              </div>
            </div>
            </div>{/* end app-header-stats */}
          </div>
        );
      })()}

      <div className="app-body" style={{ display: "flex", height: "calc(100vh - 52px)" }}>
        {/* Sidebar */}
        <div className="app-sidebar" style={{ width: 300, background: "rgb(26, 26, 26)", borderRight: "1px solid #2a2a2a", overflowY: "auto", flexShrink: 0, display: "flex", flexDirection: "column" }}>
          <div style={{ padding: "10px 14px 6px", display: "flex", justifyContent: "flex-end", position: "relative" }}>
            <span
              onClick={() => setSortMenuOpen(o => !o)}
              style={{ color: sortMenuOpen ? "#e5e7eb" : "#9ca3af", cursor: "pointer", userSelect: "none", display: "flex", padding: "6px", margin: "-6px" }}
              title="Sort"
            ><ArrowUpDown size={14} /></span>
            {sortMenuOpen && (
              <div style={{
                position: "absolute", top: 30, right: 14, zIndex: 10,
                background: "#1e1e1e", border: "1px solid #2a2a2a", borderRadius: 6,
                overflow: "hidden", minWidth: 160
              }}>
                {[
                  { key: "score", label: "Sort by Score" },
                  { key: "unemployment", label: "Sort by Unemployment" },
                  { key: "name", label: "Sort by Name" }
                ].map(opt => (
                  <div key={opt.key} onClick={() => { setSortBy(opt.key); setSortMenuOpen(false); }} style={{
                    padding: "8px 12px", fontSize: 12, fontFamily: "'JetBrains Mono', monospace",
                    color: sortBy === opt.key ? "#e5e7eb" : "#9ca3af",
                    background: sortBy === opt.key ? "#252525" : "transparent",
                    cursor: "pointer", display: "flex", alignItems: "center", gap: 8
                  }}>
                    <Check size={10} style={{ color: sortBy === opt.key ? "#4ade80" : "transparent" }} />
                    {opt.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="app-sidebar-list" style={{ flex: 1, overflowY: "auto" }}>
            {sorted.map((c, idx) => {
              const isSel = selected === c.name;
              const rank = idx + 1;
              const statusIcon = c.status === "GROWING" ? { symbol: "G", color: "#4ade80" }
                : c.status === "CONTRACTING" ? { symbol: "C", color: "#ef4444" }
                : { symbol: "↗", color: "#f59e0b" };
              return (
                <div key={c.name} onClick={() => setSelected(c.name)} style={{
                  padding: "12px 14px", cursor: "pointer", display: "flex", alignItems: "center", gap: 0,
                  background: isSel ? "#161616" : "transparent",
                  border: isSel ? `1px solid #2a2a2a` : "1px solid transparent",
                  borderRadius: isSel ? 6 : 0,
                  margin: isSel ? "2px 6px" : "0 6px"
                }}>
                  <span style={{
                    fontSize: 13, color: "#9ca3af", fontFamily: "'JetBrains Mono', monospace",
                    width: 20, flexShrink: 0, textAlign: "center"
                  }}>{rank}</span>
                  <div style={{ width: 1, height: 18, background: "#2a2a2a", margin: "0 10px", flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0, display: "flex", alignItems: "center", gap: 4 }}>
                    {rank === 1 && <Star size={12} style={{ color: "#f59e0b", flexShrink: 0 }} />}
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
        <div className="app-detail" style={{ flex: 1, overflowY: "auto", background: "#1a1a1a" }}>
          <div style={{ padding: "20px 24px" }}>
            {/* City header */}
            <div style={{ marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <h2 style={{ margin: 0, fontSize: 20, color: "#e5e7eb", fontWeight: 600, fontFamily: "'JetBrains Mono', monospace" }}>{city.name}</h2>
                <div style={{ width: 1, height: 20, background: "#333" }} />
                <span style={{
                  padding: "2px 10px", fontSize: 11, fontWeight: 600, borderRadius: 3,
                  background: sc.bg, color: sc.text, border: `1px solid ${sc.border}`,
                  fontFamily: "'JetBrains Mono', monospace", letterSpacing: 0.5, textTransform: "uppercase"
                }}>{city.status}</span>
              </div>
              <ScoreBar score={city.score} />
            </div>

            {/* 2x2 Data Cards */}
            <div className="data-card-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {sections.map((section) => (
                <DataCard key={section.title} section={section} isOpen={openCards.has(section.title)} onToggle={() => toggleCard(section.title)} />
              ))}
            </div>

            {/* Key Finding Highlights */}
            <div style={{ marginTop: 16 }}>
              <div style={{ color: "#9ca3af", fontSize: 12, fontWeight: 600, letterSpacing: 1.5, marginBottom: 10, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase" }}>Key Finding Highlights</div>
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
                      {pill.icon && <pill.icon size={14} style={{ opacity: 0.7, flexShrink: 0, marginTop: 1 }} />}
                      <div style={{ minWidth: 0 }}>
                        <div style={{
                          fontSize: 12, fontWeight: 600, fontFamily: "'JetBrains Mono', monospace",
                          color: isBad ? "#ef4444" : isGood ? "#4ade80" : "#d1d5db",
                          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"
                        }}>{pill.text}</div>
                        {pill.sub && <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 2 }}>{pill.sub}</div>}
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
                <span style={{ color: "#d1d5db", fontSize: 12, fontWeight: 600, fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1, textTransform: "uppercase" }}>Full Key Finding Details</span>
                <ChevronDown size={14} style={{ color: "#9ca3af", transform: findingsOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s", flexShrink: 0 }} />
              </div>
              {findingsOpen && (
                <div style={{ padding: "0 14px 12px" }}>
                  {city.findings.map((f, i) => (
                    <div key={i} style={{
                      padding: "5px 0", fontSize: 12, color: "#c4cdd6", lineHeight: 1.6,
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

            {/* City-Specific Data Sources & Bibliography (collapsible) */}
            <div style={{ marginTop: 12, background: "#1e1e1e", borderRadius: 6, border: "1px solid #2a2a2a", overflow: "hidden" }}>
              <div onClick={() => setBibOpen(!bibOpen)} style={{
                padding: "10px 14px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between",
                borderBottom: bibOpen ? "1px solid #252525" : "none"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 11, opacity: 0.4, fontFamily: "'JetBrains Mono', monospace" }}>▦</span>
                  <span style={{ color: "#d1d5db", fontSize: 12, fontWeight: 600, fontFamily: "'JetBrains Mono', monospace", letterSpacing: 1, textTransform: "uppercase" }}>
                    {city.name.split(",")[0]}-Specific Data Sources &amp; Bibliography
                  </span>
                </div>
                <ChevronDown size={14} style={{ color: "#9ca3af", transform: bibOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s", flexShrink: 0 }} />
              </div>
              {bibOpen && (
                <div style={{ padding: "14px" }}>
                  <div className="bib-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 20, marginBottom: 12 }}>
                    {[
                      { key: "employment", label: "Employment & Office Market Data" },
                      { key: "techSalaries", label: "Tech Ecosystem & Salaries" },
                      { key: "costLiving", label: "Cost & Living Trends" },
                      { key: "populationInvestment", label: "Population & Investment Dynamics" }
                    ].map(({ key, label }) => (
                      <div key={key}>
                        <div style={{
                          fontSize: 11, color: "#9ca3af", fontWeight: 600, letterSpacing: 1.5,
                          textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace", marginBottom: 8,
                          borderBottom: "1px solid #252525", paddingBottom: 4
                        }}>{label}</div>
                        {(city.sources?.[key] || []).map((src, i) => (
                          <div key={i} style={{
                            fontSize: 12, color: "#9ca3af", fontFamily: "'JetBrains Mono', monospace",
                            lineHeight: 1.7, marginBottom: 3, display: "flex", gap: 5, alignItems: "flex-start"
                          }}>
                            <span style={{ color: "#9ca3af", flexShrink: 0, marginTop: 1 }}>▸</span>
                            <span>
                              {src.label || src}
                              {src.url && (
                                <> <a href={src.url} target="_blank" rel="noopener noreferrer" style={{ color: "#60a5fa", fontSize: 11, textDecoration: "none", fontFamily: "'JetBrains Mono', monospace" }}>(source)</a></>
                              )}
                            </span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div style={{
                    padding: "8px 10px", background: "#161616", borderRadius: 4,
                    border: "1px solid #252525"
                  }}>
                    <div style={{
                      fontSize: 11, color: "#9ca3af", fontWeight: 600, letterSpacing: 1.5,
                      textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace", marginBottom: 4
                    }}>Methodology Appendix</div>
                    <div style={{ fontSize: 12, color: "#9ca3af", fontFamily: "'JetBrains Mono', monospace", lineHeight: 1.7 }}>
                      Each city is scored 1–10 across employment health, tech ecosystem, compensation vs. cost-of-living, structural indicators, and profile fit for an AI infrastructure + analytical chemistry / biotech background. Data sourced from 2025–2026 publications; figures older than 2024 are flagged inline within findings. Where sources conflict, ranges are reported and discrepancies noted.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

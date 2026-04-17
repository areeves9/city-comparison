import { useState, useEffect } from "react";
import { BarChart2, Cpu, DollarSign, TrendingUp, FlaskConical, AlertTriangle, Star, Check, ChevronDown, ArrowUpDown } from "lucide-react";

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
    <span style={{ color: "#9ca3af", fontSize: 10, fontFamily: "'JetBrains Mono', monospace", marginRight: 6 }}>Score</span>
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
    ],
    details: [
      { label: "Office Vacancy", value: city.officeVacancy },
      { label: "Applicants/Job", value: city.applicantsPerJob }
    ]
  },
  {
    title: "Tech Ecosystem",
    icon: Cpu,
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
    icon: DollarSign,
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
    icon: TrendingUp,
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
          .app-header { flex-wrap: wrap; gap: 8px; padding: 12px 16px !important; }
          .app-header-stats { display: flex; flex-wrap: wrap; gap: 0; }
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
              <Star size={16} style={{ color: "#f59e0b" }} />
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: scoreColor(topRatedCity.score) }}>{topRatedCity.name.split(",")[0]}</div>
                <div style={{ ...statLabel, textAlign: "left" }}>Top Rated</div>
              </div>
            </div>
          </div>
        );
      })()}

      <div className="app-body" style={{ display: "flex", height: "calc(100vh - 52px)" }}>
        {/* Sidebar */}
        <div className="app-sidebar" style={{ width: 300, background: "rgb(26, 26, 26)", borderRight: "1px solid #2a2a2a", overflowY: "auto", flexShrink: 0, display: "flex", flexDirection: "column" }}>
          <div style={{ padding: "10px 14px 6px", display: "flex", justifyContent: "flex-end", position: "relative" }}>
            <span
              onClick={() => setSortMenuOpen(o => !o)}
              style={{ color: sortMenuOpen ? "#e5e7eb" : "#9ca3af", cursor: "pointer", userSelect: "none", display: "flex" }}
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
            <div style={{ marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
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
                <DataCard key={section.title} section={section} sc={sc} isOpen={openCards.has(section.title)} onToggle={() => toggleCard(section.title)} />
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

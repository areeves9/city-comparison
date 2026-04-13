# Job Market Deep Dive: City Research Prompt

## Context
You are adding new cities to an existing React job market comparison dashboard. The existing app is located at `/mnt/user-data/outputs/city_comparison.jsx`. It currently contains data for: Portland OR, Austin TX, Raleigh-Durham NC, Seattle WA, and Dallas-Fort Worth TX.

Ask the user which specific cities they want to add before proceeding. There is no limit — they may request one city or twenty.

## Research Methodology

For EACH city, you must gather empirical data across these exact categories. Do NOT use estimates or vibes — search the web for actual numbers from BLS, Indeed, LinkedIn, Glassdoor, local chambers of commerce, Colliers/CBRE real estate reports, state employment departments, and news sources.

### Category 1: Employment Health
- **Unemployment Rate**: Find the most recent metro-area unemployment rate. Source: BLS, state employment department.
- **Job Growth YoY**: Year-over-year job growth percentage for the metro area. Source: BLS, state employment dept, local chamber of commerce.
- **Jobs Changed**: Net jobs gained or lost in the most recent 12-month period AND since pre-pandemic (2019/2020). Source: BLS, local news, chamber reports.
- **Direction**: Classify as GROWING, CONTRACTING, or STAGNANT based on the data.

### Category 2: Tech Job Market
- **SW Eng Openings**: Search Indeed, Glassdoor, and LinkedIn for current software engineering job counts in the metro area. Report the range across sources.
- **Applicants per Job**: If available from ResumeTarget or similar, get actual applicants-per-opening data. Otherwise estimate based on market conditions and flag as estimate.
- **Total Tech Openings**: Broader tech job count from Indeed/LinkedIn.
- **Tech % of Economy**: What percentage of local jobs are tech-related. Source: CompTIA, local tech associations, chamber reports.
- **Major Employers**: List the top 5-8 tech employers. Note which are HIRING vs CUTTING.
- **Tech Trend**: One-line summary of whether tech market is growing, shrinking, restructuring. Must be sourced.

### Category 3: Compensation & Cost
- **Avg Tech Salary**: Average or median tech salary for the metro. Source: Indeed, Glassdoor, Robert Half, Motion Recruitment salary guides.
- **State Income Tax**: State income tax rate (top marginal rate). Note if there are additional local/city income taxes.
- **COL Index**: Cost of living index relative to national average (100). Source: C2ER, BestPlaces, or similar.
- **1BR Rent**: Range for a 1-bedroom apartment in the city proper. Source: Zillow, Apartments.com, Zumper.
- **Salary/COL Ratio**: Qualitative assessment — Poor, Moderate, Good, Best — based on after-tax salary vs cost of living.

### Category 4: Structural Indicators
- **Office Vacancy Rate**: Downtown/CBD office vacancy rate. Source: Colliers, CBRE, Cushman & Wakefield, JLL quarterly reports.
- **Population Trend**: Is the metro gaining or losing population? Net migration direction. Source: Census Bureau, state demographer, local reporting.
- **Capital Investment Rank**: Any available ranking from ULI Emerging Trends, Milken Institute, or similar.
- **Biggest Risk**: One-line assessment of the primary risk factor for this market.

### Category 5: Profile Fit (specific to this user)
The user has this background:
- BS in Chemistry
- 4 years analytical chemistry (FDA-regulated pharma manufacturing, HPLC/GC/LC-MS)
- 3.5 years botanical extracts / regulated cannabis industry
- 1 year biotech (therapeutic oligonucleotides)
- 4 years software engineering (3 backend, 1 year AI/MCP infrastructure)
- Specialization: production-grade AI infrastructure, LLM orchestration, agentic systems, MCP protocol

Assess each city for:
- **AI/Infra Demand**: Demand for AI infrastructure / backend / systems engineering roles. Rate: Minimal, Low, Moderate, High.
- **Chem/Bio Overlap**: Whether the city has biotech/pharma employers where the user's chemistry background creates cross-domain advantage.
- **Consulting Viability**: Whether the city has enough funded startups, enterprises, or capital flow to support independent AI infrastructure consulting.

### Category 6: Key Findings
For each city, write 6-8 bullet points summarizing the most important takeaways. Include at least 2 negative findings — do not cheerlead. Each finding should be a specific, sourced fact, not a generic observation.

### Category 7: Overall Fit Score
Rate each city 1-10 based on the INTERSECTION of:
- Job market health
- Relevance to the user's specific skillset
- Cost of living relative to earning potential
- Structural economic trajectory

Be honest. Most cities will score 4-7. A 9-10 would mean "near-perfect fit." A 1-2 means "actively hostile to your goals."

## Implementation Instructions

1. Do your web research FIRST. Gather all data before writing any code.
2. Add new city objects to the existing `cities` array in the React component, following the exact same data structure as the existing entries.
3. Do NOT modify the existing city data or the component structure — only add new entries to the `cities` array.
4. Each new city object must have ALL of these fields:
   - name, score, status, unemployment, jobGrowth, jobsChanged
   - swOpenings, applicantsPerJob, totalTech, techPct
   - majorEmployers, techTrend, avgTechSalary, stateTax
   - colIndex, rent1br, salaryCol, officeVacancy
   - popTrend, capitalRank, biggestRisk
   - aiDemand, bioOverlap, consultViability
   - findings (array of 6-8 strings)

5. After adding the data, verify the React app still renders correctly.

## State Tax Quick Reference
Use actual current rates. Common ones for reference — but ALWAYS verify:
- California: 13.3% top marginal
- Oregon: 9.9% + potential local surcharges (Portland has Metro, Multnomah County, and city taxes)
- Washington: 0% (but has JumpStart payroll tax in Seattle)
- Texas: 0%
- Florida: 0%
- Tennessee: 0%
- Nevada: 0%
- New York: 8.82% state + 3.876% NYC local
- Massachusetts: 5% flat + 4% surtax on income over $1M
- Colorado: 4.4% flat
- North Carolina: 4.5%
- Illinois: 4.95% flat
- Georgia: 5.49%
- Virginia: 5.75%
- Minnesota: 9.85%
- New Jersey: 10.75%
- Arizona: 2.5% flat
- Utah: 4.65% flat

If the city is in a state not listed above, look up the current rate. Do not guess.

## Quality Standards
- Every number should have a source. If you can't find a number, say "data unavailable" — do NOT fabricate.
- Use data from 2025-2026 wherever possible. Anything older than 2024 should be flagged.
- If two sources conflict, report the range and note the discrepancy.
- Always factor in the full tax picture (state + local) when assessing salary/COL ratio.
- For cities in states with 0% income tax, note this as a significant advantage in the findings.
- For cities in high-tax states (CA, OR, NY, NJ, MN), make sure the tax burden is reflected honestly in the salary/COL assessment — a $150K salary in California is not the same as $150K in Texas.

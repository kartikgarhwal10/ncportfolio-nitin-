export interface CaseStudyMetric {
  label: string;
  value: string;
  verified: boolean;
}

export interface StrategyStep {
  title: string;
  description: string;
}

export interface ScreenshotItem {
  src: string;
  alt: string;
  caption: string;
  redacted: boolean;
}

export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  campaignType: string;
  category: "Lead Generation" | "E-Commerce" | "Meta Ads" | "Retargeting" | "Scaling";
  shortDescription: string;
  objective: string;
  challenge: string;
  strategySteps: StrategyStep[];
  metrics: CaseStudyMetric[];
  screenshots: ScreenshotItem[];
  dashboardNote: string;
  keyLearning: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "campaign-06",
    title: "Cricket Telegram Channel Growth",
    industry: "SPORTS & COMMUNITY",
    campaignType: "Meta Ads Telegram Growth",
    category: "Meta Ads",
    shortDescription:
      "High-converting sports niche subscriber campaign adding 173 members at ₹14.99 average cost, with top ad sets hitting an insane ₹7.84 CPS.",
    objective: "Acquire passionate cricket fans for a Telegram community at high speed while keeping cost per subscriber strictly under ₹15.",
    challenge:
      "Attracting engaged, real sports fans nationwide during active match seasons without overspending on ad impressions.",
    strategySteps: [
      { title: "Audience Research", description: "Targeted IPL & national cricket fans with high sports interest signals." },
      { title: "Campaign Structure", description: "Structured 13 active ad set tiers focused on website subscribe conversions." },
      { title: "Creative Testing", description: "Tested live match tips & fantasy analysis visual hooks." },
      { title: "Optimization", description: "Drove top campaign tier to ₹7.84 cost per subscriber for 38 members." },
      { title: "Scaling", description: "Delivered 173 total members across 17,413 reach & 23,924 impressions." },
    ],
    metrics: [
      { label: "MEMBERS GENERATED", value: "173 Members", verified: true },
      { label: "AVG. COST / MEMBER", value: "₹14.99", verified: true },
      { label: "TOP AD SET CPS", value: "₹7.84", verified: true },
      { label: "TOTAL FAN REACH", value: "17,413 Accounts", verified: true },
    ],
    screenshots: [
      {
        src: "/case-studies/campaign-06/screenshot-01.jpg",
        alt: "Meta Ads Manager verified screenshot showing Cricket Telegram 173 Members @ ₹14.99 and ₹7.84 best CPS",
        caption: "Meta Ads Manager - Verified Cricket Telegram Campaign (173 Members @ ₹14.99 Avg, ₹7.84 Best CPS)",
        redacted: false,
      },
    ],
    dashboardNote: "Verified Meta Ads Manager screenshot demonstrating 173 website subscribes at ₹14.99 average cost per result, with top ad sets reaching ₹7.84 per subscriber.",
    keyLearning:
      "Leveraging match-day urgency & fantasy analysis hooks drove 173 targeted cricket members with top ad sets hitting a ₹7.84 cost per result.",
  },
  {
    slug: "campaign-05",
    title: "₹1 Lakh+ High-Scale Subscriber Acquisition",
    industry: "HIGH-SCALE ACQUISITION",
    campaignType: "Meta Ads Conversion Funnel",
    category: "Scaling",
    shortDescription:
      "Flagship scaling campaign spending ₹1,04,513+ to generate 7,938 website subscribes at an exceptional ₹13.17 cost per subscribe.",
    objective: "Scale subscriber acquisition past ₹1 Lakh in total ad spend while keeping cost per subscribe strictly under ₹15.",
    challenge:
      "Sustaining low cost per conversion over a long-term ad lifecycle without creative exhaustion or audience fatigue.",
    strategySteps: [
      { title: "Audience Research", description: "Mapped broad & high-affinity user segments with ongoing refresh cycles." },
      { title: "Campaign Structure", description: "Structured engagement & website subscription conversion ad set hierarchy." },
      { title: "Creative Testing", description: "Iterated high-converting copy hooks and dynamic visual formats." },
      { title: "Optimization", description: "Controlled bid caps to lock in an unbeatable ₹13.17 average cost per subscribe." },
      { title: "Scaling", description: "Successfully scaled total budget past ₹1,04,513 delivering 7,938 total subscribes." },
    ],
    metrics: [
      { label: "TOTAL AD SPEND", value: "₹104,513.80", verified: true },
      { label: "SUBSCRIBERS GENERATED", value: "7,938 Subscribes", verified: true },
      { label: "COST PER SUBSCRIBE", value: "₹13.17", verified: true },
      { label: "SCALE STATUS", value: "₹1 Lakh+ Scaled", verified: true },
    ],
    screenshots: [
      {
        src: "/case-studies/campaign-05/screenshot-01.jpg",
        alt: "Meta Ads Manager verified screenshot showing ₹104,513.80 spent and 7,938 Subscribes @ ₹13.17",
        caption: "Meta Ads Manager - Flagship ₹1 Lakh+ Spend Dashboard (7,938 Subscribes @ ₹13.17)",
        redacted: false,
      },
    ],
    dashboardNote: "Verified Meta Ads Manager screenshot demonstrating ₹1,04,513.80 total ad spend, generating 7,938 website subscribes at ₹13.17 per result.",
    keyLearning:
      "Systematic budget scaling and creative refreshing allowed us to scale ad spend past ₹1 Lakh while maintaining an unbeatable ₹13.17 per subscriber.",
  },
  {
    slug: "campaign-04",
    title: "Color Trading Telegram Subscriber Growth",
    industry: "TRADING & TELEGRAM COMMUNITY",
    campaignType: "Meta Ads Subscriber Funnel",
    category: "Meta Ads",
    shortDescription:
      "High-performance subscriber acquisition campaign generating 476 targeted Telegram subscribers at ₹16 average cost in the competitive color trading niche.",
    objective: "Drive real, highly targeted Telegram channel subscribers for a Color Trading platform maintaining an aggressive Cost Per Subscriber (CPS) around ₹16.",
    challenge:
      "Acquiring engaged Telegram community members in a competitive trading niche without inflating per-subscriber acquisition costs.",
    strategySteps: [
      { title: "Audience Research", description: "Pinpointed active trading interest segments and high-intent financial demographics." },
      { title: "Campaign Structure", description: "Configured 7 active ad set tiers targeting website subscribe conversions." },
      { title: "Creative Testing", description: "Tested direct proof-based angles and smart strategy value hooks." },
      { title: "Optimization", description: "Optimized top ad sets to achieve per-subscriber costs as low as ₹14.92 and ₹14.95." },
      { title: "Scaling", description: "Scaled total ad spend to ₹7,699 across 50,880 total reach." },
    ],
    metrics: [
      { label: "SUBSCRIBERS GENERATED", value: "476 Members", verified: true },
      { label: "AVG. COST / SUBSCRIBER", value: "₹16.00", verified: true },
      { label: "TOTAL AD SPEND", value: "₹7,699.00", verified: true },
      { label: "TOTAL REACH", value: "50,880 Accounts", verified: true },
    ],
    screenshots: [
      {
        src: "/case-studies/campaign-04/screenshot-01.jpg",
        alt: "Meta Ads Manager verified screenshot showing Color Trading 476 Subscribers and ₹16 Avg Cost",
        caption: "Meta Ads Manager - Verified Color Trading Subscriber Campaign (476 Subscribers @ ₹16 CPS)",
        redacted: false,
      },
    ],
    dashboardNote: "Verified Meta Ads Manager dashboard screenshot demonstrating 476 targeted Telegram subscribers generated at ₹16 average cost per subscriber.",
    keyLearning:
      "Right audience targeting + smart value positioning delivered 476 targeted subscribers at ₹16 average cost per subscriber even in a high-friction trading niche.",
  },
  {
    slug: "campaign-01",
    title: "Low-CPL Instant Lead Generation Campaign",
    industry: "LEAD GENERATION",
    campaignType: "Meta Instant Forms",
    category: "Lead Generation",
    shortDescription:
      "High-converting Instant Form campaign achieving ₹15.66 Cost Per Lead through targeted audience testing and controlled daily bidding.",
    objective: "Generate high-intent qualified leads while maintaining an aggressive Cost Per Lead target under ₹20.",
    challenge:
      "Acquiring targeted leads efficiently without overspending or sacrificing lead response rates in competitive ad placements.",
    strategySteps: [
      { title: "Audience Research", description: "Segmented core interest demographics with custom exclusion layers." },
      { title: "Campaign Structure", description: "Built tight Instant Form campaigns paired with inline pre-qualification questions." },
      { title: "Creative Testing", description: "Tested direct offer callouts against benefit-driven visual hooks." },
      { title: "Optimization", description: "Controlled daily ad set budget at ₹250 to ensure optimal delivery pacing." },
      { title: "Scaling", description: "Expanded winning ad sets upon meeting the ₹15.66 CPL benchmark." },
    ],
    metrics: [
      { label: "COST PER LEAD", value: "₹15.66", verified: true },
      { label: "FORM LEADS", value: "12 Leads", verified: true },
      { label: "DAILY BUDGET", value: "₹250.00", verified: true },
      { label: "AMOUNT SPENT", value: "₹187.91", verified: true },
    ],
    screenshots: [
      {
        src: "/case-studies/campaign-01/screenshot-01.jpg",
        alt: "Meta Ads Manager verified screenshot showing ₹15.66 CPL and 12 Form Leads",
        caption: "Meta Ads Manager - Verified ₹15.66 Cost Per Lead Dashboard",
        redacted: false,
      },
    ],
    dashboardNote: "Verified Meta Ads Manager dashboard screenshot demonstrating ₹15.66 Cost Per Lead on Meta Instant Forms.",
    keyLearning:
      "Combining streamlined 2-question Meta Instant Forms with specific interest parameters dropped CPL significantly to ₹15.66.",
  },
  {
    slug: "campaign-02",
    title: "High-Intent Direct Messaging Acquisition",
    industry: "DIRECT CONVERSIONS",
    campaignType: "Meta Messaging & Relevancy Ads",
    category: "Meta Ads",
    shortDescription:
      "Direct-to-messaging conversion campaign generating 78 active conversations at ₹35.75 per result with 8,765 accounts reached.",
    objective: "Drive direct customer conversations and high-intent inquiries via Meta Messenger and Instagram Direct.",
    challenge:
      "Scaling conversation volume while controlling frequency and maintaining cost per conversation under ₹40.",
    strategySteps: [
      { title: "Audience Research", description: "Built lookalike pools from past highly engaged messaging profiles." },
      { title: "Campaign Structure", description: "Configured 7-day click attribution with direct chat call-to-actions." },
      { title: "Creative Testing", description: "Deployed interactive video prompts designed to trigger direct messages." },
      { title: "Optimization", description: "Pruned non-converting demographics to optimize cost per result to ₹35.75." },
      { title: "Scaling", description: "Re-allocated budget to top-performing 25 AUG campaign tier." },
    ],
    metrics: [
      { label: "MESSAGING RESULTS", value: "78 Conversations", verified: true },
      { label: "COST PER RESULT", value: "₹35.75", verified: true },
      { label: "TOTAL REACH", value: "8,765 Accounts", verified: true },
      { label: "AMOUNT SPENT", value: "₹2,789.04", verified: true },
    ],
    screenshots: [
      {
        src: "/case-studies/campaign-02/screenshot-01.png",
        alt: "Meta Ads Manager verified screenshot showing 78 Messaging Conversations and ₹35.75 CPR",
        caption: "Meta Ads Manager - Verified 78 Messaging Conversations & Reach View",
        redacted: false,
      },
    ],
    dashboardNote: "Verified Meta Ads Manager dashboard screenshot displaying 78 active messaging conversations at ₹35.75 per conversation.",
    keyLearning:
      "Directing high-relevancy video ad creatives to instant messaging created an immediate sales conversation pipeline at predictable costs.",
  },
  {
    slug: "campaign-03",
    title: "Multi-Campaign Scaling & Conversion Systems",
    industry: "SCALING & GROWTH",
    campaignType: "Multi-Adset Scaling Structure",
    category: "Scaling",
    shortDescription:
      "Comprehensive 83-campaign advertising structure delivering 144,658+ reach and 124 website conversions at ₹23.35 CPL.",
    objective: "Scale reach across broad target markets (including Barabanki & All-India audiences) while keeping acquisition costs under ₹25.",
    challenge:
      "Managing budget allocation across 83 campaigns simultaneously without audience overlap or creative fatigue.",
    strategySteps: [
      { title: "Audience Research", description: "Geo-targeted high-density regional zones alongside broad All-India tiers." },
      { title: "Campaign Structure", description: "Structured multi-level campaigns combining local landing page & messaging funnels." },
      { title: "Creative Testing", description: "Tested localized headline hooks against broad product showcase variations." },
      { title: "Optimization", description: "Maintained a tight 1.56 frequency cap while scaling total reach over 144,600 accounts." },
      { title: "Scaling", description: "Scaled Barabanki campaign tier to 124 conversions at ₹23.35 per result." },
    ],
    metrics: [
      { label: "BARABANKI CONVERSIONS", value: "124 Leads", verified: true },
      { label: "COST PER RESULT", value: "₹23.35", verified: true },
      { label: "TOTAL ACCOUNTS REACHED", value: "144,658 Accounts", verified: true },
      { label: "TOTAL AD SPEND", value: "₹14,992.25", verified: true },
    ],
    screenshots: [
      {
        src: "/case-studies/campaign-03/screenshot-01.png",
        alt: "Meta Ads Manager verified screenshot showing 144,658 reach and 124 conversions at ₹23.35 CPL",
        caption: "Meta Ads Manager - Verified Multi-Campaign Dashboard (144.6K Reach, 83 Campaigns)",
        redacted: false,
      },
    ],
    dashboardNote: "Verified Meta Ads Manager screenshot showing 144,658 total accounts reached across 83 campaigns and 124 conversions at ₹23.35 CPL.",
    keyLearning:
      "Locally tailored geographic campaign naming and structured budget allocation enabled massive 144.6K reach while maintaining a low ₹23.35 CPL.",
  },
];

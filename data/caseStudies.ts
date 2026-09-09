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
    slug: "campaign-01",
    title: "E-Commerce Growth & Conversion Campaign",
    industry: "E-COMMERCE",
    campaignType: "Meta Ads Campaign",
    category: "E-Commerce",
    shortDescription:
      "Conversion-focused campaign strategy designed around audience testing, creative optimization and budget allocation.",
    objective: "[ADD VERIFIED CAMPAIGN OBJECTIVE]",
    challenge:
      "The campaign needed to scale sales while maintaining efficient customer acquisition costs across high-competition ad placements.",
    strategySteps: [
      { title: "Audience Research", description: "Segmented broad & lookalike audiences based on past buyer behavior." },
      { title: "Campaign Structure", description: "Structured CBO & ABO campaign tiers to isolate top-performing creatives." },
      { title: "Creative Testing", description: "Tested dynamic catalog ads, video hooks, and high-contrast benefit callouts." },
      { title: "Optimization", description: "Reallocated daily budgets toward low-cost conversion ad sets." },
      { title: "Scaling", description: "Scaled horizontal ad sets upon meeting baseline efficiency targets." },
    ],
    metrics: [
      { label: "AD SPEND", value: "[AD SPEND]", verified: false },
      { label: "CONVERSIONS", value: "[PURCHASES]", verified: false },
      { label: "COST PER RESULT", value: "[CPA]", verified: false },
      { label: "ROAS", value: "[ROAS]", verified: false },
    ],
    screenshots: [
      {
        src: "/case-studies/campaign-01/screenshot-01.png",
        alt: "Meta Ads Manager campaign performance view",
        caption: "Meta Ads Manager - Campaign Level Breakdown",
        redacted: true,
      },
    ],
    dashboardNote: "Meta Ads Manager screenshot slot ready for actual verified client campaign data.",
    keyLearning:
      "Creative testing identified stronger-performing visual messaging, allowing budget to be concentrated on higher-intent audiences.",
  },
  {
    slug: "campaign-02",
    title: "High-Intent B2B Lead Generation",
    industry: "B2B & SERVICES",
    campaignType: "Meta Lead Ads",
    category: "Lead Generation",
    shortDescription:
      "Structured Meta Lead Generation campaign focused on filtering qualified leads and optimizing Cost Per Lead (CPL).",
    objective: "[ADD VERIFIED CAMPAIGN OBJECTIVE]",
    challenge:
      "Generating consistent, qualified inquiries from business decision-makers without inflating CPL.",
    strategySteps: [
      { title: "Audience Research", description: "Identified high-intent professional interests and custom custom audiences." },
      { title: "Campaign Structure", description: "Instant Form campaigns with custom qualification questions." },
      { title: "Creative Testing", description: "Problem-Agitate-Solve ad copies paired with clean visual mockups." },
      { title: "Optimization", description: "Pruned low-performing demographics and placement combinations." },
      { title: "Scaling", description: "Expanded budget into lookalike segments showing strong lead-to-conversion rates." },
    ],
    metrics: [
      { label: "AD SPEND", value: "[AD SPEND]", verified: false },
      { label: "QUALIFIED LEADS", value: "[LEADS]", verified: false },
      { label: "COST PER LEAD", value: "[CPL]", verified: false },
      { label: "CONVERSION RATE", value: "[CONV %]", verified: false },
    ],
    screenshots: [
      {
        src: "/case-studies/campaign-02/screenshot-01.png",
        alt: "Meta Ads Manager lead generation metrics",
        caption: "Meta Ads Manager - Lead Generation Performance Dashboard",
        redacted: true,
      },
    ],
    dashboardNote: "Meta Ads Manager screenshot slot ready for actual verified client campaign data.",
    keyLearning:
      "Adding targeted qualification questions in lead forms significantly increased lead quality while keeping acquisition costs predictable.",
  },
  {
    slug: "campaign-03",
    title: "Full-Funnel Meta Ads Retargeting & Scaling",
    industry: "D2C BRAND",
    campaignType: "Retargeting & Acquisition",
    category: "Retargeting",
    shortDescription:
      "Multi-stage retargeting structure to re-engage website visitors and cart abandoners to maximize conversion efficiency.",
    objective: "[ADD VERIFIED CAMPAIGN OBJECTIVE]",
    challenge:
      "Re-engaging high-intent website visitors who left without completing a purchase, reducing dropped funnel drop-off.",
    strategySteps: [
      { title: "Audience Research", description: "Built 7-day, 14-day, and 30-day pixel dynamic audience pools." },
      { title: "Campaign Structure", description: "Segmented retargeting ads matched to specific product view stages." },
      { title: "Creative Testing", description: "Social proof, testimonial carousel ads, and limited-time offer angles." },
      { title: "Optimization", description: "Monitored frequency caps to prevent ad fatigue." },
      { title: "Scaling", description: "Combined retargeting wins with broad audience expansion." },
    ],
    metrics: [
      { label: "AD SPEND", value: "[AD SPEND]", verified: false },
      { label: "RECOVERED SALES", value: "[RESULTS]", verified: false },
      { label: "RETARGETING CPA", value: "[CPA]", verified: false },
      { label: "RETARGETING ROAS", value: "[ROAS]", verified: false },
    ],
    screenshots: [
      {
        src: "/case-studies/campaign-03/screenshot-01.png",
        alt: "Meta Ads Manager retargeting metrics view",
        caption: "Meta Ads Manager - Retargeting & Frequency Dashboard",
        redacted: true,
      },
    ],
    dashboardNote: "Meta Ads Manager screenshot slot ready for actual verified client campaign data.",
    keyLearning:
      "Segmenting retargeting by recency (3-day vs 14-day) allowed optimal frequency control and maximized return on ad spend.",
  },
];

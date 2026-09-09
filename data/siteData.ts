export interface ToolItem {
  name: string;
  category: string;
  iconName: string;
  description: string;
}

export interface MetricItem {
  label: string;
  value: string;
  verified?: boolean;
}

export const siteData = {
  name: "Nitin Choudhary",
  title: "Performance Marketing Specialist",
  experience: "3+ Years",
  availability: "AVAILABLE FOR SELECT PROJECTS",
  headline: "I Don't Just Run Ads. I Build Campaigns That Perform.",
  supportingCopy:
    "I'm Nitin Choudhary, a Performance Marketing Specialist with 3+ years of experience in digital marketing, paid acquisition and Meta Ads. I focus on building data-driven campaigns designed to generate qualified leads, improve conversions and create measurable business growth.",
  
  about: {
    label: "ABOUT ME",
    heading: "Behind the Campaigns",
    paragraph1:
      "Performance marketing is more than launching an ad and waiting for results.",
    paragraph2:
      "My approach combines audience research, campaign strategy, creative testing, budget optimization and performance analysis to build advertising systems that continuously improve.",
    paragraph3:
      "With 3+ years of experience in digital marketing, I focus on creating campaigns where every decision is backed by data.",
    cardDetails: {
      name: "NITIN CHOUDHARY",
      role: "Performance Marketing Specialist",
      experienceText: "3+ Years Digital Marketing Experience",
      coreFocus: [
        "Meta Ads",
        "Lead Generation",
        "Paid Acquisition",
        "Campaign Optimization",
        "Conversion Strategy",
      ],
    },
  },

  expertise: [
    {
      id: "01",
      title: "META ADS",
      description:
        "Facebook and Instagram advertising campaigns built around clear business objectives.",
      icon: "Megaphone",
    },
    {
      id: "02",
      title: "LEAD GENERATION",
      description:
        "Campaigns designed to attract relevant and high-intent potential customers.",
      icon: "Users",
    },
    {
      id: "03",
      title: "PERFORMANCE MARKETING",
      description:
        "Data-driven paid acquisition strategies focused on measurable outcomes.",
      icon: "TrendingUp",
    },
    {
      id: "04",
      title: "CAMPAIGN OPTIMIZATION",
      description:
        "Continuous testing and optimization across audiences, creatives and budgets.",
      icon: "Sliders",
    },
    {
      id: "05",
      title: "RETARGETING",
      description:
        "Re-engaging high-intent users to create additional conversion opportunities.",
      icon: "Target",
    },
    {
      id: "06",
      title: "CONVERSION STRATEGY",
      description:
        "Connecting advertising, landing pages and customer journeys to improve campaign efficiency.",
      icon: "BarChart3",
    },
  ],

  performanceMindset: [
    { step: "01", stage: "WHO?", title: "Target Audience", desc: "Granular audience segment analysis and buyer persona targeting." },
    { step: "02", stage: "WHAT?", title: "Offer & Creative", desc: "Angle positioning, high-converting ad copy and visual hooks." },
    { step: "03", stage: "WHERE?", title: "Placement", desc: "Strategic channel allocation across Meta Feeds, Stories and Reels." },
    { step: "04", stage: "WHY?", title: "Conversion Intent", desc: "Frictionless funnel alignment and conversion signal optimization." },
    { step: "05", stage: "WHAT NEXT?", title: "Optimization", desc: "Rapid iterations, budget re-allocation and systematic scaling." },
  ],

  processSteps: [
    {
      number: "01",
      title: "RESEARCH",
      description: "Understand the business, offer, market and customer.",
    },
    {
      number: "02",
      title: "STRATEGY",
      description: "Build campaign structure, audience and funnel strategy.",
    },
    {
      number: "03",
      title: "LAUNCH",
      description: "Launch campaigns with controlled testing.",
    },
    {
      number: "04",
      title: "OPTIMIZE",
      description: "Analyze performance and improve creatives, audiences and budgets.",
    },
    {
      number: "05",
      title: "SCALE",
      description: "Increase investment where the data supports it.",
    },
  ],

  tools: [
    { name: "Meta Ads Manager", category: "Core Ads Platform", iconName: "LayoutGrid", description: "Campaign architecture, targeting & bidding" },
    { name: "Facebook Ads", category: "Social Advertising", iconName: "Share2", description: "Audience building & retargeting workflows" },
    { name: "Instagram Ads", category: "Visual Placement", iconName: "Camera", description: "Reels & Stories conversion creatives" },
    { name: "Google Ads", category: "Search & Display", iconName: "Search", description: "High-intent customer acquisition" },
    { name: "Google Analytics", category: "Web Analytics", iconName: "Activity", description: "Attribution & conversion event tracking" },
    { name: "Google Tag Manager", category: "Tag Infrastructure", iconName: "Tag", description: "Pixel, conversion API & custom trigger setup" },
    { name: "Canva", category: "Creative Production", iconName: "Palette", description: "Ad creative variations & rapid testing assets" },
    { name: "Looker Studio", category: "Reporting Dashboards", iconName: "PieChart", description: "Custom performance reporting & client insights" },
    { name: "Google Sheets", category: "Data Analysis", iconName: "Table", description: "Metric aggregation & ROI calculation models" },
  ],

  personalBrandPrinciples: [
    { number: "01", title: "Think Strategically", desc: "Every campaign begins with clear business goals, customer psychology and funnel planning." },
    { number: "02", title: "Test Relentlessly", desc: "Continuous iteration of creative hooks, ad copies and audience segment angles." },
    { number: "03", title: "Follow the Data", desc: "Decisions are driven by empirical ad set analytics, CTR, CPL and conversion signals." },
    { number: "04", title: "Optimize for Growth", desc: "Focusing strictly on bottom-line business profitability and sustainable customer acquisition." },
  ],

  contact: {
    headline: "Have a Campaign Worth Scaling?",
    subtext: "Let's talk about your goals, your current advertising challenges and where performance marketing can create the biggest opportunity.",
    primaryCta: "Start a Conversation →",
    secondaryCta: "View My Work →",
    email: "choudharynitin1805@gmail.com",
    phone: "+91 7374052003",
    whatsapp: "+91 8867460556",
    whatsappLink: "https://wa.me/918867460556",
    linkedin: "https://www.linkedin.com/in/nitin-choudhary-268915257/",
    instagram: "https://www.instagram.com/choudhary_nitin_rj23/",
  },

  socials: [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/nitin-choudhary-268915257/" },
    { name: "Instagram", href: "https://www.instagram.com/choudhary_nitin_rj23/" },
  ],
};

export interface VideoItem {
  id: string;
  src: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  aspectRatio: "vertical" | "landscape";
}

export const campaignVideos: VideoItem[] = [
  {
    id: "video-01",
    src: "/videos/campaign-01.mp4",
    title: "Lead Generation Creative Execution",
    category: "META ADS CREATIVE",
    tag: "HIGH CONVERSION HOOK",
    description: "Meta ad creative performance angle designed for high-intent audience acquisition and lead conversion.",
    aspectRatio: "vertical",
  },
  {
    id: "video-02",
    src: "/videos/campaign-02.mp4",
    title: "Performance Retargeting Reel",
    category: "PERFORMANCE MARKETING",
    tag: "RETARGETING FUNNEL",
    description: "Re-engagement video creative built to capture dropped funnel visitors and convert interested prospects.",
    aspectRatio: "vertical",
  },
  {
    id: "video-03",
    src: "/videos/campaign-03.mp4",
    title: "Community Growth & Scaling Ad",
    category: "TELEGRAM & COMMUNITY ACQUISITION",
    tag: "SCALE STRATEGY",
    description: "High-relevancy campaign video triggering fast community member subscriptions at scale.",
    aspectRatio: "vertical",
  },
];

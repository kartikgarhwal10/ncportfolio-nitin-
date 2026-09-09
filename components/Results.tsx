"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ZoomIn, Award } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import CaseStudyCard from "./CaseStudyCard";
import ScreenshotLightbox from "./ScreenshotLightbox";

export default function Results() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = ["All", "Lead Generation", "Meta Ads", "Scaling"];

  const proofScreenshots = [
    {
      src: "/case-studies/campaign-05/screenshot-01.jpg",
      alt: "Meta Ads Manager ₹104,513.80 spent and 7,938 Subscribes @ ₹13.17 proof",
      caption: "Meta Ads Manager - Verified ₹1 Lakh+ Ad Spend (7,938 Subscribes @ ₹13.17)",
      redacted: false,
      tag: "FLAGSHIP ₹1 LAKH+ SPEND",
      stat: "₹1,04,513 Spent • 7,938 Subs",
    },
    {
      src: "/case-studies/campaign-06/screenshot-01.jpg",
      alt: "Meta Ads Manager Cricket Telegram 173 Members @ ₹14.99 proof",
      caption: "Meta Ads Manager - Verified Cricket Telegram Growth (173 Members @ ₹14.99 Avg, ₹7.84 Best CPS)",
      redacted: false,
      tag: "CRICKET TELEGRAM 🏏",
      stat: "173 Members • ₹7.84 Best CPS",
    },
    {
      src: "/case-studies/campaign-04/screenshot-01.jpg",
      alt: "Meta Ads Manager Color Trading 476 Subscribers proof",
      caption: "Meta Ads Manager - Verified Color Trading Telegram Subscribers (476 Subs @ ₹16 Avg)",
      redacted: false,
      tag: "COLOR TRADING TELEGRAM",
      stat: "476 Subscribers",
    },
    {
      src: "/case-studies/campaign-01/screenshot-01.jpg",
      alt: "Meta Ads Manager ₹15.66 Cost Per Lead proof",
      caption: "Meta Ads Manager - Verified ₹15.66 Cost Per Lead & 12 Form Leads",
      redacted: false,
      tag: "INSTANT FORM LEADS",
      stat: "₹15.66 CPL",
    },
    {
      src: "/case-studies/campaign-02/screenshot-01.png",
      alt: "Meta Ads Manager 78 Messaging Conversations proof",
      caption: "Meta Ads Manager - Verified 78 Messaging Conversations @ ₹35.75 CPR",
      redacted: false,
      tag: "MESSAGING CONVERSIONS",
      stat: "78 Conversations",
    },
    {
      src: "/case-studies/campaign-03/screenshot-01.png",
      alt: "Meta Ads Manager 144.6K reach and 124 conversions proof",
      caption: "Meta Ads Manager - Verified Multi-Campaign Dashboard (144.6K Reach, 124 Conversions)",
      redacted: false,
      tag: "ACCOUNT SCALING",
      stat: "144.6K+ Reach",
    },
  ];

  const filteredStudies =
    activeCategory === "All"
      ? caseStudies
      : caseStudies.filter(
          (item) => item.category === activeCategory || (activeCategory === "Meta Ads" && item.category === "Meta Ads")
        );

  return (
    <section id="results" className="py-24 bg-[#0F1115] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 tracking-wider uppercase mb-4"
          >
            VERIFIED CAMPAIGN PROOF
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Results That Tell the Story
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#A5A9B4] max-w-2xl font-normal"
          >
            Real Meta Ads Manager campaign screenshots, live performance data and campaign strategies.
          </motion.p>
        </div>

        {/* PROOF SCREENSHOTS SHOWCASE GRID */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center">
              <Award className="w-5 h-5 mr-2 text-blue-400" />
              Meta Ads Manager Live Dashboards
            </h3>
            <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              ✓ 100% VERIFIED METRICS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {proofScreenshots.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => {
                  setLightboxIndex(idx);
                  setLightboxOpen(true);
                }}
                className={`group relative rounded-3xl bg-[#14171D] border border-white/10 overflow-hidden cursor-pointer shadow-xl glass-card-hover ${
                  idx === 0 ? "sm:col-span-2 lg:col-span-2 border-indigo-500/30" : ""
                }`}
              >
                <div className="relative aspect-[16/9] w-full bg-black">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-transparent to-transparent opacity-80" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#08090C]/80 border border-white/15 backdrop-blur-md">
                    <span className="text-[10px] font-extrabold text-blue-400 tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  {/* Bottom Stat */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-sm sm:text-base font-extrabold text-white">
                      {item.stat}
                    </span>
                    <span className="text-xs font-semibold text-blue-400 flex items-center bg-blue-500/20 px-2.5 py-1 rounded-lg border border-blue-500/30">
                      <ZoomIn className="w-3.5 h-3.5 mr-1" /> Expand
                    </span>
                  </div>
                </div>

                <div className="p-4 border-t border-white/5 flex items-center justify-between">
                  <p className="text-xs font-medium text-[#A5A9B4] line-clamp-1">
                    {item.caption}
                  </p>
                  {idx === 0 && (
                    <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded uppercase tracking-wider shrink-0 ml-2">
                      Flagship Result
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold text-white tracking-tight">
            Detailed Campaign Case Studies
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[#635bff] to-[#3b82f6] text-white shadow-lg shadow-indigo-500/20"
                    : "bg-[#14171D] text-[#A5A9B4] hover:text-white border border-white/10 hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudies.map((study, idx) => (
            <CaseStudyCard key={study.slug} study={study} index={idx} />
          ))}
        </div>

        {/* Fullscreen Lightbox Modal */}
        <ScreenshotLightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          screenshots={proofScreenshots}
          currentIndex={lightboxIndex}
          onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        />

      </div>
    </section>
  );
}

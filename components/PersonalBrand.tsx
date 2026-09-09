"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, Lightbulb, Compass, Database, TrendingUp } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function PersonalBrand() {
  const dataMetrics = [
    { label: "Click-Through Rate (CTR)", direction: "up", text: "Maximizing creative hook efficiency" },
    { label: "Cost Per Click (CPC)", direction: "down", text: "Optimizing audience relevancy" },
    { label: "Cost Per Lead (CPL)", direction: "down", text: "Reducing customer acquisition cost" },
    { label: "Conversion Rate", direction: "up", text: "Aligning ad intent with landing page" },
  ];

  return (
    <section className="py-24 bg-[#08090C] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP SUB-SECTION: DATA-DRIVEN RELATIONSHIPS */}
        <div className="mb-24">
          <div className="flex flex-col items-start mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 tracking-wider uppercase mb-4"
            >
              DATA-DRIVEN METHODOLOGY
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
            >
              Decisions Backed by Data.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataMetrics.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-[#14171D] border border-white/10 glass-card-hover flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#A5A9B4] uppercase tracking-wider">
                    INDICATOR
                  </span>
                  {item.direction === "up" ? (
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <ArrowDownRight className="w-4 h-4" />
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-white tracking-tight mb-1">
                    {item.label}
                  </h3>
                  <p className="text-xs text-[#A5A9B4]">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM SUB-SECTION: PERSONAL BRAND PRINCIPLES */}
        <div>
          <div className="max-w-3xl mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold text-indigo-400 tracking-wider uppercase mb-4 inline-block"
            >
              CORE PHILOSOPHY
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
            >
              More Than Just Ads.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[#A5A9B4] leading-relaxed"
            >
              Great campaigns don't exist in isolation. They sit at the intersection of the right offer, the right audience, the right creative and the right customer journey.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteData.personalBrandPrinciples.map((card, idx) => (
              <motion.div
                key={card.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-[#14171D] border border-white/10 glass-card-hover flex flex-col justify-between"
              >
                <span className="text-sm font-black text-indigo-400 mb-6 block">
                  {card.number}
                </span>

                <div>
                  <h3 className="text-xl font-extrabold text-white tracking-tight mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#A5A9B4] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

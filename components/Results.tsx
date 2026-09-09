"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { caseStudies, CaseStudy } from "@/data/caseStudies";
import CaseStudyCard from "./CaseStudyCard";

export default function Results() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Lead Generation", "E-Commerce", "Retargeting"];

  const filteredStudies =
    activeCategory === "All"
      ? caseStudies
      : caseStudies.filter((item) => item.category === activeCategory);

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
            RESULTS
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
            Real campaign data, strategy and learnings from performance marketing campaigns.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#635bff] to-[#3b82f6] text-white shadow-lg shadow-indigo-500/20"
                  : "bg-[#14171D] text-[#A5A9B4] hover:text-white border border-white/10 hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study, idx) => (
            <CaseStudyCard key={study.slug} study={study} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, BarChart, ShieldCheck } from "lucide-react";
import { CaseStudy } from "@/data/caseStudies";

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

export default function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-3xl bg-[#14171D] border border-white/10 glass-card-hover overflow-hidden flex flex-col justify-between"
    >
      <div className="p-8">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 uppercase tracking-wider">
            {study.industry}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#A5A9B4]">
            {study.campaignType}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-extrabold text-white tracking-tight mb-3 group-hover:text-blue-400 transition-colors">
          {study.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-[#A5A9B4] leading-relaxed mb-6">
          {study.shortDescription}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 py-4 border-y border-white/10 mb-6 bg-[#0F1115]/50 rounded-2xl p-4">
          {study.metrics.slice(0, 2).map((m, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-[11px] font-bold text-[#A5A9B4] tracking-wider uppercase">
                {m.label}
              </span>
              <span className="text-lg font-black text-white tracking-tight">
                {m.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Link */}
      <div className="px-8 pb-8 pt-0">
        <Link
          href={`/work/${study.slug}`}
          className="inline-flex items-center text-sm font-bold text-white group-hover:text-blue-400 transition-colors"
        >
          <span>View Case Study</span>
          <ArrowUpRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

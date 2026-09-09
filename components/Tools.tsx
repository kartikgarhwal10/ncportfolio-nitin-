"use client";

import { motion } from "framer-motion";
import {
  LayoutGrid,
  Share2,
  Camera,
  Search,
  Activity,
  Tag,
  Palette,
  PieChart,
  Table,
  LucideIcon,
} from "lucide-react";
import { siteData } from "@/data/siteData";

const toolIcons: Record<string, LucideIcon> = {
  LayoutGrid,
  Share2,
  Camera,
  Search,
  Activity,
  Tag,
  Palette,
  PieChart,
  Table,
};

export default function Tools() {
  return (
    <section className="py-24 bg-[#0F1115] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold text-indigo-400 tracking-wider uppercase mb-4"
          >
            TOOLS & PLATFORMS
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            The Performance Stack
          </motion.h2>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.tools.map((tool, idx) => {
            const IconComp = toolIcons[tool.iconName] || LayoutGrid;

            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-[#14171D] border border-white/10 glass-card-hover flex items-start space-x-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0F1115] border border-white/10 flex items-center justify-center text-blue-400 shrink-0">
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#A5A9B4] tracking-widest uppercase block mb-1">
                    {tool.category}
                  </span>
                  <h3 className="text-base font-bold text-white tracking-tight mb-1">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-[#A5A9B4] leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Megaphone,
  Users,
  TrendingUp,
  Sliders,
  Target,
  BarChart3,
  LucideIcon,
} from "lucide-react";
import { siteData } from "@/data/siteData";

const iconMap: Record<string, LucideIcon> = {
  Megaphone,
  Users,
  TrendingUp,
  Sliders,
  Target,
  BarChart3,
};

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-[#0F1115] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold text-indigo-400 tracking-wider uppercase mb-4"
          >
            EXPERTISE
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            What I Do
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#A5A9B4] max-w-2xl font-normal"
          >
            From campaign strategy to optimization, I focus on the parts of digital advertising that directly influence growth.
          </motion.p>
        </div>

        {/* Six Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {siteData.expertise.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Megaphone;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group p-8 rounded-3xl bg-[#14171D] border border-white/10 glass-card-hover flex flex-col justify-between relative overflow-hidden"
              >
                {/* Accent Hover Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#635bff] to-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-sm font-extrabold text-[#A5A9B4] group-hover:text-blue-400 transition-colors">
                      {item.id}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#0F1115] border border-white/10 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-[#635bff] group-hover:to-[#3b82f6] group-hover:text-white transition-all duration-300 shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Heading */}
                  <h3 className="text-xl font-extrabold text-white tracking-tight mb-3 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#A5A9B4] leading-relaxed font-normal">
                    {item.description}
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

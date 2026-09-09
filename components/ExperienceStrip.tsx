"use client";

import { motion } from "framer-motion";
import { Award, Target, TrendingUp, Cpu } from "lucide-react";

export default function ExperienceStrip() {
  const items = [
    {
      icon: Award,
      title: "3+ Years",
      subtitle: "Experience",
    },
    {
      icon: Target,
      title: "Meta Ads",
      subtitle: "Core Specialization",
    },
    {
      icon: TrendingUp,
      title: "Performance",
      subtitle: "Marketing",
    },
    {
      icon: Cpu,
      title: "Data Driven",
      subtitle: "Approach",
    },
  ];

  return (
    <section className="py-8 bg-[#0F1115] border-y border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center">
          {items.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-center space-x-3 p-3 rounded-2xl hover:bg-white/5 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-[#14171D] border border-white/10 flex items-center justify-center text-blue-400 shrink-0 shadow-inner">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#A5A9B4] font-medium">
                    {item.subtitle}
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

"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Process() {
  return (
    <section id="process" className="py-24 bg-[#08090C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 tracking-wider uppercase mb-4"
          >
            PROCESS
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            From Strategy to Scale
          </motion.h2>
        </div>

        {/* Desktop Timeline (Horizontal) & Mobile (Vertical) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          
          {/* Subtle Horizontal Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-8 right-8 h-0.5 bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-blue-500/30 -z-0" />

          {siteData.processSteps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative z-10 flex flex-col items-start p-6 rounded-3xl bg-[#14171D] border border-white/10 glass-card-hover"
            >
              {/* Step Circle Badge */}
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#635bff] to-[#3b82f6] flex items-center justify-center font-extrabold text-white text-base shadow-lg shadow-indigo-500/20 mb-6">
                {step.number}
              </div>

              {/* Step Title */}
              <h3 className="text-lg font-extrabold text-white tracking-tight mb-2">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-sm text-[#A5A9B4] leading-relaxed font-normal">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

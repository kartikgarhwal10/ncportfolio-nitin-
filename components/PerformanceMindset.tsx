"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function PerformanceMindset() {
  return (
    <section className="py-24 bg-[#08090C] border-t border-white/5 relative overflow-hidden">
      {/* Background Subtle Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#1f242d_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 tracking-wider uppercase mb-4"
          >
            PERFORMANCE MINDSET
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Every Campaign Starts With a Question.
          </motion.h2>
        </div>

        {/* Desktop Horizontal Flow / Mobile Vertical Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {siteData.performanceMindset.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-full p-6 rounded-2xl bg-[#14171D] border border-white/10 glass-card-hover flex flex-col items-start h-full relative">
                <span className="text-xs font-extrabold text-blue-400 tracking-widest uppercase mb-2">
                  {item.step}
                </span>
                <h3 className="text-2xl font-black text-white tracking-tight mb-2">
                  {item.stage}
                </h3>
                <h4 className="text-sm font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-[#A5A9B4] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Arrow Indicator between steps */}
              {idx < siteData.performanceMindset.length - 1 && (
                <>
                  {/* Desktop Right Arrow */}
                  <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 text-white/20 z-20" style={{ left: `calc(${ (idx + 1) * 20 }% - 12px)` }}>
                    <ArrowRight className="w-6 h-6 text-indigo-500/60" />
                  </div>
                  {/* Mobile Down Arrow */}
                  <div className="flex md:hidden my-2 text-indigo-500/60">
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

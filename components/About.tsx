"use client";

import { motion } from "framer-motion";
import { CheckCircle2, User, Sparkles } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#08090C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Label & Heading */}
        <div className="flex flex-col items-start mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 tracking-wider uppercase mb-4"
          >
            {siteData.about.label}
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            {siteData.about.heading}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy Column */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl font-medium text-white leading-relaxed">
              {siteData.about.paragraph1}
            </p>
            <p className="text-base sm:text-lg text-[#A5A9B4] leading-relaxed">
              {siteData.about.paragraph2}
            </p>
            <p className="text-base sm:text-lg text-[#A5A9B4] leading-relaxed">
              {siteData.about.paragraph3}
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#0F1115] border border-white/5 flex items-start space-x-3">
                <Sparkles className="w-5 h-5 text-indigo-400 mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white">Data-Driven Execution</h4>
                  <p className="text-xs text-[#A5A9B4] mt-0.5">Every audience and creative pivot is guided by ad analytics metrics.</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#0F1115] border border-white/5 flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white">Funnel Integration</h4>
                  <p className="text-xs text-[#A5A9B4] mt-0.5">Connecting ad copy directly with landing page conversion triggers.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Side Profile Card Column */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-[#14171D] border border-white/10 shadow-2xl relative">
              <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-white/10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#635bff] to-[#3b82f6] flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-indigo-500/20">
                  <User className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {siteData.about.cardDetails.name}
                  </h3>
                  <p className="text-sm text-blue-400 font-semibold">
                    {siteData.about.cardDetails.role}
                  </p>
                  <p className="text-xs text-[#A5A9B4] font-medium mt-0.5">
                    {siteData.about.cardDetails.experienceText}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#A5A9B4] uppercase tracking-wider mb-4">
                  CORE FOCUS
                </h4>
                <div className="space-y-3">
                  {siteData.about.cardDetails.coreFocus.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 p-2.5 rounded-xl bg-[#0F1115] border border-white/5 text-sm font-semibold text-white hover:border-indigo-500/40 transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

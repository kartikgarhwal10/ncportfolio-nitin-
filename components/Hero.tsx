"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BarChart2, ShieldCheck, Zap } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#08090C]">
      {/* Subtle Background Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#635bff]/10 via-[#3b82f6]/10 to-transparent rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-600/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE COLUMN */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#14171D] border border-white/10 text-xs font-semibold text-emerald-400 tracking-wide uppercase mb-6 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{siteData.availability}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6"
            >
              I Don't Just Run Ads. <br />
              <span className="gradient-accent-text">
                I Build Campaigns That Perform.
              </span>
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg sm:text-xl text-[#A5A9B4] font-normal leading-relaxed max-w-2xl mb-8"
            >
              I'm <strong className="text-white font-semibold">Nitin Choudhary</strong>, a Performance Marketing Specialist with 3+ years of experience helping businesses acquire customers through data-driven digital advertising strategies.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12"
            >
              <a
                href="#results"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#635bff] to-[#3b82f6] hover:opacity-95 transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 text-center"
              >
                View My Results
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl text-base font-semibold text-white bg-[#14171D] hover:bg-[#1f242d] border border-white/10 hover:border-white/20 transition-all text-center"
              >
                Let's Work Together
              </a>
            </motion.div>

            {/* Experience Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 w-full"
            >
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">3+ Years</span>
                <span className="text-xs sm:text-sm text-[#A5A9B4] font-medium">Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Meta Ads</span>
                <span className="text-xs sm:text-sm text-[#A5A9B4] font-medium">Specialist</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Performance</span>
                <span className="text-xs sm:text-sm text-[#A5A9B4] font-medium">Focused</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE COLUMN - NITIN PROFILE & FLOATING CARDS */}
          <motion.div
            className="lg:col-span-5 relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Outer Container with Gradient Glow & Border */}
            <div className="relative w-full max-w-md aspect-square rounded-[32px] p-2 bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-2xl border border-white/10 group">
              
              {/* Inner Dark Background Box */}
              <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-[#0F1115]">
                <Image
                  src="/nitin-profile.jpg"
                  alt="Nitin Choudhary - Performance Marketing Specialist"
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-transparent to-transparent opacity-80" />
                
                {/* Card Title Label Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-nav border border-white/10 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white leading-tight">Nitin Choudhary</h3>
                    <p className="text-xs text-blue-400 font-medium">Performance Marketing Specialist</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-blue-400" />
                  </div>
                </div>
              </div>

              {/* Floating Card 1 - CAMPAIGN PERFORMANCE */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 sm:-left-6 px-4 py-3 rounded-2xl glass-card border border-white/10 shadow-xl flex items-center space-x-3 bg-[#14171D]/90 backdrop-blur-md"
              >
                <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                  <BarChart2 className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-[#A5A9B4] uppercase block">APPROACH</span>
                  <span className="text-xs font-bold text-white">CAMPAIGN PERFORMANCE</span>
                </div>
              </motion.div>

              {/* Floating Card 2 - DATA-DRIVEN */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-4 sm:-right-6 px-4 py-3 rounded-2xl glass-card border border-white/10 shadow-xl flex items-center space-x-3 bg-[#14171D]/90 backdrop-blur-md"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-[#A5A9B4] uppercase block">METHODOLOGY</span>
                  <span className="text-xs font-bold text-white">DATA-DRIVEN</span>
                </div>
              </motion.div>

              {/* Floating Card 3 - 3+ YEARS */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-4 -left-2 px-4 py-2.5 rounded-2xl glass-card border border-white/10 shadow-xl flex items-center space-x-2 bg-[#14171D]/90 backdrop-blur-md"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-white">3+ YEARS EXPERIENCE</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

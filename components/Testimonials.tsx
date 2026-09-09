"use client";

import { motion } from "framer-motion";
import { MessageSquare, Quote, ShieldCheck } from "lucide-react";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
}

// Factual policy: Only render verified testimonials supplied by Nitin.
const verifiedTestimonials: Testimonial[] = [];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#0F1115] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label & Header */}
        <div className="flex flex-col items-start mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 tracking-wider uppercase mb-4"
          >
            VERIFIED FEEDBACK
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Client Endorsements & Feedback
          </motion.h2>
        </div>

        {verifiedTestimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {verifiedTestimonials.map((item) => (
              <div
                key={item.id}
                className="p-8 rounded-3xl bg-[#14171D] border border-white/10 glass-card-hover flex flex-col justify-between"
              >
                <Quote className="w-8 h-8 text-blue-400 mb-4" />
                <p className="text-base text-white font-medium mb-6 leading-relaxed italic">
                  "{item.quote}"
                </p>
                <div>
                  <h4 className="text-sm font-bold text-white">{item.author}</h4>
                  <p className="text-xs text-[#A5A9B4]">{item.company}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-[#14171D]/60 border border-white/10 text-center max-w-2xl mx-auto"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mx-auto mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-white mb-2">
              Verified Client Feedback Architecture
            </h3>
            <p className="text-xs text-[#A5A9B4] leading-relaxed max-w-md mx-auto">
              In accordance with Nitin's strict data credibility standard, only 100% verified client reviews and case testimonials will be displayed here upon receipt.
            </p>
          </motion.div>
        )}

      </div>
    </section>
  );
}

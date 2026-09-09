"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, PhoneCall, CheckCircle2, ArrowRight } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function ContactCTA() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Meta Ads Campaign Audit & Strategy",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build pre-formatted WhatsApp message with all user details
    const textMessage = `Hi Nitin, I would like to discuss a Performance Marketing campaign.

📌 *Client Details*:
• *Name*: ${formData.name}
• *Email*: ${formData.email}
• *Company / Brand*: ${formData.company || 'N/A'}
• *Service Interested In*: ${formData.service}

💬 *Campaign Message / Details*:
${formData.message || 'N/A'}`;

    const whatsappUrl = `https://wa.me/918867460556?text=${encodeURIComponent(textMessage)}`;
    
    setFormSubmitted(true);
    
    // Redirect user to WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-[#08090C] border-t border-white/10 relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#22c55e]/10 via-[#3b82f6]/10 to-transparent rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Info */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 tracking-wider uppercase inline-block">
              GET IN TOUCH
            </span>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {siteData.contact.headline}
            </h2>

            <p className="text-lg text-[#A5A9B4] leading-relaxed font-normal">
              {siteData.contact.subtext}
            </p>

            {/* Direct Channels */}
            <div className="pt-6 space-y-4">
              {/* Email */}
              <a
                href={`mailto:${siteData.contact.email}`}
                className="p-4 rounded-2xl bg-[#14171D] border border-white/10 flex items-center space-x-4 hover:border-blue-500/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#A5A9B4] uppercase block">Direct Email</span>
                  <span className="text-sm font-semibold text-white font-mono group-hover:text-blue-400 transition-colors">{siteData.contact.email}</span>
                </div>
              </a>

              {/* Call */}
              <a
                href={`tel:${siteData.contact.phone}`}
                className="p-4 rounded-2xl bg-[#14171D] border border-white/10 flex items-center space-x-4 hover:border-indigo-500/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#A5A9B4] uppercase block">Phone Call</span>
                  <span className="text-sm font-semibold text-white font-mono group-hover:text-indigo-400 transition-colors">{siteData.contact.phone}</span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={siteData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#14171D] border border-white/10 flex items-center space-x-4 hover:border-emerald-500/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#A5A9B4] uppercase block">WhatsApp Business</span>
                  <span className="text-sm font-semibold text-white font-mono group-hover:text-emerald-400 transition-colors">{siteData.contact.whatsapp}</span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Form Card */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-[#14171D] border border-white/10 shadow-2xl relative">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">Opening WhatsApp...</h3>
                  <p className="text-sm text-[#A5A9B4] max-w-sm mx-auto">
                    Your details have been formatted and you are being redirected to chat directly with Nitin on WhatsApp.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white hover:bg-white/10"
                  >
                    Edit Details & Resend
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                    Send Campaign Inquiry
                  </h3>

                  <div>
                    <label className="block text-xs font-bold text-[#A5A9B4] uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0F1115] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#A5A9B4] uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="rahul@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0F1115] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#A5A9B4] uppercase tracking-wider mb-2">
                        Company / Brand
                      </label>
                      <input
                        type="text"
                        placeholder="Brand Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0F1115] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#A5A9B4] uppercase tracking-wider mb-2">
                      What are you looking for?
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0F1115] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      <option value="Meta Ads Campaign Audit & Strategy">Meta Ads Campaign Audit & Strategy</option>
                      <option value="Lead Generation Optimization">Lead Generation Optimization</option>
                      <option value="E-Commerce & D2C Sales Scaling">E-Commerce & D2C Sales Scaling</option>
                      <option value="Full-Funnel Retargeting Architecture">Full-Funnel Retargeting Architecture</option>
                      <option value="Other Digital Acquisition Inquiry">Other Digital Acquisition Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#A5A9B4] uppercase tracking-wider mb-2">
                      Campaign Message / Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell Nitin about your current ad spend, target goals, or acquisition challenges..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0F1115] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white font-bold text-base hover:opacity-95 transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Chat on WhatsApp</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

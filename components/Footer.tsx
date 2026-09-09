"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, PhoneCall } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function Footer() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Results", href: "#results" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#08090C] border-t border-white/10 py-16 text-[#A5A9B4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#635bff] to-[#3b82f6] flex items-center justify-center font-bold text-white shadow-lg">
                NC
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {siteData.name}
                </h3>
                <p className="text-xs text-blue-400 font-medium">
                  {siteData.title}
                </p>
              </div>
            </div>
            <p className="text-sm text-[#A5A9B4] max-w-sm leading-relaxed">
              Meta Ads • Digital Marketing • Paid Acquisition
            </p>
            <div className="pt-2 text-xs font-mono space-y-1">
              <p className="text-white/80 flex items-center">
                <Mail className="w-3.5 h-3.5 mr-2 text-blue-400" />
                <a href={`mailto:${siteData.contact.email}`} className="hover:text-blue-400 transition-colors">
                  {siteData.contact.email}
                </a>
              </p>
              <p className="text-white/80 flex items-center">
                <PhoneCall className="w-3.5 h-3.5 mr-2 text-indigo-400" />
                <a href={`tel:${siteData.contact.phone}`} className="hover:text-indigo-400 transition-colors">
                  {siteData.contact.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-[#A5A9B4] hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Profiles */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Connect & Profiles
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={siteData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-[#A5A9B4] hover:text-white transition-colors"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href={siteData.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-[#A5A9B4] hover:text-white transition-colors"
                >
                  <span>Instagram Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href={siteData.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-[#A5A9B4] hover:text-emerald-400 transition-colors"
                >
                  <span>WhatsApp Business</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A5A9B4]">
          <p>© 2026 Nitin Choudhary. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Performance Marketing Portfolio</p>
        </div>
      </div>
    </footer>
  );
}

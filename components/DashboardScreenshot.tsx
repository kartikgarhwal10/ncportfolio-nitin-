"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIn, ShieldCheck, Lock } from "lucide-react";
import { ScreenshotItem } from "@/data/caseStudies";
import ScreenshotLightbox from "./ScreenshotLightbox";

interface DashboardScreenshotProps {
  screenshots: ScreenshotItem[];
}

export default function DashboardScreenshot({ screenshots }: DashboardScreenshotProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!screenshots || screenshots.length === 0) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold text-blue-400 tracking-wider uppercase block mb-1">
            VERIFIED CAMPAIGN PROOF
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Meta Ads Manager Screenshots
          </h3>
        </div>
        <div className="hidden sm:flex items-center space-x-2 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
          <Lock className="w-3.5 h-3.5" />
          <span>Client Confidentiality Shielded</span>
        </div>
      </div>

      {/* Main Display Box */}
      <div className="grid grid-cols-1 gap-4">
        {screenshots.map((item, idx) => (
          <div
            key={idx}
            onClick={() => {
              setCurrentIndex(idx);
              setLightboxOpen(true);
            }}
            className="group relative w-full aspect-video rounded-3xl bg-[#0F1115] border border-white/10 overflow-hidden cursor-pointer shadow-2xl glass-card-hover"
          >
            {/* Fake / Real Image Render */}
            <div className="relative w-full h-full">
              {item.src.endsWith(".png") || item.src.endsWith(".jpg") ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full p-8 flex flex-col justify-between bg-gradient-to-br from-[#0F1115] via-[#14171D] to-[#08090C] border border-white/5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/70" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                      <div className="w-3 h-3 rounded-full bg-green-500/70" />
                      <span className="text-xs font-mono text-white/50 ml-2">
                        Meta Ads Manager Dashboard
                      </span>
                    </div>
                    <span className="text-xs text-blue-400 font-mono">
                      [Verified Campaign Asset]
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-auto">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[10px] font-bold text-[#A5A9B4] block">SPEND</span>
                      <span className="text-lg font-bold text-white">[ACTUAL SPEND]</span>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[10px] font-bold text-[#A5A9B4] block">RESULTS</span>
                      <span className="text-lg font-bold text-white">[ACTUAL LEADS]</span>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[10px] font-bold text-[#A5A9B4] block">COST / RESULT</span>
                      <span className="text-lg font-bold text-white">[ACTUAL CPL]</span>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[10px] font-bold text-[#A5A9B4] block">CTR</span>
                      <span className="text-lg font-bold text-white">[ACTUAL CTR]</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#A5A9B4]">
                    <span>Click to expand full resolution report</span>
                    <span className="flex items-center text-blue-400 font-semibold">
                      <ZoomIn className="w-4 h-4 mr-1" /> Inspect Data
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Hover Zoom Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <div className="px-4 py-2.5 rounded-xl bg-[#14171D]/90 border border-white/20 text-white text-xs font-bold flex items-center space-x-2 backdrop-blur-md">
                <ZoomIn className="w-4 h-4 text-blue-400" />
                <span>Click to View Full Resolution</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ScreenshotLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        screenshots={screenshots}
        currentIndex={currentIndex}
        onNavigate={(newIdx) => setCurrentIndex(newIdx)}
      />
    </div>
  );
}

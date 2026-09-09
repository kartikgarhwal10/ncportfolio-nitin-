"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ShieldAlert } from "lucide-react";
import { ScreenshotItem } from "@/data/caseStudies";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  screenshots: ScreenshotItem[];
  currentIndex: number;
  onNavigate: (newIndex: number) => void;
}

export default function ScreenshotLightbox({
  isOpen,
  onClose,
  screenshots,
  currentIndex,
  onNavigate,
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        onNavigate((currentIndex - 1 + screenshots.length) % screenshots.length);
      }
      if (e.key === "ArrowRight") {
        onNavigate((currentIndex + 1) % screenshots.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, screenshots.length, onClose, onNavigate]);

  if (!isOpen || screenshots.length === 0) return null;

  const currentItem = screenshots[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
        onClick={onClose}
      >
        {/* Modal Container */}
        <div
          className="relative max-w-5xl w-full bg-[#0F1115] border border-white/15 rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
            <div className="flex items-center space-x-3">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                META ADS MANAGER
              </span>
              <span className="text-sm font-semibold text-white">
                {currentItem.caption}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#14171D] hover:bg-white/10 text-white transition-colors border border-white/10"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Screenshot Main Image View */}
          <div className="relative w-full aspect-video bg-[#08090C] rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center">
            {currentItem.src.endsWith(".png") || currentItem.src.endsWith(".jpg") ? (
              <Image
                src={currentItem.src}
                alt={currentItem.alt}
                fill
                className="object-contain"
              />
            ) : (
              /* High quality dark dashboard placeholder UI if image is being prepared */
              <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#0f1115] via-[#14171d] to-[#08090c]">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="text-xs font-mono text-white/40 ml-2">Meta Ads Manager - Verified View</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-medium text-amber-400 bg-amber-400/10 px-3 py-1 rounded-md border border-amber-400/20">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>Client Privacy Redacted</span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 my-auto">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] font-bold text-[#A5A9B4] block uppercase">Campaign Spend</span>
                    <span className="text-xl font-extrabold text-white">[VERIFIED SPEND]</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] font-bold text-[#A5A9B4] block uppercase">Results / Leads</span>
                    <span className="text-xl font-extrabold text-white">[VERIFIED RESULTS]</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] font-bold text-[#A5A9B4] block uppercase">Cost / Result</span>
                    <span className="text-xl font-extrabold text-white">[VERIFIED CPR]</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] font-bold text-[#A5A9B4] block uppercase">CTR (Link Click)</span>
                    <span className="text-xl font-extrabold text-white">[VERIFIED CTR]</span>
                  </div>
                </div>

                <p className="text-center text-xs text-[#A5A9B4] italic font-mono">
                  Meta Ads Manager screenshot container ready for client-supplied PNG/JPG screenshots.
                </p>
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          {screenshots.length > 1 && (
            <div className="flex items-center justify-between pt-4">
              <button
                onClick={() =>
                  onNavigate((currentIndex - 1 + screenshots.length) % screenshots.length)
                }
                className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-[#14171D] hover:bg-white/10 text-xs font-semibold text-white border border-white/10"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>
              <span className="text-xs text-[#A5A9B4]">
                {currentIndex + 1} of {screenshots.length}
              </span>
              <button
                onClick={() =>
                  onNavigate((currentIndex + 1) % screenshots.length)
                }
                className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-[#14171D] hover:bg-white/10 text-xs font-semibold text-white border border-white/10"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

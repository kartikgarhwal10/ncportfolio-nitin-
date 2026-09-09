"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Film, Sparkles } from "lucide-react";
import { campaignVideos } from "@/data/videos";
import VideoCard from "./VideoCard";

export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isCurrentVideoPlaying, setIsCurrentVideoPlaying] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % campaignVideos.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + campaignVideos.length) % campaignVideos.length
    );
  }, []);

  // Auto-slide effect
  useEffect(() => {
    // Do NOT auto-slide if video is currently playing or user is hovering
    if (isCurrentVideoPlaying || isHovered) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isCurrentVideoPlaying, isHovered, nextSlide]);

  // Touch gesture handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (diffX > 50) {
      nextSlide();
    } else if (diffX < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section className="py-24 bg-[#08090C] border-t border-white/10 relative overflow-hidden">
      {/* Background Accent Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-r from-[#635bff]/10 via-[#3b82f6]/10 to-transparent rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold text-indigo-400 tracking-wider uppercase mb-4 inline-flex items-center"
          >
            <Film className="w-3.5 h-3.5 mr-1.5" />
            <span>CAMPAIGN VIDEOS</span>
          </motion.span>

          <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-4">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3"
              >
                Campaigns In Motion.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-[#A5A9B4] max-w-2xl font-normal"
              >
                From creative execution to campaign strategy, here's a closer look at the work behind the campaigns.
              </motion.p>
            </div>

            {/* Desktop Navigation Arrows */}
            <div className="flex items-center space-x-3 shrink-0">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-2xl bg-[#14171D] hover:bg-white/10 text-white border border-white/10 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                aria-label="Previous Campaign Video"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-2xl bg-[#14171D] hover:bg-white/10 text-white border border-white/10 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                aria-label="Next Campaign Video"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* CAROUSEL CONTAINER */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative w-full overflow-hidden py-4"
        >
          {/* DESKTOP 3-CARD CAROUSEL VIEW */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
            {campaignVideos.map((video, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div key={video.id} className="w-full">
                  <VideoCard
                    video={video}
                    isActive={isActive}
                    onPlayStateChange={(playing) => {
                      if (isActive) setIsCurrentVideoPlaying(playing);
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* TABLET / MOBILE CAROUSEL SLIDER VIEW */}
          <div className="block lg:hidden relative w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="max-w-sm mx-auto"
              >
                <VideoCard
                  video={campaignVideos[currentIndex]}
                  isActive={true}
                  onPlayStateChange={(playing) => setIsCurrentVideoPlaying(playing)}
                />
              </motion.div>
            </AnimatePresence>

            {/* Mobile Navigation Dots & Arrows */}
            <div className="flex items-center justify-between mt-6 max-w-sm mx-auto px-2">
              <button
                onClick={prevSlide}
                className="p-3 rounded-xl bg-[#14171D] border border-white/10 text-white"
                aria-label="Previous Video"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-2">
                {campaignVideos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === currentIndex
                        ? "w-8 bg-blue-500"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to video ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-3 rounded-xl bg-[#14171D] border border-white/10 text-white"
                aria-label="Next Video"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

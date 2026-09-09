"use client";

import { useRef, useEffect, useState } from "react";
import { VideoItem } from "@/data/videos";
import { Play, Pause, Film, Sparkles } from "lucide-react";

interface VideoCardProps {
  video: VideoItem;
  isActive: boolean;
  onPlayStateChange?: (isPlaying: boolean) => void;
}

export default function VideoCard({
  video,
  isActive,
  onPlayStateChange,
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    if (isActive) {
      // Attempt muted autoplay on active card
      videoEl.muted = true;
      const playPromise = videoEl.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay policy prevented playback, remain paused
          setIsPlaying(false);
          if (onPlayStateChange) onPlayStateChange(false);
        });
      }
    } else {
      // Pause inactive videos
      if (!videoEl.paused) {
        videoEl.pause();
      }
      setIsPlaying(false);
      if (onPlayStateChange) onPlayStateChange(false);
    }
  }, [isActive, onPlayStateChange]);

  const handlePlay = () => {
    setIsPlaying(true);
    if (onPlayStateChange) onPlayStateChange(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
    if (onPlayStateChange) onPlayStateChange(false);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    if (onPlayStateChange) onPlayStateChange(false);
  };

  return (
    <div
      className={`relative w-full rounded-[24px] bg-[#14171D] border overflow-hidden transition-all duration-500 shadow-2xl flex flex-col justify-between ${
        isActive
          ? "border-indigo-500/50 shadow-indigo-500/10 scale-100 opacity-100 z-20"
          : "border-white/10 opacity-70 scale-95 z-10 hover:opacity-90"
      }`}
    >
      {/* Video Container Aspect Ratio (9:16 vertical or 16:9 responsive) */}
      <div className="relative w-full aspect-[9/16] max-h-[520px] bg-black overflow-hidden flex items-center justify-center">
        <video
          ref={videoRef}
          src={video.src}
          controls
          playsInline
          preload="metadata"
          onPlay={handlePlay}
          onPause={handlePause}
          onEnded={handleEnded}
          className="w-full h-full object-cover"
        />

        {/* Top Badges Overlay */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
          <span className="px-3 py-1 rounded-full bg-[#08090C]/80 border border-white/15 text-[10px] font-extrabold text-indigo-400 tracking-wider backdrop-blur-md flex items-center space-x-1">
            <Film className="w-3 h-3 mr-1 text-indigo-400 inline" />
            <span>VIDEO CASE STUDY</span>
          </span>

          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-[10px] font-extrabold text-emerald-400 tracking-wider backdrop-blur-md">
            {video.tag}
          </span>
        </div>

        {/* Subtle Indicator Overlay */}
        <div className="absolute bottom-16 right-4 pointer-events-none z-10">
          <div className="w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white backdrop-blur-md">
            {isPlaying ? (
              <Pause className="w-4 h-4 text-emerald-400 animate-pulse" />
            ) : (
              <Play className="w-4 h-4 text-white ml-0.5" />
            )}
          </div>
        </div>
      </div>

      {/* Video Card Details */}
      <div className="p-6 bg-[#14171D] border-t border-white/10 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-extrabold text-[#A5A9B4] tracking-widest uppercase">
            {video.category}
          </span>
          <span className="text-xs font-bold text-indigo-400 flex items-center">
            <Sparkles className="w-3.5 h-3.5 mr-1" /> Campaign Reel
          </span>
        </div>

        <h3 className="text-lg font-extrabold text-white tracking-tight leading-snug">
          {video.title}
        </h3>

        <p className="text-xs text-[#A5A9B4] leading-relaxed line-clamp-2">
          {video.description}
        </p>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight } from "lucide-react";
import { CaseStudy as CaseStudyType } from "@/data/caseStudies";
import MetricsGrid from "./MetricsGrid";
import DashboardScreenshot from "./DashboardScreenshot";

interface CaseStudyProps {
  study: CaseStudyType;
  nextStudy?: CaseStudyType;
}

export default function CaseStudyDetail({ study, nextStudy }: CaseStudyProps) {
  return (
    <article className="pt-32 pb-24 bg-[#08090C] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#results"
            className="inline-flex items-center text-xs font-bold text-[#A5A9B4] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            Back to Case Studies & Results
          </Link>
        </div>

        {/* 1. HERO HEADER */}
        <div className="mb-16 border-b border-white/10 pb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 uppercase tracking-wider">
              {study.industry}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#A5A9B4]">
              {study.campaignType}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            {study.title}
          </h1>

          <div className="p-6 rounded-2xl bg-[#14171D] border border-white/10 max-w-3xl">
            <span className="text-xs font-bold text-[#A5A9B4] uppercase tracking-wider block mb-1">
              CAMPAIGN OBJECTIVE
            </span>
            <p className="text-base font-medium text-white">
              {study.objective}
            </p>
          </div>
        </div>

        {/* 2 & 3. CHALLENGE & OBJECTIVE OVERVIEW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block">
              THE CONTEXT
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              The Challenge
            </h2>
            <p className="text-base text-[#A5A9B4] leading-relaxed">
              {study.challenge}
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block">
              STRATEGIC FOCUS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Execution Overview
            </h2>
            <p className="text-base text-[#A5A9B4] leading-relaxed">
              {study.shortDescription}
            </p>
          </div>
        </div>

        {/* 4. STRATEGY FLOW */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1">
              METHODOLOGY
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Campaign Strategy & Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {study.strategySteps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#14171D] border border-white/10 glass-card-hover flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-extrabold text-blue-400 block mb-2">
                    STAGE 0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#A5A9B4] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5 & 6. META ADS MANAGER SCREENSHOTS */}
        <div className="mb-20">
          <DashboardScreenshot screenshots={study.screenshots} />
          {study.dashboardNote && (
            <p className="text-xs text-[#A5A9B4] italic mt-3 font-mono">
              * Note: {study.dashboardNote}
            </p>
          )}
        </div>

        {/* 7. RESULTS METRICS */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
              PERFORMANCE SNAPSHOT
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Verified Campaign Metrics
            </h2>
          </div>
          <MetricsGrid metrics={study.metrics} />
        </div>

        {/* 8. KEY LEARNING */}
        <div className="mb-20 p-8 rounded-3xl bg-[#14171D] border border-white/10">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block mb-2">
            STRATEGIC TAKEAWAY
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight mb-3">
            Key Learning & Insight
          </h2>
          <p className="text-base text-[#A5A9B4] leading-relaxed">
            "{study.keyLearning}"
          </p>
        </div>

        {/* 9. NEXT CASE STUDY */}
        {nextStudy && (
          <div className="pt-12 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-bold text-[#A5A9B4] uppercase tracking-wider">
              Explore Next Campaign
            </span>
            <Link
              href={`/work/${nextStudy.slug}`}
              className="inline-flex items-center text-base font-bold text-white hover:text-blue-400 transition-colors"
            >
              <span>{nextStudy.title}</span>
              <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
        )}

      </div>
    </article>
  );
}

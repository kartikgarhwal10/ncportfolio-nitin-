"use client";

import { CaseStudyMetric } from "@/data/caseStudies";

interface MetricsGridProps {
  metrics: CaseStudyMetric[];
}

export default function MetricsGrid({ metrics }: MetricsGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
      {metrics.map((metric, idx) => (
        <div
          key={idx}
          className="p-6 rounded-2xl bg-[#14171D] border border-white/10 glass-card-hover flex flex-col justify-between"
        >
          <span className="text-xs font-bold text-[#A5A9B4] tracking-wider uppercase mb-2">
            {metric.label}
          </span>
          <div>
            <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {metric.value}
            </span>
            {metric.verified && (
              <span className="block mt-1 text-[10px] font-bold text-emerald-400">
                ✓ VERIFIED DATA
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

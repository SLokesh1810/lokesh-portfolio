"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cpProfiles } from "@/data/portfolio-data";

const PLATFORM_COLORS = {
  leetcode: "#ffa116",
  codechef: "#5b4638",
} as const;

function DonutChart({
  leetcodeCount,
  codechefCount,
  size = 140,
}: {
  leetcodeCount: number;
  codechefCount: number;
  size?: number;
}) {
  const total = leetcodeCount + codechefCount;
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  const segments = [
    { value: leetcodeCount, color: PLATFORM_COLORS.leetcode },
    { value: codechefCount, color: PLATFORM_COLORS.codechef },
  ];

  let offset = 0;

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-zinc-100 dark:text-zinc-800"
        />
        {segments.map((segment, i) => {
          if (segment.value === 0) return null;
          const fraction = segment.value / total;
          const dashLength = circumference * fraction;
          const dashOffset = -offset;
          offset += dashLength;

          return (
            <circle
              key={i}
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={segment.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${dashLength} ${circumference - dashLength}`}
              strokeDashoffset={dashOffset}
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{total}</span>
        <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          Solved
        </span>
      </div>
    </div>
  );
}

export function CpProfilePanel() {
  const { leetcode, codechef } = cpProfiles;

  const platforms = [
    { ...leetcode, color: PLATFORM_COLORS.leetcode },
    { ...codechef, color: PLATFORM_COLORS.codechef },
  ];

  return (
    <motion.aside
      id="cp-profile"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm dark:border-blue-500/25 dark:bg-zinc-950"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
        DSA / CP Profile
      </p>

      <div className="mt-4 flex items-start gap-5">
        <DonutChart
          leetcodeCount={leetcode.totalSolved}
          codechefCount={codechef.totalSolved}
        />

        <div className="min-w-0 flex-1 space-y-4">
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-600 dark:text-zinc-300">
            <span className="inline-flex items-center gap-1.5">
              <span className="size-2 rounded-full" style={{ backgroundColor: PLATFORM_COLORS.leetcode }} />
              LeetCode {leetcode.totalSolved}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="size-2 rounded-full" style={{ backgroundColor: PLATFORM_COLORS.codechef }} />
              CodeChef {codechef.totalSolved}
            </span>
          </div>

          {platforms.map((platform) => (
            <div key={platform.platform} className="text-sm">
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">{platform.platform}</p>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                Rating {platform.contestRating} · {platform.contestsAttended} contests
              </p>
              <a
                href={platform.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-orange-700 hover:underline dark:text-blue-300"
              >
                View profile <ArrowUpRight size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.aside>
  );
}

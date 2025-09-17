"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { SoftCard } from "@/components/primitives/SoftCard";
import { bouncePreset, pulsePreset } from "@/lib/motion/presets";
import { cn } from "@/lib/utils";

export interface MenuTileProps {
  title: string;
  icon: ReactNode;
  tagline: string;
  players: string;
  onSelect?: () => void;
}

export function MenuTile({
  title,
  icon,
  tagline,
  players,
  onSelect,
}: MenuTileProps) {
  return (
    <motion.button
      {...bouncePreset}
      type="button"
      onClick={onSelect}
      aria-label={["Play", title].join(" ")}
      className={cn(
        "group relative isolate w-64 rounded-3xl text-left outline-none",
        "focus-visible:ring-4 focus-visible:ring-[#ffb4d0]",
      )}
    >
      <SoftCard
        floating={false}
        className={cn(
          "relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-6 backdrop-blur",
          "dark:border-white/20 dark:bg-white/10",
        )}
      >
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffe598] to-[#ffaf5f] text-2xl">
            {icon}
          </div>
          <motion.span
            {...pulsePreset}
            className="rounded-full bg-[#ff8fb7]/15 px-3 py-1 text-xs font-semibold text-[#ff4f8a]"
          >
            {players}
          </motion.span>
        </div>
        <div className="mt-6 space-y-2">
          <h3 className="text-2xl font-extrabold tracking-tight text-[#241b54] dark:text-white">
            {title}
          </h3>
          <p className="text-sm font-medium text-[#544a8f] dark:text-white/70">
            {tagline}
          </p>
        </div>
        <div className="mt-6 flex items-center justify-between text-sm font-semibold text-[#ff4f8a]">
          <span>Start adventure</span>
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-1"
            aria-hidden
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-x-0 -bottom-1 h-16 rounded-b-3xl bg-gradient-to-t from-[#ff8fb7]/40 to-transparent"
        />
      </SoftCard>
    </motion.button>
  );
}

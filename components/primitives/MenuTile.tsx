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
  subtitle: string;
  onSelect?: () => void;
  active?: boolean;
}

export function MenuTile({
  title,
  icon,
  tagline,
  subtitle,
  onSelect,
  active = false,
}: MenuTileProps) {
  return (
    <motion.button
      {...bouncePreset}
      type="button"
      onClick={onSelect}
      aria-label={["Explore", title].join(" ")}
      aria-pressed={active}
      className={cn(
        "group relative isolate flex w-full max-w-xs flex-col rounded-[1.75rem] p-[2px] text-left transition-shadow",
        "focus-visible:ring-4 focus-visible:ring-offset-0 focus-visible:ring-[rgba(255,214,74,0.45)]",
        active
          ? "shadow-[0_25px_70px_-40px_rgba(255,204,76,0.85)]"
          : "shadow-[0_20px_65px_-45px_rgba(24,7,56,0.9)]",
      )}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-[1.75rem] opacity-0 transition-opacity duration-300",
          active
            ? "bg-[radial-gradient(circle,_rgba(255,214,74,0.32)_0%,_rgba(255,214,74,0)_70%)] opacity-100"
            : "group-hover:opacity-100 group-hover:bg-[radial-gradient(circle,_rgba(255,99,226,0.24)_0%,_rgba(255,99,226,0)_70%)]",
        )}
      />
      <SoftCard
        floating={false}
        className="relative z-10 flex h-full flex-col gap-6 rounded-[1.6rem] border-[rgba(132,97,210,0.35)] bg-[rgba(20,7,43,0.85)] p-6"
      >
        <div className="flex items-center justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,_rgba(255,214,74,0.25),_rgba(255,99,226,0.35))] text-3xl text-[#ffd54a]">
            {icon}
          </div>
          <motion.span
            {...pulsePreset}
            className="rounded-full bg-[rgba(106,90,255,0.18)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#d7c6ff]"
          >
            {subtitle}
          </motion.span>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-black text-white">{title}</h3>
          <p className="text-sm text-[#d5c7ff]/80">{tagline}</p>
        </div>
        <div className="mt-auto flex items-center justify-between text-sm font-semibold text-[#ffd54a]">
          <span>Launch</span>
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-1"
            aria-hidden
          />
        </div>
      </SoftCard>
    </motion.button>
  );
}

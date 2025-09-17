"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { bouncePreset } from "@/lib/motion/presets";
import { cn } from "@/lib/utils";

export interface InteractiveTileProps {
  children: ReactNode;
  onActivate?: () => void;
  className?: string;
  label: string;
}

export function InteractiveTile({
  children,
  onActivate,
  className,
  label,
}: InteractiveTileProps) {
  return (
    <motion.button
      {...bouncePreset}
      type="button"
      onClick={onActivate}
      className={cn(
        "relative flex w-full items-center justify-center rounded-3xl border border-white/50 bg-white/70 p-6",
        "text-left shadow-[0_18px_40px_-32px_rgba(40,28,98,0.55)] backdrop-blur",
        "focus-visible:ring-4 focus-visible:ring-[#94d0ff]",
        className,
      )}
    >
      <span className="sr-only">{label}</span>
      {children}
    </motion.button>
  );
}

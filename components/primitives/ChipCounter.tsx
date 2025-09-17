"use client";

import { Coins } from "lucide-react";

import { SoftCard } from "@/components/primitives/SoftCard";
import { cn } from "@/lib/utils";

export interface ChipCounterProps {
  amount: number;
  label?: string;
  className?: string;
}

export function ChipCounter({
  amount,
  label = "Chip balance",
  className,
}: ChipCounterProps) {
  return (
    <SoftCard
      floating={false}
      className={cn(
        "flex items-center gap-4 rounded-full border-white/70 bg-white/80 px-6 py-3",
        "dark:border-white/20 dark:bg-white/15",
        className,
      )}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#ffe598] to-[#ffaf5f] text-[#723a0f]">
        <Coins aria-hidden className="size-5" />
      </span>
      <div className="flex flex-col leading-none">
        <span className="text-xs font-semibold uppercase tracking-wide text-[#6a5dad] dark:text-white/70">
          {label}
        </span>
        <span className="text-2xl font-black text-[#271d64] dark:text-white">
          {amount.toLocaleString()}
        </span>
      </div>
    </SoftCard>
  );
}

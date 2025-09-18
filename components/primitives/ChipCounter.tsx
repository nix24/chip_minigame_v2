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
        "flex items-center gap-4 rounded-full border-[rgba(132,97,210,0.4)] bg-[rgba(22,8,44,0.82)] px-6 py-3 backdrop-blur-xl",
        className,
      )}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(145deg,_rgba(255,214,74,0.75),_rgba(255,99,226,0.55))] text-[#1d0d33] shadow-[0_12px_30px_-18px_rgba(255,214,74,0.8)]">
        <Coins aria-hidden className="size-5" />
      </span>
      <div className="flex flex-col leading-none">
        <span className="text-xs font-semibold uppercase tracking-wide text-[#d7c6ff]/80">
          {label}
        </span>
        <span className="text-2xl font-black text-white">
          {amount.toLocaleString()}
        </span>
      </div>
    </SoftCard>
  );
}

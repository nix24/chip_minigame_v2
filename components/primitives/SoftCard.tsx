"use client";

import { motion } from "framer-motion";
import type { ComponentProps } from "react";

import { Card } from "@/components/ui/card";
import { floatPreset } from "@/lib/motion/presets";
import { cn } from "@/lib/utils";

export type SoftCardProps = ComponentProps<typeof Card> & {
  floating?: boolean;
};

export function SoftCard({
  floating = true,
  className,
  ...props
}: SoftCardProps) {
  if (floating) {
    return (
      <motion.div {...floatPreset}>
        <Card
          className={cn(
            "border-[rgba(132,97,210,0.4)] bg-[rgba(22,8,44,0.7)] backdrop-blur-xl",
            "shadow-[0_35px_80px_-50px_rgba(26,6,43,0.95)]",
            className,
          )}
          {...props}
        />
      </motion.div>
    );
  }

  return (
    <Card
      className={cn(
        "border-[rgba(132,97,210,0.4)] bg-[rgba(22,8,44,0.7)] backdrop-blur-xl",
        "shadow-[0_35px_80px_-50px_rgba(26,6,43,0.95)]",
        className,
      )}
      {...props}
    />
  );
}

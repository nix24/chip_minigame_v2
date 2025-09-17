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
            "border-white/30 bg-white/80 dark:border-white/10 dark:bg-white/10",
            "shadow-[0_25px_55px_-35px_rgba(40,32,90,0.6)]",
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
        "border-white/30 bg-white/80 dark:border-white/10 dark:bg-white/10",
        "shadow-[0_25px_55px_-35px_rgba(40,32,90,0.6)]",
        className,
      )}
      {...props}
    />
  );
}

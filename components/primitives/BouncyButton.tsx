"use client";

import { motion } from "framer-motion";
import type { ComponentProps } from "react";

import { Button } from "@/components/ui/button";
import { bouncePreset } from "@/lib/motion/presets";
import { cn } from "@/lib/utils";

export type BouncyButtonProps = ComponentProps<typeof Button> & {
  glow?: boolean;
};

export function BouncyButton({
  glow = true,
  className,
  ...props
}: BouncyButtonProps) {
  return (
    <motion.div
      {...bouncePreset}
      className={cn(
        glow && "from-[#3a1b63]/70 via-transparent to-[#3a1b63]/70",
        glow &&
          "bg-[radial-gradient(circle,_rgba(255,214,74,0.35)_0%,_rgba(255,99,226,0.0)_65%)]",
        "rounded-full",
      )}
    >
      <Button className={className} {...props} />
    </motion.div>
  );
}

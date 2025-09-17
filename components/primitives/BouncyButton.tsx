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
        glow && "shadow-[0_18px_40px_-25px_rgba(255,82,128,0.9)]",
        "rounded-[1.5rem]",
      )}
    >
      <Button className={cn("px-10 py-6 text-xl", className)} {...props} />
    </motion.div>
  );
}

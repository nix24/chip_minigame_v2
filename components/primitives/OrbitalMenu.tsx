"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { useOrbitalMotion } from "@/hooks/useOrbitalMotion";
import { cn } from "@/lib/utils";

export interface OrbitalMenuItem {
  id: string;
  content: ReactNode;
  onSelect?: () => void;
}

export interface OrbitalMenuProps {
  items: OrbitalMenuItem[];
  radius?: number;
}

export function OrbitalMenu({ items, radius = 220 }: OrbitalMenuProps) {
  const getOrbitalMotion = useOrbitalMotion({ total: items.length, radius });

  return (
    <ul
      className="relative mx-auto grid h-[420px] w-[420px] place-items-center"
      aria-label="Game selection"
    >
      {items.map((item, index) => {
        const orbital = getOrbitalMotion(index);
        return (
          <motion.li
            key={item.id}
            {...orbital}
            className="absolute flex items-center justify-center"
          >
            <button
              type="button"
              onClick={item.onSelect}
              className={cn(
                "flex h-28 w-28 items-center justify-center rounded-full border border-white/60 bg-white/80",
                "shadow-[0_25px_55px_-35px_rgba(40,32,90,0.6)] backdrop-blur",
                "focus-visible:ring-4 focus-visible:ring-[#94d0ff]",
              )}
              aria-label={["Select", item.id].join(" ")}
            >
              {item.content}
            </button>
          </motion.li>
        );
      })}
    </ul>
  );
}

import type { MotionProps } from "framer-motion";
import { useMemo } from "react";

import { orbitalPreset } from "@/lib/motion/presets";

type OrbitOptions = {
  total: number;
  radius?: number;
  elevation?: number;
};

type OrbitalConfig = MotionProps & { style: Record<string, string | number> };

export function useOrbitalMotion({
  total,
  radius = 220,
  elevation = 12,
}: OrbitOptions) {
  return useMemo(() => {
    return (index: number): OrbitalConfig => {
      const transformOrigin = ["0px", radius.toString().concat("px")].join(" ");
      const translateY = "-".concat(radius.toString(), "px");
      const filter = [
        "drop-shadow(0 ",
        elevation.toString(),
        "px ",
        (elevation * 2).toString(),
        "px rgba(32, 23, 82, 0.35))",
      ].join("");

      if (total <= 0) {
        return {
          ...orbitalPreset,
          style: {
            transformOrigin,
            rotate: 0,
            translateY,
            zIndex: 1,
            filter,
          },
        };
      }

      const rotate = (360 / total) * index;

      return {
        ...orbitalPreset,
        style: {
          transformOrigin,
          rotate,
          translateY,
          zIndex: total - index,
          filter,
        },
      };
    };
  }, [elevation, radius, total]);
}

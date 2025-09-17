import type { MotionProps } from "framer-motion";
import { motionTokens } from "@/lib/theme/tokens";

export const bouncePreset: MotionProps = {
  whileHover: {
    scale: 1.05,
  },
  whileTap: {
    scale: 0.94,
  },
  transition: {
    type: "spring",
    stiffness: motionTokens.bounce.stiffness,
    damping: motionTokens.bounce.damping,
    mass: motionTokens.bounce.mass,
  },
};

export const pulsePreset: MotionProps = {
  animate: {
    scale: [1, 1.04, 1],
  },
  transition: {
    duration: motionTokens.pulse.duration,
    repeat: motionTokens.pulse.repeat,
    repeatType: motionTokens.pulse.repeatType,
  },
};

export const orbitalPreset: MotionProps = {
  animate: {
    rotate: 360,
  },
  transition: {
    duration: motionTokens.orbit.duration,
    ease: motionTokens.orbit.ease,
    repeat: Infinity,
    repeatType: "loop",
  },
};

export const floatPreset: MotionProps = {
  animate: {
    y: [0, -10, 0],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

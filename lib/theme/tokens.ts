export const colorTokens = {
  primary: {
    base: "oklch(0.72 0.21 26.4)",
    hover: "oklch(0.68 0.18 27.3)",
    active: "oklch(0.62 0.16 28.1)",
    foreground: "oklch(0.97 0.03 25.2)",
  },
  accent: {
    base: "oklch(0.81 0.24 330.2)",
    hover: "oklch(0.78 0.26 331.1)",
    active: "oklch(0.73 0.28 331.6)",
    foreground: "oklch(0.99 0.02 337.5)",
  },
  surface: {
    soft: "oklch(0.99 0.02 95)",
    glow: "oklch(0.94 0.09 65)",
    shadow: "oklch(0.4 0.05 260) / 20%",
  },
  success: {
    base: "oklch(0.79 0.18 150)",
    foreground: "oklch(0.98 0.03 150)",
  },
  warning: {
    base: "oklch(0.82 0.21 80)",
    foreground: "oklch(0.15 0.03 80)",
  },
};

export const motionTokens = {
  bounce: {
    stiffness: 420,
    damping: 18,
    mass: 1,
  },
  pulse: {
    duration: 0.8,
    repeat: Infinity,
    repeatType: "reverse" as const,
  },
  orbit: {
    duration: 18,
    ease: [0.6, 0.08, 0.22, 1] as const,
  },
};

export const shadowTokens = {
  soft: "0 18px 35px -20px rgba(32, 23, 82, 0.55)",
  hover: "0 22px 40px -18px rgba(52, 35, 112, 0.6)",
  inset: "inset 0 0 0 1px rgba(255, 255, 255, 0.35)",
};

export const radiusTokens = {
  pill: "9999px",
  xl: "1.75rem",
  lg: "1.25rem",
  md: "0.95rem",
};

export const motionDurations = {
  fast: 0.18,
  medium: 0.28,
  slow: 0.45,
};

export const colorTokens = {
  primary: {
    base: "#ffd54a",
    hover: "#ffec8b",
    active: "#f3b93c",
    foreground: "#1f1030",
  },
  accent: {
    base: "#ff63e2",
    hover: "#ff8ef0",
    active: "#f23ccc",
    foreground: "#20061f",
  },
  surface: {
    soft: "rgba(28, 8, 48, 0.65)",
    glow: "rgba(255, 214, 74, 0.08)",
    highlight: "rgba(112, 90, 255, 0.32)",
  },
  neutral: {
    outline: "rgba(132, 97, 210, 0.45)",
    subtle: "rgba(67, 40, 126, 0.22)",
  },
};

export const motionTokens = {
  bounce: {
    stiffness: 360,
    damping: 20,
    mass: 0.9,
  },
  pulse: {
    duration: 1,
    repeat: Infinity,
    repeatType: "reverse" as const,
  },
  orbit: {
    duration: 16,
    ease: [0.65, 0.1, 0.22, 1] as const,
  },
};

export const shadowTokens = {
  soft: "0 24px 60px -35px rgba(34, 12, 68, 0.75)",
  hover: "0 26px 70px -30px rgba(240, 112, 255, 0.55)",
  focus: "0 0 0 3px rgba(255, 214, 74, 0.45)",
};

export const radiusTokens = {
  pill: "9999px",
  xl: "2rem",
  lg: "1.5rem",
  md: "1rem",
};

export const motionDurations = {
  fast: 0.16,
  medium: 0.32,
  slow: 0.6,
};

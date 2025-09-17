import { colorTokens, radiusTokens, shadowTokens } from "@/lib/theme/tokens";

export const chipTheme = {
  colors: colorTokens,
  radii: radiusTokens,
  shadows: shadowTokens,
};

export type ChipTheme = typeof chipTheme;

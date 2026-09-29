export const nogupTokens = {
  colorScheme: "dark",
  bg: "#0b1220",
  bgElevated: "#111827",
  card: "#162032",
  border: "rgba(148, 163, 184, 0.16)",
  text: "#f8fafc",
  muted: "#94a3b8",
  accent: "#f97316",
  accentStrong: "#ea580c",
  accentSoft: "#fdba74",
  success: "#22c55e",
  warn: "#fbbf24",
  danger: "#f87171",
  info: "#3b82f6",
  shadow: "0 18px 50px rgba(0, 0, 0, 0.35)",
  radiusSm: "8px",
  radiusMd: "12px",
  radiusLg: "16px",
  radiusXl: "20px",
  shellMaxWidth: "720px",
} as const;

export type NogupTokens = typeof nogupTokens;

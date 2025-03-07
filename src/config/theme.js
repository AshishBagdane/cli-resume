import gradient from "gradient-string";

// Enhanced cyberpunk color scheme with matte finish
export const colors = {
  electricBlue: "#0ff0fc",
  neonPink: "#ff2a6d",
  neonPurple: "#d300c5",
  matteBlack: "#121212",
  cyborgGreen: "#05ffa1",
  neonYellow: "#fffb96",
  deepPurple: "#2d00f7",
};

// Create custom gradients
export const gradients = {
  cyberpunk: gradient(colors.electricBlue, colors.neonPink, colors.neonPurple),
  header: gradient(colors.electricBlue, colors.deepPurple),
  subHeader: gradient(colors.cyborgGreen, colors.electricBlue),
};

// Unicode icons for cyberpunk aesthetic
export const icons = {
  contact: "✧",
  email: "✉",
  phone: "☏",
  web: "⌘",
  linkedin: "⚯",
  skill: "⚡",
  job: "⟡",
  edu: "✵",
  cert: "⎔",
  award: "★",
  bullet: "▻",
};

// ASCII Border Characters for cyberpunk aesthetic
export const borders = {
  topLeft: "┏",
  topRight: "┓",
  bottomLeft: "┗",
  bottomRight: "┛",
  horizontal: "━",
  vertical: "┃",
  cross: "╋",
};

// Boot sequence messages
export const bootMessages = [
  { text: "Initializing neural interface...", duration: 800 },
  { text: "Establishing quantum connection...", duration: 600 },
  { text: "Decrypting identity matrix...", duration: 700 },
  { text: "Loading cybernetic profiles...", duration: 500 },
  { text: "Bypassing security protocols...", duration: 900 },
  { text: "Rendering holographic display...", duration: 600 },
];

// Animation speed multipliers (used with CLI options)
export const speeds = {
  normal: 1,
  fast: 0.5, // Half the normal duration
  minimal: 0.2, // Even faster for minimal mode
};

export default {
  colors,
  gradients,
  icons,
  borders,
  bootMessages,
  speeds,
};

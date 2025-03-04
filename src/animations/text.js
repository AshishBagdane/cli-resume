import chalk from "chalk";
import figlet from "figlet";
import ora from "ora";
import cliSpinners from "cli-spinners";
import { gradients, colors, icons } from "../config/theme.js";
import {
  sleep,
  centerText,
  getTerminalSize,
  getAnimationDuration,
} from "../utils/helpers.js";

/**
 * Creates a typewriter effect for regular text
 * @param {string} text - Text to animate
 * @param {Function} color - Chalk color function
 * @param {number} speed - Animation speed in ms
 * @param {number} indent - Left indentation
 * @param {Object} options - Animation options
 * @returns {Promise<void>}
 */
export const typewriter = async (
  text,
  color,
  speed = 30,
  indent = 0,
  options = {}
) => {
  // Skip animation if in minimal mode
  if (options.minimal) {
    process.stdout.cursorTo(indent);
    process.stdout.write(color(text));
    console.log();
    return;
  }

  // Adjust speed based on options
  const adjustedSpeed = options.fast ? speed / 2 : speed;

  for (let i = 0; i <= text.length; i++) {
    process.stdout.clearLine();
    process.stdout.cursorTo(indent);
    process.stdout.write(color(text.substring(0, i)));
    await sleep(adjustedSpeed);
  }
  console.log();
};

/**
 * Creates a typewriter effect for figlet text
 * @param {string} text - Text to animate
 * @param {string} font - Figlet font
 * @param {Object} options - Animation options
 * @returns {Promise<void>}
 */
export const typewriterName = async (
  text,
  font = "ANSI Shadow",
  options = {}
) => {
  const { rows, columns } = getTerminalSize();
  const speedMultiplier = options.minimal ? 0.1 : options.fast ? 0.5 : 1;

  // Get the figlet text
  const figletText = figlet.textSync(text, {
    font: font,
    horizontalLayout: "fitted",
  });

  const finalLines = figletText.split("\n");

  // Center the lines on the screen
  const centeredFinalLines = finalLines.map((line) =>
    centerText(line, columns)
  );

  // Calculate vertical centering
  const topPadding = Math.max(0, Math.floor(rows / 2 - finalLines.length / 2));

  // For minimal mode, just display the final result
  if (options.minimal) {
    console.log("\n".repeat(topPadding));
    for (const line of centeredFinalLines) {
      console.log(gradients.header(line));
    }
    return;
  }

  console.log("\n".repeat(topPadding));

  // First display the outline with electric blue
  for (const line of centeredFinalLines) {
    console.log(chalk.hex(colors.electricBlue).dim(line));
  }

  await sleep(getAnimationDuration(500, speedMultiplier));
  console.clear();
  console.log("\n".repeat(topPadding));

  // Fast mode: skip intermediate steps
  if (options.fast) {
    for (const line of centeredFinalLines) {
      console.log(gradients.header(line));
    }
    await sleep(250);
    return;
  }

  // Now smoothly fill in with gradient
  for (let i = 0; i < centeredFinalLines.length; i++) {
    for (let j = 0; j < i; j++) {
      console.log(gradients.header(centeredFinalLines[j]));
    }

    // Current line being typed
    console.log(chalk.hex(colors.electricBlue)(centeredFinalLines[i]));

    // Remaining lines dimmed
    for (let j = i + 1; j < centeredFinalLines.length; j++) {
      console.log(chalk.hex(colors.electricBlue).dim(centeredFinalLines[j]));
    }

    await sleep(150);
    console.clear();
    console.log("\n".repeat(topPadding));
  }

  // Final reveal with all lines in gradient
  for (const line of centeredFinalLines) {
    console.log(gradients.header(line));
  }

  await sleep(getAnimationDuration(500, speedMultiplier));
};

/**
 * Creates a glitch text effect
 * @param {string} text - Text to glitch
 * @param {string} primaryColor - Main color hex
 * @param {Array<string>} glitchColors - Array of glitch color hexes
 * @returns {string} - Glitched text string
 */
export const glitchText = (text, primaryColor, glitchColors) => {
  return text
    .split("")
    .map((char) => {
      const rand = Math.random();
      if (rand < 0.1) return chalk.hex(glitchColors[0])(char);
      if (rand < 0.2) return chalk.hex(glitchColors[1])(char);
      if (rand < 0.25) return chalk.hex(glitchColors[0]).dim(char);
      return chalk.hex(primaryColor)(char);
    })
    .join("");
};

/**
 * Creates an animated divider
 * @param {string} char - Character to use for divider
 * @param {number} length - Length of divider
 * @param {string} color - Color hex
 * @param {Object} options - Animation options
 * @returns {Promise<void>}
 */
export const animateDivider = async (
  char = "━",
  length = process.stdout.columns - 20,
  color = colors.electricBlue,
  options = {}
) => {
  // For minimal mode, just display the final divider
  if (options.minimal) {
    console.log(chalk.hex(color)(char.repeat(length)));
    return;
  }

  // Adjust speed based on options
  const speedMultiplier = options.fast ? 0.25 : 1;
  const stepDelay = getAnimationDuration(5, speedMultiplier);

  // For fast mode, use larger steps
  const step = options.fast ? 5 : 1;

  for (let i = 0; i <= length; i += step) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(chalk.hex(color)(char.repeat(i)));
    await sleep(stepDelay);
  }
  console.log();
};

/**
 * Creates a section header with fade-in effect
 * @param {string} title - Section title
 * @param {string} icon - Icon to use
 * @param {Object} options - Animation options
 * @returns {Promise<void>}
 */
export const sectionFadeIn = async (title, icon, options = {}) => {
  // For minimal mode, just display the header
  if (options.minimal) {
    console.log();
    console.log(`${icon}  ${title}  ${icon}`);
    console.log();
    return;
  }

  const spinner = ora({
    text: chalk.dim(`Loading ${title.toLowerCase().replace(/_/g, " ")}...`),
    color: "cyan",
    spinner: cliSpinners.triangle,
  }).start();

  await sleep(getAnimationDuration(600, options.fast ? 0.5 : 1));
  spinner.stop();

  // Create a glowing effect for the section header
  console.log(); // Extra space for better visual separation

  // Animate the section header character by character
  const header = `${icon}  ${title}  ${icon}`;
  await typewriter(header, gradients.subHeader, 20, 0, options);
  console.log(); // Add space after the header
};

export default {
  typewriter,
  typewriterName,
  glitchText,
  animateDivider,
  sectionFadeIn,
};

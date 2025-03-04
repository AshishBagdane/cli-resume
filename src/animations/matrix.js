import chalk from "chalk";
import { colors } from "../config/theme.js";
import {
  sleep,
  getTerminalSize,
  getAnimationDuration,
} from "../utils/helpers.js";

/**
 * Creates a Matrix-style rain animation
 * @param {number} duration - Duration in milliseconds
 * @param {Object} options - Animation options
 * @returns {Promise<void>}
 */
export const matrixRain = async (duration = 2000, options = {}) => {
  // Skip animation if specified in options
  if (options.minimal || options.noMatrix) {
    return;
  }

  // Adjust duration based on speed setting
  const speedMultiplier = options.fast ? 0.5 : 1;
  const adjustedDuration = Math.floor(duration * speedMultiplier);

  const { columns, rows } = getTerminalSize();

  const chars =
    "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン";
  const columnsState = Array(columns)
    .fill(0)
    .map(() => Math.floor(Math.random() * 40));

  const startTime = Date.now();

  while (Date.now() - startTime < adjustedDuration) {
    let output = "";
    for (let i = 0; i < rows - 5; i++) {
      let line = "";
      for (let j = 0; j < columns; j++) {
        // Only draw characters in some columns based on their "position"
        if (i >= columnsState[j]) {
          // Characters closer to the leading edge are brighter
          const char = chars[Math.floor(Math.random() * chars.length)];
          if (i === columnsState[j]) {
            line += chalk.hex(colors.electricBlue).bold(char);
          } else if (i === columnsState[j] - 1) {
            line += chalk.hex(colors.electricBlue)(char);
          } else if (i < columnsState[j] + 3) {
            line += chalk.hex(colors.deepPurple)(char);
          } else {
            // Fade out older characters
            const fadeRatio = Math.max(0, 1 - (i - columnsState[j]) / 15);
            if (Math.random() < fadeRatio) {
              line += chalk.hex(colors.deepPurple).dim(char);
            } else {
              line += " ";
            }
          }
        } else {
          line += " ";
        }
      }
      output += line + "\n";
    }
    console.clear();
    process.stdout.write(output);

    // Update the "rain" position
    for (let j = 0; j < columnsState.length; j++) {
      if (Math.random() < 0.05) {
        columnsState[j]++;
      }
    }

    // Adjust sleep time based on speed
    await sleep(options.fast ? 25 : 50);
  }
  console.clear();
};

/**
 * Final matrix-style effect for footer
 * @param {Object} options - Animation options
 * @returns {Promise<void>}
 */
export const matrixFooterEffect = async (options = {}) => {
  if (options.minimal) {
    return;
  }

  const binaryLine = "01010101 SYSTEM READY 10101010";
  const speedMultiplier = options.fast ? 0.5 : 1;

  let iterations = options.fast ? 3 : 5;
  while (iterations--) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);

    const glitchedBinary = binaryLine
      .split("")
      .map((c) => (Math.random() > 0.7 ? " " : c))
      .join("");

    const coloredBinary = glitchedBinary
      .split("")
      .map((c) => {
        if (c === "0") return chalk.hex(colors.electricBlue).dim(c);
        if (c === "1") return chalk.hex(colors.neonPink)(c);
        return chalk.dim(c);
      })
      .join("");

    process.stdout.write(coloredBinary);
    await sleep(getAnimationDuration(200, speedMultiplier));
  }

  console.log("\n");
};

export default {
  matrixRain,
  matrixFooterEffect,
};

// Before Edit

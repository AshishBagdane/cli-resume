import termSize from "term-size";

/**
 * Pauses execution for the specified time
 * @param {number} ms - Milliseconds to sleep
 * @returns {Promise} - Promise that resolves after the specified time
 */
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Gets the current terminal dimensions
 * @returns {Object} - Object with columns and rows properties
 */
export const getTerminalSize = () => termSize();

/**
 * Centers text horizontally in the terminal
 * @param {string} text - Text to center
 * @param {number} width - Width to center within (defaults to terminal width)
 * @returns {string} - Centered text
 */
export const centerText = (text, width = getTerminalSize().columns) => {
  const padding = Math.max(0, Math.floor((width - text.length) / 2));
  return " ".repeat(padding) + text;
};

/**
 * Strips ANSI color codes for accurate length calculations
 * @param {string} str - String potentially containing ANSI codes
 * @returns {string} - Clean string without ANSI codes
 */
export const stripAnsi = (str) => {
  return str.replace(/\u001b\[.*?m/g, "");
};

/**
 * Calculates the adjusted animation duration based on speed settings
 * @param {number} baseDuration - Base duration in milliseconds
 * @param {number} speedMultiplier - Speed multiplier (1 for normal, less for faster)
 * @returns {number} - Adjusted duration
 */
export const getAnimationDuration = (baseDuration, speedMultiplier = 1) => {
  return Math.max(1, Math.floor(baseDuration * speedMultiplier));
};

/**
 * Waits for any key press
 * @param {string} message - Optional message to display
 * @returns {Promise} - Resolves when a key is pressed
 */
export const waitForKeypress = (message = "Press any key to exit") => {
  return new Promise((resolve) => {
    console.log(message);
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.once("data", () => {
      process.stdin.setRawMode(false);
      process.stdin.pause();
      resolve();
    });
  });
};

export default {
  sleep,
  getTerminalSize,
  centerText,
  stripAnsi,
  getAnimationDuration,
  waitForKeypress,
};

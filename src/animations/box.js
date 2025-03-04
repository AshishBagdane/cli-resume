import boxen from "boxen";
import {
  sleep,
  stripAnsi,
  getTerminalSize,
  getAnimationDuration,
} from "../utils/helpers.js";

/**
 * Creates an animated box with proper terminal centering
 * @param {string} content - Content to display in the box
 * @param {Object} options - Boxen options
 * @param {boolean} centered - Whether to center the box
 * @param {Object} animOptions - Animation options
 * @returns {Promise<void>}
 */
/**
 * Creates an animated box with proper terminal centering
 * @param {string} content - Content to display in the box
 * @param {Object} options - Boxen options
 * @param {boolean} centered - Whether to center the box
 * @param {Object} animOptions - Animation options
 * @returns {Promise<void>}
 */
export const animateBox = async (
  content,
  options,
  centered = true,
  animOptions = {}
) => {
  const { columns } = getTerminalSize();
  const speedMultiplier = animOptions.minimal ? 0 : animOptions.fast ? 0.5 : 1;

  if (centered) {
    // Use boxen to generate the box first
    const boxString = boxen(content, {
      ...options,
      textAlignment: "center",
    });

    // Split into lines to determine actual box width
    const lines = boxString.split("\n");

    // Find the maximum line length to account for varying content widths
    // If width is explicitly set in options, use that instead
    const boxWidth =
      options.width ||
      lines.reduce((max, line) => Math.max(max, stripAnsi(line).length), 0);

    // Calculate the left padding needed to center the box
    // Use Math.floor for both calculations to ensure symmetrical spacing
    const leftPadding = Math.floor((columns - boxWidth) / 2);

    // Debug info for development
    if (animOptions.dev) {
      console.log(
        `Box width: ${boxWidth}, Terminal width: ${columns}, Left padding: ${leftPadding}, Right padding: ${
          columns - boxWidth - leftPadding
        }`
      );
    }

    // For minimal mode, display all at once
    if (animOptions.minimal) {
      for (const line of lines) {
        process.stdout.cursorTo(leftPadding);
        console.log(line);
      }
      return;
    }

    // Display each line at the calculated position with animation
    for (const line of lines) {
      process.stdout.cursorTo(leftPadding);
      console.log(line);
      await sleep(getAnimationDuration(30, speedMultiplier));
    }
  } else {
    // Non-centered boxes are just rendered normally
    const boxString = boxen(content, options);
    const lines = boxString.split("\n");

    // For minimal mode, display all at once
    if (animOptions.minimal) {
      console.log(boxString);
      return;
    }

    for (const line of lines) {
      console.log(line);
      await sleep(getAnimationDuration(30, speedMultiplier));
    }
  }
};

export default animateBox;

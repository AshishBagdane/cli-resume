import chalk from "chalk";
import { resumeData } from "../config/resumeData.js";
import { colors, gradients, borders } from "../config/theme.js";
import { typewriterName, animateBox } from "../animations/index.js";
import { getTerminalSize } from "../utils/helpers.js";

/**
 * Renders the header section with name and title
 * @param {Object} options - Animation options
 * @returns {Promise<void>}
 */
export const renderHeader = async (options = {}) => {
  // Render name with typewriter effect
  await typewriterName(resumeData.name, "ANSI Shadow", options);

  // Create a pause before showing the title
  await new Promise((resolve) =>
    setTimeout(resolve, options.minimal ? 100 : 600)
  );

  // Animated title box (centered)
  const titleContent =
    chalk.bold(gradients.cyberpunk(resumeData.title)) +
    "\n" +
    chalk.hex(colors.electricBlue)(resumeData.location);

  // Force a literal centering approach by using boxen directly
  const boxen = (await import("boxen")).default;
  const boxContent = boxen(titleContent, {
    padding: 1,
    margin: { top: 1, bottom: 2 },
    borderStyle: {
      topLeft: borders.topLeft,
      topRight: borders.topRight,
      bottomLeft: borders.bottomLeft,
      bottomRight: borders.bottomRight,
      horizontal: borders.horizontal,
      vertical: borders.vertical,
    },
    borderColor: colors.electricBlue,
    backgroundColor: colors.matteBlack,
    textAlignment: "center",
  });

  // Get terminal dimensions and manually center the output
  const { columns } = getTerminalSize();
  const lines = boxContent.split("\n");
  const maxLineLength = Math.max(
    ...lines.map((line) => line.replace(/\u001b\[.*?m/g, "").length)
  );
  const leftPadding = Math.floor((columns - maxLineLength) / 2);

  // Manually display the centered box
  if (options.minimal) {
    // Display without animation
    lines.forEach((line) => {
      process.stdout.cursorTo(leftPadding);
      console.log(line);
    });
  } else {
    // Display with animation
    for (const line of lines) {
      process.stdout.cursorTo(leftPadding);
      console.log(line);

      // Sleep only if we're not in minimal or fast mode
      if (!options.minimal && !options.fast) {
        await new Promise((resolve) => setTimeout(resolve, 30));
      }
    }
  }
};

export default renderHeader;

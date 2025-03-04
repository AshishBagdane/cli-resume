import chalk from "chalk";
import { resumeData } from "../config/resumeData.js";
import { colors, icons } from "../config/theme.js";
import { sectionFadeIn, typewriter } from "../animations/index.js";

/**
 * Renders the profile summary section
 * @param {Object} options - Animation options
 * @returns {Promise<void>}
 */
export const renderProfile = async (options = {}) => {
  // Profile summary with animated reveal
  await sectionFadeIn("PROFILE_SCAN", icons.skill, options);

  // If in minimal mode, just display the full summary at once
  if (options.minimal) {
    console.log(chalk.hex(colors.cyborgGreen)(resumeData.summary));
    return;
  }

  // Split summary into sentences and display with typewriter effect
  const summaryLines = resumeData.summary.split(". ");
  for (const [index, line] of summaryLines.entries()) {
    const formattedLine = line + (line.endsWith(".") ? "" : ".");
    await typewriter(
      formattedLine,
      chalk.hex(colors.cyborgGreen),
      10,
      0, // Left align
      options
    );
  }
};

export default renderProfile;

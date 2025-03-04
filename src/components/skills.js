import chalk from "chalk";
import { resumeData } from "../config/resumeData.js";
import { colors, icons } from "../config/theme.js";
import { sectionFadeIn, typewriter } from "../animations/index.js";

/**
 * Renders the technical skills section
 * @param {Object} options - Animation options
 * @returns {Promise<void>}
 */
export const renderSkills = async (options = {}) => {
  // Technical skills matrix with animated reveal
  await sectionFadeIn("TECH_MATRIX", icons.skill, options);

  for (const area of resumeData.expertise) {
    // Display category header
    await typewriter(
      `${icons.skill} ${area.category}:`,
      chalk.hex(colors.neonPink).bold,
      20,
      0, // Left align
      options
    );

    // Create skills line with alternating colors
    const skillsArray = area.skills.map((skill, index) => {
      return index % 2 === 0
        ? chalk.hex(colors.electricBlue)(skill)
        : chalk.hex(colors.cyborgGreen)(skill);
    });

    const skillsText = skillsArray.join(chalk.hex(colors.neonPurple)(" • "));

    // Display skills
    await typewriter(
      "   " + skillsText,
      (text) => text,
      15,
      0, // Left align
      options
    );

    console.log(); // Add space after skills
  }
};

export default renderSkills;

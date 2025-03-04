import chalk from "chalk";
import { resumeData } from "../config/resumeData.js";
import { colors, icons, borders } from "../config/theme.js";
import { sectionFadeIn, typewriter } from "../animations/index.js";

/**
 * Renders the education section
 * @param {Object} options - Animation options
 * @returns {Promise<void>}
 */
export const renderEducation = async (options = {}) => {
  // Education data with animated reveal
  await sectionFadeIn("NEURAL_TRAINING", icons.edu, options);

  for (const edu of resumeData.education) {
    // Degree with typewriter effect
    await typewriter(
      `${icons.edu} ${edu.degree}`,
      chalk.hex(colors.neonYellow).bold,
      20,
      0, // Left align
      options
    );

    // Connecting line (skip if in minimal mode)
    if (!options.minimal) {
      console.log(chalk.hex(colors.deepPurple)(`   ${borders.vertical}`));
    }

    // Institution info
    await typewriter(
      `   ${icons.bullet} ${edu.institution} [${edu.year}]`,
      chalk.hex("#ffffff"),
      15,
      0, // Left align
      options
    );

    console.log(); // Add space between education entries
  }

  // Certifications header
  await typewriter(
    `${icons.cert} Certifications:`,
    chalk.hex(colors.neonPink).bold,
    20,
    0, // Left align
    options
  );

  // Certification items
  for (const cert of resumeData.certifications) {
    await typewriter(
      `   ${icons.bullet} ${cert}`,
      chalk.hex("#ffffff"),
      15,
      0, // Left align
      options
    );
  }

  console.log(); // Add space between sections

  // Achievements header
  await typewriter(
    `${icons.award} Achievements:`,
    chalk.hex(colors.neonPink).bold,
    20,
    0, // Left align
    options
  );

  // Achievement items
  for (const achievement of resumeData.achievements) {
    await typewriter(
      `   ${icons.bullet} ${achievement}`,
      chalk.hex("#ffffff"),
      15,
      0, // Left align
      options
    );
  }
};

export default renderEducation;

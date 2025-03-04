import chalk from "chalk";
import { resumeData } from "../config/resumeData.js";
import { colors, icons, borders } from "../config/theme.js";
import { sectionFadeIn, typewriter } from "../animations/index.js";

/**
 * Renders the work experience section
 * @param {Object} options - Animation options
 * @returns {Promise<void>}
 */
export const renderExperience = async (options = {}) => {
  // Experience log with animated reveal
  await sectionFadeIn("EXPERIENCE_LOG", icons.job, options);

  for (const job of resumeData.experience) {
    // Job title with typewriter effect
    const jobTitle = `${icons.job} ${chalk
      .hex(colors.neonYellow)
      .bold(job.role)}${chalk.hex(colors.neonPurple)(
      ` @${job.company} `
    )}${chalk.dim(`[${job.period}]`)}`;

    await typewriter(jobTitle, (text) => text, 20, 0, options);

    // Connecting line (skip if in minimal mode)
    if (!options.minimal) {
      console.log(chalk.hex(colors.deepPurple)(`   ${borders.vertical}`));
    }

    // Highlight lines
    for (const highlight of job.highlights) {
      await typewriter(
        `   ${icons.bullet} ${highlight}`,
        chalk.hex("#ffffff"),
        10,
        0, // Left align
        options
      );
    }

    console.log(); // Add space between jobs
  }
};

export default renderExperience;

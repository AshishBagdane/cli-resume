import chalk from "chalk";
import { runBootAnimation, matrixRain } from "./animations/index.js";
import {
  renderHeader,
  renderContact,
  renderProfile,
  renderSkills,
  renderExperience,
  renderEducation,
  renderFooter,
} from "./components/index.js";

/**
 * Main function to run the resume application
 * @param {Object} options - Command line options
 * @returns {Promise<void>}
 */
export const runResume = async (options = {}) => {
  try {
    // Clear terminal for cleaner output
    console.clear();

    // Log debug info in dev mode
    if (options.dev) {
      console.log(chalk.bgBlue.white(" DEV MODE "));
      console.log("Options:", options);
      console.log("-------------------");
    }

    // Boot animation
    await runBootAnimation(options);

    // Clear terminal again after boot animation
    console.clear();

    // Matrix rain effect (skippable with --noMatrix option)
    await matrixRain(options.fast ? 1000 : 2000, options);

    // Header with name and title
    await renderHeader(options);

    // Contact information
    await renderContact(options);

    // Profile summary
    await renderProfile(options);

    // Technical skills
    await renderSkills(options);

    // Work experience
    await renderExperience(options);

    // Education, certifications and achievements
    await renderEducation(options);

    // Footer with exit prompt
    await renderFooter(options);
  } catch (error) {
    console.error(chalk.red("An error occurred while rendering the resume:"));
    console.error(error);

    if (options.dev) {
      console.error(chalk.yellow("Stack trace:"));
      console.error(error.stack);
    }

    process.exit(1);
  }
};

export default runResume;

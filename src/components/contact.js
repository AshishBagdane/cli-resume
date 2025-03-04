import chalk from "chalk";
import { resumeData } from "../config/resumeData.js";
import { colors, icons } from "../config/theme.js";
import { sectionFadeIn, typewriter } from "../animations/index.js";

/**
 * Renders the contact information section
 * @param {Object} options - Animation options
 * @returns {Promise<void>}
 */
export const renderContact = async (options = {}) => {
  // Contact information with animated reveal
  await sectionFadeIn("CONTACT_MATRIX", icons.contact, options);

  // Display LinkedIn with typewriter effect
  await typewriter(
    `${icons.linkedin} ${chalk.hex(colors.neonYellow)("SOCIAL.LINK:")} ${
      resumeData.contact.linkedin
    }`,
    chalk.hex(colors.electricBlue),
    15,
    0, // Left align
    options
  );

  // Display portfolio with typewriter effect
  await typewriter(
    `${icons.web} ${chalk.hex(colors.neonYellow)("PERSONAL.NODE:")} ${
      resumeData.contact.portfolio
    }`,
    chalk.hex(colors.electricBlue),
    15,
    0, // Left align
    options
  );
};

export default renderContact;

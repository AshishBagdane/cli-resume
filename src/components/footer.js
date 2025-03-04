import { colors, borders } from "../config/theme.js";
import { animateDivider, animateBox, glitchText } from "../animations/index.js";
import { matrixFooterEffect } from "../animations/matrix.js";
import { waitForKeypress } from "../utils/helpers.js";

/**
 * Renders the footer section
 * @param {Object} options - Animation options
 * @returns {Promise<void>}
 */
export const renderFooter = async (options = {}) => {
  // Animated divider before footer
  await new Promise((resolve) =>
    setTimeout(resolve, options.minimal ? 100 : 300)
  );
  await animateDivider(
    "━",
    process.stdout.columns - 20,
    colors.electricBlue,
    options
  );

  // Footer box with glitch effect
  const footerText =
    "【 READY FOR NEXT MISSION? INITIATE CONNECTION SEQUENCE 】";

  // Final footer reveal with centered box
  await animateBox(
    glitchText(footerText, colors.electricBlue, [
      colors.neonPink,
      colors.neonPurple,
    ]),
    {
      padding: 1,
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
      textAlignment: "center", // Ensure text is centered within the box
    },
    true, // Center the box
    options
  );

  // Final matrix-style effect
  await matrixFooterEffect(options);

  // Add a "press any key to exit" prompt
  return waitForKeypress(
    options.minimal ? "Press any key to exit" : "[ Press any key to exit ]"
  );
};

export default renderFooter;

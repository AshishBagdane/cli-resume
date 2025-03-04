import chalk from "chalk";
import ora from "ora";
import cliSpinners from "cli-spinners";
import { bootMessages } from "../config/theme.js";
import { colors } from "../config/theme.js";
import { sleep, getAnimationDuration } from "../utils/helpers.js";

/**
 * Runs the initial boot animation sequence
 * @param {Object} options - Animation options
 * @returns {Promise<void>}
 */
export const runBootAnimation = async (options = {}) => {
  // Skip animation if in minimal mode
  if (options.minimal) {
    console.log(chalk.hex(colors.cyborgGreen)("✓ System initialized"));
    return;
  }

  const speedMultiplier = options.fast ? 0.5 : 1;

  const bootSpinner = ora({
    text: bootMessages[0].text,
    color: "cyan",
    spinner: cliSpinners.dots12,
  }).start();

  for (const [index, message] of bootMessages.entries()) {
    bootSpinner.text = message.text;

    // Adjusted duration based on speed settings
    const duration = getAnimationDuration(message.duration, speedMultiplier);
    await sleep(duration);

    // Show progress percentage
    const progress = Math.round(((index + 1) / bootMessages.length) * 100);
    bootSpinner.suffixText = chalk.hex(colors.neonPink)(`[${progress}%]`);
  }

  bootSpinner.succeed(chalk.hex(colors.cyborgGreen)("✓ System initialized"));
  await sleep(getAnimationDuration(700, speedMultiplier));
};

export default runBootAnimation;

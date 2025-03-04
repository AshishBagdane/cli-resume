import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import { fileURLToPath } from "url";
import validateNpmPackageName from "validate-npm-package-name";
import ora from "ora";

import { askQuestions } from "./questions.js";
import { renderTemplates } from "./renderer.js";

// Get project root path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "../../");

/**
 * Main generator function
 * @param {Object} options - Command line options
 */
export async function runGenerator(options) {
  // 1. Collect user information
  const userData = await askQuestions(options);

  // 2. Validate package name
  const nameValidation = validateNpmPackageName(userData.packageName);
  if (!nameValidation.validForNewPackages) {
    console.error(chalk.red("Invalid package name:"));
    (nameValidation.errors || []).forEach((err) => console.error(`- ${err}`));
    (nameValidation.warnings || []).forEach((warn) =>
      console.warn(`- ${warn}`)
    );
    process.exit(1);
  }

  // 3. Create output directory
  const outputDir = path.resolve(
    process.cwd(),
    options.directory || "./my-cyberpunk-resume"
  );

  // Check if directory exists
  if (fs.existsSync(outputDir)) {
    const dirContent = fs.readdirSync(outputDir);
    if (dirContent.length > 0) {
      const { proceed } = await askQuestions({ confirmOverwrite: true });
      if (!proceed) {
        console.log(chalk.yellow("Operation cancelled."));
        process.exit(0);
      }
    }
  }

  // 4. Generate project files
  const spinner = ora("Generating your cyberpunk resume...").start();

  try {
    // Ensure the output directory exists
    await fs.ensureDir(outputDir);

    // Copy the core project files
    const filesToCopy = [
      "src/animations",
      "src/components",
      "src/utils",
      "src/app.js",
      "bin/cli.js",
    ];

    for (const file of filesToCopy) {
      const srcPath = path.join(projectRoot, file);
      const destPath = path.join(outputDir, file);
      await fs.copy(srcPath, destPath);
    }

    // Ensure required directories exist
    await fs.ensureDir(path.join(outputDir, "src/config"));

    // Render templates
    await renderTemplates(userData, outputDir);

    // Create a basic .gitignore
    await fs.writeFile(
      path.join(outputDir, ".gitignore"),
      "node_modules\n.DS_Store\n"
    );

    spinner.succeed("Resume project generated successfully!");

    // 5. Print next steps
    console.log(
      "\n" + chalk.green.bold("🎉 All done! Here are your next steps:")
    );
    console.log(
      chalk.cyan(`
1. Navigate to your new project:
   ${chalk.white(`cd ${options.directory}`)}

2. Install dependencies:
   ${chalk.white("npm install")}

3. Test your resume:
   ${chalk.white("npm start")}

4. Make any desired customizations to your theme:
   Edit ${chalk.white("src/config/theme.js")} to change colors, icons, etc.

5. Publish to npm (optional):
   ${chalk.white("npm login")}
   ${chalk.white("npm publish")}

After publishing, anyone can view your resume by running:
${chalk.white(`npx ${userData.packageName}`)}
`)
    );
  } catch (error) {
    spinner.fail("Failed to generate resume project");
    throw error;
  }
}

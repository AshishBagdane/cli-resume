import fs from "fs-extra";
import path from "path";
import Mustache from "mustache";
import { fileURLToPath } from "url";

// Get templates directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const templatesDir = path.resolve(__dirname, "../templates");
const projectRoot = path.resolve(__dirname, "../../");

/**
 * Renders all templates for the project
 * @param {Object} userData - User data from questions
 * @param {string} outputDir - Output directory
 */
export async function renderTemplates(userData, outputDir) {
  // 1. Render package.json
  const packageTemplate = await fs.readFile(
    path.join(templatesDir, "package.json.template"),
    "utf-8"
  );

  const packageJson = Mustache.render(packageTemplate, {
    packageName: userData.packageName,
    description: `Cyberpunk CLI Resume for ${userData.fullName}`,
    authorName: userData.authorName,
    githubUsername: userData.githubUsername,
  });

  await fs.writeFile(path.join(outputDir, "package.json"), packageJson);

  // 2. Render README.md
  const readmeTemplate = await fs.readFile(
    path.join(templatesDir, "README.md.template"),
    "utf-8"
  );

  const readme = Mustache.render(readmeTemplate, {
    packageName: userData.packageName,
    fullName: userData.fullName,
    githubUsername: userData.githubUsername,
  });

  await fs.writeFile(path.join(outputDir, "README.md"), readme);

  // 3. Render resumeData.js
  const resumeDataTemplate = await fs.readFile(
    path.join(templatesDir, "resumeData.js.template"),
    "utf-8"
  );

  const resumeData = Mustache.render(resumeDataTemplate, {
    name: userData.fullName.toUpperCase(), // Upper case for display
    title: userData.jobTitle,
    location: userData.location,
    linkedin: userData.linkedin,
    website: userData.website,
    summary: userData.summary,
    experience: userData.experience,
    expertise: userData.expertise,
    education: userData.education,
  });

  await fs.writeFile(
    path.join(outputDir, "src/config/resumeData.js"),
    resumeData
  );

  // 4. Create or customize theme.js
  if (userData.customizeTheme) {
    const themeTemplate = await fs.readFile(
      path.join(templatesDir, "theme.js.template"),
      "utf-8"
    );

    const theme = Mustache.render(themeTemplate, {
      electricBlue: userData.electricBlue,
      neonPink: userData.neonPink,
      neonPurple: userData.neonPurple,
      cyborgGreen: userData.cyborgGreen,
    });

    await fs.writeFile(path.join(outputDir, "src/config/theme.js"), theme);
  } else {
    // Copy the default theme.js
    await fs.copy(
      path.join(projectRoot, "src/config/theme.js"),
      path.join(outputDir, "src/config/theme.js")
    );
  }
}

import inquirer from "inquirer";

/**
 * Prompts the user for their resume information
 * @param {Object} options - Command line options
 * @returns {Object} User responses
 */
export async function askQuestions(options) {
  // If only checking for overwrite confirmation
  if (options.confirmOverwrite) {
    const answers = await inquirer.prompt([
      {
        type: "confirm",
        name: "proceed",
        message: "Output directory is not empty. Overwrite existing files?",
        default: false,
      },
    ]);
    return answers;
  }

  // Skip questions if --yes flag is provided
  if (options.yes && options.name) {
    return {
      fullName: "YOUR NAME",
      jobTitle: "Software Engineer | Developer | Tech Enthusiast",
      location: "City, State, Country",
      linkedin: "linkedin.com/in/yourprofile",
      website: "yourwebsite.com",
      summary:
        "Experienced software professional with expertise in various technologies.",
      packageName: options.name,
      authorName: "Your Name",
      githubUsername: "yourusername",
      customizeTheme: false,
    };
  }

  // Main questions
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "packageName",
      message: "npm package name for your resume:",
      default: options.name || "my-cyberpunk-resume",
      validate: (input) => {
        // Basic validation, more thorough validation in main generator
        if (/^[a-z0-9-_.]+$/.test(input)) {
          return true;
        }
        return "Package name can only contain lowercase letters, numbers, hyphens, and underscores";
      },
    },
    {
      type: "input",
      name: "fullName",
      message: "Your full name (as displayed in the resume):",
      validate: (input) => input.trim() !== "",
    },
    {
      type: "input",
      name: "jobTitle",
      message: "Your job title or headline:",
      default: "Software Engineer | Developer | Tech Enthusiast",
    },
    {
      type: "input",
      name: "location",
      message: "Your location:",
      default: "City, State, Country",
    },
    {
      type: "input",
      name: "linkedin",
      message: "Your LinkedIn URL:",
      default: "linkedin.com/in/yourprofile",
    },
    {
      type: "input",
      name: "website",
      message: "Your personal website:",
      default: "yourwebsite.com",
    },
    {
      type: "editor",
      name: "summary",
      message: "A brief professional summary (opens in your default editor):",
      default:
        "Experienced software professional with expertise in various technologies.",
    },
    {
      type: "input",
      name: "authorName",
      message: "Author name for package.json:",
      default: (answers) => answers.fullName,
    },
    {
      type: "input",
      name: "githubUsername",
      message: "Your GitHub username:",
      default: "yourusername",
    },
    {
      type: "confirm",
      name: "customizeTheme",
      message: "Would you like to customize the cyberpunk theme colors?",
      default: false,
    },
  ]);

  // Ask for theme customization if requested
  if (answers.customizeTheme) {
    const themeAnswers = await inquirer.prompt([
      {
        type: "input",
        name: "electricBlue",
        message: "Electric Blue color (hex code):",
        default: "#0ff0fc",
        validate: (input) => /^#[0-9A-Fa-f]{6}$/.test(input),
      },
      {
        type: "input",
        name: "neonPink",
        message: "Neon Pink color (hex code):",
        default: "#ff2a6d",
        validate: (input) => /^#[0-9A-Fa-f]{6}$/.test(input),
      },
      {
        type: "input",
        name: "neonPurple",
        message: "Neon Purple color (hex code):",
        default: "#d300c5",
        validate: (input) => /^#[0-9A-Fa-f]{6}$/.test(input),
      },
      {
        type: "input",
        name: "cyborgGreen",
        message: "Cyborg Green color (hex code):",
        default: "#05ffa1",
        validate: (input) => /^#[0-9A-Fa-f]{6}$/.test(input),
      },
    ]);
    Object.assign(answers, themeAnswers);
  }

  // Additional questions for resume content
  console.log(
    "\nNow let's add some experience entries (you can add more later)"
  );

  answers.experience = [];
  let addMore = true;
  let expCount = 0;

  while (addMore && expCount < 3) {
    expCount++;
    const expEntry = await inquirer.prompt([
      {
        type: "input",
        name: "role",
        message: `Role/title for experience #${expCount}:`,
        default: expCount === 1 ? "Software Engineer" : "",
      },
      {
        type: "input",
        name: "company",
        message: "Company name:",
        default: expCount === 1 ? "ABC Technologies" : "",
      },
      {
        type: "input",
        name: "period",
        message: 'Period (e.g., "Jan 2020 - Present"):',
        default: expCount === 1 ? "Jan 2020 - Present" : "",
      },
      {
        type: "input",
        name: "highlights",
        message: "Key highlights (comma-separated):",
        default:
          expCount === 1
            ? "Led development of key features, Improved performance by 40%, Mentored junior developers"
            : "",
        filter: (input) => input.split(",").map((item) => item.trim()),
      },
      {
        type: "confirm",
        name: "addAnother",
        message: "Add another experience entry?",
        default: expCount < 2,
      },
    ]);

    const { addAnother, ...experience } = expEntry;
    answers.experience.push(experience);
    addMore = addAnother;
  }

  // Add skills
  console.log("\nNow let's add your skills (you can add more later)");

  const skillsGroups = await inquirer.prompt([
    {
      type: "input",
      name: "technicalSkills",
      message: "Technical skills (comma-separated):",
      default: "JavaScript, React, Node.js, TypeScript, HTML, CSS",
      filter: (input) => input.split(",").map((item) => item.trim()),
    },
    {
      type: "input",
      name: "toolsFrameworks",
      message: "Tools & Frameworks (comma-separated):",
      default: "Git, Docker, AWS, Express, MongoDB",
      filter: (input) => input.split(",").map((item) => item.trim()),
    },
  ]);

  answers.expertise = [
    {
      category: "Technical Skills",
      skills: skillsGroups.technicalSkills,
    },
    {
      category: "Tools & Frameworks",
      skills: skillsGroups.toolsFrameworks,
    },
  ];

  // Education
  answers.education = [];
  console.log("\nLet's add education information:");

  const education = await inquirer.prompt([
    {
      type: "input",
      name: "degree",
      message: "Degree/certification:",
      default: "Bachelor's Degree in Computer Science",
    },
    {
      type: "input",
      name: "institution",
      message: "Institution:",
      default: "University Name",
    },
    {
      type: "input",
      name: "year",
      message: "Year range:",
      default: "2015 - 2019",
    },
  ]);

  answers.education.push(education);

  return answers;
}

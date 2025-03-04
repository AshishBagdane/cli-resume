#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";
import { runGenerator } from "../src/generator/index.js";

// CLI configuration
program
  .name("create-cyberpunk-resume")
  .description("Generate your own cyberpunk-themed CLI resume")
  .version("1.0.0")
  .option("-y, --yes", "Skip prompts and use defaults")
  .option("-d, --directory <dir>", "Output directory", "./my-cyberpunk-resume")
  .option("-n, --name <name>", "Your npm package name")
  .action(async (options) => {
    console.log(chalk.cyan.bold("🚀 Cyberpunk Resume Generator 🚀"));
    console.log(chalk.blue("Create your own cyberpunk-themed CLI resume\n"));

    try {
      await runGenerator(options);
    } catch (error) {
      console.error(chalk.red("An error occurred during generation:"));
      console.error(error);
      process.exit(1);
    }
  });

program.parse(process.argv);

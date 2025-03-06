#!/usr/bin/env node

import { program } from "commander";
import { runResume } from "../src/app.js";

// Define CLI options
program
  .name("ashish-bagdane")
  .description("Ashish Bagdane's Cyberpunk CLI Resume")
  .version("1.0.0")
  .option("--fast", "Run resume with faster animations")
  .option(
    "--minimal",
    "Run resume with minimal animations (for low-resource environments)"
  )
  .option("--dev", "Run in development mode with debug info")
  .option("--noMatrix", "Skip the matrix rain animation")
  .parse(process.argv);

const options = program.opts();

// Run the resume with the provided options
try {
  runResume(options);
} catch (error) {
  console.error("An error occurred while running the resume:");
  console.error(error);
  process.exit(1);
}

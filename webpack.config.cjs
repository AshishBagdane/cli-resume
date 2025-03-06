const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: path.resolve(process.cwd(), "src", "app.js"), // Use process.cwd()
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "bundle.js",
  },
};

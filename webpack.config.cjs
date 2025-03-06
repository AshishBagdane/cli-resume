const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src/app.js",
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js"],
    fallback: {
      child_process: false,
      fs: false,
      path: false,
      url: false,
      process: false,
    },
  },
};

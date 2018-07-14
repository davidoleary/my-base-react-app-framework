// https://storybook.js.org/configurations/custom-webpack-config/#full-control-mode--default
// Extend Mode + Full Control Mode
const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  // For example, add typescript loader:
  defaultConfig.module.rules.push({
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../")
  });
  //defaultConfig.resolve.extensions.push(".ts", ".tsx");

  return defaultConfig;
};
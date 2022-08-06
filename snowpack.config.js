// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

module.exports = {
  exclude: [
    "**/node_modules/**/*",
    "**/.git/**/*",
  ],
  plugins: [
    ["snowpack-flow-remove-types"],
    ["@snowpack/plugin-webpack", {sourceMap: true}],
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: "es6",
  },
  buildOptions: {
    out: "docs",
  },
};

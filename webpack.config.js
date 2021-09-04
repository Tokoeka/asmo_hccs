/* eslint-env node */

/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const webpack = require("webpack"); // does this have a purpose? or can it just get deleted?
const packageData = require("./package.json");
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = {
  entry: {
    // Point "entry" to scripts you want to be CLI-eligible.
    asmohccs: "./src/index.ts",
    hccsAscend: "./src/gash-hop.ts",
  },
  // Turns on tree-shaking and minification in the default Terser minifier
  // https://webpack.js.org/plugins/terser-webpack-plugin/
  mode: "production",
  devtool: false,
  output: {
    path: path.resolve(__dirname, "KoLmafia", "scripts", "asmo-hccs"),
    filename: "[name].js",
    libraryTarget: "commonjs",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        // exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  optimization: {
    // Disable compression because it makes debugging more difficult for KolMafia
    minimize: false,
  },
  performance: {
    // Disable the warning about assets exceeding the recommended size because this isn't a website script
    hints: false,
  },
  plugins: [],
  externals: {
    // Necessary to allow kolmafia imports.
    kolmafia: "commonjs kolmafia",
    // Add any ASH scripts you would like to use here to allow importing. E.g.:
    // "canadv.ash": "commonjs canadv.ash",
  },
};

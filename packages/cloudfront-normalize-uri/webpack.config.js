/* eslint-disable import/unambiguous,import/no-unused-modules,@typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: "./src/index.ts",
  externalsPresets: { node: true },
  target: "node",
  externals: {
    "aws-sdk": "aws-sdk",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "esbuild-loader",
        options: {
          loader: "ts",
          target: "esnext",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: {
      type: "commonjs2",
    },
  },
};

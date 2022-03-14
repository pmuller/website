import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Philippe Muller's home page",
    author: "Philippe Muller",
    siteUrl: "https://pmuller.fr",
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-linaria",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-svgr-svgo",
    "gatsby-transformer-sharp",
  ],
};

export default config;

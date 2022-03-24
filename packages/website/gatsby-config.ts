import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Philippe Muller - pmuller.eu",
    titleTemplate: "%s - pmuller.eu",
    description:
      "Full stack developer: AWS, Linux, Pulumi, Python, TypeScript, React",
    author: "Philippe Muller",
    siteUrl: "https://pmuller.eu",
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-linaria",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-svgr-svgo",
    "gatsby-transformer-sharp",
  ],
};

export default config;

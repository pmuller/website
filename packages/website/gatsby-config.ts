import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Philippe Muller - pmuller.eu",
    titleTemplate: "%s - pmuller.eu",
    description:
      "Full stack developer: AWS, Linux, Pulumi, Python, TypeScript, React",
    author: "Philippe Muller",
    siteUrl: "https://pmuller.eu",
    contactMethods: [
      {
        label: "github.com/pmuller",
        url: "https://github.com/pmuller",
        icon: "github",
      },
      {
        label: "linkedin.com/in/muller",
        url: "https://linkedin.com/in/muller",
        icon: "linkedin",
      },
      {
        label: "philippe.muller@gmail.com",
        url: "mailto:philippe.muller@gmail.com",
        icon: "at",
      },
    ],
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

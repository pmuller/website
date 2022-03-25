import { graphql, useStaticQuery } from "gatsby";

export const useSiteUrl = (): string =>
  useStaticQuery(graphql`
    query GetSiteUrl {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `).site.siteMetadata.siteUrl;

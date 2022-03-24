import { graphql, useStaticQuery } from "gatsby";

import { GetContactMethodsQueryData } from "../types";

export const useContactMethods = () =>
  useStaticQuery<GetContactMethodsQueryData>(graphql`
    query GetContactMethods {
      site {
        siteMetadata {
          contactMethods {
            label
            url
            icon
          }
        }
      }
    }
  `).site.siteMetadata.contactMethods;

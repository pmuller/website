import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        titleTemplate
      }
    }
  }
`;

export const PageMetadata: React.FC = () => {
  const data = useStaticQuery(query).site.siteMetadata;
  return (
    <Helmet title={data.title} titleTemplate={data.titleTemplate}></Helmet>
  );
};

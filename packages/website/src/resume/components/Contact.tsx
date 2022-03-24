import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import { ContactMethod as ContactMethodType } from "../types";
import { ContactContainer } from "./ContactContainer";
import { ContactMethod } from "./ContactMethod";

type Data = {
  site: {
    siteMetadata: {
      contactMethods: ContactMethodType[];
    };
  };
};

const query = graphql`
  query ContactMethods {
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
`;

export const Contact: React.FC = () => {
  const { contactMethods } = useStaticQuery<Data>(query).site.siteMetadata;
  return (
    <ContactContainer>
      <ContactMethod label="pmuller.eu" url="https://pmuller.eu" icon="web" />
      {contactMethods.map((method, index) => (
        <ContactMethod {...method} key={index} />
      ))}
    </ContactContainer>
  );
};

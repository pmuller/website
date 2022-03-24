import { ContactMethodProps } from "./ContactMethodProps";

export type GetContactMethodsQueryData = {
  site: {
    siteMetadata: {
      contactMethods: ContactMethodProps[];
    };
  };
};

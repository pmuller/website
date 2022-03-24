import { ContactMethod } from "./ContactMethod";

export type GetContactMethodsQueryData = {
  site: {
    siteMetadata: {
      contactMethods: ContactMethod[];
    };
  };
};

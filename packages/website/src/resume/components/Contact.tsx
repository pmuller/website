import React from "react";

import { useContactMethods } from "../../contact";
import { ContactContainer } from "./ContactContainer";
import { ContactMethod } from "./ContactMethod";

export const Contact: React.FC = () => {
  const contactMethods = useContactMethods();
  return (
    <ContactContainer>
      <ContactMethod label="pmuller.eu" url="https://pmuller.eu" icon="web" />
      {contactMethods.map((method, index) => (
        <ContactMethod {...method} key={index} />
      ))}
    </ContactContainer>
  );
};

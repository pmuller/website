import React from "react";

import { ContactLink, useContactMethods } from "../../contact";
import { ContactContainer } from "./ContactContainer";

export const Contact: React.FC = () => {
  const contactMethods = useContactMethods();
  return (
    <ContactContainer>
      <ContactLink label="pmuller.eu" url="https://pmuller.eu" icon="web" />
      {contactMethods.map((method, index) => (
        <ContactLink {...method} key={index} />
      ))}
    </ContactContainer>
  );
};

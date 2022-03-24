import React from "react";

import { ContactLink, useContactMethods } from "../../contact";
import { ContactContainer } from "./ContactContainer";

export const Contact: React.FC = () => {
  const contactMethods = useContactMethods();
  return (
    <ContactContainer>
      <h2>Contact</h2>
      <div className="items">
        {contactMethods.map((method, index) => (
          <ContactLink {...method} key={index} />
        ))}
      </div>
    </ContactContainer>
  );
};

import React from "react";

import { contactMethods } from "../data";
import { ContactContainer } from "./ContactContainer";
import { ContactMethod } from "./ContactMethod";

export const Contact: React.FC = () => (
  <ContactContainer style={{ gridArea: "contact" }}>
    {contactMethods.map((method, index) => (
      <ContactMethod {...method} key={index} />
    ))}
  </ContactContainer>
);

import React from "react";

import { contactMethods } from "../data";
import { ContactMethod } from "./ContactMethod";

export const Contact: React.FC = () => (
  <div>
    {contactMethods.map((method, index) => (
      <ContactMethod {...method} key={index} />
    ))}
  </div>
);

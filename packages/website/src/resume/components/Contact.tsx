import React from "react";

import { contactMethods } from "../data";
import { container } from "./Contact.module.css";
import { ContactMethod } from "./ContactMethod";

export const Contact: React.FC = () => (
  <div className={container}>
    {contactMethods.map((method, index) => (
      <ContactMethod {...method} key={index} />
    ))}
  </div>
);

import Icon from "@mdi/react";
import React from "react";

import { ContactMethod as Props } from "../types";
import { container } from "./ContactMethod.module.css";

export const ContactMethod: React.FC<Props> = ({ label, url, icon }) => (
  <a href={url} rel="noopener" target="_blank" className={container}>
    {label}
    <Icon path={icon} size={1} />
  </a>
);

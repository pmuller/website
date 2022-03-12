import Icon from "@mdi/react";
import React from "react";

import { ContactMethod as Props } from "../types";
import { ContactMethodAnchor } from "./ContactMethodAnchor";

export const ContactMethod: React.FC<Props> = ({ label, url, icon }) => (
  <ContactMethodAnchor href={url} rel="noopener" target="_blank">
    <span className="label">{label}</span>
    <Icon path={icon} size={1} />
  </ContactMethodAnchor>
);

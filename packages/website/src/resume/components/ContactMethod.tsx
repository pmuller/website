import Icon from "@mdi/react";
import React from "react";

import { ContactMethod as Props } from "../types";
import { ContactMethodAnchor } from "./ContactMethodAnchor";

export const ContactMethod: React.FC<Props> = ({ label, url, icon }) => (
  <ContactMethodAnchor
    icon={<Icon path={icon} size={1} />}
    href={url}
    rel="noopener"
    target="_blank"
  >
    {label}
  </ContactMethodAnchor>
);

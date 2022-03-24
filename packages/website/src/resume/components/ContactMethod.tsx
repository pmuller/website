import { mdiAt, mdiGithub, mdiLinkedin, mdiWeb } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";

import { ContactMethod as Props } from "../types";
import { ContactMethodAnchor } from "./ContactMethodAnchor";

const icons: Record<string, string> = {
  web: mdiWeb,
  github: mdiGithub,
  linkedin: mdiLinkedin,
  at: mdiAt,
};

export const ContactMethod: React.FC<Props> = ({ label, url, icon }) => {
  const _icon = icons[icon];
  return (
    <ContactMethodAnchor
      icon={_icon && <Icon path={_icon} size={1} />}
      href={url}
      rel="noopener"
      target="_blank"
    >
      {label}
    </ContactMethodAnchor>
  );
};

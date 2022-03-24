import { mdiAt, mdiGithub, mdiLinkedin, mdiWeb } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";

import { ExternalLink } from "../../links";
import { ContactMethodProps as Props } from "../types";

const icons: Record<string, string> = {
  web: mdiWeb,
  github: mdiGithub,
  linkedin: mdiLinkedin,
  at: mdiAt,
};

export const ContactLink: React.FC<Props> = ({ label, url, icon }) => {
  const _icon = icons[icon];
  return (
    <ExternalLink icon={_icon && <Icon path={_icon} size={1} />} href={url}>
      {label}
    </ExternalLink>
  );
};

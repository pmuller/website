import Icon from "@mdi/react";
import React from "react";

import { ContactMethod as Props } from "../types";

export const ContactMethod: React.FC<Props> = ({ label, url, icon }) => (
  <div>
    <Icon path={icon} size={1} />
    <a href={url} rel="noopener" target="_blank">
      {label}
    </a>
  </div>
);

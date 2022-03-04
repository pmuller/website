import React from "react";

import { ContactMethod as Props } from "../types";

export const ContactMethod: React.FC<Props> = ({ label, url, icon }) => (
  <div>
    {icon}{" "}
    <a href={url} rel="noopener" target="_blank">
      {label}
    </a>
  </div>
);

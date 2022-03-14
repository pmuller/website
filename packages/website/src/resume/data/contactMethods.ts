import { mdiAt, mdiGithub, mdiLinkedin, mdiWeb } from "@mdi/js";

import { ContactMethod } from "../types";

export const contactMethods: ContactMethod[] = [
  {
    label: "pmuller.eu",
    url: "https://pmuller.eu",
    icon: mdiWeb,
  },
  {
    label: "github.com/pmuller",
    url: "https://github.com/pmuller",
    icon: mdiGithub,
  },
  {
    label: "linkedin.com/in/muller",
    url: "https://linkedin.com/in/muller",
    icon: mdiLinkedin,
  },
  {
    label: "philippe.muller@gmail.com",
    url: "mailto:philippe.muller@gmail.com",
    icon: mdiAt,
  },
];

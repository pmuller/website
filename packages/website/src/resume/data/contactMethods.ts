import { mdiAt, mdiGithub, mdiLinkedin, mdiWeb } from "@mdi/js";

import { ContactMethod } from "../types";

export const contactMethods: ContactMethod[] = [
  {
    label: "philippe.muller@gmail.com",
    url: "mailto:philippe.muller@gmail.com",
    icon: mdiAt,
  },
  {
    label: "pmuller.eu",
    url: "https://pmuller.eu",
    icon: mdiWeb,
  },
  {
    label: "pmuller",
    url: "https://github.com/pmuller",
    icon: mdiGithub,
  },
  {
    label: "muller",
    url: "https://linkedin.com/in/muller",
    icon: mdiLinkedin,
  },
];

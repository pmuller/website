import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const Avatar: React.FC = () => (
  <StaticImage
    src="./Avatar.png"
    alt="pmuller's avatar"
    width={48}
    height={48}
  />
);

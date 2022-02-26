import React from "react";

type Props = {
  name: string;
  url: string;
};

export const SocialNetworkIcon: React.FC<Props> = ({ name, url }) => (
  <a target="_blank" rel="noopener" href={url}>
    <img style={{ width: "48px" }} src={`/icons/${name}.svg`} alt={name} />
  </a>
);

import React from "react";

type Props = {
  name: string;
  url: string;
  size?: string;
};

export const SocialNetworkIcon: React.FC<Props> = ({
  name,
  url,
  size = "48px",
}) => (
  <a target="_blank" rel="noopener" href={url}>
    <img
      style={{ width: size, height: size }}
      src={`/icons/${name}.svg`}
      alt={name}
    />
  </a>
);

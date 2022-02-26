import React from "react";

type Props = {
  name: string;
  url: string;
  path: string;
  size?: string;
};

export const Icon: React.FC<Props> = (props) => {
  const { name, path, url, size = "48px" } = props;
  return (
    <a target="_blank" rel="noopener" href={url}>
      <img style={{ width: size, height: size }} src={path} alt={name} />
    </a>
  );
};

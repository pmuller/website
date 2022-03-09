import React from "react";

const realAddress = "philippe.muller@gmail.com";
const bogusAddress = "wait@5seconds.com";
const delay = 5000;

export const DelayedEmailAddress: React.FC = () => {
  const [address, setAddress] = React.useState(bogusAddress);

  React.useEffect(() => {
    const id = setTimeout(() => setAddress(realAddress), delay);
    return () => clearTimeout(id);
  }, []);

  return <a href={`mailto:${address}`}>{address}</a>;
};

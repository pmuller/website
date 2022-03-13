import React from "react";

import { Link } from "../../links";

const realAddress = "philippe.muller@gmail.com";
const bogusAddress = "wait@5seconds.com";
const delay = 5000;

export const DelayedEmailAddress: React.FC = () => {
  const [address, setAddress] = React.useState(bogusAddress);

  React.useEffect(() => {
    const id = setTimeout(() => setAddress(realAddress), delay);
    return () => clearTimeout(id);
  }, []);

  return <Link href={`mailto:${address}`}>{address}</Link>;
};

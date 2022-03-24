import { mdiMapMarkerOutline } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";

import { OrganizationLocationContainer } from "./OrganizationLocationContainer";

type Props = {
  label: string;
};

export const OrganizationLocation: React.FC<Props> = ({ label }) => (
  <OrganizationLocationContainer>
    <Icon path={mdiMapMarkerOutline} size={0.7} color="#666" />
    {label}
  </OrganizationLocationContainer>
);

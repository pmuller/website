import React from "react";

import { Contact } from "./Contact";
import { HomeLayout } from "./HomeLayout";
import { Introduction } from "./Introduction";

export const HomePage: React.FC = () => (
  <HomeLayout>
    <Introduction />
    <Contact />
  </HomeLayout>
);

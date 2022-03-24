import React from "react";

import { languages } from "../data";
import { LanguagesContainer } from "./LanguagesContainer";

export const Languages: React.FC = () => (
  <LanguagesContainer>
    <h2>Languages</h2>
    <ul>
      {languages.map(({ name, level }) => (
        <li>
          {name}: {level}
        </li>
      ))}
    </ul>
  </LanguagesContainer>
);

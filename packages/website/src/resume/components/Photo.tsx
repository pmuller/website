import React from "react";

import PhotoJpg from "./Photo.jpg";
import { PhotoContainer } from "./PhotoContainer";

export const Photo: React.FC = () => (
  <PhotoContainer src={PhotoJpg} alt="Philippe Muller" />
);

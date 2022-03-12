import { styled } from "linaria/react";

// XXX: De-dupplicate these anchors style with the global ones
export const CompanyNameAnchor = styled.a`
  &,
  &:visited {
    color: #2471a3;
    font-weight: bold;
    text-underline-offset: 0.1rem;
    text-decoration-style: dotted;
  }

  &:hover {
    color: #000;
    text-decoration: none;
  }
`;

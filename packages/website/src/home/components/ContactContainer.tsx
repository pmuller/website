import { styled } from "linaria/react";

export const ContactContainer = styled.div`
  font-family: monospace;
  & > h2 {
    @media (min-width: 768px) {
      text-align: right;
    }
  }
  & > .items {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    & > a {
      align-items: center;
      @media (min-width: 768px) {
        flex-direction: row-reverse;
      }
    }
  }
`;

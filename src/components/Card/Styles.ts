import styled from "styled-components"

import { boxShadows, breakpoints, colors } from "@utils/styles"

import { CardPadding } from "."

export const StyledCard = styled.div<{ $padding: CardPadding }>`
  display: flex;
  flex-direction: column;
  border-radius: 0.875rem;
  background-color: ${colors.white};
  padding: ${({ $padding }) => ($padding === "small" ? "1.5rem" : "2rem 1rem")};
  box-shadow: ${boxShadows.card};

  @media (min-width: ${breakpoints.large}) {
    padding: ${({ $padding }) => ($padding === "small" ? "1.5rem" : "2.5rem")};
  }
`

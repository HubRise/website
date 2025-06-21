import styled from "styled-components"

import { breakpoints, colors } from "@utils/styles"

import { UnderlinePosition } from "."

export const StyledUnderline = styled.div<{ $position: UnderlinePosition }>`
  margin: ${({ $position }) => ($position === "center" ? "0 auto" : "0")};
  width: 5rem;
  height: 0.1875rem;
  border-radius: 6.25rem;
  background-color: ${colors.primary};
  margin-top: 1rem;

  @media (min-width: ${breakpoints.biggest}) {
    width: 7.5rem;
  }
`

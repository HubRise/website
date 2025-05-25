import styled from "styled-components"

import { breakpoints, colors, mixin } from "@utils/styles"

export const StyledFooter = styled.footer`
  color: ${colors.white};
  background-color: ${colors.backgroundDarker};
`

export const Wrapper = styled.div`
  ${mixin.containerWrapper}
  position: relative;
  padding: 0 1rem;
`

export const Nav = styled.div`
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(2, 1fr);
  padding: 4rem 0;

  @media (min-width: ${breakpoints.large}) {
    grid-template-columns: repeat(5, 1fr);
  }
`

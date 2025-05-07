import styled from "styled-components"

import { breakpoints, colors, mixin } from "@utils/styles"

export const StyledFooter = styled.footer`
  color: ${colors.white};
`

export const Wrapper = styled.div`
  background-color: #444;
  position: relative;
`

export const Nav = styled.div`
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 1fr;
  padding: 4em 0;
  text-align: center;

  ${mixin.container};

  @media (min-width: ${breakpoints.medium}) {
    grid-template-columns: repeat(2, 1fr);
    text-align: left;
  }

  @media (min-width: ${breakpoints.large}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

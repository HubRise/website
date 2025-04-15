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

export const LogoWrapper = styled.div`
  padding-top: 4rem;
`

export const Logo = styled.img`
  display: block;
  margin: 0 auto;

  @media (min-width: ${breakpoints.medium}) {
    margin: 0;
  }
`

export const Nav = styled.div`
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 1fr;
  padding: 2rem 0 4rem;
  text-align: center;

  @media (min-width: ${breakpoints.medium}) {
    grid-template-columns: repeat(2, 1fr);
    text-align: left;
  }

  @media (min-width: ${breakpoints.large}) {
    grid-template-columns: repeat(5, 1fr);
  }
`

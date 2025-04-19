import Link from "next/link"
import styled from "styled-components"

import { breakpoints, mixin } from "@utils/styles"

import { headerStyle } from "../shared/styles"

export const StyledHeader = styled.div<{ $isIntegrationsNavSticky: boolean }>`
  position: sticky;
  top: 0;
  ${headerStyle};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.625rem;

  @media (min-width: ${breakpoints.burgerMenu}) {
    display: none;
  }
`

export const BurgerIcon = styled.div`
  padding: 0 0.5rem;
  display: flex;
  ${mixin.clickable}
`

export const LogoLink = styled(Link)`
  height: 100%;
  ${mixin.centerElement};
`

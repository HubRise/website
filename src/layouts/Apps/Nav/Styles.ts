import styled, { css } from "styled-components"

import { breakpoints, sizes, zIndexValues } from "@utils/styles"

import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"

const mobileBreakpoint = breakpoints.large

const sticky = css`
  position: sticky;
  top: ${sizes.headerHeight};
  z-index: ${zIndexValues.header};
`

export const StyledDesktopNav = styled(DesktopNav)`
  @media not (min-width: ${mobileBreakpoint}) {
    display: none;
  }

  ${sticky};
`

export const StyledMobileNav = styled(MobileNav)`
  @media (min-width: ${mobileBreakpoint}) {
    display: none;
  }

  ${sticky};
`

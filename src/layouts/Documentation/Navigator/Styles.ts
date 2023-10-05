import styled from "styled-components"

import { breakpoints, sizes, zIndexValues } from "@utils/styles"

import DesktopNavigator from "./DesktopNavigator"
import MobileNavigator from "./MobileNavigator"

const mobileBreakpoint = breakpoints.large

export const StyledNavigator = styled.div`
  position: sticky;
  top: calc(${sizes.headerHeight} + 1rem);

  @media not (min-width: ${mobileBreakpoint}) {
    top: ${sizes.headerHeight};
    z-index: ${zIndexValues.header};
  }
`

export const StyledDesktopNavigator = styled(DesktopNavigator)`
  @media not (min-width: ${mobileBreakpoint}) {
    display: none;
  }
`

export const StyledMobileNavigator = styled(MobileNavigator)`
  @media (min-width: ${mobileBreakpoint}) {
    display: none;
  }
`

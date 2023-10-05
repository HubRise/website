import styled from "styled-components"

import { breakpoints } from "@utils/styles"

export const DesktopMediaQuery = styled.div`
  @media not (min-width: ${breakpoints.documentationStickyMenu}) {
    display: none;
  }
`

export const MobileMediaQuery = styled.div`
  @media (min-width: ${breakpoints.documentationStickyMenu}) {
    display: none;
  }
`

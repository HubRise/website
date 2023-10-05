import * as React from "react"

import { StyledDesktopNav, StyledMobileNav } from "./Styles"
import { NavProps } from "./types"

const Index = (props: NavProps): JSX.Element => {
  return (
    <>
      {/* Static div for anchor linking; required because anchors don't work on sticky elements. */}
      <div id="nav" />

      <StyledDesktopNav {...props} />

      <StyledMobileNav {...props} />
    </>
  )
}

export default Index

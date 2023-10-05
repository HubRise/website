import * as React from "react"

import { StyledDesktopNavigator, StyledMobileNavigator, StyledNavigator } from "./Styles"
import type { NavigatorProps } from "./types"
import useCurrentTitle from "./useCurrentTitle"

const Navigator = (props: NavigatorProps): JSX.Element => {
  const { folder, className } = props
  const currentTitle = useCurrentTitle(folder.name)

  return (
    <StyledNavigator className={className}>
      <StyledDesktopNavigator currentTitle={currentTitle} {...props} />

      <StyledMobileNavigator currentTitle={currentTitle} {...props} />
    </StyledNavigator>
  )
}

export default Navigator

import * as React from "react"

import DesktopNavigator from "./DesktopNavigator"
import MobileNavigator from "./MobileNavigator"
import type { NavigatorProps } from "./shared/types"
import { DesktopMediaQuery, MobileMediaQuery } from "./styles"

const Navigator = (props: NavigatorProps): JSX.Element => {
  return (
    <>
      <DesktopMediaQuery>
        <DesktopNavigator {...props} />
      </DesktopMediaQuery>

      <MobileMediaQuery>
        <MobileNavigator {...props} />
      </MobileMediaQuery>
    </>
  )
}

export default Navigator

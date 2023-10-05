import * as React from "react"

import DesktopNavigator from "./DesktopNavigator"
import MobileNavigator from "./MobileNavigator"
import { NavigatorProps } from "./shared/utils"
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

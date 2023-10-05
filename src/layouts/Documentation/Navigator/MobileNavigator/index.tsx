import * as React from "react"

import MobileDropdown from "@components/MobileDropdown"

import Menu from "../Menu"
import type { NavigatorProps } from "../types"

interface MobileNavigatorProps extends NavigatorProps {
  currentTitle: string
}

const MobileNavigator = (props: MobileNavigatorProps): JSX.Element => {
  const { currentTitle } = props

  return (
    <MobileDropdown title={currentTitle}>
      <Menu {...props} isMobile={true} />
    </MobileDropdown>
  )
}

export default MobileNavigator

import * as React from "react"

import Menu from "../Menu"
import type { NavigatorProps } from "../types"

import { List, TitleLink, Title, Navigator } from "./Styles"

interface DesktopNavigatorProps extends NavigatorProps {
  currentTitle: string
}

const DesktopNavigator = (props: DesktopNavigatorProps): JSX.Element => {
  const { folder, className } = props

  return (
    <Navigator className={className}>
      <Title>
        <TitleLink href={folder.folderLinks[0].uri}>{folder.name}</TitleLink>
      </Title>

      <List>
        <Menu isMobile={false} {...props} />
      </List>
    </Navigator>
  )
}

export default DesktopNavigator

import * as React from "react"
import { noop } from "react-use/lib/misc/util"

import Menu from "../shared/Menu"
import useCurrentTitle from "../shared/useCurrentTitle"
import { NavigatorProps } from "../shared/utils"

import { List, TitleLink, Title, StyledNavigator } from "./Styles"

const DesktopNavigator = (props: NavigatorProps): JSX.Element => {
  const { folder } = props
  const currentTitle = useCurrentTitle(folder.name)

  return (
    <StyledNavigator>
      <Title>
        <TitleLink href={folder.folderLinks[0].uri}>{folder.name}</TitleLink>
      </Title>

      <List>
        <Menu currentTitle={currentTitle} isMobile={false} onNavigate={noop} {...props} />
      </List>
    </StyledNavigator>
  )
}

export default DesktopNavigator

import * as React from "react"

import Menu from "../shared/Menu"
import useCurrentTitle from "../shared/useCurrentTitle"
import { NavigatorProps } from "../shared/utils"

import { List, Title, ArrowIcon, StyledNavigator } from "./Styles"

const MobileNavigator = (props: NavigatorProps): JSX.Element => {
  const { folder } = props
  const currentTitle = useCurrentTitle(folder.name)

  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <StyledNavigator>
      <Title onClick={() => setIsExpanded((v) => !v)} $isExpanded={isExpanded}>
        {currentTitle}
        <ArrowIcon code={isExpanded ? "expand_less" : "expand_more"} />
      </Title>

      <List $isExpanded={isExpanded}>
        <Menu currentTitle={currentTitle} isMobile={true} onNavigate={() => setIsExpanded(false)} {...props} />
      </List>
    </StyledNavigator>
  )
}

export default MobileNavigator

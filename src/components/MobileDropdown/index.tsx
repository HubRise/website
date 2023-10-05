import * as React from "react"

import { List, Title, ArrowIcon, Dropdown } from "./Styles"

interface MobileNavProps {
  title: string
  className?: string
  children: React.ReactNode
}

const MobileDropdown = ({ title, className, children }: MobileNavProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <Dropdown onClick={() => isExpanded && setIsExpanded(false)} className={className}>
      <Title onClick={() => setIsExpanded((v) => !v)} $isExpanded={isExpanded}>
        {title}
        <ArrowIcon code={isExpanded ? "expand_less" : "expand_more"} />
      </Title>

      <List $isExpanded={isExpanded}>{children}</List>
    </Dropdown>
  )
}

export default MobileDropdown

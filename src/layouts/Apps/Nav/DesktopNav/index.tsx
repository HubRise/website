import { usePathname } from "next/navigation"
import * as React from "react"

import useSticky from "@hooks/client/useSticky"
import { remIntoPixels } from "@utils/dom"
import { appsCategoryPath, appsPath } from "@utils/paths"
import { sizes } from "@utils/styles"

import { NavProps } from "../types"

import { Item, List, Nav, StyledLink } from "./Styles"

interface DesktopNavProps extends NavProps {
  className?: string
}

const DesktopNav = ({ language, categories, allAppsLabel, className }: DesktopNavProps): JSX.Element => {
  const currentPath = usePathname()
  const allAppsPath = appsPath(language)

  const $ref = React.useRef<HTMLElement>(null)
  const headerHeightInPixels = React.useMemo(() => remIntoPixels(sizes.headerHeight), [])
  const isSticky = useSticky($ref, headerHeightInPixels)

  const link = (path: string, isActive: boolean, label: string) => (
    <StyledLink href={path + "#nav"} $isActive={isActive} $isSticky={isSticky}>
      {label}
    </StyledLink>
  )

  return (
    <Nav ref={$ref} className={className} $isSticky={isSticky}>
      <List>
        <Item $isSticky={isSticky}>{link(allAppsPath, allAppsPath === currentPath, allAppsLabel)}</Item>

        {categories.map((category, idx) => {
          const path = appsCategoryPath(language, category.title)
          return (
            <Item key={idx} $isSticky={isSticky}>
              {link(path, path === currentPath, category.title)}
            </Item>
          )
        })}
      </List>
    </Nav>
  )
}

export default DesktopNav

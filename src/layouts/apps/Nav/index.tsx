import * as React from "react"

import { ICategory } from "../interface"

import { Item, List, StyledNav, StyledLink } from "./Styles"

import useSticky from "@utils/hooks/useSticky"
import { sizes } from "@utils/styles"
import { remIntoPixels } from "@utils/dom"

interface NavProps {
  categories: Array<ICategory>
  currentPath: string
  allAppsPath: string
  allAppsLabel: string
}

const Index = ({ categories, currentPath, allAppsPath, allAppsLabel }: NavProps): JSX.Element => {
  const $navRef = React.useRef<HTMLDivElement>(null)
  const headerHeightInPixels = React.useMemo(() => remIntoPixels(sizes.headerHeight), [])
  const isSticky = useSticky($navRef, headerHeightInPixels)

  const link = (path: string, isActive: boolean, label: string) => (
    <StyledLink to={path + "#nav"} addLocalePrefix={false} $isActive={isActive} $isSticky={isSticky}>
      {label}
    </StyledLink>
  )

  return (
    <>
      {/* Fragment ids must be statically positioned (ie not sticky) */}
      <div id="nav" />

      <StyledNav ref={$navRef} $isSticky={isSticky}>
        <List>
          <Item key={-1} $isSticky={isSticky}>
            {link(allAppsPath, allAppsPath === currentPath, allAppsLabel)}
          </Item>

          {categories.map((category, idx) => {
            return (
              <Item key={idx} $isSticky={isSticky}>
                {link(category.path, category.path === currentPath, category.title)}
              </Item>
            )
          })}
        </List>
      </StyledNav>
    </>
  )
}

export default Index

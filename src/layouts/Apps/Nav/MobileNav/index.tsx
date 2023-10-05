import { usePathname } from "next/navigation"
import * as React from "react"

import MobileDropdown from "@components/MobileDropdown"
import { appsCategoryPath, appsPath } from "@utils/paths"

import { NavProps } from "../types"

import { Item, List, StyledLink } from "./Styles"

interface MobileNavProps extends NavProps {
  className?: string
}

const MobileNav = ({ language, categories, allAppsLabel, className }: MobileNavProps): JSX.Element => {
  const currentPath = usePathname()
  const allAppsPath = appsPath(language)
  const currentCategory =
    categories.find(({ title }) => currentPath === appsCategoryPath(language, title))?.title ?? allAppsLabel

  const link = (path: string, isActive: boolean, label: string) => (
    <StyledLink href={path + "#nav"} $isActive={isActive}>
      {label}
    </StyledLink>
  )

  return (
    <MobileDropdown title={currentCategory} className={className}>
      <List>
        <Item>{link(allAppsPath, allAppsPath === currentPath, allAppsLabel)}</Item>

        {categories.map((category, idx) => {
          const path = appsCategoryPath(language, category.title)
          return <Item key={idx}>{link(path, path === currentPath, category.title)}</Item>
        })}
      </List>
    </MobileDropdown>
  )
}

export default MobileNav

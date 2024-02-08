import { usePathname } from "next/navigation"
import React from "react"
import { useMedia } from "react-use"

import useTranslation from "@hooks/client/useTranslation"
import { BlogArchives } from "@utils/BlogIndexer/types"
import { breakpoints } from "@utils/styles"

import { ArrowIcon, Menu, MenuItem, ItemLink, MenuList, MenuTitle } from "./Styles"
import { getYearArchiveTitle } from "./helpers"

const Sidebar = ({ archives }: { archives: BlogArchives }): JSX.Element => {
  const { t } = useTranslation()
  const currentPathname = usePathname()

  const [isExpanded, setIsExpanded] = React.useState(true)
  const isMobile = !useMedia(`(min-width: ${breakpoints.blogStickyMenu})`)

  React.useEffect(() => {
    const onClick = () => setIsExpanded(false)
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [isExpanded])

  React.useEffect(() => {
    setIsExpanded(!isMobile)
  }, [isMobile])

  return (
    <Menu onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
      <MenuTitle onClick={() => isMobile && setIsExpanded((prev) => !prev)}>
        {t("blog.other_posts")}
        <ArrowIcon code={isExpanded ? "expand_less" : "expand_more"} />
      </MenuTitle>

      <MenuList $isSelected={isExpanded}>
        {archives.years.map(({ year, uri }) => (
          <MenuItem key={year}>
            <ItemLink href={uri} $isActive={currentPathname === uri}>
              {getYearArchiveTitle(year, t)}
            </ItemLink>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default Sidebar

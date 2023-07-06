import React from "react"
import { useMedia } from "react-use"
import { useTranslation } from "react-i18next"

import { useSidebarData } from "./graphql"
import { generateArchiveList, getArchiveTitle, getArchiveLink } from "./helpers"
import { ArrowIcon, Menu, MenuItem, ItemLink, MenuList, MenuTitle } from "./Styles"

import { useLocaleCode } from "@utils/locales"
import { breakpoints } from "@utils/styles"

const Sidebar = (): JSX.Element => {
  const { t } = useTranslation()
  const localeCode = useLocaleCode()

  const sidebarArticles = useSidebarData().filter((sidebarArticle) => sidebarArticle.localeCode === localeCode)

  const archiveList = generateArchiveList(sidebarArticles.map((sidebarArticle) => new Date(sidebarArticle.date)))

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
    <Menu onClick={(e) => e.stopPropagation()}>
      <MenuTitle onClick={() => isMobile && setIsExpanded((prev) => !prev)}>
        {t("blog.older_posts")}
        <ArrowIcon code={isExpanded ? "expand_less" : "expand_more"} />
      </MenuTitle>

      <MenuList $isSelected={isExpanded}>
        {archiveList.map((archiveInfo) => (
          <MenuItem key={[archiveInfo.year, archiveInfo.month].join("_")}>
            <ItemLink to={getArchiveLink(archiveInfo)} activeClassName="active">
              {getArchiveTitle(archiveInfo, t)}
            </ItemLink>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default Sidebar

export { getArchiveTitle, generateArchiveList } from "./helpers"

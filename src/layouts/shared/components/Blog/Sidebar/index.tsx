import React, { useEffect, useState } from "react"
import { useMedia } from "react-use"
import { useTranslation } from "react-i18next"

import { useSidebarData } from "./graphql"
import { generateArchiveList, getArchiveTitle, getArchiveLink, getRecentArticles } from "./helpers"
import { ArrowIcon, Menu, MenuItem, ItemLink, MenuList, MenuTitle, SearchIcon, SearchForm, SearchInput } from "./Styles"

import { useLocaleCode } from "@utils/locales"

interface SidebarProps {
  onQueryChange: (query: string) => void
  searchQuery?: string
  hideSearchInput?: boolean
}

const Sidebar = ({ onQueryChange, searchQuery, hideSearchInput = false }: SidebarProps): JSX.Element => {
  const { t } = useTranslation()
  const localeCode = useLocaleCode()

  const sidebarArticles = useSidebarData().filter((sidebarArticle) => sidebarArticle.localeCode === localeCode)

  const recentSidebarArticles = getRecentArticles(sidebarArticles)

  const archiveList = generateArchiveList(sidebarArticles.map((sidebarArticle) => new Date(sidebarArticle.date)))
  const isDesktop = useMedia("(min-width: 1024px)")
  const [query, setQuery] = useState(searchQuery || "")

  useEffect(() => {
    const updatedSearchQuery = searchQuery || ""
    if (query !== updatedSearchQuery) {
      setQuery(updatedSearchQuery)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery])

  const [isRecentPostsExpanded, setRecentPostsExpanded] = useState(true)
  const [isArchiveExpanded, setArchiveExpanded] = useState(true)

  useEffect(() => {
    setRecentPostsExpanded(isDesktop)
    setArchiveExpanded(isDesktop)
  }, [isDesktop])

  function handleSearchSubmit(event: React.MouseEvent<HTMLElement> | React.FormEvent): void {
    event.preventDefault()

    if (query.trim() !== searchQuery) {
      onQueryChange(query.trim())
    }
  }

  return (
    <aside className="section__sidebar">
      {hideSearchInput ? null : (
        <SearchForm onSubmit={handleSearchSubmit}>
          <SearchInput
            type="text"
            placeholder={t("misc.search")}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <SearchIcon className="fa fa-search" onClick={handleSearchSubmit} />
        </SearchForm>
      )}

      <Menu>
        <MenuTitle onClick={() => !isDesktop && setRecentPostsExpanded((prev) => !prev)}>
          {t("misc.recent_posts")}
          <ArrowIcon className={isRecentPostsExpanded ? "fa fa-angle-up" : "fa fa-angle-down"} />
        </MenuTitle>

        <MenuList $isSelected={isRecentPostsExpanded}>
          {recentSidebarArticles.map((sidebarArticle, index) => (
            <MenuItem key={index}>
              <ItemLink to={sidebarArticle.path} addLocalePrefix={false} activeClassName="active">
                {sidebarArticle.title}
              </ItemLink>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>

      <Menu>
        <MenuTitle onClick={() => !isDesktop && setArchiveExpanded((prev) => !prev)}>
          {t("misc.archives")}
          <ArrowIcon className={isArchiveExpanded ? "fa fa-angle-up" : "fa fa-angle-down"} />
        </MenuTitle>

        <MenuList $isSelected={isArchiveExpanded}>
          {archiveList.map((archiveInfo) => (
            <MenuItem key={[archiveInfo.year, archiveInfo.month].join("_")}>
              <ItemLink to={getArchiveLink(archiveInfo)} activeClassName="active">
                {getArchiveTitle(archiveInfo, t)}
              </ItemLink>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </aside>
  )
}

export default Sidebar

export { getArchiveTitle, generateArchiveList } from "./helpers"

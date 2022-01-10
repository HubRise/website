import * as React from "react"
import classnames from "classnames"
import { useMedia } from "react-use"
import { GatsbyImage } from "gatsby-plugin-image"

import { FolderPage } from "../interface"

import { List, ItemLink, Item, TitleLink, Title, ArrowIcon, SubList, SubItemLink } from "./Styles"

import { createHeaderAnchor, generateKey } from "@utils/misc"
import Link from "@layouts/shared/components/Link"
import { ImageSharp } from "@utils/image"

interface NavigatorProps {
  currentPath: string
  folderPages: Array<FolderPage>
  title: string
  logo?: ImageSharp
  headings: Array<Heading>
}

export interface Heading {
  depth: number
  value: string
}

const Navigator = ({ currentPath, folderPages, title, logo, headings }: NavigatorProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const [isFixed, setFixed] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const isDesktop = useMedia("(min-width: 1024px)")
  const [currentTitle, setCurrentTitle] = React.useState(title)

  const chapterMainPath = folderPages[0].path

  React.useLayoutEffect(() => {
    if (isDesktop && isFixed) {
      setFixed(false)
    }
  }, [isDesktop, isFixed])

  React.useLayoutEffect(() => {
    function onScroll() {
      const newTitle = getCurrentTitle() || title
      if (currentTitle !== newTitle) setCurrentTitle(newTitle)

      const rect = containerRef.current!.getBoundingClientRect()
      const top = rect.top + window.pageYOffset
      const scrollTop = document.documentElement.scrollTop

      if (top <= scrollTop && !isFixed) setFixed(true)
      if (top > scrollTop && isFixed) setFixed(false)
    }

    document.addEventListener("scroll", onScroll)
    return () => document.removeEventListener("scroll", onScroll)
  }, [setCurrentTitle, currentTitle, isDesktop, isFixed, title])

  return (
    <div
      className={classnames(
        "section__sidebar",
        "section__sidebar_right",
        "section__sidebar_small-padding",
        "section__sidebar_sticky",
        isDesktop ? "section__sidebar_desktop" : "",
      )}
    >
      {logo && (
        <div className="section__sidebar_logo">
          <Link to={chapterMainPath} addLocalePrefix={false}>
            <GatsbyImage alt={title} image={logo.gatsbyImageData} />
          </Link>
        </div>
      )}

      <div ref={containerRef} className="section__sidebar-in-wrapper">
        <div
          className={classnames(
            "section__sidebar-in",
            logo && "section__sidebar_sticky",
            isFixed && "section__sidebar_fixed",
          )}
        >
          <Title>
            <TitleLink to={chapterMainPath} addLocalePrefix={false}>
              {title}
            </TitleLink>
          </Title>

          <Title onClick={() => setIsExpanded((v) => !v)} $forMobile={true} $isExpanded={isExpanded}>
            {currentTitle}
            <ArrowIcon className={classnames("fa", isExpanded ? "fa-angle-up" : "fa-angle-down")} />
          </Title>

          <List $isExpanded={isExpanded}>
            {folderPages.map(({ title, path }, idx) => {
              const isCurrentPage = currentPath === path

              return (
                <Item key={generateKey(title, idx)} $isActive={isCurrentPage}>
                  <ItemLink
                    to={path}
                    addLocalePrefix={false}
                    onClick={isDesktop ? undefined : () => setIsExpanded(false)}
                    $isActive={isCurrentPage}
                  >
                    {title}
                  </ItemLink>

                  {isCurrentPage && headings.length !== 0 && (
                    <SubList>
                      {headings
                        .filter(({ depth }) => depth === 2)
                        .map(({ value: headingText }, idx) => (
                          <li key={generateKey(headingText, idx)}>
                            <SubItemLink
                              to={`#${createHeaderAnchor(headingText)}`}
                              onClick={isDesktop ? undefined : () => setIsExpanded(false)}
                              $isActive={currentTitle === headingText}
                            >
                              <span>{headingText}</span>
                            </SubItemLink>
                          </li>
                        ))}
                    </SubList>
                  )}
                </Item>
              )
            })}
          </List>
        </div>
      </div>
    </div>
  )
}

export default Navigator

function getCurrentTitle(): string | null {
  const titleNodeList = Array.from(document.querySelectorAll("h2")).reverse()

  const currentTitleNode = titleNodeList.find((titleNode) => {
    const rect = titleNode.getBoundingClientRect()
    const nodeTop = rect.top + window.pageYOffset

    return nodeTop <= document.documentElement.scrollTop + 100
  })

  return currentTitleNode ? currentTitleNode.textContent : null
}

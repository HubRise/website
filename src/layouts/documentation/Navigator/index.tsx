import * as React from "react"
import { useMedia } from "react-use"

import { FolderPage } from "../interface"

import { List, ItemLink, Item, TitleLink, Title, ArrowIcon, StyledNavigator, SubList, SubItemLink } from "./Styles"

import { createHeaderAnchor, generateKey } from "@utils/misc"
import { breakpoints } from "@utils/styles"

interface NavigatorProps {
  currentPath: string
  folderPages: Array<FolderPage>
  title: string
  headings: Array<Heading>
}

export interface Heading {
  depth: number
  value: string
}

const Navigator = ({ currentPath, folderPages, title, headings }: NavigatorProps): JSX.Element => {
  const [currentTitle, setCurrentTitle] = React.useState(title)

  const [isExpanded, setIsExpanded] = React.useState(false)
  const isMobile = !useMedia(`(min-width: ${breakpoints.documentationStickyMenu})`)

  const chapterMainPath = folderPages[0].path

  React.useLayoutEffect(() => {
    function onScroll() {
      const newTitle = getCurrentTitle() || title
      if (currentTitle !== newTitle) setCurrentTitle(newTitle)
    }

    document.addEventListener("scroll", onScroll)
    return () => document.removeEventListener("scroll", onScroll)
  }, [currentTitle, title])

  return (
    <StyledNavigator>
      <Title>
        <TitleLink to={chapterMainPath} addLocalePrefix={false}>
          {title}
        </TitleLink>
      </Title>

      <Title onClick={() => setIsExpanded((v) => !v)} $forMobile={true} $isExpanded={isExpanded}>
        {currentTitle}
        <ArrowIcon code={isExpanded ? "expand_less" : "expand_more"} />
      </Title>

      <List $isExpanded={isExpanded}>
        {folderPages.map(({ title, path }, idx) => {
          const isCurrentPage = currentPath === path

          return (
            <Item key={generateKey(title, idx)} $isActive={isCurrentPage}>
              <ItemLink
                to={path}
                addLocalePrefix={false}
                onClick={isMobile ? () => setIsExpanded(false) : undefined}
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
                          onClick={isMobile ? () => setIsExpanded(false) : undefined}
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
    </StyledNavigator>
  )
}

export default Navigator

function getCurrentTitle(): string | null {
  const titleNodeList = Array.from(document.querySelectorAll("h2")).reverse()

  const currentTitleNode = titleNodeList.find((titleNode) => {
    const rect = titleNode.getBoundingClientRect()
    const nodeTop = rect.top + window.scrollY
    return nodeTop <= document.documentElement.scrollTop + 100
  })

  return currentTitleNode ? currentTitleNode.textContent : null
}

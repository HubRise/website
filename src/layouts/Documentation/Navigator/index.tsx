import * as React from "react"
import { useMedia } from "react-use"

import { DocFolder, DocMdFile } from "@utils/DocIndexer/types"
import type { HeaderLink } from "@utils/mdx/remarkHeadingsPlugin"
import { breakpoints } from "@utils/styles"

import { List, ItemLink, Item, TitleLink, Title, ArrowIcon, StyledNavigator, SubItemLink, SubList } from "./Styles"

interface NavigatorProps {
  mdFile: DocMdFile
  folder: DocFolder
  headerLinks: Array<HeaderLink>
}

const Navigator = ({ mdFile, folder, headerLinks }: NavigatorProps): JSX.Element => {
  const title = folder.name
  const [currentTitle, setCurrentTitle] = React.useState(title)

  const [isExpanded, setIsExpanded] = React.useState(false)
  const isMobile = !useMedia(`(min-width: ${breakpoints.documentationStickyMenu})`)

  const chapterMainUri = folder.folderLinks[0].uri

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
        <TitleLink href={chapterMainUri}>{title}</TitleLink>
      </Title>

      <Title onClick={() => setIsExpanded((v) => !v)} $forMobile={true} $isExpanded={isExpanded}>
        {currentTitle}
        <ArrowIcon code={isExpanded ? "expand_less" : "expand_more"} />
      </Title>

      <List $isExpanded={isExpanded}>
        {folder.folderLinks.map(({ label, uri }, idx) => {
          const isCurrentPage = uri === mdFile.uri

          return (
            <Item key={idx} $isActive={isCurrentPage}>
              <ItemLink
                href={uri}
                onClick={isMobile ? () => setIsExpanded(false) : undefined}
                $isActive={isCurrentPage}
              >
                {label}
              </ItemLink>

              {isCurrentPage && headerLinks.length !== 0 && (
                <SubList>
                  {headerLinks
                    .filter(({ depth }) => depth === 2)
                    .map(({ title, generatedId }, idx) => (
                      <li key={idx}>
                        <SubItemLink
                          href={`#${generatedId}`}
                          onClick={isMobile ? () => setIsExpanded(false) : undefined}
                          $isActive={currentTitle === title}
                        >
                          <span>{title}</span>
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

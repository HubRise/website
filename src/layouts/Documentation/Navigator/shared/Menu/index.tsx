import * as React from "react"

import { NavigatorProps } from "../utils"

import { Item, ItemLink, SubItemLink, SubList, StyledMenu } from "./Styles"

interface MenuProps extends NavigatorProps {
  currentTitle: string
  isMobile: boolean
  onNavigate: () => void
}

const Menu = ({ mdFile, folder, headerLinks, currentTitle, isMobile, onNavigate }: MenuProps): JSX.Element => {
  return (
    <StyledMenu>
      {folder.folderLinks.map(({ label, uri }, idx) => {
        const isCurrentPage = uri === mdFile.uri

        return (
          <Item key={idx} $isActive={isCurrentPage}>
            <ItemLink href={uri} onClick={onNavigate} $isActive={isCurrentPage} $isMobile={isMobile}>
              {label}
            </ItemLink>

            {isCurrentPage && headerLinks.length !== 0 && (
              <SubList>
                {headerLinks
                  .filter(({ depth }) => depth === 2)
                  .map(({ title, generatedId }, idx) => (
                    <li key={idx}>
                      <SubItemLink href={`#${generatedId}`} onClick={onNavigate} $isActive={currentTitle === title}>
                        <span>{title}</span>
                      </SubItemLink>
                    </li>
                  ))}
              </SubList>
            )}
          </Item>
        )
      })}
    </StyledMenu>
  )
}

export default Menu

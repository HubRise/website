import Link from "next/link"
import styled, { css } from "styled-components"

import {
  StyledAccordion,
  TitleWrapper as AccordionTitle,
  ContentWrapper as AccordionContent,
  ExpandIconWrapper,
} from "@components/Accordion/Styles"
import { StyledButton } from "@components/Button/Styles"
import { AppList } from "@components/Header/IncludedApps/Styles"
import Icon from "@components/Icon"
import { breakpoints, colors, fontSizes, mixin, sizes, zIndexValues } from "@utils/styles"

export const StyledMobileBar = styled.div`
  @media (min-width: ${breakpoints.burgerMenu}) {
    display: none;
  }
`

export const Container = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${colors.backgroundWhite};
  z-index: ${zIndexValues.mobileBarMenu};
  overflow: auto;
`

export const Header = styled.header`
  position: relative;
  height: ${sizes.headerHeight};
  border-bottom: 3px solid ${colors.headerBorder};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.625rem;
`

export const HeaderIcon = styled(Icon)`
  padding: 0 0.5rem;
  display: flex;
  ${mixin.clickable}
`

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;

  ${StyledAccordion} {
    ${AccordionTitle} {
      padding: 0.75rem 0;
    }

    ${AccordionContent} {
      margin-bottom: 0;
    }

    h4 {
      font-size: ${fontSizes._16};
      color: ${colors.textDark};
    }

    ${ExpandIconWrapper} {
      width: auto;
      height: auto;
    }
  }

  ${AppList} {
    padding-left: 0;
    padding-right: 0;
  }
`

export const NavLink = styled(Link)<{ $isActive: boolean }>`
  display: block;
  padding: 0.75rem 0;
  font-weight: 600;
  color: ${colors.textDark};
  ${mixin.linkOver(colors.primary)};

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: ${colors.primary};
    `};
`

export const Buttons = styled.div`
  ${StyledButton} {
    margin-top: 0.625rem;
    width: 100%;

    &:first-child {
      margin-top: 1.25rem;
    }
  }
`

export const LanguageList = styled.ul`
  display: flex;
  gap: 1.5rem;
  padding: 0.75rem 0;

  li {
    position: relative;

    &::after {
      content: "•";
      font-size: ${fontSizes._24};
      color: ${colors.primary};
      position: absolute;
      right: -1.1rem;
      top: 0;
      height: 100%;
      display: flex;
      align-items: center;
    }

    &:last-child {
      &::after {
        display: none;
      }
    }
  }
`

export const LanguageItem = styled.li<{ $isActive: boolean }>`
  ${({ $isActive }) =>
    $isActive &&
    css`
      color: ${colors.primary};
    `};
`

export const LanguageLink = styled(Link)`
  color: ${colors.textDark};
  ${mixin.linkOver(colors.primary)};
`

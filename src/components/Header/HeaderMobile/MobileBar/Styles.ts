import Link from "next/link"
import styled, { css } from "styled-components"

import Icon from "@components/Icon"
import { breakpoints, colors, fontSizes, mixin, sizes, zIndexValues } from "@utils/styles"

export const StyledMobileBar = styled.div`
  @media (min-width: ${breakpoints.burgerMenu}) {
    display: none;
  }
`
export const Backdrop = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${zIndexValues.mobileBarBackdrop};
`

export const Container = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 70%;
  max-width: 25em;
  background-color: ${colors.white};
  z-index: ${zIndexValues.mobileBarMenu};
  flex-direction: column;
`

export const Header = styled.header`
  position: relative;
  height: ${sizes.headerHeight};
  border-bottom: 4px solid ${colors.primary};
  color: ${colors.primary};
`

export const HeaderIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 4rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  ${mixin.clickable};
`

export const HeaderTitle = styled.div`
  height: 100%;
  ${mixin.centerElement};
  font-size: ${fontSizes._32};
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
`

export const Nav = styled.div`
  flex: 1;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const NavLink = styled(Link)<{ $topMargin?: boolean; $isActive: boolean }>`
  width: 100%;
  padding: 0.5rem 1rem;
  ${(props) => props.$topMargin && "margin-top: 2rem"};

  color: ${colors.textDark};
  ${mixin.linkOver(colors.primary)};

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: ${colors.primary};
    `};
`

export const NavLinkLogin = styled(Link)`
  display: block;
  padding: 0.3em 0;
  margin: 0 1em;
  color: ${colors.white};
  background-color: ${colors.primary};
  border-radius: 3px;

  ${mixin.buttonOver(colors.white, colors.textDarkest)};
`

export const LanguageList = styled.ul`
  flex: 0 0 2em;
  display: flex;
  justify-content: center;
`

export const LanguageItem = styled.li<{ $isActive: boolean }>`
  margin: 0.5em 0.8em;

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

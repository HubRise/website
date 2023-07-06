import styled from "styled-components"

import { breakpoints, colors, fontSizes, mixin, sizes, zIndexValues } from "@utils/styles"
import Link from "@layouts/shared/components/Link"
import Icon from "@layouts/shared/components/Icon"

export const StyledMobileBar = styled.div`
  @media (min-width: ${breakpoints.burgerMenu}) {
    display: none;
  }
`
export const Backdrop = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${zIndexValues.mobileBarBackdrop};
`

export const Container = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
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
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
  height: ${sizes.headerHeight};
  border-bottom: 4px solid ${colors.primary};
  color: ${colors.primary};
`

export const HeaderIcon = styled(Icon)`
  margin-left: 1rem;
`

export const HeaderTitle = styled.div`
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

export const NavLink = styled(Link)<{ $topMargin?: boolean }>`
  width: 100%;
  color: ${colors.textDark};
  padding: 0.5rem 1rem;
  ${(props) => props.$topMargin && "margin-top: 2rem"};

  ${mixin.linkOver(colors.primary)};

  &.is-active {
    color: ${colors.primary};
  }
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

export const LanguageItem = styled.li`
  margin: 0.5em 0.8em;

  &.is-active {
    color: ${colors.primary};
  }
`

export const LanguageLink = styled(Link)`
  color: ${colors.textDark};
  ${mixin.linkOver(colors.primary)};
`

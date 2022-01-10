import styled from "styled-components"

import { breakpoints, colors, mixin, sizes, zIndexValues } from "@utils/styles"
import Link from "@layouts/shared/components/Link"

export const StyledMobileBar = styled.div`
  @media (min-width: ${breakpoints.large}) {
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
  font-size: 2rem;
  font-weight: 600;
  color: ${colors.primary};
`

export const HeaderButton = styled.div`
  padding-left: 0.5em;
`

export const HeaderTitle = styled.div`
  text-align: center;
  text-transform: uppercase;
`

export const Nav = styled.div`
  flex: 1;
  padding-top: 2em;
  text-align: center;
`

export const NavLink = styled(Link)`
  display: block;
  color: ${colors.gray};
  margin-bottom: 1em;
  padding: 0 1em;

  ${mixin.linkOver(colors.primary)};

  &.is-active {
    color: ${colors.primary};
  }

  &.signup {
    margin-top: 2em;
  }
`

export const NavLinkLogin = styled(Link)`
  display: block;
  padding: 0.3em 0;
  margin: 0 1em;
  color: ${colors.white};
  background-color: ${colors.primary};
  border-radius: 3px;

  ${mixin.buttonOver(colors.white, colors.darkGray)};
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
  color: ${colors.gray};
  ${mixin.linkOver(colors.primary)};
`

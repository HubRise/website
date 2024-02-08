import Link from "next/link"
import styled, { css } from "styled-components"

import { breakpoints, colors, mixin } from "@utils/styles"

import { headerStyle } from "../shared/styles"

export const StyledHeader = styled.div`
  display: none;

  @media (min-width: ${breakpoints.burgerMenu}) {
    display: flex;
    position: sticky;
    top: 0;
    justify-content: space-between;
    align-items: center;
    padding: 0 2%;
    ${headerStyle};
  }
`

export const Menu = styled.ul`
  display: flex;
`

export const MenuItem = styled.li<{ $isActive: boolean }>`
  ${mixin.dotSeparatedList("0.5rem")};

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: ${colors.primary};
    `}
`

export const MenuLink = styled(Link)<{ $isActive: boolean }>`
  color: ${colors.textDarkest};
  ${mixin.linkOver(colors.primary)};

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: ${colors.primary};
    `}
`

const callToAction = css`
  margin-left: 0.6em;
  white-space: nowrap;
  ${mixin.button};
  ${mixin.buttonOver(colors.white, colors.textDarkest)};
`

export const Signup = styled.a`
  ${callToAction};
  color: ${colors.textDark};
  background-color: #eeeeee;
`

export const Login = styled.a`
  ${callToAction};
  color: ${colors.white};
  background-color: ${colors.primary};
`

import styled, { css } from "styled-components"

import { headerStyle } from "../helpers"

import { breakpoints, colors, mixin } from "@utils/styles"
import Link from "@layouts/shared/components/Link"

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

export const MenuItem = styled.li`
  ${mixin.dotSeparatedList("0.5rem")};

  &.is-active {
    color: ${colors.primary};
  }
`

export const MenuLink = styled(Link)`
  color: ${colors.textDarkest};
  ${mixin.linkOver(colors.primary)};

  &.is-active {
    color: ${colors.primary};
  }
`

const callToAction = css`
  margin-left: 0.6em;
  white-space: nowrap;
  ${mixin.button};
  ${mixin.buttonOver(colors.white, colors.textDarkest)};
`

export const Signup = styled(Link)`
  ${callToAction};
  color: ${colors.textDark};
  background-color: #eeeeee;
`

export const Login = styled(Link)`
  ${callToAction};
  color: ${colors.white};
  background-color: ${colors.primary};
`

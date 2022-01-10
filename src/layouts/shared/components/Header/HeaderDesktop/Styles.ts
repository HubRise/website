import styled, { css } from "styled-components"

import { breakpoints, colors, mixin } from "@utils/styles"
import Link from "@layouts/shared/components/Link"

export const StyledHeader = styled.div`
  display: none;

  @media (min-width: ${breakpoints.large}) {
    display: flex;
    position: sticky;
    top: 0;
    justify-content: space-between;
    align-items: center;
    padding: 0 2%;
    ${mixin.headerStyle};
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
  color: ${colors.darkGray};
  ${mixin.linkOver(colors.primary)};

  &.is-active {
    color: ${colors.primary};
  }
`

const callToAction = css`
  margin-left: 0.6em;
  ${mixin.button};
  ${mixin.buttonOver(colors.white, colors.darkGray)};
`

export const Signup = styled(Link)`
  ${callToAction};
  color: ${colors.gray};
  background-color: #eeeeee;
`

export const Login = styled(Link)`
  ${callToAction};
  color: ${colors.white};
  background-color: ${colors.primary};
`

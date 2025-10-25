import Link from "next/link"
import styled, { css } from "styled-components"

import { StyledButton } from "@components/Button/Styles"
import { breakpoints, colors, mixin } from "@utils/styles"

import { headerStyle } from "../shared/styles"

export const StyledHeader = styled.div<{ $isIntegrationsNavSticky: boolean }>`
  display: none;

  @media (min-width: ${breakpoints.burgerMenu}) {
    display: block;
    position: sticky;
    top: 0;
    ${headerStyle};
  }
`

export const HeaderWrapper = styled.div`
  ${mixin.containerWrapper}
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

export const Menu = styled.ul`
  display: flex;
  align-items: center;
`

export const MenuItem = styled.li<{ $isActive: boolean }>`
  ${mixin.clickable};
  padding: 1rem;

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: ${colors.primary};
    `}
`

export const MenuLink = styled(Link)<{ $isActive: boolean }>`
  font-weight: 500;
  ${mixin.linkOver(colors.primary)};

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: ${colors.primary};
    `}
`

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  ${StyledButton} {
    margin-top: 0;
  }
`

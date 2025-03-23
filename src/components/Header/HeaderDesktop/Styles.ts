import Link from "next/link"
import styled, { css } from "styled-components"

import { StyledButton } from "@components/Button/Styles"
import { breakpoints, colors, fontSizeMixins, mixin } from "@utils/styles"

import { headerStyle } from "../shared/styles"

export const StyledHeader = styled.div`
  display: none;

  @media (min-width: ${breakpoints.burgerMenu}) {
    display: flex;
    position: sticky;
    top: 0;
    justify-content: space-between;
    align-items: center;
    padding: 0 3%;
    ${headerStyle};
  }
`

export const Menu = styled.ul`
  display: flex;
  gap: 2rem;
`

export const MenuItem = styled.li<{ $isActive: boolean }>`
  ${mixin.clickable};

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: ${colors.primary};
    `}
`

export const MenuLink = styled(Link)<{ $isActive: boolean }>`
  ${fontSizeMixins.fontSizeTextMd}
  font-weight: 600;
  color: ${colors.textDark};
  ${mixin.linkOver(colors.primary)};

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: ${colors.primary};
    `}

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeTextLg}
  }
`

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  ${StyledButton} {
    margin-top: 0;
  }
`

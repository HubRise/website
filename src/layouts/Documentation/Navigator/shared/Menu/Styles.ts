import Link from "next/link"
import styled, { css } from "styled-components"

import { breakpoints, colors, fontSizes, mixin } from "@utils/styles"

const stickyVerticalPadding = "0.5rem"

export const StyledMenu = styled.div``

export const Item = styled.li<{ $isActive: boolean }>`
  color: ${colors.textDarkest};
  font-size: ${fontSizes._14};
  width: 100%;
  display: inline-block;

  ${(props) =>
    props.$isActive &&
    css`
      color: ${colors.white};
    `}
`

export const ItemLink = styled(Link)<{ $isActive: boolean; $isMobile: boolean }>`
  display: block;
  ${({ $isMobile }) =>
    $isMobile
      ? css`
          padding: ${stickyVerticalPadding} 0.25rem ${stickyVerticalPadding} 1rem;
        `
      : css`
          padding: 0.25rem 0.25rem 0.25rem 1rem;
        `};

  ${mixin.linkColor(colors.textDarkest)};
  font-weight: 500;

  ${mixin.linkOver(colors.primary)};

  ${({ $isActive }) =>
    $isActive &&
    css`
      ${mixin.linkColor(colors.white)};
      background-color: ${colors.primary};

      &:hover {
        color: ${colors.white};
      }
    `}
`

export const SubList = styled.ol`
  margin-left: 1.7rem;
  margin-top: 0.2rem;
  list-style: none;
`

export const SubItemLink = styled(Link)<{ $isActive: boolean }>`
  padding: ${stickyVerticalPadding} 0.25rem ${stickyVerticalPadding} 0;
  ${mixin.linkColor(colors.textDarkest)};
  display: inline-block;
  width: 100%;

  ${mixin.linkOver(colors.primary)};

  @media (min-width: ${breakpoints.large}) {
    padding-top: 0.125rem;
    padding-bottom: 0.125rem;
  }

  ${(props) =>
    props.$isActive &&
    css`
      ${mixin.linkColor(colors.primary)};
      font-weight: 500;
    `}
`

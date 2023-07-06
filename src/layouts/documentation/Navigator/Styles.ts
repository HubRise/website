import styled, { css, FlattenSimpleInterpolation } from "styled-components"

import Link from "@layouts/shared/components/Link"
import { boxShadows, breakpoints, colors, fontSizes, iconSizes, mixin, zIndexValues } from "@utils/styles"
import Icon from "@layouts/shared/components/Icon"

const stickyVerticalPadding = "0.5rem"

export const StyledNavigator = styled.div`
  @media not (min-width: ${breakpoints.documentationStickyMenu}) {
    border-top: thin solid ${colors.textLighter};
    border-bottom: thin solid ${colors.textLighter};
    box-shadow: ${boxShadows.small};
  }
`

export const Title = styled.h5<{ $forMobile?: boolean; $isExpanded?: boolean }>`
  display: none;
  position: relative;
  padding-top: 1rem;
  color: ${colors.textDarkest};
  font-weight: bold;
  cursor: pointer;

  @media (min-width: ${breakpoints.documentationStickyMenu}) {
    display: block;
    padding-left: 1rem;
  }

  ${(props) =>
    props.$forMobile &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;

      @media (min-width: ${breakpoints.documentationStickyMenu}) {
        display: none;
      }
    `}

  ${(props) =>
    props.$isExpanded &&
    css`
      border-bottom: thin solid ${colors.primary};
    `}
`

const linkColor = (color: string): FlattenSimpleInterpolation => css`
  color: ${color};
  :hover,
  :focus {
    color: ${color};
  }
`

export const TitleLink = styled(Link)`
  ${linkColor(colors.textDarkest)};
`

export const List = styled.ul<{ $isExpanded?: boolean }>`
  padding: 1rem 0;

  @media not (min-width: ${breakpoints.documentationStickyMenu}) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: ${zIndexValues.header};
    padding: 0;

    background-color: ${colors.backgroundWhite};
    border-bottom: thin solid ${colors.primary};
    box-shadow: ${boxShadows.medium};
  }

  ${(props) =>
    !props.$isExpanded &&
    css`
      display: none;

      @media (min-width: ${breakpoints.documentationStickyMenu}) {
        display: block;
      }
    `}
`

export const ArrowIcon = styled(Icon).attrs({ size: iconSizes._32 })`
  color: ${colors.primary};
  cursor: pointer;

  @media (min-width: ${breakpoints.documentationStickyMenu}) {
    display: none;
  }
`

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

export const ItemLink = styled(Link)<{ $isActive: boolean }>`
  display: block;
  padding: ${stickyVerticalPadding} 0.25rem ${stickyVerticalPadding} 1rem;
  ${linkColor(colors.textDarkest)};
  font-weight: 500;

  @media (min-width: ${breakpoints.documentationStickyMenu}) {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }

  ${mixin.linkOver(colors.primary)};

  ${(props) =>
    props.$isActive &&
    css`
      ${linkColor(colors.white)};
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
  ${linkColor(colors.textDarkest)};
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
      ${linkColor(colors.primary)};
      font-weight: 500;
    `}
`

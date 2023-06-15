import styled, { css } from "styled-components"

import { boxShadows, breakpoints, colors, fontSizes, mixin, sizes, zIndexValues } from "@utils/styles"
import Link from "@layouts/shared/components/Link"

export const Menu = styled.div`
  position: relative;
`

export const MenuTitle = styled.h5`
  position: relative;
  padding: 1rem ${sizes.mobilePadding};
  color: ${colors.textLight};
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${breakpoints.blogStickyMenu}) {
    cursor: default;
    padding-left: ${sizes.desktopPadding};
    padding-right: ${sizes.desktopPadding};
  }

  &:before {
    border-bottom: 4px solid #ececec;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    @media (min-width: ${breakpoints.blogStickyMenu}) {
      width: 65%;
    }
  }
`

export const ArrowIcon = styled.i`
  color: ${colors.primary};
  font-size: ${fontSizes._24};
  padding: 0.5rem;
  cursor: pointer;

  @media (min-width: ${breakpoints.blogStickyMenu}) {
    display: none;
  }
`

export const MenuList = styled.div<{ $isSelected: boolean }>`
  @media not (min-width: ${breakpoints.blogStickyMenu}) {
    position: absolute;
    top: 100%;
    z-index: ${zIndexValues.mobileBarMenu};
    width: 100%;
    padding: 0.5rem 0;
    background-color: ${colors.backgroundWhite};
    border-bottom: thin solid ${colors.borderLight};
    box-shadow: ${boxShadows.medium};
  }

  @media (min-width: ${breakpoints.blogStickyMenu}) {
    margin-top: 1rem;
  }

  ${(props) =>
    props.$isSelected === false &&
    css`
      @media not (min-width: ${breakpoints.blogStickyMenu}) {
        display: none;
      }
    `}
`

export const MenuItem = styled.div``

export const ItemLink = styled(Link)`
  display: block;
  padding: 0.5rem ${sizes.mobilePadding};
  @media (min-width: ${breakpoints.blogStickyMenu}) {
    padding: 0.5rem ${sizes.desktopPadding};
  }

  color: ${colors.textDark};
  ${mixin.linkOver(colors.primary)};

  .active {
    color: ${colors.primary};
  }
`

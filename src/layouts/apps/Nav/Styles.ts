import styled, { css } from "styled-components"

import Link from "@layouts/shared/components/Link"
import { colors, mixin, sizes, zIndexValues } from "@utils/styles"

export const StyledNav = styled.div<{ $isSticky: boolean }>`
  position: sticky;
  top: ${sizes.headerHeight};
  z-index: ${zIndexValues.mobileBarMenu};
  padding: 0.5rem 0;
  transition: background-color, color 0.3s;

  ${(props) =>
    props.$isSticky &&
    css`
      background-color: ${colors.primary};
      color: ${colors.white};
    `}
`

export const List = styled.ul`
  ${mixin.container};
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

export const Item = styled.li`
  ${mixin.dotSeparatedList("0.5rem")};
  line-height: 2rem;
`

export const StyledLink = styled(Link)<{ $isSticky: boolean; $isActive: boolean }>`
  ${(props) =>
    props.$isActive &&
    css`
      text-decoration: underline;
    `}

  ${({ $isSticky, $isActive }) =>
    $isSticky
      ? css`
          color: ${$isActive ? colors.white : "#eee"};

          :hover {
            color: ${colors.white};
          }
        `
      : css`
          color: ${$isActive ? colors.primary : colors.gray};

          :hover {
            color: ${colors.primary};
          }
        `}
`

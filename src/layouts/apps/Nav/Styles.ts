import styled, { css } from "styled-components"

import Link from "@layouts/shared/components/Link"
import { colors, mixin, sizes, zIndexValues } from "@utils/styles"

export const StyledNav = styled.div<{ $isSticky: boolean }>`
  position: sticky;
  top: ${sizes.headerHeight};
  z-index: ${zIndexValues.header};
  padding: 0.5rem 0;

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

export const Item = styled.li<{ $isSticky: boolean }>`
  ${({ $isSticky }) => mixin.dotSeparatedList("0.5rem", $isSticky ? colors.white : undefined)};
  line-height: 2rem;
`

export const StyledLink = styled(Link)<{ $isActive: boolean; $isSticky: boolean }>`
  color: ${({ $isActive, $isSticky }) => ($isSticky ? colors.white : $isActive ? colors.primary : colors.textDark)};
  text-decoration: ${({ $isActive }) => ($isActive ? "underline" : "none")};

  :hover {
    color: ${({ $isSticky }) => ($isSticky ? colors.white : colors.primary)};
    text-decoration: underline;
  }
`

import Link from "next/link"
import styled, { css } from "styled-components"

import { colors, mixin } from "@utils/styles"

export const Nav = styled.div<{ $isSticky: boolean }>`
  ${({ $isSticky }) =>
    $isSticky &&
    css`
      background-color: ${colors.primary};
    `};
`

export const List = styled.div`
  ${mixin.container};
  padding: 0.5rem 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

export const Item = styled.div<{ $isSticky: boolean }>`
  ${({ $isSticky }) => mixin.dotSeparatedList("0.5rem", $isSticky ? colors.white : undefined)};
  line-height: 2rem;
`

export const StyledLink = styled(Link)<{ $isActive: boolean; $isSticky: boolean }>`
  color: ${({ $isActive, $isSticky }) => ($isSticky ? colors.white : $isActive ? colors.primary : colors.textDark)};
  text-decoration: ${({ $isActive }) => ($isActive ? "underline" : "none")};

  &:hover {
    color: ${({ $isSticky }) => ($isSticky ? colors.white : colors.primary)};
    text-decoration: underline;
  }
`

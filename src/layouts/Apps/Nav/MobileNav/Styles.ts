import Link from "next/link"
import styled from "styled-components"

import { colors, fontSizes, mixin } from "@utils/styles"

export const List = styled.div``

export const Item = styled.div`
  padding: 0.5rem 0.25rem 0.5rem 1rem;
  font-size: ${fontSizes._14};
  font-weight: 500;
`

export const StyledLink = styled(Link)<{ $isActive: boolean }>`
  ${({ $isActive }) => mixin.linkColor($isActive ? colors.primary : colors.textDark)};
  ${mixin.linkOver(colors.primary)};
`

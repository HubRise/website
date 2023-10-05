import Link from "next/link"
import styled from "styled-components"

import { colors, mixin } from "@utils/styles"

export const StyledNavigator = styled.div``

export const Title = styled.h5`
  position: relative;
  padding-left: 1rem;
  padding-top: 1rem;
  color: ${colors.textDarkest};
  font-weight: bold;
  cursor: pointer;
`

export const TitleLink = styled(Link)`
  ${mixin.linkColor(colors.textDarkest)};
`

export const List = styled.ul`
  padding: 1rem 0;
`

import styled from "styled-components"

import Link from "@layouts/shared/components/Link"
import { colors, mixin } from "@utils/styles"

export const List = styled.ul`
  display: block;
  list-style: none;
  color: ${colors.white};
  font-size: 1.125rem;
  line-height: 1.5em;
`

export const Item = styled.li`
  display: block;
`

export const Button = styled(Link)`
  display: inline-block;
  margin-top: 1.5em;
  color: ${colors.primary};
  background-color: #fefefe;
  border: 1px solid transparent;

  ${mixin.button};
  ${mixin.buttonOver(colors.white, colors.darkGray)};
`

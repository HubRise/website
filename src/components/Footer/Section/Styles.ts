import Link from "next/link"
import styled from "styled-components"

import { breakpoints, colors, lineHeights, mixin } from "@utils/styles"

const headerGap = "1em"

export const Header = styled.div`
  color: ${colors.white};
  font-weight: bold;
  margin-bottom: ${headerGap};

  &:after {
    display: block;
    content: "";
    margin-left: auto;
    margin-right: auto;
    margin-top: ${headerGap};
    background-color: ${colors.textMedium};
    width: 4em;
    height: 2px;

    @media (min-width: ${breakpoints.medium}) {
      margin-left: 0;
      margin-right: 0;
    }
  }
`

export const Item = styled.li`
  margin-bottom: 0.6em;
  line-height: ${lineHeights.compact};
`

export const ItemLink = styled(Link)`
  color: ${colors.textLighter};
  ${mixin.linkOver(colors.white)};
`

import Link from "next/link"
import styled from "styled-components"

import { breakpoints, colors, fontSizeMixins, mixin } from "@utils/styles"

export const Header = styled.h4`
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: left;
  ${fontSizeMixins.fontSizeTextMd}

  @media (min-width: ${breakpoints.large}) {
    ${fontSizeMixins.fontSizeTextLg}
  }

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeTextXl}
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`

export const Item = styled.li`
  ${fontSizeMixins.fontSizeTextSm}

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeTextLg}
  }
`

export const ItemLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${colors.textLighter};
  ${mixin.linkOver(colors.white)};

  svg {
    width: 1.1rem;
    height: 1.1rem;
    fill: ${colors.white};
    margin-right: 0.5rem;
  }
`

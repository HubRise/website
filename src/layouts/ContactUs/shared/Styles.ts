import styled from "styled-components"

import { breakpoints, colors, fontSizeMixins, mixin } from "@utils/styles"

export const CardTitle = styled.h4`
  ${fontSizeMixins.fontSizeTextXl}
  font-weight: 600;
  color: ${colors.textDarkest};

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeText2Xl}
  }
`

export const CardText = styled.p`
  ${mixin.cardText}
`

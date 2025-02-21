import styled from "styled-components"

import { breakpoints, colors, fontSizeMixins } from "@utils/styles"

export const CardTitle = styled.h4`
  ${fontSizeMixins.fontSizeTextXl}
  font-weight: 600;
  color: ${colors.textDarkest};

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeText2Xl}
  }
`

export const CardText = styled.p`
  ${fontSizeMixins.fontSizeTextMd}
  margin-top: 0.625rem;

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeTextXl}
  }
`

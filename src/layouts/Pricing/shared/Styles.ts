import styled from "styled-components"

import { breakpoints, colors, fontSizeMixins } from "@utils/styles"

export const Title = styled.h3`
  ${fontSizeMixins.fontSizeText2Xl}
  font-weight: 600;
  color: ${colors.textDarkest};
  margin-bottom: 0.25rem;

  @media (min-width: ${breakpoints.large}) {
    ${fontSizeMixins.fontSizeDisplaySm}
  }

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeDisplayMd}
  }
`

export const Description = styled.p`
  ${fontSizeMixins.fontSizeTextMd}

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeTextXl}
  }
`

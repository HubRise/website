import styled from "styled-components"

import { breakpoints, fontSizeMixins, fontSizes } from "@utils/styles"

export const Title = styled.h2`
  ${fontSizeMixins.fontSizeDisplaySm}
  font-weight: 600;

  @media (min-width: ${breakpoints.large}) {
    ${fontSizeMixins.fontSizeDisplayMd}
  }

  @media (min-width: ${breakpoints.biggest}) {
    font-size: ${fontSizes._42};
    line-height: 3.75rem;
  }
`

export const TitleHighlight = styled.span`
  font-size: ${fontSizes._42};

  @media (min-width: ${breakpoints.biggest}) {
    span {
      ${fontSizeMixins.fontSizeDisplayLg}
    }
  }
`

export const Description = styled.div`
  margin-top: 1rem;

  @media (min-width: ${breakpoints.biggest}) {
    margin-top: 1.25rem;
  }

  p {
    ${fontSizeMixins.fontSizeTextLg}

    @media (min-width: ${breakpoints.large}) {
      ${fontSizeMixins.fontSizeTextXl}
    }

    @media (min-width: ${breakpoints.biggest}) {
      ${fontSizeMixins.fontSizeText2Xl}
    }
  }
`

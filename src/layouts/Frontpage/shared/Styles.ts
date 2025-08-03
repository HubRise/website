import styled from "styled-components"

import { breakpoints, fontSizeMixins, fontSizes, lineHeights } from "@utils/styles"

export const Title = styled.h2`
  font-size: ${fontSizes._32};
  line-height: ${lineHeights.compact};
  font-weight: 600;
`

export const TitleHighlight = styled.span`
  font-size: ${fontSizes._42};
`

export const Description = styled.div`
  margin-top: 1rem;

  p {
    ${fontSizeMixins.text18};

    @media (min-width: ${breakpoints.large}) {
      ${fontSizeMixins.text20};
    }
  }
`

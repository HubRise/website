import styled from "styled-components"

import { fontSizes, lineHeights, mixin } from "@utils/styles"

export const Title = styled.h2`
  font-size: ${fontSizes._32};
  line-height: ${lineHeights.largeTitle};
  font-weight: 600;
`

export const TitleHighlight = styled.span`
  font-size: ${fontSizes._42};
`

export const Description = styled.div`
  margin-top: 1rem;
  ${mixin.responsiveText};
`

import styled from "styled-components"

import { breakpoints, colors, fontSizes, mixin } from "@utils/styles"

export const Wrapper = styled.div`
  max-width: 67rem;
  margin: 0 auto;
  position: relative;
  padding-bottom: 1.25rem;
  ${mixin.headerBottomLine("center")}

  @media (min-width: ${breakpoints.biggest}) {
    max-width: 82rem;
  }
`

export const Title = styled.h2`
  font-size: ${fontSizes._32};
  line-height: 2.5rem;
  font-weight: 600;
  color: ${colors.textDarkest};
  text-align: center;

  @media (min-width: ${breakpoints.large}) {
    font-size: 2.25rem;
    line-height: 2.75rem;
  }

  @media (min-width: ${breakpoints.biggest}) {
    font-size: 3rem;
    line-height: 3.75rem;
  }
`

export const Description = styled.div`
  margin: 1.375rem auto 0;

  p {
    font-size: ${fontSizes._16};
    line-height: 1.5rem;
    text-align: center;

    @media (min-width: ${breakpoints.large}) {
      font-size: ${fontSizes._20};
      line-height: 1.875rem;
    }

    @media (min-width: ${breakpoints.biggest}) {
      font-size: ${fontSizes._24};
      line-height: 2rem;
    }
  }
`

import styled from "styled-components"

import { breakpoints, colors, fontSizeMixins, mixin } from "@utils/styles"

export const Wrapper = styled.div`
  ${mixin.centerElement};
  margin: 0 -0.5rem;
  column-gap: 0.25rem;

  @media (min-width: ${breakpoints.medium}) {
    column-gap: 2rem;
  }

  @media (min-width: ${breakpoints.large}) {
    column-gap: 3rem;
  }

  @media (min-width: ${breakpoints.biggest}) {
    column-gap: 3.5rem;
  }
`

export const MetricBlock = styled.div`
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Number = styled.span`
  ${fontSizeMixins.fontSizeText2Xl}
  font-weight: 600;
  margin-bottom: 0.5rem;

  @media (min-width: ${breakpoints.large}) {
    font-size: 3.375rem;
    line-height: 4rem;
  }

  @media (min-width: ${breakpoints.biggest}) {
    font-size: 3.75rem;
    line-height: 4.5rem;
  }
`

export const Text = styled.span`
  ${fontSizeMixins.fontSizeTextSm}
  text-align: center;

  @media (min-width: ${breakpoints.large}) {
    ${fontSizeMixins.fontSizeTextLg}
  }

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeText2Xl}
  }
`

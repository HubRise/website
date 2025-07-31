import styled from "styled-components"

import { breakpoints, colors, fontSizeMixins, mixin } from "@utils/styles"

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;

  @media (min-width: ${breakpoints.medium}) {
    ${mixin.centerElement};
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
`

export const Text = styled.span`
  ${fontSizeMixins.fontSizeTextMd}
  text-align: center;

  @media (min-width: ${breakpoints.large}) {
    ${fontSizeMixins.fontSizeTextLg}
  }
`

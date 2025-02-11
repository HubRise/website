import styled from "styled-components"

import { breakpoints, colors, fontSizes, mixin } from "@utils/styles"

export const Wrapper = styled.div`
  ${mixin.centerElement};
  margin: 0 -0.5rem;
  column-gap: 0.25rem;

  @media (min-width: ${breakpoints.medium}) {
    column-gap: 2rem;
  }

  @media (min-width: ${breakpoints.large}) {
    column-gap: 2.875rem;
  }

  @media (min-width: ${breakpoints.biggest}) {
    column-gap: 3.875rem;
  }
`

export const MetricBlock = styled.div`
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Number = styled.span`
  font-size: ${fontSizes._24};
  line-height: 2rem;
  font-weight: 600;
  margin-bottom: 0.625rem;

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
  font-size: ${fontSizes._14};
  line-height: 1.25rem;
  text-align: center;

  @media (min-width: ${breakpoints.large}) {
    font-size: ${fontSizes._18};
    line-height: 1.625rem;
  }

  @media (min-width: ${breakpoints.biggest}) {
    font-size: ${fontSizes._24};
    line-height: 2rem;
  }
`

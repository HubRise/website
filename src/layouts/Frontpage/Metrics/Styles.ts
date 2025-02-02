import styled from "styled-components"

import { breakpoints, colors, fontSizes, mixin } from "@utils/styles"

export const Container = styled.div`
  height: 11.25rem;
  background-color: ${colors.green};
  ${mixin.centerElement};
  column-gap: 3.875rem;

  @media (max-width: ${breakpoints.biggest}) {
    column-gap: 2.875rem;
  }
`

export const MetricBlock = styled.div`
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Number = styled.span`
  font-size: 3.75rem;
  font-weight: 600;
  line-height: 4.5rem;
  margin-bottom: 0.625rem;

  @media (max-width: ${breakpoints.biggest}) {
    font-size: 3.375rem;
    line-height: 4rem;
  }
`

export const Text = styled.span`
  font-size: ${fontSizes._24};
  line-height: 2rem;

  @media (max-width: ${breakpoints.biggest}) {
    font-size: ${fontSizes._18};
    line-height: 1.625rem;
  }
`

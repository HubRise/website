import styled from "styled-components"

import { breakpoints, colors, fontSizes, mixin } from "@utils/styles"

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 0.75rem;

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
  font-size: ${fontSizes._32};
  line-height: 1;
  font-weight: 600;
  margin-bottom: 1rem;

  @media (min-width: ${breakpoints.large}) {
    font-size: ${fontSizes._42};
  }
`

export const Text = styled.span`
  text-align: center;
  ${mixin.responsiveText};
`

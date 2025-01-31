import styled from "styled-components"

import { breakpoints, colors, fontSizes, fontWeights } from "@utils/styles"

export const Container = styled.div`
  width: 100%;
  height: 11.25rem;
  background-color: ${colors.green};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NumberBlock = styled.div`
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 3.875rem;

  @media (max-width: ${breakpoints.bigScreen}) {
    margin-right: 2.875rem;
  }

  &:last-child {
    margin-right: 0;
  }
`

export const Number = styled.span`
  font-size: ${fontSizes._60};
  font-weight: ${fontWeights.semiBold};
  line-height: 4.5rem;
  margin-bottom: 0.625rem;

  @media (max-width: ${breakpoints.bigScreen}) {
    font-size: ${fontSizes._54};
    line-height: 4rem;
  }
`

export const Text = styled.span`
  font-size: ${fontSizes._24};
  line-height: 2rem;

  @media (max-width: ${breakpoints.bigScreen}) {
    font-size: ${fontSizes._18};
    line-height: 1.625rem;
  }
`

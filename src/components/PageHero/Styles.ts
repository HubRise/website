import styled, { css } from "styled-components"

import { breakpoints, colors } from "@utils/styles"

export const Container = styled.div<{ $isTextCentered: boolean }>`
  background-color: ${colors.white};
  padding: 3.5rem 1rem;

  ${({ $isTextCentered }) =>
    $isTextCentered &&
    css`
      text-align: center;
    `}

  @media (min-width: ${breakpoints.large}) {
    padding: 5rem;
  }
`

export const Wrapper = styled.div`
  max-width: 90rem;
  margin: 0 auto;
`

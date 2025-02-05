import styled from "styled-components"

import { breakpoints } from "@utils/styles"

export const Wrapper = styled.div`
  display: flex;
  column-gap: 5rem;
  margin-bottom: -3.875rem;

  @media (max-width: ${breakpoints.biggest}) {
    column-gap: 3.75rem;
  }
`

export const ContentWrapper = styled.div`
  max-width: 61rem;

  p:last-child {
    margin-top: 1.375rem;
  }

  @media (max-width: ${breakpoints.biggest}) {
    max-width: 46rem;
  }
`

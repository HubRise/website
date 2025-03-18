import styled from "styled-components"

import { breakpoints } from "@utils/styles"

export const ContentWrapper = styled.div`
  max-width: 90rem;
  margin: 0 auto;

  @media (min-width: ${breakpoints.large}) {
    padding: 0 3.5rem;
  }

  @media (min-width: ${breakpoints.biggest}) {
    max-width: 120rem;
    padding: 0 5rem;
  }
`

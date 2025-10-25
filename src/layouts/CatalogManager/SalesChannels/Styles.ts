import styled from "styled-components"

import { breakpoints } from "@utils/styles"

export const ImageWrapper = styled.div`
  max-width: 80rem;
  margin: 3.5rem auto 0 auto;

  @media (min-width: ${breakpoints.large}) {
    margin-top: 5.5rem;
  }
`

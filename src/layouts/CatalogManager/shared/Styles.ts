import styled from "styled-components"

import { breakpoints, mixin } from "@utils/styles"

export const Wrapper = styled.div`
  ${mixin.containerWrapper}
  margin-top: 2rem;

  @media (min-width: ${breakpoints.large}) {
    margin-top: 3.5rem;
  }
`

import styled from "styled-components"

import { breakpoints, mixin } from "@utils/styles"

export const Content = styled.div`
  ${mixin.description}
  margin: 1rem 0 -1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: ${breakpoints.large}) {
    margin: 1rem 0 -3rem;
  }
`

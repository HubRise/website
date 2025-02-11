import styled from "styled-components"

import { breakpoints } from "@utils/styles"

export const ButtonWrapper = styled.div`
  & > a {
    margin-left: auto;
    margin-right: auto;
    width: 100%;

    @media (min-width: ${breakpoints.medium}) {
      width: fit-content;
    }
  }
`

import styled from "styled-components"

import { StyledButton } from "@components/Button/Styles"
import { breakpoints } from "@utils/styles"

export const ButtonWrapper = styled.div`
  ${StyledButton} {
    margin-left: auto;
    margin-right: auto;
    width: 100%;

    @media (min-width: ${breakpoints.medium}) {
      width: fit-content;
    }
  }
`

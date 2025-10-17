import styled from "styled-components"

import { StyledButton } from "@components/Button/Styles"
import { breakpoints } from "@utils/styles"

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;

  ${StyledButton} {
    width: 100%;
    margin-top: 0;
  }

  @media (min-width: ${breakpoints.medium}) {
    flex-wrap: nowrap;

    ${StyledButton} {
      width: auto;
    }
  }
`

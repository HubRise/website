import styled from "styled-components"

import { StyledButton } from "@components/Button/Styles"
import { breakpoints, mixin } from "@utils/styles"

export const Description = styled.p`
  margin: 1rem auto 0;
  max-width: 60rem;
  ${mixin.responsiveText};
`

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;

  ${StyledButton} {
    width: 100%;
    margin: 0;
  }

  @media (min-width: ${breakpoints.medium}) {
    flex-wrap: nowrap;
    justify-content: center;

    ${StyledButton} {
      width: fit-content;
    }
  }
`

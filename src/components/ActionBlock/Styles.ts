import styled from "styled-components"

import { StyledButton } from "@components/Button/Styles"
import { breakpoints, fontSizes } from "@utils/styles"

export const StyledActionBlock = styled.div`
  ${StyledButton} {
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: ${breakpoints.medium}) {
      width: fit-content;
    }
  }
`

export const Description = styled.p`
  margin: 1rem auto 0;
  max-width: 50rem;
  font-size: ${fontSizes._19};
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

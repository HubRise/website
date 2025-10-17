import styled from "styled-components"

import { StyledButton } from "@components/Button/Styles"
import { breakpoints, mixin } from "@utils/styles"

export const Description = styled.div`
  ${mixin.responsiveText};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 75rem;
  margin: 1rem auto 0;

  & + ${StyledButton} {
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: ${breakpoints.medium}) {
      width: fit-content;
    }
  }
`

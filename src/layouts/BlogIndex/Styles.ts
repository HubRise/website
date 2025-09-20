import styled from "styled-components"

import { StyledCard } from "@components/Card/Styles"
import { breakpoints, mixin } from "@utils/styles"

export const Posts = styled.div`
  ${mixin.containerWrapper}
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: ${breakpoints.medium}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${breakpoints.large}) {
    grid-template-columns: repeat(3, 1fr);

    ${StyledCard} {
      &:nth-child(3n + 2) {
        position: relative;
        top: 1.5rem;
      }
    }
  }
`

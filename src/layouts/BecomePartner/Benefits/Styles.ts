import styled from "styled-components"

import { StyledCard } from "@components/Card/Styles"
import { breakpoints, mixin } from "@utils/styles"

export const BenefitCards = styled.div`
  ${mixin.containerWrapper}
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.125rem;
  padding-top: 3.5rem;

  @media (min-width: ${breakpoints.large}) {
    padding-bottom: 1.5rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    ${StyledCard} {
      &:nth-child(even) {
        position: relative;
        top: 1.5rem;
      }
    }
  }
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const BenefitTitle = styled.h4`
  ${mixin.smallCardTitle}
`

export const BenefitText = styled.p`
  ${mixin.cardText}
`

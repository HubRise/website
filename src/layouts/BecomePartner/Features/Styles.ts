import styled from "styled-components"

import { StyledCard } from "@components/Card/Styles"
import { breakpoints, mixin } from "@utils/styles"

export const FeatureCards = styled.div`
  ${mixin.containerWrapper}
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 1.125rem;
  row-gap: 1.125rem;

  @media (min-width: ${breakpoints.large}) {
    padding-bottom: 1.5rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 0.625rem;

    ${StyledCard} {
      &:nth-child(even) {
        position: relative;
        top: 1.5rem;
      }
    }
  }
`

export const FeatureTitle = styled.h4`
  ${mixin.smallCardTitle}
`

export const FeatureText = styled.p`
  ${mixin.cardText}
`

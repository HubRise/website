import styled from "styled-components"

import { breakpoints, mixin } from "@utils/styles"

export const FeatureCards = styled.div`
  ${mixin.containerWrapper}
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding-top: 3.5rem;

  @media (min-width: ${breakpoints.large}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Title = styled.h4`
  ${mixin.smallCardTitle}
`

export const Text = styled.p`
  ${mixin.cardText}
`

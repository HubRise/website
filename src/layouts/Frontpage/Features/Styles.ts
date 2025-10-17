import Image from "next/image"
import styled from "styled-components"

import { StyledCard } from "@components/Card/Styles"
import { breakpoints, mixin } from "@utils/styles"

export const Cards = styled.div`
  ${mixin.containerWrapper}
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 3.5rem;

  ${StyledCard} {
    justify-content: space-between;
    text-align: center;

    img {
      margin: 0 auto;
    }
  }

  @media (min-width: ${breakpoints.medium}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${breakpoints.large}) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 2.5rem;
    row-gap: 1.875rem;
  }
`

export const CardContent = styled.div``

export const CardTitle = styled.h4`
  ${mixin.smallCardTitle};
  margin-top: 1.25rem;
`

export const CardText = styled.p`
  ${mixin.cardText};
`

export const CardImage = styled(Image)`
  position: relative;
  width: fit-content;
`

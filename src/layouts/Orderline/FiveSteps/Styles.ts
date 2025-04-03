import styled from "styled-components"

import { StyledCard } from "@components/Card/Styles"
import { breakpoints, colors, mixin } from "@utils/styles"

export const Cards = styled.div`
  max-width: 90rem;
  margin: 2.75rem auto 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: ${breakpoints.large}) {
    padding: 0 3.5rem;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    ${StyledCard} {
      &:nth-child(even) {
        position: relative;
        top: 1.5rem;
      }
    }
  }

  @media (min-width: ${breakpoints.biggest}) {
    max-width: 120rem;
    padding: 0 5rem;
  }
`

export const CardNumber = styled.span`
  font-size: 3.125rem;
  line-height: 3.75rem;
  font-weight: 700;
  letter-spacing: -2px;
  color: ${colors.primary};
  text-shadow: 2px 0 0 ${colors.primary};
  -webkit-text-stroke: 1px;
  -webkit-text-fill-color: transparent;
`

export const CardTitle = styled.h4`
  ${mixin.smallCardTitle}
  margin-top: 1.25rem;

  @media (min-width: ${breakpoints.biggest}) {
    margin-top: 1.5rem;
  }
`

export const CardText = styled.p`
  ${mixin.cardText}
`

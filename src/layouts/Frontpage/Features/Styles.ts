import Image from "next/image"
import styled from "styled-components"

import { StyledCard } from "@components/Card/Styles"
import { colors, breakpoints, fontSizeMixins, mixin } from "@utils/styles"

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin: 4rem auto 0;

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
    max-width: 90rem;
    padding: 0 3.75rem;
  }

  @media (min-width: ${breakpoints.biggest}) {
    max-width: 120rem;
    padding: 0 7rem;
  }
`

export const CardContent = styled.div``

export const CardTitle = styled.h4`
  ${fontSizeMixins.fontSizeTextXl}
  font-weight: 600;
  color: ${colors.textDarkest};
  margin-top: 1.25rem;

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeText2Xl}
    margin-top: 1.5rem;
  }
`

export const CardText = styled.p`
  ${mixin.cardText}
`

export const CardImage = styled(Image)`
  position: relative;
  width: fit-content;
`

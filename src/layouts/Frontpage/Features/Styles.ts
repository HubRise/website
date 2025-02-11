import Image from "next/image"
import styled from "styled-components"

import { colors, fontSizes, breakpoints } from "@utils/styles"

import { Card } from "../shared/Styles"

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin: 4rem auto 0;

  ${Card} {
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
  font-size: ${fontSizes._20};
  font-weight: 600;
  line-height: 1.875rem;
  color: ${colors.textDarkest};
  margin-top: 1.25rem;

  @media (min-width: ${breakpoints.biggest}) {
    font-size: ${fontSizes._24};
    line-height: 2rem;
    margin-top: 1.5rem;
  }
`

export const CardText = styled.p`
  font-size: ${fontSizes._16};
  line-height: 1.5rem;
  margin-top: 0.625rem;
  color: ${colors.textDark};

  @media (min-width: ${breakpoints.biggest}) {
    font-size: ${fontSizes._20};
    line-height: 1.875rem;
  }
`

export const CardImage = styled(Image)`
  position: relative;
  width: fit-content;
`

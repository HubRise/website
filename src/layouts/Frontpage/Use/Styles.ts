import styled from "styled-components"

import { colors, fontSizes, breakpoints } from "@utils/styles"

import { Card } from "../shared/Styles"

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2.5rem;
  row-gap: 1.875rem;
  max-width: 120rem;
  margin: 4rem auto 0;
  padding: 0 7rem;

  ${Card} {
    justify-content: space-between;
    text-align: center;

    img {
      margin: 0 auto;
    }
  }

  @media (max-width: ${breakpoints.biggest}) {
    max-width: 90rem;
    padding: 0 3.75rem;
  }
`

export const CardTitle = styled.h4`
  font-size: ${fontSizes._24};
  font-weight: 600;
  line-height: 2rem;
  color: ${colors.textDarkest};
  margin-top: 1.875rem;

  @media (max-width: ${breakpoints.biggest}) {
    font-size: ${fontSizes._20};
    line-height: 1.875rem;
    margin-top: 1.375rem;
  }
`

export const CardText = styled.p`
  font-size: ${fontSizes._20};
  line-height: 1.875rem;
  margin-top: 0.625rem;
  color: ${colors.textDark};

  @media (max-width: ${breakpoints.biggest}) {
    font-size: ${fontSizes._16};
    line-height: 1.5rem;
  }
`

import styled from "styled-components"

import { StyledCard } from "@components/Card/Styles"
import { StyledUnderline } from "@components/Underline/Styles"
import { breakpoints, colors, fontSizes } from "@utils/styles"

export const Title = styled.h1`
  font-size: ${fontSizes._32};
  line-height: 2.5rem;
  font-weight: 600;
  color: ${colors.textDarkest};

  @media (min-width: ${breakpoints.large}) {
    font-size: 4.125rem;
    line-height: 4.75rem;
  }

  @media (min-width: ${breakpoints.biggest}) {
    font-size: 4.5rem;
    line-height: 5.125rem;
  }
`

export const HighlightTitle = styled.span`
  color: ${colors.primary};
`

export const Content = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 3rem;

  ul {
    list-style: inside;
    margin: 0.5rem 0 0.5rem 1rem;
  }

  ${StyledUnderline} {
    margin-bottom: 1.25rem;
  }

  ${StyledCard}:nth-child(odd):not(:last-child) {
    padding-left: 2rem;
  }

  ${StyledCard}:nth-child(even):not(:last-child) {
    padding-right: 2rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 0 3.5rem;

    ${StyledCard}:nth-child(odd):not(:last-child) {
      padding-left: 3.5rem;
    }

    ${StyledCard}:nth-child(even):not(:last-child) {
      padding-right: 3.5rem;
    }
  }
`

export const CardTitle = styled.h4`
  font-size: ${fontSizes._24};
  line-height: 2.125rem;
  font-weight: 600;
  color: ${colors.textDarkest};

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.875rem;
    line-height: 2.375rem;
  }

  @media (min-width: ${breakpoints.biggest}) {
    font-size: 2.25rem;
    line-height: 2.875rem;
  }
`

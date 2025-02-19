import styled from "styled-components"

import { StyledCard } from "@components/Card/Styles"
import { StyledUnderline } from "@components/Underline/Styles"
import { breakpoints, colors, fontSizeMixins } from "@utils/styles"

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
  ${fontSizeMixins.fontSizeText2Xl}
  font-weight: 600;
  color: ${colors.textDarkest};

  @media (min-width: ${breakpoints.large}) {
    ${fontSizeMixins.fontSizeDisplaySm}
  }

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeDisplayMd}
  }
`

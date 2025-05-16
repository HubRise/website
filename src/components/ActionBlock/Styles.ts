import styled from "styled-components"

import { StyledButton } from "@components/Button/Styles"
import { breakpoints, fontSizeMixins } from "@utils/styles"

export const StyledActionBlock = styled.div`
  ${StyledButton} {
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: ${breakpoints.medium}) {
      width: fit-content;
    }
  }
`

export const Description = styled.p`
  margin: 1rem auto 0;
  max-width: 50rem;
  ${fontSizeMixins.fontSizeTextLg}

  @media (min-width: ${breakpoints.large}) {
    ${fontSizeMixins.fontSizeTextXl}
  }

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeText2Xl}
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;

  ${StyledButton} {
    width: 100%;
    margin: 0;
  }

  @media (min-width: ${breakpoints.medium}) {
    flex-wrap: nowrap;
    justify-content: center;

    ${StyledButton} {
      width: fit-content;
    }
  }
`

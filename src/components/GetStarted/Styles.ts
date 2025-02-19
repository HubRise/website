import styled from "styled-components"

import { StyledButton } from "@components/Button/Styles"
import { breakpoints, fontSizeMixins } from "@utils/styles"

export const Description = styled.p`
  margin: 0 auto;
  max-width: 48rem;
  ${fontSizeMixins.fontSizeTextLg}

  @media (min-width: ${breakpoints.large}) {
    ${fontSizeMixins.fontSizeTextXl}
  }

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeText2Xl}
  }

  & ~ ${StyledButton} {
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: ${breakpoints.medium}) {
      width: fit-content;
    }
  }
`

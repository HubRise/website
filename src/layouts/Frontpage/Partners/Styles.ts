import styled from "styled-components"

import { StyledButton } from "@components/Button/Styles"
import { breakpoints, mixin } from "@utils/styles"

export const Wrapper = styled.div`
  ${mixin.containerWrapper}
  display: flex;
  flex-direction: column;
  gap: 3.75rem;

  @media (min-width: ${breakpoints.large}) {
    flex-direction: row;
  }
`

export const ImageWrapper = styled.div``

export const ContentWrapper = styled.div`
  text-align: center;

  p:last-child {
    margin-top: 1.25rem;
  }

  ${StyledButton} {
    width: 100%;
  }

  @media (min-width: ${breakpoints.medium}) {
    ${StyledButton} {
      width: fit-content;
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    text-align: left;

    ${StyledButton} {
      margin-left: 0;
      margin-right: 0;
    }
  }
`

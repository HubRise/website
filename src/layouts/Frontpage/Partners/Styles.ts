import styled from "styled-components"

import { StyledButton } from "@components/Button/Styles"
import { breakpoints, mixin } from "@utils/styles"

export const Wrapper = styled.div`
  ${mixin.containerWrapper}
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: ${breakpoints.large}) {
    flex-direction: row;
    gap: 0;
  }

  @media (min-width: ${breakpoints.biggest}) {
    gap: 3.75rem;
  }
`

export const ImageWrapper = styled.div`
  flex-basis: 50%;
  text-align: center;

  img {
    width: 100%;
  }

  @media (min-width: ${breakpoints.large}) {
    flex-basis: 60%;
    position: relative;
    left: -7rem;
  }

  @media (min-width: ${breakpoints.extraLarge}) {
    flex-basis: 65%;
    left: -8rem;
  }

  @media (min-width: ${breakpoints.biggest}) {
    flex-basis: 50%;
    left: initial;
  }
`

export const ContentWrapper = styled.div`
  text-align: center;
  flex-basis: 50%;

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

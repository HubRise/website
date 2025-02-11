import styled from "styled-components"

import { ButtonStyles } from "@components/Button/Styles"
import { breakpoints } from "@utils/styles"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: ${breakpoints.large}) {
    margin-bottom: -3.5rem;
    flex-direction: row;
    align-items: normal;
    gap: 0;
  }
`

export const ImageWrapper = styled.div`
  max-width: 45rem;
  width: 100%;
  position: relative;

  img {
    height: 100%;
  }

  @media (min-width: ${breakpoints.large}) {
    left: -3.5rem;
    bottom: -3rem;
    margin-top: -3rem;
  }

  @media (min-width: ${breakpoints.biggest}) {
    left: -5rem;
  }
`

export const ContentWrapper = styled.div`
  max-width: 45rem;
  text-align: center;

  p:last-child {
    margin-top: 1.25rem;
  }

  ${ButtonStyles} {
    width: 100%;
  }

  @media (min-width: ${breakpoints.medium}) {
    ${ButtonStyles} {
      width: fit-content;
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media (min-width: ${breakpoints.large}) {
    padding-bottom: 3.5rem;
    text-align: left;

    ${ButtonStyles} {
      margin-left: 0;
      margin-right: 0;
    }
  }

  @media (min-width: ${breakpoints.biggest}) {
    max-width: 60rem;
  }
`

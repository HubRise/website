import styled from "styled-components"

import { StyledButton } from "@components/Button/Styles"
import { breakpoints, colors, fontSizes } from "@utils/styles"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;

  img {
    height: 100%;
  }

  @media (min-width: ${breakpoints.medium}) {
    flex-direction: row;
    text-align: left;
  }

  @media (min-width: ${breakpoints.large}) {
    column-gap: 2.5rem;
  }
`

export const Content = styled.div`
  ${StyledButton} {
    margin-top: 1rem;
    width: 100%;
  }

  @media (min-width: ${breakpoints.medium}) {
    ${StyledButton} {
      width: fit-content;
    }
  }
`

export const Title = styled.h3`
  font-size: 1.875rem;
  line-height: 2.5rem;
  font-weight: 600;
  color: ${colors.textDarkest};

  @media (min-width: ${breakpoints.large}) {
    font-size: 2.25rem;
    line-height: 2.75rem;
  }

  @media (min-width: ${breakpoints.biggest}) {
    font-size: 3rem;
    line-height: 3.75rem;
  }
`

export const Description = styled.p`
  font-size: ${fontSizes._16};
  line-height: 1.5rem;
  margin-top: 1rem;

  @media (min-width: ${breakpoints.large}) {
    font-size: ${fontSizes._20};
    line-height: 1.875rem;
  }

  @media (min-width: ${breakpoints.biggest}) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`

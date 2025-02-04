import styled from "styled-components"

import { breakpoints, colors, fontSizes } from "@utils/styles"

export const Wrapper = styled.div`
  max-width: 82rem;
  margin: 0 auto;
  position: relative;
  padding-bottom: 1.25rem;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.1875rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 7.5rem;
    height: 0.1875rem;
    border-radius: 6.25rem;
    background-color: ${colors.primary};
  }

  @media (max-width: ${breakpoints.biggest}) {
    max-width: 67rem;

    &::after {
      width: 5rem;
    }
  }
`

export const Title = styled.h2`
  font-size: ${fontSizes._42};
  line-height: 3.75rem;
  font-weight: 600;
  color: ${colors.textDarkest};
  text-align: center;

  @media (max-width: ${breakpoints.biggest}) {
    font-size: ${fontSizes._32};
    line-height: 2.5rem;
  }
`

export const Description = styled.div`
  margin: 1.375rem auto 0;

  p {
    font-size: ${fontSizes._24};
    line-height: 2rem;
    text-align: center;
  }

  @media (max-width: ${breakpoints.biggest}) {
    p {
      font-size: ${fontSizes._20};
      line-height: 1.875rem;
    }
  }
`

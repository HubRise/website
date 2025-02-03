import styled from "styled-components"

import { breakpoints, colors, fontSizes } from "@utils/styles"

export const ButtonStyles = styled.a`
  display: inline-block;
  width: auto;
  height: 3.375rem;
  line-height: 3.375rem;
  background-color: ${colors.white};
  color: ${colors.textDark};
  font-size: ${fontSizes._20};
  font-weight: 600;
  border-radius: 0.5rem;
  padding: 0 1.125rem;
  margin-top: 2rem;
  transition: all 0.5s ease;

  @media (max-width: ${breakpoints.biggest}) {
    height: 3rem;
    line-height: 3rem;
    font-size: ${fontSizes._16};
  }

  &:hover {
    background-color: ${colors.textDarkest};
    color: ${colors.white};
  }
`

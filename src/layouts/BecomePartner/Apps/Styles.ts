import styled from "styled-components"

import { boxShadows, breakpoints, colors, fontSizeMixins, mixin } from "@utils/styles"

export const Tab = styled.div`
  background-color: ${colors.backgroundWhite};
  border-radius: 0.625rem;
  box-shadow: ${boxShadows.card};
  padding: 1rem;
  margin-top: 4.75rem;
  text-align: center;
  position: relative;

  &::before {
    content: "";
    display: block;
    width: calc(100% - 2rem);
    height: 0.75rem;
    background-color: #d4d5d7;
    border-top-left-radius: 0.625rem;
    border-top-right-radius: 0.625rem;
    position: absolute;
    left: 1rem;
    top: -0.75rem;
  }

  &::after {
    content: "";
    display: block;
    width: calc(100% - 4rem);
    height: 0.75rem;
    background-color: #b0b0b0;
    border-top-left-radius: 0.625rem;
    border-top-right-radius: 0.625rem;
    position: absolute;
    left: 2rem;
    top: -1.5rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 2rem 2rem 7rem 2rem;
  }
`

export const TabTitle = styled.h3`
  ${mixin.cardTitle};
`

export const TabText = styled.p`
  ${fontSizeMixins.fontSizeTextLg};
  margin: 1.5rem auto 2.5rem;
`

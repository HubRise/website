import styled from "styled-components"

import { breakpoints, colors, mixin } from "@utils/styles"
import Link from "@layouts/shared/components/Link"
import heroImage from "@assets/images/hero_image.jpg"

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-flow: column-reverse;

  @media (min-width: ${breakpoints.large}) {
    display: block;
  }
`

export const Image = styled.div`
  background: black url(${heroImage}) no-repeat;
  background-size: cover;
  background-position-x: 100%;
  height: 20em;

  @media (min-width: ${breakpoints.large}) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: auto;
    background-position-x: 50%;
  }
`

export const TextContainer = styled.div`
  @media (min-width: ${breakpoints.large}) {
    ${mixin.container};
    padding: 11em 0;
  }
`

export const TextWrapper = styled.div`
  @media (min-width: ${breakpoints.large}) {
    max-width: 45rem;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    position: relative;

    &:before {
      content: "";
      background-color: ${colors.primary};
      width: 9999px;
      height: 100%;
      position: absolute;
      right: 100%;
    }
  }
`

export const Text = styled.div`
  padding: 4em 1rem;
  background-color: ${colors.primary};
  color: ${colors.white};
  text-align: center;

  @media (min-width: ${breakpoints.large}) {
    text-align: left;
    padding-left: 0;
    padding-right: 2em;
  }
`

export const Title = styled.h1`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 2.625rem;
  line-height: 1.25em;
`

export const Description = styled.div`
  margin: 0.75rem 0 0.75rem 0;
  font-size: 1.125rem;

  @media (min-width: ${breakpoints.large}) {
    font-size: 1.25rem;
    line-height: 0.9em;
  }
`

export const Button = styled(Link)`
  display: inline-block;
  color: ${colors.primary};
  background-color: #ffffff;

  ${mixin.button};
  ${mixin.buttonOver(colors.white, colors.darkGray)};
`

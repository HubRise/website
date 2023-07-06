import styled from "styled-components"

import { breakpoints, colors, fontSizes, lineHeights, mixin } from "@utils/styles"
import Link from "@layouts/shared/components/Link"
import bannerImage from "@assets/images/hero_image.jpg"

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: column-reverse;

  @media (min-width: ${breakpoints.large}) {
    display: block;
  }
`

export const Image = styled.div`
  background: black url(${bannerImage}) no-repeat;
  background-size: cover;
  background-position-x: 100%;
  height: 20rem;

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
    padding: 11rem 0;
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
  font-weight: bold;
  font-size: ${fontSizes._42};
  line-height: ${lineHeights.title};
`

export const Description = styled.div`
  margin: 0.75rem 0;
  font-size: ${fontSizes._18};
`

export const Button = styled(Link)`
  display: inline-block;
  color: ${colors.primary};
  background-color: ${colors.backgroundWhite};

  ${mixin.button};
  ${mixin.buttonOver(colors.white, colors.textDarkest)};
`

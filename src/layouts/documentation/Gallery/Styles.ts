import styled from "styled-components"
import Slider from "react-slick"
import { GatsbyImage } from "gatsby-plugin-image"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { breakpoints, colors, zIndexValues } from "@utils/styles"

export const ImageSlider = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: ${zIndexValues.slideshow};

  display: ${(props) => (props.isVisible ? "grid" : "none")};
  grid-template-rows: max-content 1fr;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  font-size: calc(0.75rem + 0.5vw);

  // slick-* classes are coming from react-slick carousel component
  .slick-list {
    grid-area: slide;
  }

  .slick-slide {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    text-align: center;
  }
`

export const Topbar = styled.section`
  padding: 1rem 0.5rem;
  display: grid;
  grid-template-columns: 1fr 6% 1fr;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`

export const Title = styled.div`
  color: ${colors.white};
  font-weight: bold;
  justify-self: flex-start;
`

export const Count = styled.div`
  color: ${colors.lightGray};
  margin-bottom: 0;
`

export const StyledSlider = styled(Slider)`
  display: grid !important; // override display prop on .slick-list
  grid-template-columns: 6% 1fr 6%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  grid-template-areas: "arrow_previous slide arrow_next";
  align-items: center;
`

export const Slide = styled(GatsbyImage)`
  border-radius: 0.6rem;
`

export const ImageGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  grid-gap: 1rem;

  @media (min-width: ${breakpoints.large}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ImageGridItem = styled.div`
  width: 100%;
  cursor: pointer;
`

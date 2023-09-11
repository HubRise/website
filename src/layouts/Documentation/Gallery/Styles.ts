import Image from "next/image"
import Slider from "react-slick"
import styled from "styled-components"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { breakpoints, colors, zIndexValues } from "@utils/styles"

export const Slideshow = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: ${zIndexValues.slideshow};

  display: ${(props) => (props.$isVisible ? "grid" : "none")};
  grid-template-rows: max-content 1fr;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  font-size: calc(0.75rem + 0.5vw);

  // slick-* classes are coming from react-slick carousel component
  .slick-list {
    grid-area: slide;
  }

  .slick-track {
    display: flex;
    align-items: center;
  }

  .slick-slide {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    text-align: center;

    img {
      max-height: calc(100vh - 5rem);
    }
  }
`

export const Topbar = styled.div`
  padding: 1rem 0.5rem;
  display: grid;
  grid-template-columns: 1fr 8rem 1fr;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`

export const Title = styled.div`
  color: ${colors.white};
  font-weight: bold;
  justify-self: flex-start;
`

export const Count = styled.div`
  color: ${colors.textMedium};
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

export const Slide = styled.div`
  display: inline-block;
`

export const SlideImage = styled(Image)`
  border-radius: 0.6rem;
  width: auto;
`

export const Thumbnail = styled(Image)`
  border-radius: 0.6rem;
`

export const ThumbnailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  grid-gap: 1rem;

  @media (min-width: ${breakpoints.large}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ThumbnailItem = styled.div`
  width: 100%;
  cursor: pointer;
`

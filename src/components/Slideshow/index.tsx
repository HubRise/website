import * as React from "react"

import Icon from "@components/Icon"
import { ContentImageWithAlt } from "@utils/contentImage"
import { iconSizes } from "@utils/styles"

import { Topbar, Title, StyledSlideshow, Slide, SlideImage, PrevArrow, NextArrow, Close, Count } from "./Styles"

interface SlideshowProps {
  title: string
  contentImages: Array<ContentImageWithAlt>
  currentImageSrc: string
  onClose: () => void
  navigate: (direction: 1 | -1) => void
}

const Slideshow = ({ title, contentImages, currentImageSrc, onClose, navigate }: SlideshowProps): JSX.Element => {
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      switch (e.code) {
        case "Escape":
          onClose()
          break
        case "ArrowRight":
          navigate(1)
          break
        case "ArrowLeft":
          navigate(-1)
          break
        default:
          break
      }
    }

    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [navigate, onClose])

  // Prevent vertical scrolling when the slideshow is open
  React.useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  const currentImageNumber = contentImages.findIndex((contentImage) => contentImage.src === currentImageSrc) + 1
  const contentImage = contentImages[currentImageNumber - 1]

  const executeAndStopPropagation = (fn: () => void) => (e: React.MouseEvent) => {
    e.stopPropagation()
    fn()
  }
  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation()

  return (
    <StyledSlideshow onClick={() => onClose()}>
      <Topbar onClick={stopPropagation}>
        <Title>
          {contentImage.alt || title}
          {" - "}
          <Count>
            {currentImageNumber} / {contentImages.length}
          </Count>
        </Title>
        <Close onClick={executeAndStopPropagation(onClose)}>
          <Icon code="close" size={iconSizes._32} />
        </Close>
      </Topbar>

      <Slide>
        <SlideImage {...contentImage} alt={title} onClick={stopPropagation} />
      </Slide>

      {currentImageNumber !== 1 && (
        <PrevArrow onClick={executeAndStopPropagation(() => navigate(-1))}>
          <Icon code="chevron_left" size={iconSizes._32} />
        </PrevArrow>
      )}

      {currentImageNumber < contentImages.length && (
        <NextArrow onClick={executeAndStopPropagation(() => navigate(1))}>
          <Icon code="chevron_right" size={iconSizes._32} />
        </NextArrow>
      )}
    </StyledSlideshow>
  )
}

export default Slideshow

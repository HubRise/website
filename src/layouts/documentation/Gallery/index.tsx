import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Slider from "react-slick"

import { Count, Topbar, Title, ImageSlider, StyledSlider, Slide, ImageGridItem, ImageGrid } from "./Styles"
import { Close, NextArrow, PrevArrow } from "./Controls"

import { generateKey } from "@utils/misc"
import { ImageSharp } from "@utils/image"

interface GalleryProps {
  imageMap: Map<string, ImageSharp>
  title: string
}

const Gallery = ({ imageMap, title }: GalleryProps): JSX.Element => {
  const slider = React.useRef<Slider>(null)
  const [isSliderVisible, setIsSliderVisible] = React.useState(false)
  const [currentImageNumber, setCurrentImageNumber] = React.useState(1)

  const totalNumberOfImages = imageMap.size

  const sliderSettings = {
    speed: 0,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow currentImageNumber={currentImageNumber} />,
    nextArrow: <NextArrow currentImageNumber={currentImageNumber} totalNumberOfImages={totalNumberOfImages} />,
    afterChange: (currentSlide) => setCurrentImageNumber(currentSlide + 1),
  }

  React.useEffect(() => {
    const handler = (e) => {
      const { slickNext, slickPrev } = slider.current

      switch (e.keyCode) {
        // Close slider when Escape key is pressed.
        case 27:
          setIsSliderVisible(false)
          break
        // Intercept RightArrow key.
        case 39:
          slickNext()
          break
        // Intercept LeftArrow key.
        case 37:
          slickPrev()
          break
        default:
          break
      }
    }

    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [isSliderVisible])

  React.useEffect(() => {
    if (isSliderVisible) {
      document.body.classList.add("no-vertical-scroll")
    }
    return () => document.body.classList.remove("no-vertical-scroll")
  }, [isSliderVisible])

  return (
    <div className="section__content">
      <ImageSlider isVisible={isSliderVisible} onClick={() => setIsSliderVisible(false)}>
        <Topbar onClick={(e) => e.stopPropagation()}>
          <Title>{title}</Title>
          <Count>
            {currentImageNumber} / {totalNumberOfImages}
          </Count>
          <Close onClick={() => setIsSliderVisible(false)} />
        </Topbar>

        <StyledSlider ref={slider} {...sliderSettings}>
          {Array.from(imageMap).map(([imageName, image], index) => (
            <div key={generateKey(imageName, index)} onClick={(e) => e.stopPropagation()}>
              <Slide image={image.gatsbyImageData} alt={imageName} />
            </div>
          ))}
        </StyledSlider>
      </ImageSlider>

      <ImageGrid>
        {Array.from(imageMap).map(([imageName, image], index) => (
          <ImageGridItem
            key={generateKey(imageName, index)}
            onClick={() => {
              slider.current.slickGoTo(index)
              setIsSliderVisible(!isSliderVisible)
            }}
          >
            <GatsbyImage image={image.gatsbyImageData} alt={title} />
          </ImageGridItem>
        ))}
      </ImageGrid>
    </div>
  )
}

export default Gallery

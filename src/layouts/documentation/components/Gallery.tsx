import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { GatsbyImage } from 'gatsby-plugin-image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import NextArrow from './Gallery/NextArrow'
import PrevArrow from './Gallery/PrevArrow'
import { generateKey } from '@utils/misc'
import { ImageSharp } from '@utils/image'

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
    nextArrow: (
      <NextArrow
        currentImageNumber={currentImageNumber}
        totalNumberOfImages={totalNumberOfImages}
      />
    ),
    afterChange: (currentSlide) => setCurrentImageNumber(currentSlide + 1)
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

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isSliderVisible])

  React.useEffect(() => {
    if (isSliderVisible) {
      document.body.classList.add('no-vertical-scroll')
    }
    return () => document.body.classList.remove('no-vertical-scroll')
  }, [isSliderVisible])

  return (
    <div className="section__content">
      <div
        className="image-slider"
        style={{
          display: isSliderVisible ? 'grid' : 'none'
        }}
        onClick={() => setIsSliderVisible(false)}
      >
        <section
          className="image-slider__topbar"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="image-slider__title">{title}</div>
          <div className="image-slider__count">
            {currentImageNumber} / {totalNumberOfImages}
          </div>
          <button
            className="image-slider__close"
            onClick={() => setIsSliderVisible(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </section>

        <Slider
          ref={slider}
          className="image-slider__content"
          {...sliderSettings}
        >
          {Array.from(imageMap).map(([imageName, image], idx) => (
            <div
              key={generateKey(imageName, idx)}
              onClick={(e) => e.stopPropagation()}
            >
              <GatsbyImage
                className="image-slider__slide"
                image={image.gatsbyImageData}
                alt={imageName}
              />
            </div>
          ))}
        </Slider>
      </div>

      <section className="image-grid">
        {Array.from(imageMap).map(([imageName, image], idx) => (
          <div
            className="image-grid__item-wrapper"
            key={generateKey(imageName, idx)}
            onClick={() => {
              slider.current.slickGoTo(idx)
              setIsSliderVisible(!isSliderVisible)
            }}
          >
            <GatsbyImage image={image.gatsbyImageData} alt={title} />
          </div>
        ))}
      </section>
    </div>
  )
}

export default Gallery

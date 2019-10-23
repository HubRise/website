import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Img from 'gatsby-image'
import Slider from 'react-slick'

import { NonStretchedImage } from '../../components/image'

import { generateKey } from '../../components/utils'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const NextArrow = ({
  onClick,
  currentImageNumber,
  totalNumberOfImages
}) => {
  return (
    <button
      style={{
        visibility: currentImageNumber < totalNumberOfImages ? `unset` : `hidden`
      }}
      className='image-slider__arrow_next'
      onClick={(e) => { e.stopPropagation(); onClick() }}
    >
      <FontAwesomeIcon icon={faArrowRight} />
    </button>
  )
}

const PrevArrow = ({ onClick, currentImageNumber }) => {
  return (
    <button
      style={{
        visibility: currentImageNumber !== 1 ? `unset` : `hidden`
      }}
      className='image-slider__arrow_previous'
      onClick={(e) => { e.stopPropagation(); onClick() }}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  )
}

const Gallery = ({ images, appName }) => {
  const slider = useRef(null)
  const [ isSliderVisible, setIsSliderVisible ] = useState(false)
  const [ currentImageNumber, setCurrentImageNumber ] = useState(1)

  const totalNumberOfImages = images.length

  const sliderSettings = {
    speed: 0,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <NextArrow
        currentImageNumber={currentImageNumber}
        totalNumberOfImages={totalNumberOfImages}
      />
    ),
    prevArrow: <PrevArrow currentImageNumber={currentImageNumber} />,
    afterChange: (newIdx) => setCurrentImageNumber(newIdx + 1)
  }

  useEffect(() => {
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

    window.addEventListener(`keydown`, handler)

    return () => window.removeEventListener(`keydown`, handler)
  }, [isSliderVisible])

  useEffect(() => {
    if (isSliderVisible) {
      document.body.classList.toggle(`no-vertical-scroll`)

      return () => document.body.classList.toggle(`no-vertical-scroll`)
    }
  }, [isSliderVisible])

  return (
    <div className='section__content'>
      <div
        className='image-slider-wrapper'
        style={{
          display: isSliderVisible ? `grid` : `none`
        }}
        onClick={() => setIsSliderVisible(false)}
      >
        <section
          className='image-slider__topbar'
          onClick={(e) => e.stopPropagation()}
        >
          <p className='image-slider__title'>
            <span className='image-slider__title-app-name'>
              {appName}
            </span>
          </p>
          <p className='image-slider__count'>
            {currentImageNumber} / {totalNumberOfImages}
          </p>
          <button
            className='image-slider__button_close'
            onClick={() => setIsSliderVisible(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </section>
        <Slider
          ref={slider}
          className='image-slider'
          {...sliderSettings}
        >
          {images.map(({ name, childImageSharp }, idx) => (
            <div
              key={generateKey(name, idx)}
              onClick={(e) => e.stopPropagation()}
            >
              <Img
                className='image-slider__slide'
                alt={name}
                {...childImageSharp}
              />
            </div>
          ))}
        </Slider>
      </div>
      <section className='image-grid'>
        {images.map(({ name, childImageSharp }, idx) => (
          <div
            className='image-grid__item-wrapper'
            key={generateKey(name, idx)}
            onClick={() => {
              slider.current.slickGoTo(idx)
              setIsSliderVisible(!isSliderVisible)
            }}
          >
            <NonStretchedImage
              alt={name}
              {...childImageSharp}
            />
          </div>
        ))}
      </section>
    </div>
  )
}

export default Gallery

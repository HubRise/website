import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'

import Link from '../../link'
import { useInterval } from '../../custom_hooks'
import { generateKey } from '../../utils'

export const CompatibleApps = ({
  title,
  description,
  carouselImages,
  screen_reader_pointer: screenReaderPointer
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lastActiveIndex, setLastActiveIndex] = useState()
  const lastIndex = carouselImages.length - 1

  useInterval(function rotateBanners () {
    setLastActiveIndex(activeIndex)
    setActiveIndex(activeIndex >= lastIndex ? 0 : activeIndex + 1)
  }, 5000)

  return (
    <section className='section'>
      <div className={`
        section__in
        section__in_padding
        section__in_reverse
      `}>
        <h3 className='section__title'>
          {title}
        </h3>
        <p className='section__description'>
          {description.paragraph_1}
          <br />
          {description.paragraph_2}
          <br />
          <Link
            to={description.link_1.to}
            className='section__description-link'
          >
            {description.link_1.text}
          </Link>
          <span className='section__description-span'>
            {description.hint_1}
          </span>
          -
          <Link
            to={description.link_2.to}
            className='section__description-link'
          >
            {description.link_2.text}
          </Link>
          <span className='section__description-span'>
            {description.hint_2}
          </span>
        </p>
        <div
          className='index-carousel orbit-wrapper'
          role='region'
          aria-label='Compatible Applications'
        >
          <ul
            className='index-carousel__container orbit-container'
            tabIndex='0'
          >
            <i
              className={`
                index-carousel__arrow
                index-carousel__arrow_previous
                orbit-previous fa fa-chevron-circle-left
              `}
              tabIndex='0'
              onClick={function goToPreviousSlide () {
                setLastActiveIndex(activeIndex)
                const newIndex = activeIndex - 1
                setActiveIndex(newIndex < 0 ? lastIndex : newIndex)
              }}
            />
            <i
              className={`
                index-carousel__arrow
                index-carousel__arrow_next
                orbit-next
                fa fa-chevron-circle-right
              `}
              tabIndex='0'
              onClick={function goToNextSlide () {
                setLastActiveIndex(activeIndex)
                const newIndex = activeIndex + 1
                setActiveIndex(newIndex > lastIndex ? 0 : newIndex)
              }}
            />
            {carouselImages.map(({ title, childImageSharp }, idx) => {
              return (
                <li
                  key={generateKey(title, idx)}
                  className='index-carousel__slide orbit-slide'
                  style={{
                    visibility: `${
                      (activeIndex === idx || lastActiveIndex === idx)
                        ? 'visible'
                        : 'hidden'
                    }`,
                    transform: `translateX(${
                      activeIndex === idx
                        ? '0'
                        : idx < activeIndex
                          ? '-100'
                          : '100'
                    }%)`,
                    transition: `transform .55s ease-out`
                  }}
                >
                  <span className='index-carousel__title'>
                    {title}
                  </span>
                  <Image
                    className='index-carousel__image orbit-image'
                    alt={title}
                    {...childImageSharp}
                  />
                </li>
              )
            })}
          </ul>
          <nav className='index-carousel__bullets orbit-bullets'>
            {carouselImages.map(({ description }, idx) => {
              const isCurrentSlide = activeIndex === idx
              return (
                <button
                  key={generateKey(description, idx)}
                  className={`${isCurrentSlide ? 'is-active' : ''}`}
                  onClick={() => {
                    if (isCurrentSlide) return
                    setLastActiveIndex(activeIndex)
                    setActiveIndex(idx)
                  }}
                >
                  <span className='show-for-sr'>
                    {description}
                  </span>
                  {isCurrentSlide && (
                    <span className='show-for-sr'>
                      {screenReaderPointer}
                    </span>
                  )}
                </button>
              )
            })}
          </nav>
        </div>
      </div>
    </section>
  )
}

CompatibleApps.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.shape({
    paragraph_1: PropTypes.string.isRequired,
    paragraph_2: PropTypes.string.isRequired,
    link_1: PropTypes.shape({
      text: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired
    }),
    hint_1: PropTypes.string.isRequired,
    link_2: PropTypes.shape({
      text: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired
    }),
    hint_2: PropTypes.string.isRequired
  }).isRequired,
  carouselImages: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      childImageSharp: PropTypes.object.isRequired
    })
  ).isRequired,
  screen_reader_pointer: PropTypes.string.isRequired
}

import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

interface NextArrowProps {
  currentImageNumber: number
  totalNumberOfImages: number
  onClick?: Function
}

const NextArrow = ({
  currentImageNumber,
  totalNumberOfImages,
  onClick
}: NextArrowProps): JSX.Element => {
  return (
    <button
      style={{
        visibility:
          currentImageNumber < totalNumberOfImages ? `unset` : `hidden`
      }}
      className="image-slider__arrow_next"
      onClick={(e) => {
        e.stopPropagation()
        if (onClick) onClick()
      }}
    >
      <FontAwesomeIcon icon={faArrowRight} />
    </button>
  )
}

export default NextArrow

import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

import { StyledNextArrow } from "./Styles"

interface NextArrowProps {
  currentImageNumber: number
  totalNumberOfImages: number
  onClick?: () => void
}

const NextArrow = ({ currentImageNumber, totalNumberOfImages, onClick }: NextArrowProps): JSX.Element => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation()
    onClick && onClick()
  }

  return (
    <StyledNextArrow isVisible={currentImageNumber < totalNumberOfImages} onClick={handleClick}>
      <FontAwesomeIcon icon={faArrowRight} />
    </StyledNextArrow>
  )
}

export default NextArrow

import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

import { StyledPrevArrow } from "./Styles"

interface PrevArrowProps {
  currentImageNumber: number
  onClick?: () => void
}

const PrevArrow = ({ currentImageNumber, onClick }: PrevArrowProps): JSX.Element => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation()
    onClick && onClick()
  }

  return (
    <StyledPrevArrow isVisible={currentImageNumber !== 1} onClick={handleClick}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </StyledPrevArrow>
  )
}

export default PrevArrow

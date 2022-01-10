import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

import { StyledClose } from "./Styles"

interface CloseProps {
  onClick: () => void
}

const Close = ({ onClick }: CloseProps): JSX.Element => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation()
    onClick()
  }

  return (
    <StyledClose onClick={handleClick}>
      <FontAwesomeIcon icon={faTimes} />
    </StyledClose>
  )
}

export default Close

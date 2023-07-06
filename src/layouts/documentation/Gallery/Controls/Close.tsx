import * as React from "react"

import { StyledClose } from "./Styles"

import { iconSizes } from "@utils/styles"
import Icon from "@layouts/shared/components/Icon"

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
      <Icon code="close" size={iconSizes._32} />
    </StyledClose>
  )
}

export default Close

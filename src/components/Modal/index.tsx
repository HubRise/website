import * as React from "react"

import Icon from "@components/Icon"
import { iconSizes } from "@utils/styles"

import { Overlay, Title, CloseButton, StyledModal } from "./Styles"

interface ModalProps {
  title: string
  onClose: (event: React.MouseEvent) => void
  children: React.ReactNode
}

const Modal = ({ title, onClose, children }: ModalProps): JSX.Element => (
  <Overlay onClick={onClose} role="modal">
    <StyledModal onClick={(e: React.MouseEvent) => e.stopPropagation()}>
      <Title>{title}</Title>

      {children}

      <CloseButton onClick={onClose}>
        <Icon code="close" size={iconSizes._25} />
      </CloseButton>
    </StyledModal>
  </Overlay>
)

export default Modal

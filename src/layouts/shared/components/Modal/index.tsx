import React, { ReactNode } from "react"

import { Overlay, Title, CloseButtonIcon, CloseButton, StyledModal } from "./Styles"

interface ModalProps {
  title: string
  onClose: (event: React.MouseEvent) => void
  children: ReactNode
}

const Modal = ({ title, onClose, children }: ModalProps): JSX.Element => (
  <Overlay onClick={onClose} role="modal">
    <StyledModal onClick={(e) => e.stopPropagation()}>
      <Title>{title}</Title>

      {children}

      <CloseButton onClick={onClose}>
        <CloseButtonIcon className="fa fa-close" />
      </CloseButton>
    </StyledModal>
  </Overlay>
)

export default Modal

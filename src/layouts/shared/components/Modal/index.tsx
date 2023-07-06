import React, { ReactNode } from "react"

import { Overlay, Title, CloseButton, StyledModal } from "./Styles"

import Icon from "@layouts/shared/components/Icon"
import { iconSizes } from "@utils/styles"

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
        <Icon code="close" size={iconSizes._25} />
      </CloseButton>
    </StyledModal>
  </Overlay>
)

export default Modal

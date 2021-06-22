import React, { ReactNode } from 'react'

interface ModalProps {
  title: string
  onClose: (event: React.MouseEvent) => void
  children: ReactNode
}

const Modal = ({ title, onClose, children }: ModalProps) => {
  return (
    <div
      className="reveal-overlay"
      style={{
        display: `grid`,
        placeItems: `center`
      }}
      onClick={onClose}
    >
      <div
        className="reveal modal"
        role="dialog"
        aria-hidden="false"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        style={{
          display: `block`,
          top: 0
        }}
      >
        <h5 className="modal__title">{title}</h5>
        {children}
        <button
          type="button"
          className="close-button modal__close-button"
          data-close=""
          aria-label="close"
          onClick={onClose}
        >
          <i className="fa fa-close modal__close-button-icon" />
        </button>
      </div>
    </div>
  )
}

export default Modal

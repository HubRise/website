import React from 'react'
import PropTypes from 'prop-types'

const Modal = ({ title, description, onClose, children }) => {
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
        tabIndex="-1"
        onClick={(e) => e.stopPropagation()}
        style={{
          display: `block`,
          top: 0
        }}
      >
        <h5 className="modal__title">{title}</h5>
        <div className="comments__text">{description}</div>
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

Modal.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onClose: PropTypes.func
}

Modal.defaultProps = {
  title: ``,
  description: ``,
  onClose: () => {}
}

export default Modal

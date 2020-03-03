import React, { useCallback, useEffect, useRef } from 'react'
import {
  faCheck,
  faTimes,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cx from 'classnames'

import { animate } from './toast.helpers'

function getIcon(variant) {
  switch (variant) {
    case 'success':
      return faCheck
    case 'error':
      return faTimes
    default:
      return faCheck
  }
}

function Toast({
  variant,
  title,
  text,
  id,
  onClose,
  isHideDisabled,
  timeout = 10000
}) {
  const toastRef = useRef(null)

  const hideToast = useCallback(() => {
    animate({
      draw: (progress) => {
        if (toastRef.current) {
          toastRef.current.style.opacity = String(1 - progress)
        }
      },
      duration: 300
    }).then(() => onClose(id))
  }, [id, onClose])

  useEffect(() => {
    if (isHideDisabled) return

    const timeoutId = setTimeout(hideToast, timeout)
    return () => clearTimeout(timeoutId)
  }, [hideToast, isHideDisabled, timeout])

  return (
    <div className={cx('toast__inner', variant)} ref={toastRef}>
      <div className="toast__icon">
        <FontAwesomeIcon icon={getIcon(variant)} color="white" />
      </div>
      <div className="toast__content">
        {title ? <span className="toast__title">{title}</span> : null}
        <p className="toast__description">{text}</p>
      </div>
      <button
        className="toast__close-button"
        type="button"
        onClick={() => onClose(id)}
        data-testid="close-toast-button"
      >
        <FontAwesomeIcon icon={faTimesCircle} color="white" />
      </button>
    </div>
  )
}

export default Toast

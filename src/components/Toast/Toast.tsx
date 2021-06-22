import * as React from 'react'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cx from 'classnames'

import { animate, getIcon } from './helpers'
import { IToast } from './helpers'

type ToastProps = {
  toast: IToast
  onClose: (id: number) => void
}

const Toast = ({ toast, onClose }: ToastProps): JSX.Element => {
  const toastRef = React.useRef<HTMLDivElement>(null)

  const hideToast = React.useCallback(() => {
    const draw = (progress) => {
      if (toastRef.current) {
        toastRef.current.style.opacity = String(1 - progress)
      }
    }
    animate(draw, 300).then(() => onClose(toast.id))
  }, [toast.id, onClose])

  React.useEffect(() => {
    if (!toast.timeout) return

    const timeoutId = setTimeout(hideToast, toast.timeout)
    return () => clearTimeout(timeoutId)
  }, [hideToast, toast.timeout])

  return (
    <div className={cx('toast__inner', toast.variant)} ref={toastRef}>
      <div className="toast__icon">
        <FontAwesomeIcon icon={getIcon(toast.variant)} color="white" />
      </div>

      <div className="toast__content">
        {toast.title ? (
          <span className="toast__title">{toast.title}</span>
        ) : null}
        <p className="toast__description">{toast.text}</p>
      </div>

      <button
        className="toast__close-button"
        type="button"
        onClick={() => onClose(toast.id)}
        data-testid="close-toast-button"
      >
        <FontAwesomeIcon icon={faTimesCircle} color="white" />
      </button>
    </div>
  )
}

export default Toast

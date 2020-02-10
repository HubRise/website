import React, { useCallback, useState } from 'react'

import { ToastContext } from './toast.hooks'
import Toast from './toast'

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const toast = useCallback(
    (params) =>
      setToasts((prevToasts) => [...prevToasts, { ...params, id: Date.now() }]),
    []
  )

  const closeToast = useCallback(
    (toastId) =>
      setToasts((prevToasts) =>
        prevToasts.filter((item) => item.id !== toastId)
      ),
    []
  )

  return (
    <ToastContext.Provider value={toast}>
      <div className="toast-list" data-test-id="toast-list">
        {toasts.map((item) => (
          <Toast key={item.id} {...item} onClose={closeToast} />
        ))}
      </div>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider

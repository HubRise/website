import * as React from "react"

import { ToastContext, ToastAdder } from "./context"
import Toast from "./Toast"
import { IToast } from "./helpers"
import { ToastGroup } from "./Styles"

const ToastProvider: React.FC = ({ children }) => {
  const [toasts, setToasts] = React.useState<Array<IToast>>([])

  const addToast: ToastAdder = React.useCallback(
    (partialToast) => setToasts((prevToasts) => [...prevToasts, { id: Date.now(), ...partialToast }]),
    [],
  )

  const removeToast = React.useCallback(
    (toastId) => setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== toastId)),
    [],
  )

  return (
    <ToastContext.Provider value={addToast}>
      <ToastGroup>
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} onClose={removeToast} />
        ))}
      </ToastGroup>

      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider

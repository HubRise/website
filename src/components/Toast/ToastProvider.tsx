"use client"

import * as React from "react"

import { ToastGroup } from "./Styles"
import Toast from "./Toast"
import { ToastContext, ToastAdder } from "./context"
import { IToast } from "./helpers"

const ToastProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [toasts, setToasts] = React.useState<Array<IToast>>([])

  const addToast: ToastAdder = React.useCallback(
    (partialToast) => setToasts((prevToasts) => [...prevToasts, { id: Date.now(), ...partialToast }]),
    [],
  )

  const removeToast = React.useCallback(
    (toastId: number) => setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== toastId)),
    [],
  )

  return (
    <ToastContext.Provider value={addToast}>
      {toasts.length > 0 && (
        <ToastGroup>
          {toasts.map((toast) => (
            <Toast key={toast.id} toast={toast} onClose={removeToast} />
          ))}
        </ToastGroup>
      )}

      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider

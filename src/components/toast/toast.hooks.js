import React, { useContext } from 'react'

export const ToastContext = React.createContext(undefined)

export function useToast() {
  const toastContext = useContext(ToastContext)

  if (!toastContext)
    throw new Error('useToast must be inside a ToastProvider with a value')

  return toastContext
}

import React, { useContext } from "react"

import { IToast } from "./helpers"

export type ToastAdder = (toast: Pick<IToast, "variant" | "title" | "text" | "timeout">) => void

export const ToastContext = React.createContext<ToastAdder | undefined>(undefined)

export function useToast(): ToastAdder {
  const toastContext = useContext(ToastContext)

  if (!toastContext) throw new Error("useToast must be inside a ToastProvider with a value")

  return toastContext
}

import * as React from "react"
import { Language } from "prism-react-renderer"

import HighlightCode from "./HighlightCode"

interface PreProps {
  className?: string
  children?: React.ReactNode
}

const Pre = ({ className, children }: PreProps): JSX.Element | null => {
  if (!children) return null

  const language = className ? (className.split(`-`)[1] as Language) : undefined
  return <HighlightCode language={language} code={(children as any).props.children} />
}

export default Pre

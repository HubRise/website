import * as React from "react"
import { Language } from "prism-react-renderer"

import HighlightCode from "./HighlightCode"

interface PreProps {
  className?: string
  children: {
    props: {
      children: string
    }
  }
}

const Pre = ({ className, children }: PreProps): JSX.Element => {
  const language = className ? (className.split(`-`)[1] as Language) : undefined
  return <HighlightCode language={language} code={children.props.children} />
}

export default Pre

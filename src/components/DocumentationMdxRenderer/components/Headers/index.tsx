import * as React from "react"

import Header from "./Header"
import type { HeaderLevel } from "./types"

type HeaderComponent = React.FC<React.PropsWithChildren>
type ReturnType = { [key: string]: HeaderComponent }

/**
 * Defines custom <h2>, <h3>, ... headers with attached anchors.
 *
 * @returns Object containing specified headers as React components.
 */
export function headerGenerate(levels: Array<HeaderLevel>): ReturnType {
  const obj: ReturnType = {}

  for (const level of levels) {
    const component: HeaderComponent = ({ children }) => <Header text={children as string} level={level} />
    component.displayName = level
    obj[level] = component
  }

  return obj
}

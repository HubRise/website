import * as React from "react"

import { createHeaderAnchor } from "@utils/misc"

type HTMLTags = keyof HTMLElementTagNameMap

/**
 * Defines custom HTML headers with attached anchors, to replace the default MDX components.
 *
 * @returns Object containing specified headers as React elements.
 */
export function generate(headers: Array<HTMLTags>): { [key: string]: React.ReactElement } {
  const obj = {}

  for (const header of headers) {
    const element = ({ children: headerText }) => {
      const headerAnchor = createHeaderAnchor(headerText)

      return React.createElement(
        header,
        { id: headerAnchor },
        <>
          {headerText}
          <a href={`#${headerAnchor}`} aria-label={`${headerText} permalink`} />
        </>,
      )
    }
    element.displayName = header
    obj[header] = element
  }

  return obj
}

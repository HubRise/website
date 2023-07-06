import * as React from "react"

import { Anchor, StyledHeader } from "./Styles"

import { createHeaderAnchor } from "@utils/misc"

export type Header = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

/**
 * Defines custom h2-h3 headers with attached anchors.
 * Intended for replacing default MDX components.
 *
 * @returns Object containing specified headers as React elements.
 */
export function generate(headers: Array<Header>): { [key: string]: React.ReactElement } {
  const obj = {}

  for (const header of headers) {
    const element = ({ children: headerText }) => {
      const headerAnchor = createHeaderAnchor(headerText)
      const Header = StyledHeader(header)

      return (
        <Header id={headerAnchor}>
          {headerText}
          <Anchor href={`#${headerAnchor}`} aria-label={`${headerText} permalink`} />
        </Header>
      )
    }
    element.displayName = header
    obj[header] = element
  }

  return obj
}

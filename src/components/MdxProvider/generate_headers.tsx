import { createHeaderAnchor } from '@utils/misc'
import * as React from 'react'

/**
 * Defines custom h2-h3 headers with attached anchors.
 * Intended for replacing default MDX components.
 *
 * @returns Object containing specified headers as React elements.
 */
export default function generateHeaders(headers: string[]): object {
  const obj = {}

  for (let header of headers) {
    obj[header] = ({ children: headerText }) => {
      const headerAnchor = createHeaderAnchor(headerText)

      return React.createElement(
        header,
        { id: headerAnchor },
        <>
          {headerText}
          <a
            href={`#${headerAnchor}`}
            arial-label={`${headerText} permalink`}
          />
        </>
      )
    }
  }

  return obj
}

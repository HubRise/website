import React from 'react'

/**
 * Applies kebab case to a regular string.
 * NOTE: strips away any punctuation, except for `_`
 *
 * @param   {string}  string
 * @param   {boolean} keepCase - Keep original letter casing, or transform into lowercase.
 * @returns {string}
 */
export const kebabify = (string, keepCase = false) => {
  const result = string
    .split(/[^\w]+/g)
    .filter(Boolean)
    .join(`-`)

  return keepCase ? result : result.toLowerCase()
}

/**
 * Inserts a space between words in a camel cased string.
 * @param {string}  string
 * @param {boolean} keepCase - Keep original letter casing, or transform into lowercase.
 * @returns {string}
 */
export const splitCamelCase = (string, keepCase = false) => {
  const result = string
    .split(/([A-Z]?[a-z]+)/)
    .filter(Boolean)
    .join(` `)

  return keepCase ? result : result.toLowerCase()
}

/**
 * Strips headers of chapters and subchapters, transforming
 * the remaining text into a kebabified anchor.
 *
 * @param   {string} header - Header text.
 * @returns {string} Header text without a leading chapter, kebabified.
 * @example
 *   1.2. Retrieve order => retrieve-order
 */
export function createHeaderAnchor(header) {
  // Detects leading chapter numbers.
  const regex = /^[\d.]+\s/

  return header.match(regex)
    ? kebabify(header.replace(regex, ``))
    : kebabify(header)
}

/**
 * Defines custom h2-h3 headers with attached anchors.
 * Intended for replacing default MDX components.
 *
 * @returns {object} Object containing specified headers as React elements.
 */
export function generateHeaders(headers) {
  return headers.reduce((obj, header) => {
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

    return obj
  }, {})
}

/**
 * Generatey key prop for repeating sibling React elements.
 *
 * @param   {string} prefix
 * @param   {string} suffix
 * @returns {string}
 */
export const generateKey = (prefix, suffix) => `${prefix}--${suffix}`

/**
 * Splits path into standalone segments.
 * @param   {string} path - Path to page.
 * @returns {array[string]} List of path segments without locale prefix,
 *   if applicable.
 */
export const getPathSegments = (path) => {
  const regex = /\/(?<languageCode>[a-z]{2})\//
  const withLocalePrefix = regex.exec(path)
  const parts = path.split(`/`).filter(Boolean)

  return withLocalePrefix ? parts.slice(1) : parts
}

/**
 * Replace backslash with forward slash.
 * @param   {string} path.
 * @returns {string} result string
 */
export const replaceBackslash = (path) => path.split('\\').join('/')

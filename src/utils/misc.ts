import { remark } from "remark"
import remarkHtml from "remark-html"

/**
 * Applies kebab case to a regular string.
 * NOTE: strips away any punctuation, except for `_`
 *
 * @param   input
 * @param   keepCase - Keep original letter casing, or transform into lowercase.
 * @returns
 */
export const kebabify = (input: string, keepCase = false): string => {
  const result = input
    .split(/[^\w]+/g)
    .filter(Boolean)
    .join(`-`)

  return keepCase ? result : result.toLowerCase()
}

/**
 * Generatey key prop for repeating sibling React elements.
 */
export const generateKey = (prefix: string, suffix: string | number): string => `${prefix}--${suffix}`

export const markdownToHtml = (markdown: string): string => {
  return remark().use(remarkHtml).processSync(markdown.replace(/\n/g, "\n\n")).toString()
}

/**
 * Strips headers of chapters and subchapters, transforming
 * the remaining text into a kebabified anchor.
 *
 * @param   header - Header text.
 * @returns Header text without a leading chapter, kebabified.
 * @example
 *   1.2. Retrieve order => retrieve-order
 */
export function createHeaderAnchor(header: string): string {
  // Detects leading chapter numbers.
  const regex = /^[\d.]+\s/

  return header.match(regex) ? kebabify(header.replace(regex, ``)) : kebabify(header)
}

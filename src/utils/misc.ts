/**
 * Creates a slug from a name.
 *
 * @param name - Name.
 * @example
 *   Fidélité et marketing => fidelite-et-marketing
 */

export function slugify(name: string): string {
  return name
    .normalize("NFD") // Normalize accented characters
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .toLowerCase()
    .split(/[^\w]+/g)
    .filter(Boolean)
    .join(`-`)
}

/**
 * Creates a header anchor from a header text.
 *
 * @param   header - Header text.
 * @example
 *   1.2. Retrieve order => retrieve-order
 */
export function createHeaderAnchor(header: string): string {
  return slugify(
    header.replace(/^[\d.]+\s/, ``), // Remove leading chapter numbers
  )
}

/**
 * Replace spaces with non-breaking spaces before punctuation
 */
export const text = (str: string): string => {
  // return str
  return str.replace(/ (\:|\?|!|;)/g, "\u00A0$1")
}

/**
 * Get window Dimensions
 */
export type TWindowSize = {
  width: number
  height: number
}

export const getWindowDimensions = (): TWindowSize => {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

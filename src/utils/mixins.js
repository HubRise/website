import { css } from 'styled-components'
import { large, medium, small, xlarge, xxlarge } from '../constants/theme'

function adjustMax(value) {
  // Max value is 0.2px under the next breakpoint
  // Use a precision under 1px to support browser zoom, but not to low to avoid rounding.
  return value - 0.2
}

function createMediaMixin({ min, max }) {
  const media =
    min && max
      ? `@media (min-width: ${min}px) and (max-width: ${adjustMax(max)}px)`
      : min && !max
      ? `@media (min-width: ${min}px)`
      : !min && max
      ? `@media (max-width: ${adjustMax(max)}px)`
      : null

  return (styles) => css`
    ${media} {
      ${styles};
    }
  `
}

function isValidBreakpoint(value) {
  return [small, medium, large, xlarge, xxlarge].includes(value)
}

function isValidDirection(value) {
  return ['up', 'down', 'only'].includes(value)
}

/**
 * @param {number} from - start media breakpoint
 * @param {number | string} toOrDirection - end media breakpoint or direction
 */
export function breakpoint(from, toOrDirection) {
  if (!isValidBreakpoint(from)) {
    throw new Error(`[${from}] - is invalid media breakpoint!`)
  }

  if (isValidBreakpoint(toOrDirection)) {
    return createMediaMixin({ min: from, max: toOrDirection })
  }

  if (isValidDirection(toOrDirection)) {
    switch (toOrDirection) {
      case 'up':
        return createMediaMixin({ min: from })
      case 'down':
        return createMediaMixin({ max: from })
      case 'only':
        return createMediaMixin({ min: from, max: from })
    }
  } else {
    throw new Error(
      `[${toOrDirection}] - is invalid media breakpoint or direction!`
    )
  }
}

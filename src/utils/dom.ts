/**
 * Convert a rem size (eg "5rem") into a number of pixels (80).
 */
export const remIntoPixels = (rem: string): number => {
  const nbRem = Number(rem.replace("rem", ""))
  const remPerPx = 16
  return nbRem * remPerPx
}

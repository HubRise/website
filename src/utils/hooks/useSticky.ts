import * as React from "react"

/**
 * Repaint the component each time the provided sticky HTML element transitions between stuck and non stuck modes.
 * @param ref The sticky element
 * @param topOffset The "top" CSS property of the sticky element, specified in pixels.
 */
const useSticky = (ref: React.RefObject<HTMLElement>, topOffset: number): boolean => {
  const [isSticky, setIsSticky] = React.useState(false)

  const handleScroll = React.useCallback((): void => {
    if (ref.current) setIsSticky(ref.current.getBoundingClientRect().top === topOffset)
  }, [setIsSticky, ref, topOffset])

  React.useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return isSticky
}

export default useSticky

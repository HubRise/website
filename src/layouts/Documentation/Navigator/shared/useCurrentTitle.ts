import * as React from "react"

import { getCurrentTitle } from "./utils"

const useCurrentTitle = (defaultTitle: string): string => {
  const [currentTitle, setCurrentTitle] = React.useState(defaultTitle)

  React.useLayoutEffect(() => {
    function onScroll() {
      const newTitle = getCurrentTitle() || defaultTitle
      if (currentTitle !== newTitle) setCurrentTitle(newTitle)
    }

    document.addEventListener("scroll", onScroll)
    return () => document.removeEventListener("scroll", onScroll)
  }, [currentTitle, defaultTitle])

  return currentTitle
}

export default useCurrentTitle

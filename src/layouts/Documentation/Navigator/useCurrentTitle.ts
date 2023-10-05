import * as React from "react"

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

function getCurrentTitle(): string | null {
  const titleNodeList = Array.from(document.querySelectorAll("h2")).reverse()

  const currentTitleNode = titleNodeList.find((titleNode) => {
    const rect = titleNode.getBoundingClientRect()
    const nodeTop = rect.top + window.scrollY
    return nodeTop <= document.documentElement.scrollTop + 100
  })

  return currentTitleNode ? currentTitleNode.textContent : null
}

export default useCurrentTitle

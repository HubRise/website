import { useRouter } from "next/navigation"
import * as React from "react"

import contentHotReload from "content-hot-reload.json"

const ContentHotReload = () => {
  const router = useRouter()

  React.useEffect(
    () => {
      // This invalidates the RSC payload cache on the client-side, so that we get the latest content
      router.refresh()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [contentHotReload.timestamp],
  )

  return <></>
}

export default ContentHotReload

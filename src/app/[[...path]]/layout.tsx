import * as React from "react"

import Favicons from "@components/Favicons"
import StyledComponentsRegistry from "@components/StyledComponentsRegistry"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <Favicons />
      </head>

      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}

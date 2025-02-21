import Script from "next/script"
import * as React from "react"

import Favicons from "@components/Favicons"
import StyledComponentsRegistry from "@components/StyledComponentsRegistry"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <Favicons />
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_MAPS_SITE_KEY}&libraries=maps,marker&v=beta&loading=async`}
          strategy="beforeInteractive"
          defer
        />
      </head>

      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}

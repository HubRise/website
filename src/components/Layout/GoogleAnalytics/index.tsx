import Script from "next/script"
import * as React from "react"

const GoogleAnalytics = ({ id }: { id: string }): JSX.Element => {
  return (
    <>
      <Script id="google-analytics" src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />

      <Script
        id="google-analytics-init"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
        `,
        }}
      />
    </>
  )
}

export default GoogleAnalytics

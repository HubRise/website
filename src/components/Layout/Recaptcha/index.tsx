import Script from "next/script"
import * as React from "react"

const Recaptcha = ({ siteKey }: { siteKey: string }): JSX.Element => {
  return <Script id="recaptcha" src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`} />
}

export default Recaptcha

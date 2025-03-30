import Script from "next/script"
import * as React from "react"

const Recaptcha = ({ keyId }: { keyId: string }): JSX.Element => {
  return <Script id="recaptcha" src={`https://www.google.com/recaptcha/enterprise.js?render=${keyId}`} />
}

export default Recaptcha

import * as React from "react"
import { Suspense } from "react"

import { IntegrationsYaml } from "@layouts/Integrations/types"
import { ContentImage } from "@utils/contentImage"
import { Language } from "@utils/locales"

import Results from "./Results"

interface IntegrationsProps {
  language: Language
  yaml: IntegrationsYaml
  logoImages: { [logo: string]: ContentImage }
}

const Integrations = ({ language, yaml, logoImages }: IntegrationsProps): JSX.Element => {
  // Results cannot be server-side rendered because it uses useSearchParams. We need to wrap it in Suspense:
  // https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
  return (
    <Suspense>
      <Results language={language} yaml={yaml} logoImages={logoImages} />
    </Suspense>
  )
}

export default Integrations

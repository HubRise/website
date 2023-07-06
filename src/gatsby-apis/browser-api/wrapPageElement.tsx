import * as React from "react"
import { WrapPageElementBrowserArgs } from "gatsby"

import PageWrapper from "@layouts/shared/components/PageWrapper"

const wrapPageElement = ({ element, props }: WrapPageElementBrowserArgs): JSX.Element => (
  <PageWrapper props={props}>{element}</PageWrapper>
)

export default wrapPageElement

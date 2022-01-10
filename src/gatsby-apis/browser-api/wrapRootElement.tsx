import * as React from "react"
import { WrapRootElementBrowserArgs } from "gatsby"

import RootWrapper from "../shared/RootWrapper"

const wrapRootElement = ({ element }: WrapRootElementBrowserArgs): JSX.Element => <RootWrapper>{element}</RootWrapper>

export default wrapRootElement

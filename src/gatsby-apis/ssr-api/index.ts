import { GatsbySSR } from "gatsby"

import { default as wrapRootElement } from "./wrapRootElement"
import { default as wrapPageElement } from "./wrapPageElement"

export const ssrAPI: GatsbySSR = {
  wrapRootElement,
  wrapPageElement,
}

import { GatsbyBrowser } from 'gatsby'
import { default as wrapRootElement } from './wrapRootElement'
import { default as wrapPageElement } from './wrapPageElement'

export const browserAPI: GatsbyBrowser = {
  wrapRootElement,
  wrapPageElement
}

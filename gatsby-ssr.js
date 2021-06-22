import './src/styles/global.scss'
import { ssrAPI } from './src/gatsby-apis/ssr-api'

export const wrapRootElement = ssrAPI.wrapRootElement
export const wrapPageElement = ssrAPI.wrapPageElement

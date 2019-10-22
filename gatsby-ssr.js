import i18n from './src/i18n'

export function replaceRenderer ({ bodyComponent, replaceBodyHTMLString }) {
  i18n.loadNamespaces([`translation`], () => {
    replaceBodyHTMLString(bodyComponent)
  })
}

export {
  wrapPageElement,
  wrapRootElement
} from './gatsby_apis/browser'

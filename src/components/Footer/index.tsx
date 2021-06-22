import * as React from 'react'

import { getLocaleCodeFromAbsolutePath } from '@utils/locales'
import Copyright from './Copyright'
import ScrollUpButton from './ScrollUpButton'
import FooterSection from './FooterSection'
import { useFooterData } from './graphql'
import { RootContext } from '@utils/context'

export interface FooterProps {
  pageContext: RootContext
}

const Footer = ({ pageContext }: FooterProps): JSX.Element => {
  const footerData = useFooterData()
  const footerNodeInLocale = footerData.allFile.nodes.find(
    ({ absolutePath }) =>
      getLocaleCodeFromAbsolutePath(absolutePath) === pageContext.localeCode
  )
  if (!footerNodeInLocale)
    throw `menu-footer.yaml not defined for locale ${pageContext.localeCode}`

  const sections = footerNodeInLocale.childYaml.parsedContent.sections

  return (
    <footer className="footer">
      <div className="footer__nav-wrapper">
        <div className="footer__nav footer-nav">
          {sections.map((section, idx) => (
            <FooterSection key={idx} {...section} />
          ))}
        </div>

        <ScrollUpButton />
      </div>

      <Copyright />
    </footer>
  )
}

export default Footer

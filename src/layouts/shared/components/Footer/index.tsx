import * as React from "react"

import { StyledFooter, Wrapper, Nav } from "./Styles"
import Copyright from "./Copyright"
import ScrollUpButton from "./ScrollUpButton"
import Section from "./Section"
import { useFooterData } from "./graphql"

import { getLocaleCodeFromAbsolutePath, useLocaleCode } from "@utils/locales"

const Footer = (): JSX.Element => {
  const localeCode = useLocaleCode()

  const footerData = useFooterData()
  const footerNodeInLocale = footerData.allFile.nodes.find(
    ({ absolutePath }) => getLocaleCodeFromAbsolutePath(absolutePath) === localeCode,
  )
  if (!footerNodeInLocale) throw `menu-footer.yaml not defined for locale ${localeCode}`

  const sections = footerNodeInLocale.childYaml.parsedContent.sections

  return (
    <StyledFooter>
      <Wrapper>
        <Nav>
          {sections.map((section, idx) => (
            <Section key={idx} {...section} />
          ))}
        </Nav>

        <ScrollUpButton />
      </Wrapper>

      <Copyright />
    </StyledFooter>
  )
}

export default Footer

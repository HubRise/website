import * as React from "react"

import HeaderMobile from "./HeaderMobile"
import HeaderDesktop from "./HeaderDesktop"
import { useHeaderData } from "./graphql"

import { getLocaleCodeFromAbsolutePath, useLocaleCode } from "@utils/locales"
import { LanguagePaths } from "@utils/context"

interface HeaderProps {
  languagePaths: LanguagePaths
}

const Header = ({ languagePaths }: HeaderProps): JSX.Element => {
  const localeCode = useLocaleCode()

  const headerNodeInLocale = useHeaderData().allFile.nodes.find(
    ({ absolutePath }) => getLocaleCodeFromAbsolutePath(absolutePath) === localeCode,
  )
  if (!headerNodeInLocale) throw `menu-header.yaml not defined for locale ${localeCode}`

  const menuItems = headerNodeInLocale.childYaml.parsedContent

  return (
    <React.Fragment>
      <HeaderDesktop languagePaths={languagePaths} menuItems={menuItems} />
      <HeaderMobile languagePaths={languagePaths} menuItems={menuItems} />
    </React.Fragment>
  )
}

export default Header

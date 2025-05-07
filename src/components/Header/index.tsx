import { readYamlFile } from "@utils/files"
import type { Language, LanguagePaths } from "@utils/locales"

import HeaderDesktop from "./HeaderDesktop"
import HeaderMobile from "./HeaderMobile"

export interface HeaderProps {
  language: Language
  languagePaths: LanguagePaths
}

const Header = async ({ language, languagePaths }: HeaderProps): Promise<JSX.Element> => {
  const menuItems = await readYamlFile(`/${language}`, "menu-header")

  return (
    <>
      <HeaderDesktop languagePaths={languagePaths} menuItems={menuItems} />
      <HeaderMobile languagePaths={languagePaths} menuItems={menuItems} />
    </>
  )
}

export default Header

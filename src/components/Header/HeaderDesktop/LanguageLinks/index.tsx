import { useEffect, useState } from "react"

import type { LanguagePaths } from "@utils/locales"
import { allLanguages } from "@utils/locales"

import Dropdown, { TDropdownOption } from "../../Dropdown"

interface LanguageSwitcherProps {
  languagePaths: LanguagePaths
}

const LanguageLinks = ({ languagePaths }: LanguageSwitcherProps): JSX.Element => {
  const [dropdownOptions, setDropdownOptions] = useState<Array<TDropdownOption> | []>([])

  useEffect(() => {
    setDropdownOptions(
      allLanguages.map((language) => {
        const link = languagePaths[language]
        return {
          link_label: language.toUpperCase(),
          link: link === undefined ? "/" : link,
        }
      }),
    )
  }, [languagePaths])

  return (
    <Dropdown
      value={languagePaths.hasOwnProperty("en") ? "FR" : "EN"}
      dataTestid="language-dropdown"
      withOptions
      options={dropdownOptions}
    />
  )
}

export default LanguageLinks

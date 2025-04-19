import { useEffect, useState } from "react"

import Dropdown, { TDropdownOption } from "@components/Dropdown"
import type { LanguagePaths } from "@utils/locales"
import { allLanguages } from "@utils/locales"

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

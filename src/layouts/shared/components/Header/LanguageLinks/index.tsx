import * as React from "react"

import { LocaleCode, localeCodes } from "@utils/locales"
import { LanguagePaths } from "@utils/context"

interface LanguageSwitcherProps {
  languagePaths: LanguagePaths
  MenuItem: ({ ...props }) => JSX.Element
  MenuLink: ({ ...props }) => JSX.Element
}

const LanguageLinks = ({ languagePaths, MenuItem, MenuLink }: LanguageSwitcherProps): JSX.Element => {
  function humanLocale(localeCode: LocaleCode): string {
    return {
      en: "English",
      fr: "Français",
    }[localeCode]
  }

  return (
    <React.Fragment>
      {localeCodes.map((localeCode, index) => {
        const path = languagePaths[localeCode]
        if (path === undefined) {
          return (
            <MenuItem className="is-active" key={index}>
              {humanLocale(localeCode)}
            </MenuItem>
          )
        } else {
          return (
            <MenuItem key={index}>
              <MenuLink to={path} addLocalePrefix={false}>
                {humanLocale(localeCode)}
              </MenuLink>
            </MenuItem>
          )
        }
      })}
    </React.Fragment>
  )
}

export default LanguageLinks

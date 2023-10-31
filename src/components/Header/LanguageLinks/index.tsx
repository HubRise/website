import type { LanguagePaths } from "@utils/locales"
import { Language, allLanguages } from "@utils/locales"

interface LanguageSwitcherProps {
  languagePaths: LanguagePaths
  MenuItem: ({ ...props }) => JSX.Element
  MenuLink: ({ ...props }) => JSX.Element
}

const LanguageLinks = ({ languagePaths, MenuItem, MenuLink }: LanguageSwitcherProps): JSX.Element => {
  function humanLocale(language: Language): string {
    return {
      en: "English",
      fr: "Français",
    }[language]
  }

  return (
    <>
      {allLanguages.map((language, index) => {
        const path = languagePaths[language]
        if (path === undefined) {
          return (
            <MenuItem key={index} $isActive={true}>
              {humanLocale(language)}
            </MenuItem>
          )
        } else {
          return (
            <MenuItem key={index}>
              <MenuLink href={path}>{humanLocale(language)}</MenuLink>
            </MenuItem>
          )
        }
      })}
    </>
  )
}

export default LanguageLinks

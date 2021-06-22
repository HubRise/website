import * as React from 'react'
import cx from 'classnames'

import { LocaleCode, localeCodes } from '@utils/locales'
import { LanguagePaths } from '@utils/context'
import Link from '@components/Link'

interface LanguageSwitcherProps {
  languagePaths: LanguagePaths
  liActiveClassname: string
  liClassname: string
  linkClassname: string
}

const LanguageLinks = ({
  languagePaths,
  liActiveClassname,
  liClassname,
  linkClassname
}: LanguageSwitcherProps): JSX.Element => {
  function humanLocale(localeCode: LocaleCode): string {
    return {
      en: 'English',
      fr: 'Français'
    }[localeCode]
  }

  return (
    <React.Fragment>
      {localeCodes.map((localeCode, index) => {
        const path = languagePaths[localeCode]
        if (path === undefined) {
          return (
            <li className={cx(liClassname, liActiveClassname)} key={index}>
              {humanLocale(localeCode)}
            </li>
          )
        } else {
          return (
            <li className={liClassname} key={index}>
              <Link className={linkClassname} to={path} addLocalePrefix={false}>
                {humanLocale(localeCode)}
              </Link>
            </li>
          )
        }
      })}
    </React.Fragment>
  )
}

export default LanguageLinks

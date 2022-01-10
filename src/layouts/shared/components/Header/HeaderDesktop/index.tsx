import * as React from "react"
import { useTranslation } from "react-i18next"

import { IHeaderLink } from "../helpers"
import LanguageLinks from "../LanguageLinks"

import { StyledHeader, Menu, MenuItem, MenuLink, Signup, Login } from "./Styles"

import Link from "@layouts/shared/components/Link"
import logo from "@assets/images/logo.png"
import { generateKey } from "@utils/misc"
import { LanguagePaths } from "@utils/context"

interface HeaderDesktopProps {
  languagePaths: LanguagePaths
  menuItems: Array<IHeaderLink>
}

const HeaderDesktop = ({ languagePaths, menuItems }: HeaderDesktopProps): JSX.Element => {
  const { t } = useTranslation()

  return (
    <StyledHeader>
      <div>
        <Link to="/">
          <img src={logo} alt="HubRise" />
        </Link>
      </div>

      <Menu>
        {menuItems.map(({ title, to, mobile_only }, idx) => {
          if (mobile_only) return

          return (
            <MenuItem key={generateKey(title, idx)}>
              <MenuLink activeClassName="is-active" to={to} addLocalePrefix={false}>
                {title}
              </MenuLink>
            </MenuItem>
          )
        })}
      </Menu>

      <Menu>
        <LanguageLinks languagePaths={languagePaths} MenuItem={MenuItem} MenuLink={MenuLink} />
      </Menu>

      <div>
        <Signup to="https://manager.hubrise.com/signup" newTab={false}>
          {t(`layout.header.buttons.signup`)}
        </Signup>
        <Login to="https://manager.hubrise.com/login" newTab={false}>
          {t(`layout.header.buttons.login`)}
        </Login>
      </div>
    </StyledHeader>
  )
}

export default HeaderDesktop

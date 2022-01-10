import * as React from "react"
import { useTranslation } from "react-i18next"

import {
  Backdrop,
  Container,
  HeaderTitle,
  HeaderButton,
  StyledMobileBar,
  Header,
  Nav,
  NavLink,
  LanguageItem,
  LanguageList,
  NavLinkLogin,
  LanguageLink,
} from "./Styles"

import { generateKey } from "@utils/misc"
import { LanguagePaths } from "@utils/context"
import { IHeaderLink } from "@layouts/shared/components/Header/helpers"
import LanguageLinks from "@layouts/shared/components/Header/LanguageLinks"

interface MobileBarProps {
  languagePaths: LanguagePaths
  menuItems: Array<IHeaderLink>
  isOpen: boolean
  close: () => void
}

const MobileBar = ({ languagePaths, menuItems, isOpen, close }: MobileBarProps): JSX.Element => {
  const { t } = useTranslation()

  return (
    <StyledMobileBar>
      <Backdrop isOpen={isOpen} onClick={close} />

      <Container isOpen={isOpen}>
        <Header onClick={close}>
          <HeaderButton>
            <i className="fa fa-angle-left" />
          </HeaderButton>
          <HeaderTitle>Menu</HeaderTitle>
        </Header>

        <Nav>
          {menuItems.map(({ title, to }, idx) => {
            return (
              <NavLink
                key={generateKey(title, idx)}
                activeClassName="is-active"
                to={to}
                addLocalePrefix={false}
                onClick={close}
              >
                {title}
              </NavLink>
            )
          })}

          <NavLink className="signup" to="https://manager.hubrise.com/signup" newTab={false}>
            {t(`layout.header.buttons.signup`)}
          </NavLink>

          <NavLinkLogin to="https://manager.hubrise.com/login" newTab={false}>
            {t(`layout.header.buttons.login`)}
          </NavLinkLogin>
        </Nav>

        <LanguageList>
          <LanguageLinks languagePaths={languagePaths} MenuItem={LanguageItem} MenuLink={LanguageLink} />
        </LanguageList>
      </Container>
    </StyledMobileBar>
  )
}

export default MobileBar

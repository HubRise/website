import Image from "next/image"
import { usePathname } from "next/navigation"

import Accordion from "@components/Accordion"
import Button from "@components/Button"
import Products from "@components/Header/Products"
import Resources from "@components/Header/Resources"
import useClientRoutes from "@hooks/client/useClientRoutes"
import useTranslation from "@hooks/client/useTranslation"
import type { LanguagePaths } from "@utils/locales"
import { iconSizes } from "@utils/styles"

import { IHeaderLink } from "../../shared/types"
import { isHeaderLinkActive } from "../../shared/utils"
import LanguageLinks from "../LanguageLinks"
import { LogoLink } from "../Styles"

import {
  Container,
  StyledMobileBar,
  Header,
  Nav,
  NavLink,
  LanguageItem,
  LanguageList,
  LanguageLink,
  HeaderIcon,
  Buttons,
} from "./Styles"

interface MobileBarProps {
  languagePaths: LanguagePaths
  menuItems: Array<IHeaderLink>
  isOpen: boolean
  close: () => void
}

const MobileBar = ({ languagePaths, menuItems, isOpen, close }: MobileBarProps): JSX.Element => {
  const { t } = useTranslation()
  const { signup, login, home } = useClientRoutes()
  const currentPathname = usePathname()

  return (
    <StyledMobileBar>
      <Container $isOpen={isOpen}>
        <Header onClick={close}>
          <HeaderIcon code="close" size={iconSizes._32} />
          <LogoLink href={home}>
            <Image src="/images/logo.png" alt="HubRise" width={142} height={38} />
          </LogoLink>
        </Header>

        <Nav>
          <LanguageList>
            <LanguageLinks languagePaths={languagePaths} MenuItem={LanguageItem} MenuLink={LanguageLink} />
          </LanguageList>

          {menuItems.map(({ title, to, content }, idx) => {
            const isActive = isHeaderLinkActive(currentPathname, to)
            return (
              <div key={idx}>
                {content ? (
                  <Accordion title={title}>
                    {content.products?.length && <Products products={content?.products} />}
                    {content.resources && <Resources resources={content?.resources} />}
                  </Accordion>
                ) : (
                  <NavLink href={to} onClick={close} $isActive={isActive}>
                    {title}
                  </NavLink>
                )}
              </div>
            )
          })}

          <Buttons>
            <Button link={signup} label={t(`layout.header.buttons.signup`)} />
            <Button link={login} label={t(`layout.header.buttons.login`)} type="secondary" />
          </Buttons>
        </Nav>
      </Container>
    </StyledMobileBar>
  )
}

export default MobileBar

"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"

import Button from "@components/Button"
import Dropdown from "@components/Dropdown"
import { useLayoutContext } from "@components/LayoutContext"
import useClientRoutes from "@hooks/client/useClientRoutes"
import useTranslation from "@hooks/client/useTranslation"
import type { LanguagePaths } from "@utils/locales"

import Products from "../Products"
import Resources from "../Resources"
import { IHeaderLink } from "../shared/types"
import { isHeaderLinkActive } from "../shared/utils"

import LanguageLinks from "./LanguageLinks"
import { StyledHeader, Menu, MenuItem, MenuLink, RightSide, HeaderWrapper } from "./Styles"

interface HeaderDesktopProps {
  languagePaths: LanguagePaths
  menuItems: Array<IHeaderLink>
}

const HeaderDesktop = ({ languagePaths, menuItems }: HeaderDesktopProps): JSX.Element => {
  const { t } = useTranslation()
  const { home, signup, login } = useClientRoutes()
  const currentPathname = usePathname()
  const { isIntegrationsNavSticky } = useLayoutContext()

  return (
    <StyledHeader data-testid="header:desktop" $isIntegrationsNavSticky={isIntegrationsNavSticky}>
      <HeaderWrapper>
        <Link href={home}>
          <Image src="/images/logo.png" alt="HubRise" width={150} height={40} />
        </Link>

        <Menu>
          {menuItems.map(({ title, to, content, mobile_only }, idx) => {
            if (mobile_only) return
            const isActive = isHeaderLinkActive(currentPathname, to)
            return (
              <div key={idx}>
                {content ? (
                  <Dropdown
                    value={title}
                    menuContent={
                      <>
                        {content.products?.length && <Products products={content?.products} />}
                        {content.resources && <Resources resources={content?.resources} />}
                      </>
                    }
                    position={content.resources ? "bigMenu" : "left"}
                  />
                ) : (
                  <MenuItem $isActive={isActive}>
                    <MenuLink href={to} $isActive={isActive}>
                      {title}
                    </MenuLink>
                  </MenuItem>
                )}
              </div>
            )
          })}
        </Menu>

        <RightSide>
          <LanguageLinks languagePaths={languagePaths} />
          <Button link={login} label={t(`layout.header.buttons.login`)} type="secondary" />
          <Button link={signup} label={t(`layout.header.buttons.signup`)} />
        </RightSide>
      </HeaderWrapper>
    </StyledHeader>
  )
}

export default HeaderDesktop

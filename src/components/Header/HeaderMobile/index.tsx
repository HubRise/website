"use client"

import Image from "next/image"
import * as React from "react"

import Icon from "@components/Icon"
import { useLayoutContext } from "@components/LayoutContext"
import useClientRoutes from "@hooks/client/useClientRoutes"
import type { LanguagePaths } from "@utils/locales"
import { iconSizes } from "@utils/styles"

import { IHeaderLink } from "../shared/types"

import MobileBar from "./MobileBar"
import { StyledHeader, LogoLink, BurgerIcon } from "./Styles"

interface HeaderMobileProps {
  languagePaths: LanguagePaths
  menuItems: Array<IHeaderLink>
}

const HeaderMobile = ({ languagePaths, menuItems }: HeaderMobileProps): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false)
  const { home } = useClientRoutes()
  const { isIntegrationsNavSticky } = useLayoutContext()

  React.useLayoutEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "auto"
    }

    return () => {
      document.body.style.overflowY = "auto"
    }
  }, [isOpen])

  return (
    <>
      <StyledHeader data-testid="header:mobile" $isIntegrationsNavSticky={isIntegrationsNavSticky}>
        <BurgerIcon onClick={() => setIsOpen(true)}>
          <Icon code="menu" size={iconSizes._32} />
        </BurgerIcon>

        <LogoLink href={home}>
          <Image src="/images/logo.svg" alt="HubRise" width={142} height={38} />
        </LogoLink>
      </StyledHeader>

      <MobileBar {...{ languagePaths, menuItems, isOpen }} close={() => setIsOpen(false)} />
    </>
  )
}

export default HeaderMobile

"use client"

import Image from "next/image"
import * as React from "react"

import Icon from "@components/Icon"
import useClientRoutes from "@hooks/client/useClientRoutes"
import type { LanguagePaths } from "@utils/locales"
import { colors, iconSizes } from "@utils/styles"
import { useIntegrationsContext } from "context/IntegrationsContext"

import { IHeaderLink } from "../shared/types"

import MobileBar from "./MobileBar"
import { StyledHeader, LogoLink, BurgerIcon } from "./Styles"

interface HeaderMobileProps {
  languagePaths: LanguagePaths
  menuItems: Array<IHeaderLink>
}

const HeaderMobile = ({ languagePaths, menuItems }: HeaderMobileProps): JSX.Element => {
  const mobileHeaderRef = React.useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = React.useState(false)
  const { home } = useClientRoutes()
  const { isIntegrationsNavSticky } = useIntegrationsContext()

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

  React.useLayoutEffect(() => {
    if (mobileHeaderRef.current) {
      if (isIntegrationsNavSticky) {
        mobileHeaderRef.current.style.borderColor = colors.primary
      } else {
        mobileHeaderRef.current.style.borderColor = colors.headerBorder
      }
    }
  }, [isIntegrationsNavSticky, mobileHeaderRef])

  return (
    <>
      <StyledHeader data-testid="header:mobile" ref={mobileHeaderRef}>
        <BurgerIcon onClick={() => setIsOpen(true)}>
          <Icon code="menu" size={iconSizes._32} />
        </BurgerIcon>

        <LogoLink href={home}>
          <Image src="/images/logo.png" alt="HubRise" width={142} height={38} />
        </LogoLink>
      </StyledHeader>

      <MobileBar {...{ languagePaths, menuItems, isOpen }} close={() => setIsOpen(false)} />
    </>
  )
}

export default HeaderMobile

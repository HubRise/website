"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

import Icon from "@components/Icon"
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
  const [isOpen, setIsOpen] = useState(false)
  const { home } = useClientRoutes()

  useEffect(() => {
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
      <StyledHeader data-testid="header:mobile">
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

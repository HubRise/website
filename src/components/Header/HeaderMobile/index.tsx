"use client"

import Image from "next/image"
import * as React from "react"

import useClientRoutes from "@hooks/client/useClientRoutes"
import type { LanguagePaths } from "@utils/locales"

import { IHeaderLink } from "../shared/types"

import MobileBar from "./MobileBar"
import { StyledHeader, LogoLink, Button } from "./Styles"

interface HeaderMobileProps {
  languagePaths: LanguagePaths
  menuItems: Array<IHeaderLink>
}

const HeaderMobile = ({ languagePaths, menuItems }: HeaderMobileProps): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false)
  const { home } = useClientRoutes()

  return (
    <>
      <StyledHeader data-testid="header:mobile">
        <Button onClick={() => setIsOpen(true)}>
          <Image src="/images/burger_button.png" alt="Menu" width={21} height={21} />
        </Button>

        <LogoLink href={home}>
          <Image src="/images/logo.png" alt="HubRise" width={150} height={40} />
        </LogoLink>
      </StyledHeader>

      <MobileBar {...{ languagePaths, menuItems, isOpen }} close={() => setIsOpen(false)} />
    </>
  )
}

export default HeaderMobile

import React from "react"

import { IHeaderLink } from "../helpers"

import { StyledHeader, Logo, LogoLink, Button } from "./Styles"
import MobileBar from "./MobileBar"

import { LanguagePaths } from "@utils/context"
import button from "@assets/images/bread_button.png"
import logo from "@assets/images/logo.png"

interface HeaderMobileProps {
  languagePaths: LanguagePaths
  menuItems: Array<IHeaderLink>
}

const HeaderMobile = ({ languagePaths, menuItems }: HeaderMobileProps): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <StyledHeader>
        <Button onClick={() => setIsOpen(true)}>
          <img src={button} alt="Menu" />
        </Button>
        <Logo>
          <LogoLink to="/">
            <img src={logo} alt="HubRise" />
          </LogoLink>
        </Logo>
      </StyledHeader>

      <MobileBar {...{ languagePaths, menuItems, isOpen }} close={() => setIsOpen(false)} />
    </>
  )
}

export default HeaderMobile

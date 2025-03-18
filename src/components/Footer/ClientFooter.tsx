"use client"

import Copyright from "./Copyright"
import ScrollUpButton from "./ScrollUpButton"
import Section from "./Section"
import { Logo, LogoWrapper, Nav, StyledFooter, Wrapper } from "./Styles"
import { IFooter } from "./types"

const ClientFooter = ({ footerData }: { footerData: IFooter }) => {
  const { sections, copyright } = footerData

  return (
    <StyledFooter>
      <Wrapper>
        <LogoWrapper>
          <Logo src="/images/logo_footer.png" alt="HubRise" width={200} height={52} />
        </LogoWrapper>
        <Nav>
          {sections.map((section, idx) => (
            <Section key={idx} {...section} />
          ))}
        </Nav>

        <ScrollUpButton />
      </Wrapper>

      <Copyright copyright={copyright} />
    </StyledFooter>
  )
}

export default ClientFooter

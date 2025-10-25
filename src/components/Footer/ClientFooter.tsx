"use client"

import Copyright from "./Copyright"
import ScrollUpButton from "./ScrollUpButton"
import Section from "./Section"
import { Nav, StyledFooter, Wrapper } from "./Styles"
import { IFooter } from "./types"

const ClientFooter = ({ footerData }: { footerData: IFooter }) => {
  const { sections, copyright_links, all_rights_reserved } = footerData

  return (
    <StyledFooter>
      <Wrapper>
        <Nav>
          {sections.map((section, idx) => (
            <Section key={idx} {...section} />
          ))}
        </Nav>

        <ScrollUpButton />
      </Wrapper>

      <Copyright copyrightLinks={copyright_links} allRightsReserved={all_rights_reserved} />
    </StyledFooter>
  )
}

export default ClientFooter

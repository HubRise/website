"use client"

import Copyright from "./Copyright"
import ScrollUpButton from "./ScrollUpButton"
import Section from "./Section"
import { Nav, StyledFooter, Wrapper } from "./Styles"
import { IFooter } from "./types"

const ClientFooter = ({ footerData }: { footerData: IFooter }) => {
  const { sections } = footerData
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

      <Copyright />
    </StyledFooter>
  )
}

export default ClientFooter

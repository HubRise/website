import * as React from "react"

import { Container, Inner, StyledContent, StyledSidebar } from "./Styles"

import Sidebar from "@layouts/shared/components/Blog/Sidebar"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Container>
      <Inner>
        <StyledSidebar>
          <Sidebar />
        </StyledSidebar>

        <StyledContent>{children}</StyledContent>
      </Inner>
    </Container>
  )
}

export default Layout

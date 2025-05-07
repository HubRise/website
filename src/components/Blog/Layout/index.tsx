import * as React from "react"

import { BlogArchives } from "@utils/BlogIndexer/types"

import Sidebar from "../Sidebar"

import { Container, Inner, StyledContent, StyledSidebar } from "./Styles"

interface LayoutProps {
  archives: BlogArchives
  children: React.ReactNode
}

const Layout = ({ archives, children }: LayoutProps): JSX.Element => {
  return (
    <Container>
      <Inner>
        <StyledSidebar>
          <Sidebar archives={archives} />
        </StyledSidebar>

        <StyledContent>{children}</StyledContent>
      </Inner>
    </Container>
  )
}

export default Layout

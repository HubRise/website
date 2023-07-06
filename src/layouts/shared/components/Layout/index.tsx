import * as React from "react"

import Header from "../Header"
import Footer from "../Footer"

import { Main } from "./Styles"

import { RootContext } from "@utils/context"

export interface LayoutProps {
  children: React.ReactNode
  pageContext: RootContext
}

const Layout = ({ children, pageContext }: LayoutProps): JSX.Element => {
  const { languagePaths } = pageContext

  return (
    <>
      <Header languagePaths={languagePaths} />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default Layout

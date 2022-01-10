import * as React from "react"

import Header from "../Header"
import Footer from "../Footer"

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
      <main className="content">{children}</main>
      <Footer />
    </>
  )
}

export default Layout

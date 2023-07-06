import * as React from "react"
import { MDXProvider as DefaultMDXProvider } from "@mdx-js/react"

import { components } from "@layouts/shared/components/MdxCustomRenderer/components"

const MDXProvider = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <DefaultMDXProvider components={components}>{children}</DefaultMDXProvider>
)

export default MDXProvider

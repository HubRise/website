import * as React from "react"
import { MDXProvider as DefaultMDXProvider } from "@mdx-js/react"

import A from "./components/A"
import CallSummaryTable from "./components/CallSummaryTable"
import ContactFormToggle from "./components/ContactFormToggle"
import Details from "./components/Details"
import * as Headers from "./components/Headers"
import InlineImage from "./components/InlineImage"
import Label from "./components/Label"
import Pre from "./components/Pre"
import Table from "./components/Table"
import Video from "./components/Video"

import Link from "@layouts/shared/components/Link"

const MDXProvider: React.FC = ({ children }) => (
  <DefaultMDXProvider
    components={{
      ...Headers.generate([`h2`, `h3`]),
      a: A,
      CallSummaryTable,
      ContactFormToggle,
      details: Details,
      InlineImage,
      Label,
      Link,
      pre: Pre,
      table: Table,
      video: Video,
    }}
  >
    {children}
  </DefaultMDXProvider>
)

export default MDXProvider

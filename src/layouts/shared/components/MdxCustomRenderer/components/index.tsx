import type { MDXComponents } from "mdx/types.js"

import A from "./A"
import CallSummaryTable from "./CallSummaryTable"
import ContactFormToggle from "./ContactFormToggle"
import Details from "./Details"
import * as Headers from "./Headers"
import InlineImage from "./InlineImage"
import Label from "./Label"
import Pre from "./Pre"
import Table from "./Table"
import Video from "./Video"

import Link from "@layouts/shared/components/Link"

export const components: MDXComponents = {
  ...Headers.generate([`h2`, `h3`, `h4`]),
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
}

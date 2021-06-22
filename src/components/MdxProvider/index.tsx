import * as React from 'react'
import { MDXProvider as DefaultMDXProvider } from '@mdx-js/react'

import CallSummaryTable from './call_summary_table'
import ContactFormToggle from './contact_form_toggle'
import generateHeaders from './generate_headers'
import HighlightCode from './highlight_code'
import InlineImage from './inline_image'
import Label from './label'
import Link from '@components/Link'

const components = {
  ...generateHeaders([`h2`, `h3`]),
  a: ({ href, ...other }) => <Link to={href} {...other} />,
  table: (tableProps) => (
    <div className="table-container">
      <table {...tableProps} />
    </div>
  ),
  pre: ({ children: { props } }) => (
    <HighlightCode
      language={props.className && props.className.split(`-`)[1]}
      code={props.children}
    />
  ),
  CallSummaryTable,
  Label,
  ContactFormToggle,
  InlineImage,
  Link
}

const MDXProvider: React.FC = ({ children }) => (
  <DefaultMDXProvider components={components}>{children}</DefaultMDXProvider>
)

export default MDXProvider

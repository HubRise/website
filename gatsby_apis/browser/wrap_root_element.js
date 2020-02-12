import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { I18nextProvider } from 'react-i18next'

import {
  HighlightCode,
  CallSummaryTable,
  ContactFormToggle
} from '../../src/components/markdown'
import Label from '../../src/components/markdown/label'
import Link from '../../src/components/link'

import { LayoutProvider } from '../../src/context/layout'

import { generateHeaders } from '../../src/components/utils'

import i18n from '../../src/i18n'
import ErrorBoundary from '../../src/components/error_boundary'

let components = {
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
  inlineCode: ({ children }) => <HighlightCode inline code={children} />,
  CallSummaryTable,
  Label,
  ContactFormToggle
}

export const wrapRootElement = ({ element }) => {
  return (
    <ErrorBoundary>
      <I18nextProvider i18n={i18n}>
        <LayoutProvider>
          <MDXProvider components={components}>{element}</MDXProvider>
        </LayoutProvider>
      </I18nextProvider>
    </ErrorBoundary>
  )
}

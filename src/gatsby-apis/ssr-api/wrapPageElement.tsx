import * as React from 'react'
import { WrapPageElementNodeArgs } from 'gatsby'

import PageWrapper from '@components/PageWrapper'

const wrapPageElement = ({ element, props }: WrapPageElementNodeArgs): any => (
  <PageWrapper props={props}>{element}</PageWrapper>
)

export default wrapPageElement

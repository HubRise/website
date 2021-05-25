import * as React from 'react'
import * as Sentry from '@sentry/react'
import { I18nextProvider } from 'react-i18next'

import i18n from '../../i18n'
import { LayoutProvider } from '../../context/layout'

const RootWrapper: React.FC = ({ children }): JSX.Element => {
  return (
    <Sentry.ErrorBoundary fallback={'An error has occurred'}>
      <I18nextProvider i18n={i18n}>
        <LayoutProvider>{children}</LayoutProvider>
      </I18nextProvider>
    </Sentry.ErrorBoundary>
  )
}

export default RootWrapper

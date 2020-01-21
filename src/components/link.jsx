import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Link as GatsbyLink } from 'gatsby'

import locales from '../i18n/locales'

const newTabProps = {
  target: `_blank`,
  rel: `noopener noreferrer`
}

const Link = ({ to: initialTo, children, newTab, ...other }) => {
  const leadsToInternalPage = initialTo.startsWith(`/`)
  const leadsToDashboard = initialTo.includes(`manager.hubrise.com`)
  const isAnchorWithinCurrentPage = initialTo.startsWith(`#`)
  const {
    i18n: { language }
  } = useTranslation()
  const isDefaultLanguage = locales[language].default
  const queryString = `?locale=${locales[language].tag}`
  const to = initialTo + (leadsToDashboard ? queryString : ``)

  if (leadsToInternalPage) {
    return (
      <GatsbyLink to={isDefaultLanguage ? to : `/${language}${to}`} {...other}>
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a
      href={to}
      {...(newTab && !isAnchorWithinCurrentPage && newTabProps)}
      {...other}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
  newTab: PropTypes.bool
}

Link.defaultProps = {
  children: <></>,
  newTab: true
}

export default Link

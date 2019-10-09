import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Link as GatsbyLink } from 'gatsby'

import locales from '../i18n/locales'

const Link = ({ to, children, newTab, ...other }) => {
  const leadsToInternalPage = to.startsWith(`/`)
  const isAnchorWithinCurrentPage = to.startsWith(`#`)
  const { i18n: { language } } = useTranslation()

  if (leadsToInternalPage) {
    return (
      <GatsbyLink
        to={locales[language].default
          ? to
          : `/${language}${to}`}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }

  if (newTab && !isAnchorWithinCurrentPage) {
    return (
      <a
        href={to}
        target='_blank'
        rel='noopener noreferrer'
        {...other}
      >
        {children}
      </a>
    )
  }

  return (
    <a
      href={to}
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

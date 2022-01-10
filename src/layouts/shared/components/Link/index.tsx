import React, { ReactNode } from "react"
import { Link as GatsbyLink } from "gatsby"

import { defaultLocaleCode, getLocale, useLocaleCode } from "@utils/locales"

interface LinkProps {
  to: string
  children?: ReactNode
  addLocalePrefix?: boolean
  newTab?: boolean
  [K: string]: any
}

const Link = ({
  to: initialTo,
  children = <></>,
  addLocalePrefix = true,
  newTab = true,
  ...other
}: LinkProps): JSX.Element => {
  const localeCode = useLocaleCode()

  if (!initialTo) return <></>

  let to = initialTo

  if (to.startsWith(`/`)) {
    // Internal link, use the React router.

    if (addLocalePrefix && localeCode !== defaultLocaleCode) {
      to = `/${localeCode}${to}`
    }

    return (
      <GatsbyLink to={to} {...other}>
        {children}
      </GatsbyLink>
    )
  } else {
    // External link.

    // Add ?locale=xxx for HubRise back office.
    if (to.includes(`manager.hubrise.com`)) {
      const separator = to.includes("?") ? "&" : "?"
      to = to + separator + `locale=${getLocale(localeCode)}`
    }

    let newTabProps = {}
    if (newTab && !to.startsWith(`#`)) {
      newTabProps = {
        target: `_blank`,
        rel: `noopener`,
      }
    }

    return (
      <a href={to} {...newTabProps} {...other}>
        {children}
      </a>
    )
  }
}

export default Link

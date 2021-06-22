import * as React from 'react'

import Link from '@components/Link'

interface JoinProps {
  title: string
  button_label?: string
  button_url?: string
  link_label?: string
  link_url?: string
}

const Join = ({
  title,
  button_label,
  button_url,
  link_label,
  link_url
}: JoinProps): JSX.Element => {
  return (
    <section className="frontpage-full frontpage-full_white">
      <div className="frontpage-full__inside">
        <div className="frontpage-full__text">
          <h3 className="frontpage-full__title">{title}</h3>

          <div className="frontpage-full__actions">
            {button_label && button_url && (
              <Link to={button_url} className="frontpage-full__button">
                {button_label}
              </Link>
            )}

            {link_label && link_url && (
              <Link to={link_url} className="frontpage-full__link">
                {link_label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Join

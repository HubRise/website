import * as React from 'react'

import { markdownToHtml } from '@utils/misc'
import Link from '@components/Link'

interface HeroProps {
  title: string
  description: string
  button_label: string
  button_url: string
}

const Hero = ({
  title,
  description,
  button_label,
  button_url
}: HeroProps): JSX.Element => {
  return (
    <div className="frontpage-hero">
      <div className="frontpage-hero__image" />

      <div className="frontpage-hero__container">
        <div className="frontpage-hero__text-wrapper">
          <div className="frontpage-hero__text">
            <h1 className="frontpage-hero__title">{title}</h1>
            <div
              className="frontpage-hero__description"
              dangerouslySetInnerHTML={{
                __html: markdownToHtml(description)
              }}
            />
            <Link className="frontpage-hero__button" to={button_url}>
              {button_label}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

import * as React from "react"

import { IHero } from "./interface"

import Link from "@layouts/shared/components/Link"
import { useLayoutContext } from "@layouts/shared/components/LayoutContext"

interface HeroProps {
  hero: IHero
}

const Hero = ({ hero }: HeroProps): JSX.Element => {
  const { forms } = useLayoutContext()

  return (
    <section className="section">
      <div className="section__in section__in_padding">
        <h3 className="section__title">{hero.title}</h3>
        <div className="section__description">
          <p>
            {hero.description.paragraph_1_text}
            {` `}
            <button
              className="section__description-link"
              data-open="contact-us"
              aria-controls="contact-us"
              aria-haspopup="true"
              tabIndex={0}
              onClick={forms.contact.toggle}
            >
              {hero.description.paragraph_1_link_text}
            </button>
          </p>
          <p>
            {hero.description.paragraph_2_text}
            {` `}
            <Link className="section__description-link" to={hero.description.paragraph_2_link_to}>
              {hero.description.paragraph_2_link_text}
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero

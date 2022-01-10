import * as React from "react"

import { IHero } from "./interface"

import { useLayoutContext } from "@layouts/shared/components/LayoutContext"

const Hero = (hero: IHero): JSX.Element => {
  const { forms } = useLayoutContext()
  const { title, description } = hero

  return (
    <section className="section">
      <div className="section__in section__in_padding">
        <h3 className="section__title">{title}</h3>
        <div className="section__description">
          {description.paragraph_1}
          <br />
          {description.paragraph_2 ? (
            <>
              <button className="section__description-link" onClick={forms.contact.toggle}>
                {description.paragraph_2.button}
              </button>
              {description.paragraph_2.text}
            </>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default Hero

export type { IHero } from "./interface"

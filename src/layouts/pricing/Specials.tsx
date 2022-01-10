import * as React from "react"

import { ISpecial } from "./interface"
import { Highlight, Paragraph } from "./Styles"

import { generateKey } from "@utils/misc"
import Link from "@layouts/shared/components/Link"
import { useLayoutContext } from "@layouts/shared/components/LayoutContext"

interface SpecialsProps {
  specials: Array<ISpecial>
}

const Specials = ({ specials }: SpecialsProps): JSX.Element => {
  const { forms } = useLayoutContext()

  return (
    <>
      {specials.map((special, idx) => (
        <div key={generateKey(special.highlight, idx)} className="section__description">
          <Paragraph>
            <Highlight>{special.highlight}</Highlight>

            {special.text}

            {special.link && special.link.to ? (
              <Link className="section__description-link" to={special.link.to} newTab={false}>
                {special.link.text}
              </Link>
            ) : (
              <button
                className="section__description-link"
                data-open="contact-us"
                aria-controls="contact-us"
                aria-haspopup="true"
                tabIndex={0}
                onClick={forms.contact.toggle}
              >
                {special.button}
              </button>
            )}
          </Paragraph>
        </div>
      ))}
    </>
  )
}

export default Specials

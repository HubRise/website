import * as React from 'react'

import { generateKey } from '@utils/misc'
import Link from '@components/Link'
import { useLayoutContext } from '@contexts/layout'
import { ISpecial } from '../interface'

interface SpecialsProps {
  specials: Array<ISpecial>
}

const Specials = ({ specials }: SpecialsProps): JSX.Element => {
  const { forms } = useLayoutContext()

  return (
    <>
      {specials.map((special, idx) => (
        <div
          key={generateKey(special.paragraph_chunk_1, idx)}
          className="section__description"
        >
          <b>{special.paragraph_chunk_1}</b>
          {special.paragraph_chunk_2}
          {` `}
          {special.link && special.link.to ? (
            <Link
              className="section__description-link"
              to={special.link.to}
              newTab={false}
            >
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
        </div>
      ))}
    </>
  )
}

export default Specials

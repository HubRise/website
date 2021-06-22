import * as React from 'react'

import { IOffer } from '../interface'
import { generateKey } from '@utils/misc'
import Link from '@components/Link'

interface OfferProps {
  offer: IOffer
}

const Offer = ({
  offer: { pricing, features, link }
}: OfferProps): JSX.Element => {
  return (
    <div className="section section_full-width section_vw section_padding">
      <div className="section__in section__in_green section__in_padding">
        <h3 className="section__title section__title_no-border">
          {pricing.chunk_1}
          <span className="section__title-span">{pricing.chunk_2}</span>
        </h3>

        <ul className="pricing__offer-list">
          {features.map((feature, idx) => (
            <li key={generateKey(feature, idx)} className="pricing__offer-item">
              {feature}
            </li>
          ))}
        </ul>

        <Link className="pricing__button" to={link.to} newTab={false}>
          {link.text}
        </Link>
      </div>
    </div>
  )
}

export default Offer

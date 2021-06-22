import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import { ImageNode } from '@utils/image'
import { markdownToHtml } from '@utils/misc'

interface ApiProps {
  title: string
  description: string
  image: ImageNode
}

const Api = ({ title, description, image }: ApiProps): JSX.Element => {
  return (
    <section className="frontpage__row frontpage__row_oneside">
      <div className="frontpage__row_oneside__in frontpage__row_oneside__in_left">
        <div className="frontpage-api">
          <div className="frontpage-api__text">
            <h3 className="frontpage-api__title">{title}</h3>
            <div
              className="frontpage-api__description"
              dangerouslySetInnerHTML={{ __html: markdownToHtml(description) }}
            />
          </div>

          <div className="frontpage-api__image">
            <GatsbyImage
              image={image.childImageSharp.gatsbyImageData}
              alt="API"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Api

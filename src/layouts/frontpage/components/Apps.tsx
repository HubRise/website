import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import { ImageNode } from '@utils/image'
import Link from '@components/Link'
import { markdownToHtml } from '@utils/misc'

interface AppsProps {
  title: string
  description: string
  categories: Array<string>
  apps: ImageNode
  appsHover: ImageNode
}

const Apps = ({
  title,
  description,
  categories,
  apps,
  appsHover
}: AppsProps): JSX.Element => {
  return (
    <section className="frontpage__row frontpage__row_oneside">
      <div className="frontpage__row_oneside__in frontpage__row_oneside__in_right">
        <div className="frontpage-apps">
          <div className="frontpage-apps__text">
            <h3 className="frontpage-apps__title">{title}</h3>
            <div
              className="frontpage-apps__description"
              dangerouslySetInnerHTML={{ __html: markdownToHtml(description) }}
            />
            <ul className="frontpage-apps__categories">
              {categories.map((category, idx) => (
                <li className="frontpage-apps__categories-item" key={idx}>
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <Link to="/apps" className="frontpage-apps__image">
            <div className="frontpage-apps__image-normal">
              <GatsbyImage
                image={apps.childImageSharp.gatsbyImageData}
                alt="Apps"
              />
            </div>
            <div className="frontpage-apps__image-hover">
              <GatsbyImage
                image={appsHover.childImageSharp.gatsbyImageData}
                alt="Apps"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Apps

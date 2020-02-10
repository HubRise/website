import React from 'react'
import GatsbyImage from 'gatsby-image'
import { useTranslation } from 'react-i18next'

import Link from '../link'

function Post({ post, hideLinks }) {
  const { t } = useTranslation()
  const { title, image, shortDescription, date, author, url } = post
  return (
    <li className="articles__item">
      <h3 className="articles__title">{title}</h3>
      <div className="articles__content">
        {hideLinks ? (
          <div className="articles__image-block">
            <GatsbyImage fixed={image} />
          </div>
        ) : (
          <Link to={url} className="articles__image-block">
            <GatsbyImage fixed={image} />
          </Link>
        )}
        <div className="articles__description-block">
          <p className="articles__date">
            {t('misc.posted_on')}{' '}
            <span className="articles__date-value">
              {date.toLocaleDateString()}
            </span>{' '}
            {t('misc.by')} {author}
          </p>
          <p className="articles__description">{shortDescription}</p>
          {hideLinks ? null : (
            <Link to={url} className="articles__read-more">
              {t('misc.read_more')}
            </Link>
          )}
        </div>
      </div>
    </li>
  )
}

export default Post

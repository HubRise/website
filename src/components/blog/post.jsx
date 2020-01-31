import React from 'react'
import { Link } from 'gatsby'
import GatsbyImage from 'gatsby-image'

function Post ({ post, hideReadMoreLink }) {
  const { title, image, shortDescription, date, author, url } = post
  return (
    <li className='articles__item'>
      <h3 className='articles__title'>{title}</h3>
      <div className='articles__content'>
        <div className='articles__image-block'>
          <GatsbyImage fixed={image} />
        </div>
        <div className='articles__description-block'>
          <p className='articles__date'>
            Posted on{' '}
            <span className='articles__date-value'>
              {date.toLocaleDateString()}
            </span>{' '}
            by{' '}
            <Link className='articles__author' to={'#'}>
              {author}
            </Link>
          </p>
          <p className='articles__description'>{shortDescription}</p>
          {hideReadMoreLink ? null : (
            <Link to={url} className='articles__read-more'>
              Read More
            </Link>
          )}
        </div>
      </div>
    </li>
  )
}

export default Post

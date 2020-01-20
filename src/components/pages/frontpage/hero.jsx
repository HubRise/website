import React from 'react'
import PropTypes from 'prop-types'

import SignupForm from '../../forms/signup'
import Link from '../../link'

export const Hero = ({ title, description, signupFormContent }) => {
  return (
    <div className='index-hero'>
      <div className='index-hero__container'>
        <div className='index-hero__banner'>
          <div className='index-hero__banner-in'>
            <h3 className='index-hero__title'>
              {title}
            </h3>
            <p className='index-hero__description'>
              {description.paragraph}
            </p>
          </div>
        </div>
        <div className='index-hero__form'>
          <div className='index-hero__form-in'>
            <h5 className='index-hero__form-title'>
              {signupFormContent.title}
            </h5>
            <p className='index-hero__form-description'>
              <span>
                {signupFormContent.description.paragraph}
              </span>
              {` `}
              <Link
                className='index-hero__form-link'
                to={signupFormContent.description.link.to}
              >
                {signupFormContent.description.link.text}
              </Link>
            </p>
            <SignupForm buttonText={signupFormContent.button} />
          </div>
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.shape({
    paragraph: PropTypes.string.isRequired
  }).isRequired,
  signupFormContent: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.shape({
      paragraph: PropTypes.string.isRequired,
      link: PropTypes.shape({
        text: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    button: PropTypes.string.isRequired
  }).isRequired
}

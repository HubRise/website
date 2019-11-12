import React from 'react'
import PropTypes from 'prop-types'

import SignupForm from '../../forms/signup'
import Link from '../../link'

export const Hero = ({ title, description, signupForm }) => {
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
              <Link
                to='#more'
                className='index-hero__link'
              >
                {description.link}
              </Link>
            </p>
          </div>
        </div>
        <div className='index-hero__form'>
          <div className='index-hero__form-in'>
            <h5 className='index-hero__form-title'>
              {signupForm.title}
            </h5>
            <p className='index-hero__form-description'>
              <span>
                {signupForm.description.paragraph}
              </span>
              {` `}
              <Link
                className='index-hero__form-link'
                to={signupForm.description.link.to}
              >
                {signupForm.description.link.text}
              </Link>
            </p>
            <SignupForm buttonText={signupForm.button} />
          </div>
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.shape({
    paragraph: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }).isRequired,
  signupForm: PropTypes.shape({
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

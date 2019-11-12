import React from 'react'
import PropTypes from 'prop-types'

import SignupForm from '../../forms/signup'

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
              {description}
            </p>
          </div>
        </div>
        <div className='index-hero__form'>
          <div className='index-hero__form-in'>
            <h5 className='index-hero__form-title'>
              {signupForm.title}
            </h5>
            <p className='index-hero__form-description'>
              {signupForm.description}
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
  description: PropTypes.string.isRequired,
  signupForm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired
  }).isRequired
}

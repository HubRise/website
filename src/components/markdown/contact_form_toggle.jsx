import React from 'react'

import { useLayoutContext } from '../../context/layout'

function ContactFormToggle ({ text }) {
  const { forms } = useLayoutContext()

  return (
    <a
      className='contact-toggle'
      onClick={forms.contact.toggle}
    >
      {text}
    </a>
  )
}

export default ContactFormToggle

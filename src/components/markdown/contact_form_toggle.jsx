import React from 'react'

import { useLayoutContext } from '../../context/layout'

function ContactFormToggle ({ text }) {
  const { forms } = useLayoutContext()

  return (
    <button
      className='button button_contact'
      onClick={forms.contact.toggle}
    >
      {text}
    </button>
  )
}

export default ContactFormToggle

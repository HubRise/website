import React from 'react'

import { useLayoutContext } from '../../context/layout'

function ContactFormToggle ({ text }) {
  const { forms } = useLayoutContext()

  return (
    <button
      className='documentation__link'
      onClick={forms.contact.toggle}
    >
      {text}
    </button>
  )
}

export default ContactFormToggle

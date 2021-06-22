import * as React from 'react'

import { useLayoutContext } from '@contexts/layout'

interface ContactFormToggleProps {
  text: string
}

function ContactFormToggle({ text }: ContactFormToggleProps) {
  const { forms } = useLayoutContext()

  return <a onClick={forms.contact.toggle}>{text}</a>
}

export default ContactFormToggle

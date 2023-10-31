"use client"

import { useLayoutContext } from "@components/LayoutContext"

interface ContactFormToggleProps {
  text: string
}

const ContactFormToggle = ({ text }: ContactFormToggleProps): JSX.Element => {
  const { forms } = useLayoutContext()

  return <a onClick={forms.contact.toggle}>{text}</a>
}

export default ContactFormToggle

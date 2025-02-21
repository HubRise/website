"use client"

import Hero from "./Hero"
import Map from "./Map"
import { ContactUsYaml } from "./types"

interface ContactUsProps {
  yaml: ContactUsYaml
}

const ContactUs = ({ yaml }: ContactUsProps): JSX.Element => {
  const { content } = yaml

  return (
    <>
      <Hero hero={content.hero} />
      <Map map={content.map} />
    </>
  )
}

export default ContactUs

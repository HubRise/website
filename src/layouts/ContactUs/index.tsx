"use client"

import { APIProvider } from "@vis.gl/react-google-maps"

import Hero from "./Hero"
import Map from "./Map"
import { ContactUsYaml } from "./types"

interface ContactUsProps {
  yaml: ContactUsYaml
}

const ContactUs = ({ yaml }: ContactUsProps): JSX.Element => {
  const { content } = yaml

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_MAPS_SITE_KEY}>
      <Hero hero={content.hero} />
      <Map map={content.map} />
    </APIProvider>
  )
}

export default ContactUs

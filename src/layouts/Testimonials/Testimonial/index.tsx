import Image from "next/image"
import * as React from "react"

import Underline from "@components/Underline"
import { TTestimonial } from "@layouts/Testimonials/types"
import { ContentImage } from "@utils/contentImage"
import { text } from "@utils/misc"

import { Picture, Details, Quote, Card, Detail, Bullet } from "./Styles"

interface TestimonialProps {
  testimonial: TTestimonial
  image?: ContentImage
}

const Testimonial = ({ testimonial, image }: TestimonialProps): JSX.Element => {
  const { quote, person_details } = testimonial

  return (
    <Card>
      <Picture>{image && <Image {...image} alt={`${person_details.name}, ${person_details.company}`} />}</Picture>
      <Quote>{text(quote)}</Quote>
      <Underline position="center" />
      <Details>
        <Detail>{person_details.name}</Detail>
        <Bullet />
        <Detail>{person_details.job_title}</Detail>
        <Bullet />
        <Detail>{person_details.company}</Detail>
      </Details>
    </Card>
  )
}
export default Testimonial

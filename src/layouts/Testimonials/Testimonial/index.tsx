import Image from "next/image"
import * as React from "react"

import { Testimonial } from "@layouts/Testimonials/types"
import { ContentImage } from "@utils/contentImage"

import { Picture, Details, Separator, Quote, Card, Detail, Bullet } from "./Styles"

interface TestimonialProps {
  testimonial: Testimonial
  image?: ContentImage
}

const Testimonial = ({ testimonial, image }: TestimonialProps): JSX.Element => {
  const { quote, person_details } = testimonial

  return (
    <Card>
      <Picture>{image && <Image {...image} alt={`${person_details[0]}, ${person_details[2]}`} />}</Picture>
      <Quote>{quote}</Quote>
      <Separator />
      <Details>
        {person_details.map((detail, index) => (
          <React.Fragment key={index}>
            <Detail>{detail}</Detail>
            {index < person_details.length - 1 && <Bullet />}
          </React.Fragment>
        ))}
      </Details>
    </Card>
  )
}
export default Testimonial

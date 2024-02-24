import Image from "next/image"
import * as React from "react"

import { Testimonial } from "@layouts/Testimonials/types"

import { Picture, Details, Separator, Quote, Card, Detail, Bullet } from "./Styles"

interface TestimonialProps {
  testimonial: Testimonial
}

const Testimonial = ({ testimonial }: TestimonialProps): JSX.Element => {
  const { quote, person_details, filename } = testimonial

  return (
    <Card>
      <Picture>
        <Image
          src={`/images/testimonials/${filename}`}
          alt={`${person_details[0]}, ${person_details[2]}`}
          width={226}
          height={226}
        />
      </Picture>
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

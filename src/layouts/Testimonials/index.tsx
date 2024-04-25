"use client"

import Block from "@components/Block"
import Testimonial from "@layouts/Testimonials/Testimonial"
import { ContentImageMap } from "@utils/contentImage"

import type { TestimonialsYaml } from "./types"

interface TestimonialsProps {
  yaml: TestimonialsYaml
  imageMap: ContentImageMap
}

const Testimonials = ({ yaml, imageMap }: TestimonialsProps) => {
  const { content } = yaml

  return (
    <>
      <Block
        backgroundColor="white"
        verticalSpacing="small"
        padding="small"
        title={content.title}
        horizontalAlign="center"
      >
        {content.description}
      </Block>

      {content.testimonials.map((testimonial, index) => (
        <Testimonial key={index} testimonial={testimonial} image={imageMap[testimonial.filename]} />
      ))}
    </>
  )
}

export default Testimonials

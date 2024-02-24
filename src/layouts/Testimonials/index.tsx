"use client"

import Block from "@components/Block"
import Testimonial from "@layouts/Testimonials/Testimonial"

import type { TestimonialsYaml } from "./types"

const Testimonials = ({ yaml }: { yaml: TestimonialsYaml }) => {
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
        <Testimonial key={index} testimonial={testimonial} />
      ))}
    </>
  )
}

export default Testimonials

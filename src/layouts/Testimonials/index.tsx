"use client"

import Block from "@components/Block"
import TestimonialCard from "@layouts/Testimonials/TestimonialCard"

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
        <TestimonialCard key={index} testimonial={testimonial} />
      ))}
    </>
  )
}

export default Testimonials

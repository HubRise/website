"use client"

import Block from "@components/Block"
import TestimonialCard from "@layouts/Testimonials/TestimonialCard"

import { List } from "./Styles"
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
        <span>{content.description}</span>
      </Block>
      <List>
        {content.testimonials.map((testimonial) => {
          return <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        })}
      </List>
    </>
  )
}

export default Testimonials

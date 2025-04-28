"use client"

import PageHero from "@components/PageHero"
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
      <PageHero title={content.title} description={content.description} />

      {content.testimonials.map((testimonial, index) => (
        <Testimonial key={index} testimonial={testimonial} image={imageMap[testimonial.filename]} />
      ))}
    </>
  )
}

export default Testimonials

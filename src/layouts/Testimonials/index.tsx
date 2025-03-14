"use client"

import PageHero from "@components/PageHero"
import Underline from "@components/Underline"
import Testimonial from "@layouts/Testimonials/Testimonial"
import { ContentImageMap } from "@utils/contentImage"

import { HeroDescription } from "./Styles"
import type { TestimonialsYaml } from "./types"

interface TestimonialsProps {
  yaml: TestimonialsYaml
  imageMap: ContentImageMap
}

const Testimonials = ({ yaml, imageMap }: TestimonialsProps) => {
  const { content } = yaml

  return (
    <>
      <PageHero title={content.title}>
        <HeroDescription>{content.description}</HeroDescription>
        <Underline position="center" />
      </PageHero>

      {content.testimonials.map((testimonial, index) => (
        <Testimonial key={index} testimonial={testimonial} image={imageMap[testimonial.filename]} />
      ))}
    </>
  )
}

export default Testimonials

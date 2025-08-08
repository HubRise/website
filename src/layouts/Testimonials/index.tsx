"use client"

import PageHero from "@components/PageHero"
import ScreenContainer from "@components/ScreenContainer"
import { ContentImageMap } from "@utils/contentImage"

import { TestimonialCards } from "./Styles"
import Testimonial from "./Testimonial"
import type { TestimonialsYaml } from "./types"

interface TestimonialsProps {
  yaml: TestimonialsYaml
  imageMap: ContentImageMap
}

const Testimonials = ({ yaml, imageMap }: TestimonialsProps) => {
  const { content } = yaml

  return (
    <>
      <PageHero
        title={
          <>
            {content.title.part_1} <span> {content.title.part_2} </span>
            {/* Add nbsp to prevent "HubRise" from appearing alone on a new line */}
            {content.title.part_3}&nbsp;<span>{content.title.part_4} </span>
          </>
        }
        description={content.description}
      />

      <ScreenContainer>
        <TestimonialCards>
          {content.testimonials.map((testimonial, index) => (
            <Testimonial key={index} testimonial={testimonial} image={imageMap[testimonial.filename]} />
          ))}
        </TestimonialCards>
      </ScreenContainer>
    </>
  )
}

export default Testimonials

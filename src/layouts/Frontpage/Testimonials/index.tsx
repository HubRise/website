import Image from "next/image"

import Card from "@components/Card"
import ScreenContainer from "@components/ScreenContainer"
import { ContentImageMap } from "@utils/contentImage"

import { TTestimonial } from "../types"

import { TestimonialsWrapper, Name, JobTitle, Text, LogoImage } from "./Styles"

interface TestimonialsProps {
  title: string
  testimonials: Array<TTestimonial>
  testimonialLogoMap: ContentImageMap
}

const Testimonials = ({ title, testimonials, testimonialLogoMap }: TestimonialsProps) => {
  return (
    <ScreenContainer bgColor="backgroundLight" verticalPadding="big" withHeader title={title}>
      <TestimonialsWrapper>
        {testimonials.map((testimonial, index) => {
          return (
            <Card key={index}>
              <Image src="/images/quote-green.svg" alt="Quote" width={62} height={44} />
              <Name>{`- ${testimonial.name}`}</Name>
              <JobTitle>{testimonial.job_title}</JobTitle>
              <Text>{testimonial.text}</Text>
              {testimonialLogoMap[testimonial.logo] && (
                <LogoImage
                  {...testimonialLogoMap[testimonial.logo]}
                  alt={testimonial.logo.substring(0, testimonial.logo.length - 4)}
                ></LogoImage>
              )}
            </Card>
          )
        })}
      </TestimonialsWrapper>
    </ScreenContainer>
  )
}

export default Testimonials

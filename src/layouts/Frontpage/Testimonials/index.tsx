import Image from "next/image"

import Container from "@components/Container"
import ContainerHeader from "@components/ContainerHeader"
import { ContentImageMap } from "@utils/contentImage"

import { Card } from "../shared/Styles"
import { TTestimonial } from "../types"

import { TestimonialsWrapper, Name, JobTitle, Text, LogoImage } from "./Styles"

interface TestimonialsProps {
  title: string
  testimonials: Array<TTestimonial>
  testimonialLogoMap: ContentImageMap
}

const Testimonials = ({ title, testimonials, testimonialLogoMap }: TestimonialsProps) => {
  return (
    <Container bgColor="backgroundLight" verticalPadding="big">
      <ContainerHeader title={title} />
      <TestimonialsWrapper>
        {testimonials.map((testimonial, index) => {
          console.log(testimonialLogoMap[testimonial.logo])
          return (
            <Card $padding="small" key={index}>
              <Image src="/images/frontpage/quote.svg" alt="Quote" width={62} height={44}></Image>
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
    </Container>
  )
}

export default Testimonials

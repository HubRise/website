import Image from "next/image"
import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import Card from "@components/Card"
import ScreenContainer from "@components/ScreenContainer"
import { TTestimonial } from "@layouts/Testimonials/types"
import { ContentImageMap } from "@utils/contentImage"

import { TestimonialsWrapper, Name, JobTitle, Quote, LogoImage, CardWrapper } from "./Styles"

interface TestimonialsProps {
  title: string
  descriptionMdx?: MDXRemoteSerializeResult
  testimonials: Array<TTestimonial>
  idXToDisplay: Array<number>
  nbToDisplayOnMobile?: number
  testimonialLogoMap: ContentImageMap
}

const TestimonialsBlock = ({
  title,
  descriptionMdx,
  testimonials,
  idXToDisplay,
  nbToDisplayOnMobile = 4,
  testimonialLogoMap,
}: TestimonialsProps) => {
  return (
    <ScreenContainer withHeader title={title} descriptionMdx={descriptionMdx}>
      <TestimonialsWrapper $nbMobileDisplay={nbToDisplayOnMobile}>
        {testimonials
          .filter((testimonial) => idXToDisplay.includes(testimonial.id))
          .map((testimonial, index) => {
            return (
              <CardWrapper key={index}>
                <Card>
                  <Image src="/images/quote-green.svg" alt="Quote" width={62} height={44} />
                  <Name>{`- ${testimonial.person_details.name}`}</Name>
                  <JobTitle>{testimonial.person_details.job_title}</JobTitle>
                  <Quote>{testimonial.quote}</Quote>
                  {testimonial.person_details.logo && testimonialLogoMap[testimonial.person_details.logo] && (
                    <LogoImage
                      {...testimonialLogoMap[testimonial.person_details.logo]}
                      alt={testimonial.person_details.logo.substring(0, testimonial.person_details.logo.length - 4)}
                    />
                  )}
                </Card>
              </CardWrapper>
            )
          })}
      </TestimonialsWrapper>
    </ScreenContainer>
  )
}

export default TestimonialsBlock

import Image from "next/image"

import Card from "@components/Card"
import ScreenContainer from "@components/ScreenContainer"
import { TTestimonial } from "@layouts/Testimonials/types"
import { ContentImageMap } from "@utils/contentImage"

import { TestimonialsWrapper, Name, JobTitle, Text, LogoImage } from "./Styles"

interface TestimonialsProps {
  title: string
  testimonials: Array<TTestimonial>
  idXToDisplay: Array<number>
  nbToDisplayOnMobile?: number
  testimonialLogoMap: ContentImageMap
}

const TestimonialsBlock = ({
  title,
  testimonials,
  idXToDisplay,
  nbToDisplayOnMobile = 4,
  testimonialLogoMap,
}: TestimonialsProps) => {
  return (
    <ScreenContainer withHeader title={title}>
      <TestimonialsWrapper $nbMobileDisplay={nbToDisplayOnMobile}>
        {testimonials
          .filter((testimonial) => idXToDisplay.includes(testimonial.id))
          .map((testimonial, index) => {
            return (
              <Card key={index}>
                <Image src="/images/quote-green.svg" alt="Quote" width={62} height={44} />
                <Name>{`- ${testimonial.person_details.name}`}</Name>
                <JobTitle>{testimonial.person_details.job_title}</JobTitle>
                <Text>{testimonial.quote}</Text>
                {testimonialLogoMap[testimonial.person_details.logo] && (
                  <LogoImage
                    {...testimonialLogoMap[testimonial.person_details.logo]}
                    alt={testimonial.person_details.logo.substring(0, testimonial.person_details.logo.length - 4)}
                  ></LogoImage>
                )}
              </Card>
            )
          })}
      </TestimonialsWrapper>
    </ScreenContainer>
  )
}

export default TestimonialsBlock

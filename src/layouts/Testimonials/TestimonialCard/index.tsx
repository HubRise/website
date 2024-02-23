import { Testimonial } from "@layouts/Testimonials/types"

import {
  Decorator,
  ImageWrapper,
  ImagenPerson,
  Info,
  InfoItem,
  InfoWrapper,
  Separator,
  Description,
  Wrapper,
} from "./Styles"

interface TestimonialCardProps {
  testimonial: Testimonial
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { description, person_details, filename } = testimonial

  return (
    <Wrapper>
      <ImageWrapper>
        <ImagenPerson
          src={`/images/testimonials/${filename}`}
          alt={`${person_details[0]} from ${person_details[2]}`}
          width={226}
          height={226}
        />
      </ImageWrapper>
      <Description>{description}</Description>
      <Separator />
      <InfoWrapper>
        {person_details.map((item, index) => (
          <InfoItem key={item}>
            <Info>{item}</Info>
            {person_details[index + 1] != null ? <Decorator /> : null}
          </InfoItem>
        ))}
      </InfoWrapper>
    </Wrapper>
  )
}
export default TestimonialCard

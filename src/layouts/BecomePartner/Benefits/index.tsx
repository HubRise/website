import Image from "next/image"

import Card from "@components/Card"
import ScreenContainer from "@components/ScreenContainer"

import { TBenefitCard } from "../types"

import { BenefitCards, CardHeader, BenefitText, BenefitTitle } from "./Styles"

interface BenefitsProps {
  title: string
  benefit_cards: Array<TBenefitCard>
}

const Benefits = ({ title, benefit_cards }: BenefitsProps): JSX.Element => {
  return (
    <ScreenContainer title={title} withHeader>
      <BenefitCards>
        {benefit_cards.map(({ title, description, image }, idx) => {
          return (
            <Card key={idx}>
              <CardHeader>
                <Image width={60} height={60} src={`/images/become-partner/benefits/${image}`} alt={title} />
                <BenefitTitle>{title}</BenefitTitle>
              </CardHeader>
              <BenefitText>{description}</BenefitText>
            </Card>
          )
        })}
      </BenefitCards>
    </ScreenContainer>
  )
}

export default Benefits

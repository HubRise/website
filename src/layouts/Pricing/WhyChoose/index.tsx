import Card from "@components/Card"
import ScreenContainer from "@components/ScreenContainer"

import { TWhyChoose } from "../types"

import { Cards, CardNumber, CardTitle, CardText } from "./Styles"

interface WhyChooseProps {
  why_choose: TWhyChoose
}

const WhyChoose = ({ why_choose }: WhyChooseProps): JSX.Element => {
  return (
    <ScreenContainer bgColor="white" verticalPadding="big" withHeader title={why_choose.title}>
      <Cards>
        {why_choose.cards.map(({ title, text }, index) => {
          return (
            <Card key={index}>
              <CardNumber>0{index + 1}</CardNumber>
              <CardTitle>{title}</CardTitle>
              <CardText>{text}</CardText>
            </Card>
          )
        })}
      </Cards>
    </ScreenContainer>
  )
}

export default WhyChoose

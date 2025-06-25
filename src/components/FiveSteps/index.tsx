import Card from "@components/Card"
import ScreenContainer from "@components/ScreenContainer"

import { CardNumber, Cards, CardText, CardTitle } from "./Styles"

export type TFiveSteps = {
  title: string
  steps: Array<{
    title: string
    description: string
  }>
}

interface FiveStepsProps {
  fiveSteps: TFiveSteps
}

const FiveSteps = ({ fiveSteps }: FiveStepsProps) => {
  const { title, steps } = fiveSteps
  return (
    <ScreenContainer withHeader title={title}>
      <Cards>
        {steps.map(({ title, description }, index) => {
          return (
            <Card key={index}>
              <CardNumber>0{index + 1}</CardNumber>
              <CardTitle>{title}</CardTitle>
              <CardText>{description}</CardText>
            </Card>
          )
        })}
      </Cards>
    </ScreenContainer>
  )
}

export default FiveSteps

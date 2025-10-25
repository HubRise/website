import Card from "@components/Card"
import ScreenContainer from "@components/ScreenContainer"

import { TFeature } from "../types"

import { FeatureCards, FeatureText, FeatureTitle } from "./Styles"

interface FeaturesProps {
  features: Array<TFeature>
}

const Features = ({ features }: FeaturesProps): JSX.Element => {
  return (
    <ScreenContainer bgColor="green" verticalPadding="small">
      <FeatureCards>
        {features.map(({ title, description }, idx) => {
          return (
            <Card key={idx}>
              <FeatureTitle>{title}</FeatureTitle>
              <FeatureText>{description}</FeatureText>
            </Card>
          )
        })}
      </FeatureCards>
    </ScreenContainer>
  )
}

export default Features

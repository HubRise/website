import Image from "next/image"

import Card from "@components/Card"
import ScreenContainer from "@components/ScreenContainer"

import { TFeature } from "../types"

import { FeatureCards, CardHeader, Title, Text } from "./Styles"

interface FeaturesProps {
  title: string
  cards: Array<TFeature>
}

const Features = ({ title, cards }: FeaturesProps): JSX.Element => {
  return (
    <ScreenContainer title={title} withHeader>
      <FeatureCards>
        {cards.map(({ title, description, image }, idx) => {
          return (
            <Card key={idx}>
              <CardHeader>
                <Image width={60} height={60} src={`/images/dashboard/features/${image}`} alt={title} />
                <Title>{title}</Title>
              </CardHeader>
              <Text>{description}</Text>
            </Card>
          )
        })}
      </FeatureCards>
    </ScreenContainer>
  )
}

export default Features

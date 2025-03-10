import { type MDXRemoteSerializeResult } from "next-mdx-remote"

import Card from "@components/Card"
import ScreenContainer from "@components/ScreenContainer"
import { ContentImageMap } from "@utils/contentImage"

import { TFeatureCard } from "../types"

import { Cards, CardContent, CardTitle, CardText, CardImage } from "./Styles"

interface FeaturesProps {
  title: string
  features_cards: Array<TFeatureCard>
  descriptionMdx: MDXRemoteSerializeResult
  featuresImagesMap: ContentImageMap
}

const Features = ({ title, features_cards, descriptionMdx, featuresImagesMap }: FeaturesProps): JSX.Element => {
  return (
    <ScreenContainer
      bgColor="backgroundLight"
      verticalPadding="big"
      withHeader
      title={title}
      descriptionMdx={descriptionMdx}
    >
      <Cards>
        {features_cards.map(({ title, description, image }, index) => {
          return (
            <Card padding="big" key={index}>
              <CardImage {...featuresImagesMap[image]} alt={title} />
              <CardContent>
                <CardTitle>{title}</CardTitle>
                <CardText>{description}</CardText>
              </CardContent>
            </Card>
          )
        })}
      </Cards>
    </ScreenContainer>
  )
}

export default Features

import { type MDXRemoteSerializeResult } from "next-mdx-remote"

import Container from "@components/Container"
import { ContentImageMap } from "@utils/contentImage"

import { Card } from "../shared/Styles"
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
    <Container bgColor="backgroundLight" verticalPadding="big" withHeader title={title} descriptionMdx={descriptionMdx}>
      <Cards>
        {features_cards.map(({ title, description, image }, index) => {
          return (
            <Card $padding="big" key={index}>
              <CardImage {...featuresImagesMap[image]} alt={title} />
              <CardContent>
                <CardTitle>{title}</CardTitle>
                <CardText>{description}</CardText>
              </CardContent>
            </Card>
          )
        })}
      </Cards>
    </Container>
  )
}

export default Features

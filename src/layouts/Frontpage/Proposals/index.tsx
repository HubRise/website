import { type MDXRemoteSerializeResult } from "next-mdx-remote"

import Container from "@components/Container"
import ContainerHeader from "@components/ContainerHeader"
import { ContentImageMap } from "@utils/contentImage"

import { Card } from "../shared/Styles"
import { TProposalCard } from "../types"

import { Cards, CardTitle, CardText, CardImage } from "./Styles"

interface ProposalsProps {
  title: string
  proposals_cards: Array<TProposalCard>
  descriptionMdx: MDXRemoteSerializeResult
  proposalsImagesMap: ContentImageMap
}

const Proposals = ({ title, proposals_cards, descriptionMdx, proposalsImagesMap }: ProposalsProps): JSX.Element => {
  return (
    <Container bgColor="backgroundLight" verticalPadding="big">
      <ContainerHeader title={title} descriptionMdx={descriptionMdx} />
      <Cards>
        {proposals_cards.map(({ title, description, image }, index) => {
          return (
            <Card $padding="big" key={index}>
              <CardImage {...proposalsImagesMap[image]} alt={title} />
              <div>
                <CardTitle>{title}</CardTitle>
                <CardText>{description}</CardText>
              </div>
            </Card>
          )
        })}
      </Cards>
    </Container>
  )
}

export default Proposals

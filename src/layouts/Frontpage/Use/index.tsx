import Image from "next/image"
import { type MDXRemoteSerializeResult } from "next-mdx-remote"

import Container from "@components/Container"
import ContainerHeader from "@components/ContainerHeader"
import useWindowDimensions from "@utils/hooks"

import { TUseBlock } from "../types"

import { Cards, Card, CardTitle, CardText } from "./Styles"

interface UseProps {
  title: string
  use_blocks: Array<TUseBlock>
  descriptionMdx: MDXRemoteSerializeResult
}

const Use = ({ title, use_blocks, descriptionMdx }: UseProps): JSX.Element => {
  const [windowWidth] = useWindowDimensions()

  return (
    <Container bgColor="backgroundLight" verticalPadding="big">
      <ContainerHeader title={title} descriptionMdx={descriptionMdx} />
      <Cards>
        {use_blocks.map(({ title, description, image, width, desktop_width }, index) => {
          return (
            <Card key={index}>
              <Image
                src={`/images/frontpage/${image}`}
                alt={title}
                width={windowWidth >= 1440 ? width : desktop_width}
                height={290}
              />
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

export default Use

import Image from "next/image"
import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import ScreenContainer from "@components/ScreenContainer"
import { SideBlock } from "@components/SideBlock"
import Underline from "@components/Underline"
import { ContentImageMap } from "@utils/contentImage"

import { TFeatures } from "../types"

import { ContentWrapper, Description, FeaturesContainer, HandDrawnArrow, SideBlocks, Title } from "./Styles"

interface FeaturesProps {
  featuresContent: TFeatures
  descriptionMdx: MDXRemoteSerializeResult
  featuresImagesMap: ContentImageMap
}

const Features = ({ featuresContent, descriptionMdx, featuresImagesMap }: FeaturesProps) => {
  const { title, list } = featuresContent
  return (
    <FeaturesContainer>
      <ScreenContainer isTextCentered withHeader title={title} descriptionMdx={descriptionMdx}>
        <SideBlocks>
          {list.map(({ title, image, description }, index) => {
            return (
              <SideBlock
                key={index}
                side={index % 2 ? "left" : "right"}
                secondaryContent={<Image {...featuresImagesMap[image]} alt={title} />}
                secondaryPosition={index % 2 ? "left" : "right"}
                contentFirst
              >
                <ContentWrapper>
                  <HandDrawnArrow $isFlipped={index % 2 ? true : false}>
                    <Image src="/images/orderline/hand-drawn-arrow.svg" alt="Hand drawn arrow" fill={true} />
                  </HandDrawnArrow>
                  <Title>{title}</Title>
                  <Underline />
                  <Description>{description}</Description>
                </ContentWrapper>
              </SideBlock>
            )
          })}
        </SideBlocks>
      </ScreenContainer>
    </FeaturesContainer>
  )
}

export default Features

"use client"

import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import GetInTouch from "@components/GetInTouch"
import { GetInTouchYaml } from "@components/GetInTouch/types"
import ScreenContainer from "@components/ScreenContainer"
import { OrderlineYaml } from "@layouts/Orderline/types"
import { ContentImageMap } from "@utils/contentImage"

import Discover from "./Discover"
import Features from "./Features"
import FiveSteps from "./FiveSteps"
import Hero from "./Hero"
import { ContentWrapper } from "./shared/Styles"

interface OrderlineProps {
  yaml: OrderlineYaml
  getInTouch: GetInTouchYaml
  featuresDescriptionMdx: MDXRemoteSerializeResult
  featuresImagesMap: ContentImageMap
  discoverDescriptionMdx: MDXRemoteSerializeResult
}

const Orderline = ({
  yaml,
  getInTouch,
  featuresDescriptionMdx,
  featuresImagesMap,
  discoverDescriptionMdx,
}: OrderlineProps): JSX.Element => {
  const { content } = yaml
  const { title, description, button_label, button_link } = getInTouch.content

  return (
    <>
      <Hero hero={content.hero} />
      <FiveSteps fiveSteps={content.five_steps} />
      <Features
        featuresContent={content.features}
        descriptionMdx={featuresDescriptionMdx}
        featuresImagesMap={featuresImagesMap}
      />
      <Discover discoverContent={content.discover} descriptionMdx={discoverDescriptionMdx} />
      <ScreenContainer bgColor="backgroundLight" verticalPadding="big">
        <ContentWrapper>
          <GetInTouch title={title} description={description} button_label={button_label} button_link={button_link} />
        </ContentWrapper>
      </ScreenContainer>
    </>
  )
}

export default Orderline

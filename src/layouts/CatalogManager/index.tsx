"use client"

import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import ActionBlock from "@components/ActionBlock"
import FiveSteps from "@components/FiveSteps"
import GetInTouch from "@components/GetInTouch"
import { GetInTouchYaml } from "@components/GetInTouch/types"

import ControlCentre from "./ControlCentre"
import Hero from "./Hero"
import SalesChannels from "./SalesChannels"
import { CatalogManagerYaml } from "./types"

interface CatalogManagerProps {
  yaml: CatalogManagerYaml
  getInTouch: GetInTouchYaml
  salesChannelsDescriptionMdx: MDXRemoteSerializeResult
  appDescriptionMdx: MDXRemoteSerializeResult
}

const CatalogManager = ({
  yaml,
  getInTouch,
  salesChannelsDescriptionMdx,
  appDescriptionMdx,
}: CatalogManagerProps): JSX.Element => {
  const content = yaml.content
  const { title, description, button_label, button_link } = getInTouch.content

  return (
    <>
      <Hero hero={content.hero} />
      <SalesChannels salesChannels={content.sales_channels} descriptionMdx={salesChannelsDescriptionMdx} />
      <FiveSteps fiveSteps={content.five_steps} />
      <ControlCentre app={content.app} descriptionMdx={appDescriptionMdx} />
      <ActionBlock actionBlockData={content.action_block} />
      <GetInTouch title={title} description={description} button_label={button_label} button_link={button_link} />
    </>
  )
}

export default CatalogManager

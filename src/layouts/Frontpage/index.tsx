"use client"

import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import { FrontpageYaml } from "@layouts/Frontpage/types"
import { ContentImageMap } from "@utils/contentImage"

import Apps from "./Apps"
import Developers from "./Developers"
import Hero from "./Hero"
import Integrations from "./Integrations"
import Join from "./Join"
import Metrics from "./Metrics"
import Pricing from "./Pricing"
import Use from "./Use"

interface FrontpageProps {
  yaml: FrontpageYaml
  heroDescriptionMdx: MDXRemoteSerializeResult
  useDescriptionMdx: MDXRemoteSerializeResult
  pricingDescriptionMdx: MDXRemoteSerializeResult
  developersDescriptionMdx: MDXRemoteSerializeResult
  teamImageMap: ContentImageMap
}

const Frontpage = ({
  yaml,
  heroDescriptionMdx,
  useDescriptionMdx,
  pricingDescriptionMdx,
  developersDescriptionMdx,
  teamImageMap,
}: FrontpageProps): JSX.Element => {
  const { hero, content } = yaml

  return (
    <>
      <Hero {...hero} descriptionMdx={heroDescriptionMdx} />
      <Metrics metrics={content.metrics} />
      <Apps />
      <Use {...content.use} descriptionMdx={useDescriptionMdx} />
      <Pricing {...content.pricing} descriptionMdx={pricingDescriptionMdx} />
      <Integrations {...content.integrations} />
      <Developers {...content.developers} descriptionMdx={developersDescriptionMdx} teamImageMap={teamImageMap} />
      <Join {...content.join} />
    </>
  )
}

export default Frontpage

"use client"

import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import { FrontpageYaml } from "@layouts/Frontpage/types"
import { ContentImageMap } from "@utils/contentImage"

import Api from "./Api"
import Apps from "./Apps"
import Developers from "./Developers"
import Documentation from "./Documentation"
import Hero from "./Hero"
import Join from "./Join"
import Metrics from "./Metrics"
import Pricing from "./Pricing"

interface FrontpageProps {
  yaml: FrontpageYaml
  heroDescriptionMdx: MDXRemoteSerializeResult
  apiDescriptionMdx: MDXRemoteSerializeResult
  documentationDescriptionMdx: MDXRemoteSerializeResult
  pricingDescriptionMdx: MDXRemoteSerializeResult
  developersDescriptionMdx: MDXRemoteSerializeResult
  teamImageMap: ContentImageMap
}

const Frontpage = ({
  yaml,
  heroDescriptionMdx,
  apiDescriptionMdx,
  documentationDescriptionMdx,
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
      <Api {...content.api} descriptionMdx={apiDescriptionMdx} />
      <Documentation {...content.documentation} descriptionMdx={documentationDescriptionMdx} />
      <Pricing {...content.pricing} descriptionMdx={pricingDescriptionMdx} />
      <Developers {...content.developers} descriptionMdx={developersDescriptionMdx} teamImageMap={teamImageMap} />
      <Join {...content.join} />
    </>
  )
}

export default Frontpage

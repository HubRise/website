"use client"

import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import ActionBlock from "@components/ActionBlock"
import GetInTouch from "@components/GetInTouch"
import { GetInTouchYaml } from "@components/GetInTouch/types"
import Metrics from "@components/Metrics"

import Apps from "./Apps"
import Benefits from "./Benefits"
import Features from "./Features"
import Hero from "./Hero"
import Middleware from "./Middleware"
import { BecomePartnerYaml } from "./types"

interface BecomePartnerProps {
  yaml: BecomePartnerYaml
  getInTouch: GetInTouchYaml
  middlewareDescriptionMdx: MDXRemoteSerializeResult
  appsDescriptionMdx: MDXRemoteSerializeResult
}

const BecomePartner = ({
  yaml,
  getInTouch,
  middlewareDescriptionMdx,
  appsDescriptionMdx,
}: BecomePartnerProps): JSX.Element => {
  const content = yaml.content
  const { title, description, button_label, button_link } = getInTouch.content

  return (
    <>
      <Hero hero={content.hero} />
      <Features features={content.features} />
      <Benefits {...content.benefits} />
      <Middleware middleware={content.middleware} descriptionMdx={middlewareDescriptionMdx} />
      <Apps apps={content.apps} descriptionMdx={appsDescriptionMdx} />
      <Metrics metrics={content.metrics} />
      <div>Testimonials: In progress</div>
      <ActionBlock actionBlockData={content.action_block} />
      <GetInTouch title={title} description={description} button_label={button_label} button_link={button_link} />
    </>
  )
}

export default BecomePartner

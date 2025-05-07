"use client"

import Block from "@components/Block"

import Infos from "./Infos"
import Plan from "./Plan"
import type { PricingYaml } from "./types"

const Pricing = ({ yaml }: { yaml: PricingYaml }): JSX.Element => {
  const { content } = yaml

  return (
    <>
      <Block backgroundColor="white" title={content.hero.title}>
        <Plan plan={content.plan} />
        <Infos infos={content.infos} />
      </Block>
    </>
  )
}

export default Pricing

"use client"

import Block from "@components/Block"

import Partner from "./Partner"
import type { PartnersYaml } from "./types"

const Partners = ({ yaml }: { yaml: PartnersYaml }) => {
  const { content } = yaml

  return (
    <>
      <Block
        padding="small"
        backgroundColor="white"
        verticalSpacing="small"
        horizontalAlign="center"
        title={content.title}
      >
        {content.description}
      </Block>

      {content.partners.map((partner, index) => (
        <Partner key={index} partner={partner} />
      ))}
    </>
  )
}

export default Partners

"use client"

import Block from "@components/Block"

import PartnersCard from "./PartnersCard"
import { List } from "./Styles"
import type { PartnersYaml } from "./types"

const Partners = ({ yaml }: { yaml: PartnersYaml }) => {
  const { content } = yaml

  return (
    <>
      <Block
        backgroundColor="white"
        verticalSpacing="small"
        padding="small"
        title={content.title}
        horizontalAlign="center"
      >
        <span>{content.description}</span>
      </Block>
      <List>
        {content.partners.map((partner) => (
          <PartnersCard key={partner.id} partner={partner} />
        ))}
      </List>
    </>
  )
}

export default Partners

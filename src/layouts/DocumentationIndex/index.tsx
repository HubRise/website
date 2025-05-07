"use client"

import Block from "@components/Block"

import Hero from "./Hero"
import ThumbList from "./ThumbList"
import type { DocumentationIndexYaml } from "./types"

const DocumentationIndex = ({ yaml }: { yaml: DocumentationIndexYaml }): JSX.Element => {
  return (
    <>
      <Hero {...yaml.content.hero} />

      <Block backgroundColor="white">
        <ThumbList thumbs={yaml.content.thumbs} />
      </Block>
    </>
  )
}

export default DocumentationIndex

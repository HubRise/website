import * as React from "react"

import { IDevelopers } from "../interface"

import { Description } from "./Styles"

import Block from "@layouts/shared/components/Block"

interface DevelopersProps {
  developers: IDevelopers
}

const Developer = ({ developers }: DevelopersProps): JSX.Element => {
  const { title, description } = developers

  return (
    <Block backgroundColor="green" beforeExpansion={true} afterExpansion={true} title={title}>
      <Description>
        <p>{description.paragraph_1}</p>
        <p>
          {description.paragraph_2.chunk_1}
          <br />
          {description.paragraph_2.chunk_2}
        </p>
      </Description>
    </Block>
  )
}

export default Developer

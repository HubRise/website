import * as React from "react"

import { Content, Text } from "../shared/Styles"

import { MemberName, MemberPicture, TeamMember, TeamList } from "./Styles"

import { markdownToHtml } from "@layouts/shared/utils/markdown"
import { ImageNode } from "@utils/image"
import Block from "@layouts/shared/components/Block"

interface DevelopersProps {
  title: string
  description: string
  team_members: Array<{
    // TODO: create proper type in src/data
    name: string
    filename: string
  }>
  teamImages: {
    nodes: Array<TeamImageNode>
  }
}

export type TeamImageNode = ImageNode & { base: string }

const Developers = ({ title, description, team_members, teamImages }: DevelopersProps): JSX.Element => {
  return (
    <Block
      backgroundColor="white"
      verticalSpacing="small"
      padding="small"
      beforeExpansion={true}
      afterExpansion={true}
      title={title}
      horizontalAlign="center"
    >
      <Content>
        <Text $backgroundColor="white" dangerouslySetInnerHTML={{ __html: markdownToHtml(description) }} />

        <TeamList>
          {team_members.map(({ name, filename }, index) => {
            const image = teamImages.nodes.find(({ base }) => base === filename)
            if (!image) throw new Error(`Team member ${name} does not have a picture`)

            return (
              <TeamMember key={index}>
                <MemberPicture image={image.childImageSharp.gatsbyImageData} alt={name} />
                <MemberName>{name}</MemberName>
              </TeamMember>
            )
          })}
        </TeamList>
      </Content>
    </Block>
  )
}

export default Developers

import * as React from "react"

import { Container, Text, Description, Title, Inside, MemberName, MemberPicture, TeamMember, TeamList } from "./Styles"

import { markdownToHtml } from "@utils/misc"
import { ImageNode } from "@utils/image"

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
    <Container>
      <Inside>
        <Text>
          <Title>{title}</Title>
          <Description dangerouslySetInnerHTML={{ __html: markdownToHtml(description) }} />

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
        </Text>
      </Inside>
    </Container>
  )
}

export default Developers

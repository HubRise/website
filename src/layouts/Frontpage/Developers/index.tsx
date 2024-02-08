import { MDXRemote } from "next-mdx-remote"
import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import Block from "@components/Block"

import { Content, Text } from "../shared/Styles"

import { MemberName, MemberImage, TeamMember, TeamList } from "./Styles"

interface DevelopersProps {
  title: string
  descriptionMdx: MDXRemoteSerializeResult
  team_members: Array<{
    name: string
    filename: string
  }>
}

const Developers = ({ title, descriptionMdx, team_members }: DevelopersProps): JSX.Element => {
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
        <Text $backgroundColor="white">
          <MDXRemote {...descriptionMdx} />
        </Text>

        <TeamList>
          {team_members.map(({ name, filename }, index) => {
            return (
              <TeamMember key={index}>
                <MemberImage src={`/images/frontpage/team/${filename}`} alt={name} width={124} height={124} />
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

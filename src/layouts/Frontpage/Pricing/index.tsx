import type { MDXRemoteSerializeResult } from "next-mdx-remote"
import { MDXRemote } from "next-mdx-remote"

import Block from "@components/Block"

import { ActionButton, ActionLink, Actions, Content, Text } from "../shared/Styles"

interface PricingProps {
  title: string
  descriptionMdx: MDXRemoteSerializeResult
  button_label?: string
  button_url?: string
  link_label?: string
  link_url?: string
}

const Pricing = ({
  title,
  descriptionMdx,
  button_label,
  button_url,
  link_label,
  link_url,
}: PricingProps): JSX.Element => {
  return (
    <Block
      backgroundColor="green"
      verticalSpacing="small"
      padding="small"
      beforeExpansion={true}
      afterExpansion={true}
      title={title}
      horizontalAlign="center"
    >
      <Content>
        <Text $backgroundColor="green">
          <MDXRemote {...descriptionMdx} />
        </Text>

        <Actions>
          {button_label && button_url && (
            <ActionButton href={button_url} $backgroundColor="green">
              {button_label}
            </ActionButton>
          )}

          {link_label && link_url && (
            <ActionLink href={link_url} $backgroundColor="green">
              {link_label}
            </ActionLink>
          )}
        </Actions>
      </Content>
    </Block>
  )
}

export default Pricing

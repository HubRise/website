import * as React from "react"

import { ActionButton, ActionLink, Actions, Content, Text } from "../shared/Styles"

import { markdownToHtml } from "@layouts/shared/utils/markdown"
import Block from "@layouts/shared/components/Block"

interface PricingProps {
  title: string
  description: string
  button_label?: string
  button_url?: string
  link_label?: string
  link_url?: string
}

const Pricing = ({ title, description, button_label, button_url, link_label, link_url }: PricingProps): JSX.Element => {
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
        <Text $backgroundColor="green" dangerouslySetInnerHTML={{ __html: markdownToHtml(description) }} />

        <Actions>
          {button_label && button_url && (
            <ActionButton to={button_url} $backgroundColor="green">
              {button_label}
            </ActionButton>
          )}

          {link_label && link_url && (
            <ActionLink to={link_url} $backgroundColor="green">
              {link_label}
            </ActionLink>
          )}
        </Actions>
      </Content>
    </Block>
  )
}

export default Pricing

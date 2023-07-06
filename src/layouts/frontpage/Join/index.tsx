import * as React from "react"

import { ActionButton, ActionLink, Actions, Content } from "../shared/Styles"

import Block from "@layouts/shared/components/Block"

interface JoinProps {
  title: string
  button_label?: string
  button_url?: string
  link_label?: string
  link_url?: string
}

const Join = ({ title, button_label, button_url, link_label, link_url }: JoinProps): JSX.Element => {
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
        <Actions>
          {button_label && button_url && (
            <ActionButton to={button_url} $backgroundColor="white">
              {button_label}
            </ActionButton>
          )}

          {link_label && link_url && (
            <ActionLink to={link_url} $backgroundColor="white">
              {link_label}
            </ActionLink>
          )}
        </Actions>
      </Content>
    </Block>
  )
}

export default Join

import type { MDXRemoteSerializeResult } from "next-mdx-remote"
import { MDXRemote } from "next-mdx-remote"

import Button from "@components/Button"
import ScreenContainer from "@components/ScreenContainer"

import { Title, TitleHighlight, Description } from "../shared/Styles"

import { ButtonWrapper } from "./Styles"

interface PricingProps {
  title: {
    start: string
    price: string
    end: string
  }
  button_label: string
  button_link: string
  descriptionMdx: MDXRemoteSerializeResult
}

const Pricing = ({ title, button_label, button_link, descriptionMdx }: PricingProps) => {
  return (
    <ScreenContainer bgColor="green" verticalPadding="small" isTextCentered={true}>
      <Title>
        {title.start}
        <TitleHighlight> {title.price} </TitleHighlight>
        {title.end}
      </Title>

      <Description>
        <MDXRemote {...descriptionMdx} />
      </Description>

      <ButtonWrapper>
        <Button label={button_label} link={button_link} type="tertiary" />
      </ButtonWrapper>
    </ScreenContainer>
  )
}

export default Pricing

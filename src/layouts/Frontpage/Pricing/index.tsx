import type { MDXRemoteSerializeResult } from "next-mdx-remote"
import { MDXRemote } from "next-mdx-remote"

import Button from "@components/Button"
import Container from "@components/Container"
import useClientRoutes from "@hooks/client/useClientRoutes"

import { Title, Description } from "../shared/Styles"

import { ButtonWrapper } from "./Styles"

interface PricingProps {
  title: {
    start: string
    price: string
    end: string
  }
  button_label: string
  descriptionMdx: MDXRemoteSerializeResult
}

const Pricing = ({ title, button_label, descriptionMdx }: PricingProps) => {
  const { signup } = useClientRoutes()

  return (
    <Container bgColor="green" verticalPadding="small" isTextCentered={true}>
      <Title>
        {title.start}
        <span> {title.price} </span>
        {title.end}
      </Title>
      <Description>
        <MDXRemote {...descriptionMdx} />
      </Description>
      <ButtonWrapper>
        <Button label={button_label} link={signup} type="tertiary" />
      </ButtonWrapper>
    </Container>
  )
}

export default Pricing

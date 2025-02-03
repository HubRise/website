import type { MDXRemoteSerializeResult } from "next-mdx-remote"
import { MDXRemote } from "next-mdx-remote"

import Button from "@components/Button"
import GreenContainer from "@components/GreenContainer"
import useClientRoutes from "@hooks/client/useClientRoutes"

import { Description, Title } from "./Styles"

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
    <GreenContainer>
      <Title>
        {title.start}
        <span> {title.price} </span>
        {title.end}
      </Title>
      <Description>
        <MDXRemote {...descriptionMdx} />
      </Description>
      <Button label={button_label} link={signup} />
    </GreenContainer>
  )
}

export default Pricing

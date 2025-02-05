import Image from "next/image"
import type { MDXRemoteSerializeResult } from "next-mdx-remote"
import { MDXRemote } from "next-mdx-remote"

import Button from "@components/Button"
import Container from "@components/Container"
import Icon from "@components/Icon"
import { iconSizes } from "@utils/styles"

import { Description, Title } from "../shared/Styles"

import { Wrapper, ContentWrapper } from "./Styles"

interface PartnersProps {
  title: string
  descriptionMdx: MDXRemoteSerializeResult
  button_label: string
  button_link: string
  image: string
}

const Partners = ({ title, descriptionMdx, button_label, button_link, image }: PartnersProps) => {
  return (
    <Container bgColor="green" verticalPadding="small">
      <Wrapper>
        <Image src={`/images/frontpage/${image}`} alt={title} width={708} height={521} />
        <ContentWrapper>
          <Title>{title}</Title>
          <Description>
            <MDXRemote {...descriptionMdx} />
          </Description>
          <Button
            label={button_label}
            link={button_link}
            type="tertiary"
            icon={<Icon code="arrow_forward" size={iconSizes._25} />}
          />
        </ContentWrapper>
      </Wrapper>
    </Container>
  )
}

export default Partners

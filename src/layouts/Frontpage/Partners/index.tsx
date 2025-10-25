import Image from "next/image"
import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import Button from "@components/Button"
import Icon from "@components/Icon"
import ScreenContainer from "@components/ScreenContainer"
import SerializedMdxContent from "@components/SerializedMdxContent"
import { iconSizes } from "@utils/styles"

import { Description, Title } from "../shared/Styles"

import { Wrapper, ImageWrapper, ContentWrapper } from "./Styles"

interface PartnersProps {
  title: string
  descriptionMdx: MDXRemoteSerializeResult
  button_label: string
  button_link: string
  image: string
}

const Partners = ({ title, descriptionMdx, button_label, button_link, image }: PartnersProps) => {
  return (
    <ScreenContainer bgColor="green" verticalPadding="small">
      <Wrapper>
        <ImageWrapper>
          <Image src={`/images/frontpage/${image}`} alt={title} width={708} height={521} />
        </ImageWrapper>

        <ContentWrapper>
          <Title>{title}</Title>

          <Description>
            <SerializedMdxContent content={descriptionMdx} />
          </Description>

          <Button
            label={button_label}
            link={button_link}
            type="tertiary"
            icon={<Icon code="arrow_forward" size={iconSizes._25} />}
          />
        </ContentWrapper>
      </Wrapper>
    </ScreenContainer>
  )
}

export default Partners

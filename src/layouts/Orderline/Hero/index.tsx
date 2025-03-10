import Image from "next/image"

import PageHero from "@components/PageHero"
import ScreenContainer from "@components/ScreenContainer"

import { ContentWrapper } from "../shared/Styles"
import { TOrderlineHero } from "../types"

import { Content, ContentBlock, SupportingText } from "./Styles"

interface HeroProps {
  hero: TOrderlineHero
}

const Hero = ({ hero }: HeroProps) => {
  const { title, supporting_text, content } = hero
  return (
    <>
      <PageHero
        title={
          <>
            <span>{title.centralise}</span> {title.all} <span>{title.orders}</span> {title.operations}
          </>
        }
      >
        <SupportingText>{supporting_text}</SupportingText>
        <Image src="/images/orderline/hero.png" alt="" width={1050} height={900} />
      </PageHero>
      <ScreenContainer bgColor="green" verticalPadding="small">
        <ContentWrapper>
          <Content>
            <ContentBlock>{content.part_1}</ContentBlock>
            <ContentBlock>{content.part_2}</ContentBlock>
          </Content>
        </ContentWrapper>
      </ScreenContainer>
    </>
  )
}

export default Hero

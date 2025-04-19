"use client"

import * as React from "react"

import Card from "@components/Card"
import PageHero from "@components/PageHero"
import ScreenContainer from "@components/ScreenContainer"
import Underline from "@components/Underline"

import { CardTitle, Content, ContentWrapper, HeroDescription } from "./Styles"
import { BrandingYaml } from "./types"

interface BrandingProps {
  yaml: BrandingYaml
}

const Branding = ({ yaml }: BrandingProps): JSX.Element => {
  const content = yaml.content

  return (
    <>
      <PageHero
        title={
          <>
            <span>{content.hero.title.part_1}</span> {content.hero.title.part_2}
          </>
        }
      >
        <HeroDescription>{content.hero.description}</HeroDescription>
        <Underline position="center" />
      </PageHero>
      <ScreenContainer bgColor="backgroundLight" verticalPadding="big">
        <ContentWrapper>
          {content.sections.map(({ title, content }, Idx) => {
            return (
              <Card key={Idx} padding="big">
                <CardTitle>{title}</CardTitle>
                <Underline />
                <Content dangerouslySetInnerHTML={{ __html: content }} />
              </Card>
            )
          })}
        </ContentWrapper>
      </ScreenContainer>
    </>
  )
}

export default Branding

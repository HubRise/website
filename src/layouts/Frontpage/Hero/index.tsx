import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import Button from "@components/Button"
import PageHero from "@components/PageHero"

import { THeroAppCategory, THeroTitle } from "../types"

import { FrontpageHero, AppCategories, Arrow, Title, Wrapper, Circle, AppCategory } from "./Styles"
import { getHeroAppsImageSource } from "./utils"

interface HeroProps {
  title: THeroTitle
  button_label: string
  button_link: string
  app_categories: Array<THeroAppCategory>
  descriptionMdx: MDXRemoteSerializeResult
}

const Hero = ({ title, button_label, button_link, app_categories, descriptionMdx }: HeroProps): JSX.Element => {
  return (
    <FrontpageHero>
      <PageHero
        title={
          <>
            {title.part_1} <span>{title.part_2}</span> {title.part_3} <span>{title.part_4}</span>
          </>
        }
        descriptionMdx={descriptionMdx}
      >
        <Button label={button_label} link={button_link} />

        <AppCategories>
          {app_categories.map(({ title, color }, index) => {
            return (
              <AppCategory $index={index} key={index}>
                <Wrapper>
                  <Arrow src={getHeroAppsImageSource(color)} alt="Hero Apps" fill={true} />
                  <Circle $color={color}>
                    <Title>{title}</Title>
                  </Circle>
                </Wrapper>
              </AppCategory>
            )
          })}
        </AppCategories>
      </PageHero>
    </FrontpageHero>
  )
}

export default Hero

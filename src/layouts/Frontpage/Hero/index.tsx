import Image from "next/image"
import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import Button from "@components/Button"
import PageHero from "@components/PageHero"

import { THeroApp, THeroTitle } from "../types"

import { FrontpageHero, Apps, AppWrapper, AppInner, App } from "./Styles"
import { getHeroAppsImageSource } from "./utils"

interface HeroProps {
  title: THeroTitle
  button_label: string
  button_link: string
  apps: Array<THeroApp>
  descriptionMdx: MDXRemoteSerializeResult
}

const Hero = ({ title, button_label, button_link, apps, descriptionMdx }: HeroProps): JSX.Element => {
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
        <Apps>
          {apps.map(({ title, color }, index) => {
            return (
              <App $index={index} key={index}>
                <AppWrapper>
                  <Image src={getHeroAppsImageSource(color)} alt="Hero Apps" fill={true} />
                  <AppInner $color={color}>
                    <span>{title}</span>
                  </AppInner>
                </AppWrapper>
              </App>
            )
          })}
        </Apps>
      </PageHero>
    </FrontpageHero>
  )
}

export default Hero

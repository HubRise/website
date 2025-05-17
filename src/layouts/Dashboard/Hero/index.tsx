import Image from "next/image"

import PageHero from "@components/PageHero"
import TwoSidesContent from "@components/TwoSidesContent"

import { THero } from "../types"

import { ImageWrapper } from "./Styles"

interface HeroProps {
  hero: THero
}

const Hero = ({ hero }: HeroProps): JSX.Element => {
  const { title, description, content } = hero

  return (
    <>
      <PageHero
        title={
          <>
            <span>{title.part_1}</span> {title.part_2} <span>{title.part_3}</span> {title.part_4}
          </>
        }
        description={description}
      >
        <ImageWrapper>
          <Image
            src="/images/dashboard/hero.png"
            alt={`${title.part_1} ${title.part_2} ${title.part_3} ${title.part_4}`}
            width={1250}
            height={2020}
          />
        </ImageWrapper>
      </PageHero>
      <TwoSidesContent content={content} />
    </>
  )
}

export default Hero

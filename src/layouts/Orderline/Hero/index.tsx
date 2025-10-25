import Image from "next/image"

import PageHero from "@components/PageHero"
import TwoSidesContent from "@components/TwoSidesContent"

import { TOrderlineHero } from "../types"

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
            {title.part_1} <span> {title.part_2} </span>
            {title.part_3} <span> {title.part_4} </span>
          </>
        }
        description={supporting_text}
      >
        <Image
          src="/images/orderline/hero.png"
          alt={`${title.part_1} ${title.part_2} ${title.part_3} ${title.part_4}`}
          width={1050}
          height={900}
        />
      </PageHero>
      <TwoSidesContent content={content} />
    </>
  )
}

export default Hero

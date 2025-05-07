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
            <span>{title.centralise}</span> {title.all} <span>{title.orders}</span> {title.operations}
          </>
        }
        description={supporting_text}
      >
        <Image
          src="/images/orderline/hero.png"
          alt={`${title.centralise} ${title.all} ${title.orders} ${title.operations}`}
          width={1050}
          height={900}
        />
      </PageHero>
      <TwoSidesContent content={content} />
    </>
  )
}

export default Hero

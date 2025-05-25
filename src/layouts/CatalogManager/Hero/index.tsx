import Image from "next/image"

import PageHero from "@components/PageHero"
import TwoSidesContent from "@components/TwoSidesContent"

import { THero } from "../types"

import { CatalogManagerHero } from "./Styles"

interface HeroProps {
  hero: THero
}

const Hero = ({ hero }: HeroProps): JSX.Element => {
  const { title, description, content } = hero

  return (
    <>
      <CatalogManagerHero>
        <PageHero
          title={
            <>
              {title.part_1} <span>{title.part_2}</span>
            </>
          }
          description={description}
          isTextCentered={false}
        >
          <Image
            src="/images/catalog-manager/hero.png"
            alt={`${title.part_1} ${title.part_2}`}
            width={1380}
            height={860}
          />
        </PageHero>
      </CatalogManagerHero>
      <TwoSidesContent content={content} />
    </>
  )
}

export default Hero

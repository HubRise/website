import Image from "next/image"

import PageHero from "@components/PageHero"

import { THero } from "../types"

import { BecomePartnerHero } from "./Styles"

interface HeroProps {
  hero: THero
}

const Hero = ({ hero }: HeroProps): JSX.Element => {
  const { title, description } = hero

  return (
    <BecomePartnerHero>
      <PageHero
        title={
          <>
            <span>{title.part_1}</span> {title.part_2} <span>{title.part_3}</span> {title.part_4}
          </>
        }
        description={description}
        isTextCentered={false}
      >
        <Image
          src="/images/become-partner/hero.png"
          alt={`${title.part_1} ${title.part_2} ${title.part_3} ${title.part_4}`}
          width={915}
          height={815}
        />
      </PageHero>
    </BecomePartnerHero>
  )
}

export default Hero

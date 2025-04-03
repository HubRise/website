import Button from "@components/Button"
import Card from "@components/Card"
import Icon from "@components/Icon"
import PageHero from "@components/PageHero"
import { iconSizes } from "@utils/styles"

import { CardText, CardTitle } from "../shared/Styles"
import { THero } from "../types"

import { Cards, CardPart, Email, Buttons } from "./Styles"

interface HeroProps {
  hero: THero
}

const Hero = ({ hero }: HeroProps): JSX.Element => {
  const { title, cards } = hero
  return (
    <PageHero
      title={
        <>
          {title.part_1} <span>{title.part_2}</span>
        </>
      }
      isTextCentered={false}
    >
      <Cards>
        {cards.map(({ title, description, email, buttons }, index) => {
          return (
            <Card key={index}>
              <CardPart>
                <CardTitle>{title}</CardTitle>
                <CardText>{description}</CardText>
              </CardPart>
              <CardPart>
                {buttons?.length && (
                  <Buttons>
                    {buttons.map(({ button_label, button_link }, index) => {
                      return (
                        <Button
                          type="link"
                          label={button_label}
                          link={button_link}
                          key={index}
                          icon={<Icon code="arrow_forward" size={iconSizes._25} />}
                        />
                      )
                    })}
                  </Buttons>
                )}
                <Email href={`mailto:${email}`}>{email}</Email>
              </CardPart>
            </Card>
          )
        })}
      </Cards>
    </PageHero>
  )
}

export default Hero

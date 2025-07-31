import Button from "@components/Button"
import Icon from "@components/Icon"
import PageHero from "@components/PageHero"
import Underline from "@components/Underline"
import { iconSizes } from "@utils/styles"

import { Description, Title } from "../shared/Styles"
import { THero } from "../types"

import {
  Price,
  PriceAndSellingPoints,
  SellingPoints,
  SellingPoint,
  SellingPointTitle,
  SellingPointText,
  FeatureBlocks,
  FeatureBlock,
  StyledLink,
  FeaturesList,
  Feature,
  FeatureText,
  IconWrapper,
  Period,
} from "./Styles"

interface HeroProps {
  hero: THero
}

const Hero = ({ hero }: HeroProps): JSX.Element => {
  const { title, plan, selling_points, included_features, additional_features } = hero

  return (
    <PageHero
      title={
        <>
          <span>{title.part_1} </span>
          {title.part_2}
          <span> {title.part_3} </span>
          {title.part_4}
        </>
      }
    >
      <PriceAndSellingPoints>
        <Price> {plan.price} </Price>
        <Period>{plan.period}</Period>
        <Underline position="center" />

        <SellingPoints>
          {selling_points.map(({ title, text }, index) => {
            return (
              <SellingPoint key={index}>
                <SellingPointTitle>{title}</SellingPointTitle>
                <SellingPointText>{text}</SellingPointText>
              </SellingPoint>
            )
          })}
        </SellingPoints>
      </PriceAndSellingPoints>

      <FeatureBlocks>
        <FeatureBlock $main={true}>
          <Title>{included_features.title}</Title>
          <Description>{included_features.description}</Description>
          <Underline />
          <FeaturesList>
            {included_features.list.map(({ text, link_label, link }, index) => {
              return (
                <Feature key={index}>
                  <IconWrapper>
                    <Icon code="check" size={iconSizes._20} color="white" />
                  </IconWrapper>
                  <FeatureText>
                    {text} {link_label && <StyledLink href={`${link}`}>{link_label}</StyledLink>}
                  </FeatureText>
                </Feature>
              )
            })}
          </FeaturesList>
          <Button label={included_features.button_label} link={included_features.button_link} />
        </FeatureBlock>

        <FeatureBlock $main={false}>
          <Title>{additional_features.title}</Title>
          <Description>{additional_features.description}</Description>
          <Underline />
          <FeaturesList>
            {additional_features.list.map(({ text, link_label, link }, index) => {
              return (
                <Feature key={index}>
                  <IconWrapper>
                    <Icon code="check" size={iconSizes._20} color="white" />
                  </IconWrapper>
                  <FeatureText>
                    {text} {link_label && <StyledLink href={`${link}`}>{link_label}</StyledLink>}
                  </FeatureText>
                </Feature>
              )
            })}
          </FeaturesList>
        </FeatureBlock>
      </FeatureBlocks>
    </PageHero>
  )
}

export default Hero

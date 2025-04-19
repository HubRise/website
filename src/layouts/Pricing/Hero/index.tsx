import Button from "@components/Button"
import Icon from "@components/Icon"
import PageHero from "@components/PageHero"
import Underline from "@components/Underline"
import { iconSizes } from "@utils/styles"

import { Description, Title } from "../shared/Styles"
import { THero } from "../types"

import {
  Price,
  PriceingBlock,
  Proposals,
  Proposal,
  ProposalTitle,
  ProposalText,
  FeatureBlocks,
  FeatureBlock,
  StyledLink,
  FeaturesList,
  Feature,
  FeatureText,
  IconWrapper,
} from "./Styles"

interface HeroProps {
  hero: THero
}

const Hero = ({ hero }: HeroProps): JSX.Element => {
  const { title, plan, proposals, included_features, additional_features } = hero

  return (
    <PageHero
      title={
        <>
          <span>{title.simple} </span>
          <span>{title.fair} </span>
          {title.and}
          <span> {title.transparent} </span>
          {title.pricing}
        </>
      }
    >
      <PriceingBlock>
        <Price>
          <p>
            <span>{plan.price}</span> {plan.tax}
          </p>
          <p>{plan.period}</p>
        </Price>
        <Underline position="center" />
        <Proposals>
          {proposals.map(({ title, text }, index) => {
            return (
              <Proposal key={index}>
                <ProposalTitle>{title}</ProposalTitle>
                <ProposalText>{text}</ProposalText>
              </Proposal>
            )
          })}
        </Proposals>
      </PriceingBlock>
      <FeatureBlocks>
        <FeatureBlock $isActive={true}>
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
        <FeatureBlock $isActive={false}>
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

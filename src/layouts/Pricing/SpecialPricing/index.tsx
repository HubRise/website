import Button from "@components/Button"
import Card from "@components/Card"
import ScreenContainer from "@components/ScreenContainer"
import Underline from "@components/Underline"

import { Description, Title } from "../shared/Styles"
import { TSpecialPricing } from "../types"

import { Wrapper, Content, PricingList, PricingListCards, PricingListItem, PriceDescription, Price } from "./Styles"

interface SpecialPricingProps {
  special_pricing: TSpecialPricing
}

const SpecialPricing = ({ special_pricing }: SpecialPricingProps): JSX.Element => {
  const chain_and_franchise = special_pricing.chain_and_franchise
  const dark_kitchen = special_pricing.dark_kitchen
  const resellers_and_partners = special_pricing.resellers_and_partners

  return (
    <ScreenContainer bgColor="backgroundLight" verticalPadding="big" withHeader title={special_pricing.title}>
      <Wrapper>
        <Content>
          <PricingListCards>
            <Card>
              <Title>{chain_and_franchise.title}</Title>
              <Description>{chain_and_franchise.description}</Description>
              <Underline />
              <PricingList>
                {chain_and_franchise.pricing_list.map(({ text, price }, index) => {
                  return (
                    <PricingListItem key={index}>
                      <PriceDescription>{text}</PriceDescription>
                      <Price>{price}</Price>
                    </PricingListItem>
                  )
                })}
              </PricingList>
              <Description>{chain_and_franchise.special_proposal}</Description>
            </Card>
            <Card>
              <Title>{dark_kitchen.title}</Title>
              <Description>{dark_kitchen.description}</Description>
              <Underline />
              <PricingList>
                <Description>{dark_kitchen.pricing_list_description}</Description>
                {dark_kitchen.pricing_list.map(({ text, price }, index) => {
                  return (
                    <PricingListItem key={index}>
                      <PriceDescription>{text}</PriceDescription>
                      <Price>{price}</Price>
                    </PricingListItem>
                  )
                })}
              </PricingList>
              <Description>{dark_kitchen.special_proposal}</Description>
            </Card>
          </PricingListCards>
          <Card>
            <Title>{resellers_and_partners.title}</Title>
            <Description>{resellers_and_partners.description}</Description>
            <Underline />
            <Button label={resellers_and_partners.button_label} link={resellers_and_partners.button_link} />
          </Card>
        </Content>
      </Wrapper>
    </ScreenContainer>
  )
}

export default SpecialPricing

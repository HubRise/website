import { PricingYaml } from "@layouts/Pricing/types"

import { List, Item, Button, StyledPlan, Title, TitleMain, TitleSub } from "./Styles"

interface PlanProps {
  plan: PricingYaml["content"]["plan"]
}

const Plan = ({ plan: { pricing, features, link } }: PlanProps): JSX.Element => {
  return (
    <StyledPlan>
      <Title>
        <TitleMain>{pricing.chunk_1}</TitleMain>
        <TitleSub>{pricing.chunk_2}</TitleSub>
      </Title>

      <List>
        {features.map((feature, idx) => (
          <Item key={idx}>{feature}</Item>
        ))}
      </List>

      <Button href={link.to}>{link.text}</Button>
    </StyledPlan>
  )
}

export default Plan

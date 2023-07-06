import * as React from "react"

import { IPlan } from "../interface"

import { List, Item, Button, StyledPlan, Title, TitleMain, TitleSub } from "./Styles"

import { generateKey } from "@utils/misc"

interface PlanProps {
  plan: IPlan
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
          <Item key={generateKey(feature, idx)}>{feature}</Item>
        ))}
      </List>

      <Button to={link.to} newTab={false}>
        {link.text}
      </Button>
    </StyledPlan>
  )
}

export default Plan

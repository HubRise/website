import styled from "styled-components"

import { StyledCard } from "@components/Card/Styles"
import { breakpoints, colors, fontSizeMixins } from "@utils/styles"

export const Wrapper = styled.div`
  @media (min-width: ${breakpoints.large}) {
    padding: 0 5rem;
  }
`

export const Content = styled.div`
  max-width: 90rem;
  margin: 2.75rem auto 0;
`

export const PricingListCards = styled.div`
  margin-bottom: 2rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;

  @media (min-width: ${breakpoints.large}) {
    flex-direction: row;

    ${StyledCard} {
      flex-basis: 50%;
    }
  }
`

export const PricingList = styled.div`
  padding: 3.5rem 0;
`

export const PricingListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.borderLight};
  padding: 0.875rem 0;

  &:last-child {
    border-bottom: none;
  }
`

export const PriceDescription = styled.span`
  ${fontSizeMixins.fontSizeTextMd}
`

export const Price = styled.span`
  ${fontSizeMixins.fontSizeTextXl}
  font-weight: 600;
  color: ${colors.textDarkest};
`

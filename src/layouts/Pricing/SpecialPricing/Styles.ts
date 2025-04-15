import styled from "styled-components"

import { StyledCard } from "@components/Card/Styles"
import { breakpoints, colors, fontSizeMixins, mixin } from "@utils/styles"

export const Content = styled.div`
  ${mixin.containerWrapper}
  margin-top: 2.75rem;
`

export const PricingListCards = styled.div`
  margin-bottom: 2rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;

  ${StyledCard} {
    justify-content: space-between;
  }

  @media (min-width: ${breakpoints.large}) {
    flex-direction: row;

    ${StyledCard} {
      flex-basis: 50%;
    }
  }
`

export const CardTopPart = styled.div``

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

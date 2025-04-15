import styled from "styled-components"

import { expandIconWrapperMixin } from "@components/Accordion/Styles"
import { StyledCard } from "@components/Card/Styles"
import { StyledIcon } from "@components/Icon/Styles"
import { StyledUnderline } from "@components/Underline/Styles"
import { breakpoints, colors, mixin } from "@utils/styles"

export const CardTitle = styled.h4<{ $isExpanded: boolean }>`
  ${mixin.cardTitle}
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${StyledIcon} {
    transform: ${({ $isExpanded }) => $isExpanded && `rotate(180deg)`};
  }
`

export const Content = styled.div`
  ${mixin.containerWrapper}
  display: flex;
  flex-direction: column;
  row-gap: 3rem;

  ul {
    list-style: inside;
    margin: 0.5rem 0 0.5rem 1rem;
  }

  ${StyledUnderline} {
    margin-bottom: 0.25rem;
  }

  ${StyledCard}:nth-child(odd):not(:last-child) {
    padding-left: 2rem;
  }

  ${StyledCard}:nth-child(even):not(:last-child) {
    padding-right: 2rem;
  }

  @media (min-width: ${breakpoints.large}) {
    ${StyledCard}:nth-child(odd):not(:last-child) {
      padding-left: 3.5rem;
    }

    ${StyledCard}:nth-child(even):not(:last-child) {
      padding-right: 3.5rem;
    }
  }
`

export const ExpandIconWrapper = styled.div`
  ${expandIconWrapperMixin}
  background-color: ${colors.backgroundLight};
`

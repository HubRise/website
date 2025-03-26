import styled from "styled-components"

import { StyledCard } from "@components/Card/Styles"
import { StyledIcon } from "@components/Icon/Styles"
import { StyledUnderline } from "@components/Underline/Styles"
import { breakpoints, mixin } from "@utils/styles"

export const CardTitle = styled.h4<{ $isExpanded: boolean }>`
  ${mixin.cardTitle}
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${StyledIcon} {
    ${mixin.clickable}
    opacity: 0;
    transform: ${({ $isExpanded }) => $isExpanded && `rotate(180deg)`};
    transition: all 0.25s ease-in-out;
  }
`

export const Content = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 3rem;

  ul {
    list-style: inside;
    margin: 0.5rem 0 0.5rem 1rem;
  }

  ${StyledUnderline} {
    margin-bottom: 1.25rem;
  }

  ${StyledCard} {
    &:hover {
      ${CardTitle} ${StyledIcon} {
        opacity: 1;
      }
    }
  }

  ${StyledCard}:nth-child(odd):not(:last-child) {
    padding-left: 2rem;
  }

  ${StyledCard}:nth-child(even):not(:last-child) {
    padding-right: 2rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 0 3.5rem;

    ${StyledCard}:nth-child(odd):not(:last-child) {
      padding-left: 3.5rem;
    }

    ${StyledCard}:nth-child(even):not(:last-child) {
      padding-right: 3.5rem;
    }
  }
`

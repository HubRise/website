import styled from "styled-components"

import { buttonStyles, StyledButton } from "@components/Button/Styles"
import { StyledCard } from "@components/Card/Styles"
import { breakpoints, colors, mixin } from "@utils/styles"

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 1.5rem;

  ${StyledCard} {
    justify-content: space-between;
  }

  @media (min-width: ${breakpoints.large}) {
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 3.5rem;
  }
`

export const CardPart = styled.div``

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 0.625rem;

  ${StyledButton} {
    margin-top: 0;
  }

  @media (min-width: ${breakpoints.medium}) {
    flex-wrap: nowrap;
  }
`

export const Email = styled.a`
  color: ${colors.primary};
  text-decoration: underline;
  font-weight: 600;
  ${mixin.linkOver(colors.textDarkest)};
`

export const ExternalLink = styled.a`
  ${buttonStyles}

  span {
    margin-left: 0.625rem;
  }
`

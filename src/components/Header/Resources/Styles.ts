import Link from "next/link"
import styled from "styled-components"

import { StyledButton } from "@components/Button/Styles"
import { breakpoints, colors, fontSizes } from "@utils/styles"

export const ResourcesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: ${breakpoints.burgerMenu}) {
    flex-direction: row;
    gap: 2.5rem;
  }
`

export const ResourcesLinks = styled.div`
  display: grid;
  column-gap: 2.5rem;
  row-gap: 1rem;
  grid-template-columns: 1fr;

  @media (min-width: ${breakpoints.burgerMenu}) {
    grid-auto-flow: column;
    grid-template-rows: repeat(3, auto);
  }
`

export const LinkName = styled.p`
  font-weight: 600;
  color: ${colors.textDarkest};
  transition: color 0.2s ease;
`

export const LinkDescription = styled.span`
  font-size: ${fontSizes._14};
  color: ${colors.textDark};
  transition: color 0.2s ease;
`

export const ResourcesLink = styled(Link)`
  &:hover {
    ${LinkName} {
      color: ${colors.primary};
    }

    ${LinkDescription} {
      color: ${colors.textDarkest};
    }
  }

  @media (min-width: ${breakpoints.burgerMenu}) {
    max-width: 15rem;
  }
`

export const GetInTouchCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background-color: ${colors.primary};
  background-image: url("/images/ellipse.svg");
  background-repeat: no-repeat;
  background-position: 100%;
  color: ${colors.white};
  height: 9.5rem;

  ${StyledButton} {
    width: 100%;
    margin-top: 0;
  }

  @media (min-width: ${breakpoints.burgerMenu}) {
    width: 18rem;
  }
`

export const GetInTouchText = styled.div``

export const GetInTouchMainQuestion = styled.h4`
  font-size: ${fontSizes._19};
  font-weight: 600;
  color: ${colors.white};
`

export const GetInTouchQuestion = styled.span`
  font-size: ${fontSizes._16};
`

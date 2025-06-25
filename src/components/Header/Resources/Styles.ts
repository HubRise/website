import Link from "next/link"
import styled from "styled-components"

import { StyledButton } from "@components/Button/Styles"
import { breakpoints, colors, fontSizeMixins } from "@utils/styles"

export const GetInTouchMainQuestion = styled.h4``
export const GetInTouchText = styled.div``

export const ResourcesLinks = styled.div`
  display: grid;
  column-gap: 2.5rem;
  row-gap: 1rem;
  grid-template-columns: 1fr;

  @media (min-width: ${breakpoints.burgerMenu}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const ResourcesLink = styled(Link)`
  @media (min-width: ${breakpoints.burgerMenu}) {
    max-width: 14rem;
  }

  @media (min-width: ${breakpoints.biggest}) {
    max-width: 17rem;
  }
`

export const LinkName = styled.p`
  color: ${colors.textDarkest};
  font-weight: 600;
  ${fontSizeMixins.fontSizeTextMd}

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeTextLg}
  }
`

export const LinkDescription = styled.span`
  color: ${colors.textDark};
  ${fontSizeMixins.fontSizeTextSm}

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeTextMd}
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
    width: 14rem;
  }

  @media (min-width: ${breakpoints.biggest}) {
    width: 17rem;
    height: 11rem;
  }
`

export const ResourcesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${GetInTouchCard} {
    ${GetInTouchMainQuestion} {
      font-weight: 600;
      ${fontSizeMixins.fontSizeText2Xl}
      color: ${colors.white};

      @media (min-width: ${breakpoints.biggest}) {
        font-size: 1.75rem;
        line-height: 2.375rem;
      }
    }
  }

  @media (min-width: ${breakpoints.burgerMenu}) {
    flex-direction: row;
    gap: 2.5rem;
  }
`

export const GetInTouchQuestion = styled.span`
  ${fontSizeMixins.fontSizeTextLg}
`

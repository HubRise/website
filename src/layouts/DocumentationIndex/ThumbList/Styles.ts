import OriginalLink from "next/link"
import styled from "styled-components"

import Icon from "@components/Icon"
import { breakpoints, colors, fontSizeMixins, mixin } from "@utils/styles"

export const StyledThumbList = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: ${breakpoints.large}) {
    padding: 0 3.5rem;
    grid-template-columns: 1fr 1fr;
  }
`

export const Link = styled(OriginalLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`

export const IconWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  background-color: ${colors.primary};
  ${mixin.centerElement}
`

export const StyledIcon = styled(Icon)`
  color: ${colors.white};
`

export const Content = styled.div`
  text-align: center;
`

export const Title = styled.div`
  ${fontSizeMixins.fontSizeTextXl}
  font-weight: 600;
  color: ${colors.textDarkest};

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeText2Xl}
  }
`

export const Description = styled.div`
  ${mixin.cardText}
`

import Image from "next/image"
import styled from "styled-components"

import { breakpoints, colors, fontSizes, mixin } from "@utils/styles"

export const Card = styled.div`
  background-color: ${colors.backgroundWhite};
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${breakpoints.medium}) {
    grid-template-columns: 40% 60%;
  }
`

export const Logo = styled.div`
  ${mixin.centerElement};
  background-color: #f7f7f7;
`

export const PartnerImage = styled(Image)`
  max-width: 60%;
  margin: 3rem auto;
`

export const Information = styled.div`
  padding: 2.5rem;
`

export const Title = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.medium}) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 0 0.75rem;
  }
`

export const Name = styled.h4`
  display: flex;
  align-items: center;
  font-size: ${fontSizes._24};
  font-weight: bold;
  color: ${colors.textDark};

  @media (min-width: ${breakpoints.medium}) {
    &::after {
      display: block;
      content: "";
      width: 5px;
      height: 5px;
      margin-left: 0.75rem;
      background-color: ${colors.borderMedium};
      border-radius: 100%;
    }
  }
`

export const Website = styled.a`
  color: ${colors.primary};
`

export const Description = styled.div`
  color: ${colors.textMedium};

  a {
    color: ${colors.primary};
    ${mixin.linkOver(colors.textDarkest)};
  }

  p:not(:last-child) {
    &::after {
      display: block;
      color: ${colors.textLight};
      content: "-";
    }
  }
`

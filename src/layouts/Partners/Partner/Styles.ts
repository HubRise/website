import Image from "next/image"
import styled from "styled-components"

import { breakpoints, colors, fontSizes, sizes } from "@utils/styles"

export const Card = styled.div`
  max-width: ${sizes.maxWidth};
  margin: 0 auto 1.5rem auto;
  &:last-child {
    margin-bottom: 5rem;
  }
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.medium}) {
    flex-direction: row;
  }
`

export const Logo = styled.div`
  flex: 1 0 40%;
  aspect-ratio: 16/9;
  background-color: #f7f7f7;
  position: relative;
`

export const PartnerImage = styled(Image)`
  object-fit: contain;
  max-width: 60%;
  top: 50%;
  left: 50% !important;
  transform: translateX(-50%);
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

  &:not(:last-child) {
    &::after {
      display: block;
      color: ${colors.textLight};
      content: "-";
    }
  }
`

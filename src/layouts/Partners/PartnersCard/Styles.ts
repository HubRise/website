import Image from "next/image"
import styled from "styled-components"

import { breakpoints, colors, sizes } from "@utils/styles"

export const Wrapper = styled.div`
  background-color: ${colors.white};
  max-width: ${sizes.maxWidth};
  width: 100%;
  margin: 0 auto;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.medium}) {
    flex-direction: row;
  }
`

export const ImageWrapper = styled.div`
  flex-basis: 40%;
  flex-shrink: 0;
  aspect-ratio: 16/9;
  flex-grow: 1;
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

export const InfoWrapper = styled.div`
  padding: 2.5rem 2.3rem;
`

export const InfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  @media (min-width: ${breakpoints.medium}) {
    flex-direction: row;
    margin-bottom: 0;
  }
`

export const Name = styled.h4`
  font-size: 22px;
  font-weight: bold;
  color: ${colors.textDark};
  display: flex;
  align-items: center;

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
  margin-left: 0.75rem;
  color: ${colors.primary};
`

export const Descriptions = styled.div``

export const Description = styled.p`
  color: ${colors.textMedium};
  &:not(:last-child) {
    &::after {
      display: block;
      content: "-";
    }
  }
`

import Link from "next/link"
import styled from "styled-components"

import { breakpoints, colors, fontSizeMixins, fontSizes, mixin } from "@utils/styles"

export const PriceAndSellingPoints = styled.div`
  margin: 2.5rem 0;
  padding-bottom: 2.5rem;

  @media (min-width: ${breakpoints.large}) {
    margin: 5.5rem 0;
  }
`

export const Price = styled.div`
  font-size: ${fontSizes._66};
  line-height: 1;
  font-weight: 600;
  color: ${colors.textDarkest};
  letter-spacing: -2px;
`

export const Period = styled.div`
  font-weight: 500;
`

export const SellingPoints = styled.div`
  margin-top: 2rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`

export const SellingPoint = styled.div``

export const SellingPointTitle = styled.h4`
  ${fontSizeMixins.text18};
  color: ${colors.textDarkest};
  font-weight: 600;
`

export const SellingPointText = styled.p``

export const FeatureBlocks = styled.div`
  @media (min-width: ${breakpoints.large}) {
    display: flex;
    gap: 2rem;
  }
`

export const FeatureBlock = styled.div<{ $main: boolean }>`
  background-color: ${({ $main }) => ($main ? `${colors.backgroundWhite}` : `${colors.backgroundLightest}`)};
  box-shadow: ${({ $main }) => ($main ? "0px 0px 25px #a6a6a699" : "none")};
  text-align: left;
  border-radius: 0.875rem;
  padding: 2.5rem 3.5rem;
  transition: all 0.5s ease-in-out;

  @media (min-width: ${breakpoints.large}) {
    flex-basis: 50%;
  }
`

export const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin-top: 1.25rem;
`

export const Feature = styled.div`
  display: flex;
  align-items: center;
`

export const FeatureText = styled.span`
  display: inline-block;
  margin-left: 0.875rem;
`

export const IconWrapper = styled.div`
  background-color: ${colors.primary};
  border-radius: 100%;
  width: 1.5rem;
  height: 1.5rem;
  ${mixin.centerElement};
  flex-shrink: 0;
`

export const StyledLink = styled(Link)`
  color: ${colors.primary};
  ${mixin.linkOver(colors.textDarkest)};
`

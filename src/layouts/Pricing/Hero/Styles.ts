import Link from "next/link"
import styled from "styled-components"

import { boxShadows, breakpoints, colors, fontSizeMixins, mixin } from "@utils/styles"

export const PriceingBlock = styled.div`
  margin-top: 2.5rem;
  box-shadow: ${boxShadows.card};
  border-radius: 0.875rem;
  padding-bottom: 2.5rem;

  @media (min-width: ${breakpoints.large}) {
    margin-top: 5.5rem;
  }
`

export const Price = styled.div`
  p {
    ${fontSizeMixins.fontSizeTextMd}
    font-weight: 500;

    span {
      font-size: 3.75rem;
      line-height: 4rem;
      font-weight: 600;
      color: ${colors.textDarkest};
      letter-spacing: -2px;
    }
  }
`

export const Proposals = styled.div`
  margin-top: 1rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`

export const Proposal = styled.div``

export const ProposalTitle = styled.h4`
  ${fontSizeMixins.fontSizeTextMd}
  color: ${colors.textDarkest};
  font-weight: 600;
`

export const ProposalText = styled.p`
  ${fontSizeMixins.fontSizeTextMd}
`

export const FeatureBlocks = styled.div`
  margin-top: 2rem;

  @media (min-width: ${breakpoints.large}) {
    display: flex;
    gap: 2rem;
  }
`

export const FeatureBlock = styled.div<{ $isActive: boolean }>`
  background-color: ${({ $isActive }) => ($isActive ? `${colors.white}` : `${colors.backgroundLightest}`)};
  box-shadow: ${({ $isActive }) => ($isActive ? "0px 0px 25px #a6a6a699" : "none")};
  transform: ${({ $isActive }) => ($isActive ? "scale(1)" : "scale(0.9)")};
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
  ${fontSizeMixins.fontSizeTextMd}

  @media (min-width: ${breakpoints.biggest}) {
    ${fontSizeMixins.fontSizeTextXl}
  }
`

export const IconWrapper = styled.div`
  background-color: ${colors.primary};
  border-radius: 100%;
  width: 1.5rem;
  height: 1.5rem;
  ${mixin.centerElement}
  flex-shrink: 0;

  @media (min-width: ${breakpoints.biggest}) {
    width: 1.75rem;
    height: 1.75rem;
  }
`

export const StyledLink = styled(Link)`
  ${mixin.link}
`

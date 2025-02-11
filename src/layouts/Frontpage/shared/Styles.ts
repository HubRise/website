import Link from "next/link"
import styled, { css } from "styled-components"

import { BackgroundColor, bgColorMap, linkColorMap, linkOverColorMap } from "@components/Block/utils"
import { boxShadows, breakpoints, colors, fontSizes, mixin, sizes } from "@utils/styles"

type CardPadding = "small" | "big"

const linkColors = (backgroundColor: BackgroundColor) => css`
  color: ${linkColorMap[backgroundColor]};
  ${mixin.linkOver(linkOverColorMap[backgroundColor])};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Text = styled.div<{ $backgroundColor: BackgroundColor }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: ${fontSizes._18};
  a {
    ${mixin.clickable};
    ${({ $backgroundColor }) => linkColors($backgroundColor)};
  }
`

export const Title = styled.h2`
  font-size: 1.875rem;
  line-height: 2.75rem;
  font-weight: 600;

  @media (min-width: ${breakpoints.large}) {
    font-size: 2.25rem;
  }

  @media (min-width: ${breakpoints.biggest}) {
    font-size: ${fontSizes._42};
    line-height: 3.75rem;
  }
`

export const TitleHighlight = styled.span`
  font-size: ${fontSizes._42};

  @media (min-width: ${breakpoints.biggest}) {
    span {
      font-size: 3.75rem;
    }
  }
`

export const Description = styled.div`
  margin-top: 1rem;

  @media (min-width: ${breakpoints.biggest}) {
    margin-top: 1.25rem;
  }

  p {
    font-size: ${fontSizes._18};
    line-height: 1.625rem;

    @media (min-width: ${breakpoints.large}) {
      font-size: ${fontSizes._20};
      line-height: 1.875rem;
    }

    @media (min-width: ${breakpoints.biggest}) {
      font-size: ${fontSizes._24};
      line-height: 2rem;
    }
  }
`

export const Card = styled.div<{ $padding: CardPadding }>`
  display: flex;
  flex-direction: column;
  border-radius: 0.875rem;
  background-color: ${colors.white};
  padding: ${({ $padding }) => ($padding === "small" ? "1.5rem" : "1.875rem 0.875rem")};
  box-shadow: ${boxShadows.card};

  @media (min-width: ${breakpoints.large}) {
    padding: ${({ $padding }) => ($padding === "small" ? "1.5rem" : "2.5rem")};
  }
`

export const ImageWithMargin = styled.div`
  margin: 0 5rem;

  @media (min-width: ${breakpoints.large}) {
    margin: 2.5rem;
  }
`

export const Actions = styled.div`
  align-self: center;
  display: inline-grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;
  align-items: center;
  justify-items: center;
  justify-content: center;
  margin-top: 1rem;

  @media (min-width: ${breakpoints.medium}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ActionLink = styled(Link)<{ $backgroundColor: BackgroundColor }>`
  height: 100%;
  width: 100%;
  ${mixin.centerElement};
  font-size: ${fontSizes._16};
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: underline;
  ${mixin.clickable};
  ${({ $backgroundColor }) => linkColors($backgroundColor)};
`

export const ActionButton = styled(Link)<{ $backgroundColor: BackgroundColor }>`
  font-size: ${fontSizes._16};
  font-weight: 500;
  text-transform: uppercase;
  ${mixin.clickable};

  padding: 0.4rem 1.5rem;
  border-radius: ${sizes.borderRadius};

  ${({ $backgroundColor }) => css`
    transition:
      color 0.2s ease,
      background-color 0.2s ease;
    color: ${bgColorMap[$backgroundColor]};
    background-color: ${linkColorMap[$backgroundColor]};

    &:hover {
      color: ${colors.white};
      background-color: ${linkOverColorMap[$backgroundColor]};
    }
  `};
`

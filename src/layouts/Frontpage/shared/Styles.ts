import Link from "next/link"
import styled, { css } from "styled-components"

import { BackgroundColor, bgColorMap, linkColorMap, linkOverColorMap } from "@components/Block/utils"
import { breakpoints, colors, fontSizes, mixin, sizes } from "@utils/styles"

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

  span {
    font-size: ${fontSizes._42};
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 2.25rem;
  }

  @media (min-width: ${breakpoints.biggest}) {
    font-size: ${fontSizes._42};
    line-height: 3.75rem;

    span {
      font-size: 3.75rem;
    }
  }
`

export const Description = styled.div`
  margin-top: 1rem;

  @media (min-width: ${breakpoints.biggest}) {
    margin-top: 1.375rem;
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
  box-shadow:
    -5.1394px 48.8243px 19.2727px rgba(181, 181, 181, 0.01),
    -2.5697px 26.9818px 16.703px rgba(181, 181, 181, 0.05),
    -1.28485px 11.5636px 11.5636px rgba(181, 181, 181, 0.09),
    0px 2.5697px 6.42424px rgba(181, 181, 181, 0.1);

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

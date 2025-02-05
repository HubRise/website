import Link from "next/link"
import styled, { css } from "styled-components"

import { BackgroundColor, bgColorMap, linkColorMap, linkOverColorMap } from "@components/Block/utils"
import { breakpoints, colors, fontSizes, mixin, sizes } from "@utils/styles"

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
  font-size: ${fontSizes._42};
  line-height: 3.75rem;
  font-weight: 600;

  span {
    font-size: 3.75rem;
  }

  @media (max-width: ${breakpoints.biggest}) {
    font-size: ${fontSizes._32};
    line-height: 2.75rem;

    span {
      font-size: ${fontSizes._42};
    }
  }
`

export const Description = styled.div`
  font-size: ${fontSizes._24};
  line-height: 2rem;
  margin-top: 1.375rem;

  @media (max-width: ${breakpoints.biggest}) {
    font-size: ${fontSizes._20};
    line-height: 1.875rem;
    margin-top: 1rem;
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

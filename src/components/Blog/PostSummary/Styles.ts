import Link from "next/link"
import styled from "styled-components"

import { breakpoints, colors, fontSizes, mixin, sizes } from "@utils/styles"

import Title from "../shared/components/Title"

export const StyledPostSummary = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-areas: "title" "image" "text";
  max-width: 25rem;
  margin: 0 auto;

  @media (min-width: ${breakpoints.large}) {
    grid-template-columns: 20rem 1fr;
    grid-template-areas: "title title" "image text";
    max-width: none;
    margin: 0;
  }

  & + & {
    margin-top: 3rem;
  }
`

export const TitleLink = styled(Link)`
  grid-area: title;
`

export const StyledTitle = styled(Title)`
  font-size: ${fontSizes._24};
`

export const BannerLink = styled(Link)`
  grid-area: image;
  align-self: center;
`

export const BannerImage = styled.div`
  border-radius: 0.5rem;
`

export const Text = styled.div`
  grid-area: text;
`

export const Excerpt = styled.div`
  color: ${colors.textDark};
  margin-bottom: 1rem;
`

export const ReadMore = styled(Link)`
  display: inline-block;
  width: 100%;
  padding: 0.3rem 1.8rem;
  text-align: center;
  font-weight: 500;
  color: ${colors.white};
  background: ${colors.textDark};
  border-radius: ${sizes.borderRadius};

  ${mixin.buttonOver(colors.white, colors.primary)};

  @media (min-width: ${breakpoints.medium}) {
    width: auto;
  }
`

import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

import Title from "../shared/components/Title"

import Link from "@layouts/shared/components/Link"
import { breakpoints, colors, mixin, sizes } from "@utils/styles"

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

export const StyledTitle = styled(Title)`
  grid-area: title;
`

export const BannerImage = styled(GatsbyImage)`
  grid-area: image;
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

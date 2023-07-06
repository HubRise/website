import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

import Title from "../shared/components/Title"

export const StyledPost = styled.div``

export const StyledTitle = styled(Title)`
  margin-bottom: 2.5rem;
`

export const BannerImage = styled(GatsbyImage)`
  display: block;
  margin: 1rem auto;
`

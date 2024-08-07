import Image from "next/image"
import styled from "styled-components"

import { fontSizes } from "@utils/styles"

import Title from "../shared/components/Title"

export const StyledPost = styled.div``

export const StyledTitle = styled(Title)`
  font-size: ${fontSizes._32};
  margin-bottom: 2.5rem;
`

export const BannerImage = styled(Image)`
  margin: 1rem auto;
`

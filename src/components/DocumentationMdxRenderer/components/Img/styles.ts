import Image from "next/image"
import styled from "styled-components"

import { mixin } from "@utils/styles"

export const StyledImage = styled(Image)`
  display: block;
  ${mixin.clickable};
  margin: 0 auto;
`

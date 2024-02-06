import Image from "next/image"
import styled from "styled-components"

import { boxShadows, colors, mixin } from "@utils/styles"

export const StyledImage = styled(Image)`
  display: block;
  ${mixin.clickable};
  outline: thin solid ${colors.borderLightest};
  box-shadow: ${boxShadows.image};
`

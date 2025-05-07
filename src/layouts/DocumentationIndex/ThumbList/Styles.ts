import OriginalLink from "next/link"
import styled from "styled-components"

import Icon from "@components/Icon"
import { breakpoints, colors, fontSizes, sizes } from "@utils/styles"

const gap = "4rem"

export const StyledThumbList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${gap};
`

export const Thumb = styled.div`
  flex: 0 0 100%;
  padding: 0 ${sizes.mobilePadding};
  text-align: left;

  @media (min-width: ${breakpoints.large}) {
    flex: 0 0 calc((100% - ${gap}) / 2);
    padding: 0;
  }
`

export const Link = styled(OriginalLink)`
  display: flex;
  gap: 2rem;
`

export const StyledIcon = styled(Icon)`
  color: ${colors.primary};
`

export const Content = styled.div``

export const Title = styled.div`
  font-size: ${fontSizes._24};
  color: ${colors.textDarkest};
  font-weight: bold;
`

export const Description = styled.div`
  color: ${colors.textMedium};
`

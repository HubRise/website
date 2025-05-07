import Link from "next/link"
import styled from "styled-components"

import { breakpoints, colors, fontSizes, mixin, sizes } from "@utils/styles"

export const StyledPlan = styled.div`
  background-color: ${colors.primary};
  color: ${colors.white};
  font-size: ${fontSizes._18};
  padding: 2.5rem ${sizes.mobilePadding};
  margin: 3rem -${sizes.mobilePadding} 2rem -${sizes.mobilePadding};

  @media (min-width: ${breakpoints.large}) {
    margin: 3rem calc((100% - 100vw) / 2) 2rem calc((100% - 100vw) / 2);
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1rem;
`

export const TitleMain = styled.h4`
  font-weight: 700;
  font-size: ${fontSizes._42};
  margin-bottom: 0;
`

export const TitleSub = styled.div``

export const List = styled.div`
  color: ${colors.white};
`

export const Item = styled.div``

export const Button = styled(Link)`
  display: inline-block;
  margin-top: 1.5rem;
  color: ${colors.primary};
  background-color: ${colors.backgroundLight};
  border: 1px solid transparent;

  ${mixin.button};
  ${mixin.buttonOver(colors.white, colors.textDarkest)};
`

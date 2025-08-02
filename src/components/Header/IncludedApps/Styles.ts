import Link from "next/link"
import styled from "styled-components"

import { StyledIcon } from "@components/Icon/Styles"
import { colors, fontSizes, mixin } from "@utils/styles"

export const AppList = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const App = styled(Link)`
  display: flex;
  gap: 1.25rem;
`

export const AppContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const AppTitle = styled.h4`
  color: ${colors.textDarkest};
  font-weight: 600;
`

export const AppDescription = styled.p`
  font-size: ${fontSizes._14};
`

export const AppLink = styled.span`
  display: flex;
  align-items: center;
  color: ${colors.primary};
  font-weight: 600;
  ${mixin.linkOver(colors.textDarkest)};

  ${StyledIcon} {
    margin-left: 0.5rem;
  }
`

import styled from "styled-components"

import { Container } from "@components/ScreenContainer/Styles"

export const MainContent = styled.div`
  ${Container}:not(:first-child) {
    padding-top: 0;
  }
`

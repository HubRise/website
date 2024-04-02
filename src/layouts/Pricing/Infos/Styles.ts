import styled from "styled-components"

import { fontSizes, breakpoints } from "@utils/styles"

export const StyledInfos = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: ${breakpoints.large}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: ${fontSizes._18};
`

export const Title = styled.div`
  font-weight: bold;
`

export const Text = styled.div`
  flex: 1;
  font-size: ${fontSizes._18};
`

export const Action = styled.div``

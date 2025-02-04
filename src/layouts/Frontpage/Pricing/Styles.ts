import styled from "styled-components"

import { breakpoints, fontSizes } from "@utils/styles"

export const Title = styled.div`
  font-size: ${fontSizes._42};
  line-height: 3.75rem;
  font-weight: 600;

  span {
    font-size: 3.75rem;
  }

  @media (max-width: ${breakpoints.biggest}) {
    font-size: ${fontSizes._32};
    line-height: 2.75rem;

    span {
      font-size: ${fontSizes._42};
    }
  }
`

export const Description = styled.div`
  font-size: ${fontSizes._24};
  line-height: 2rem;
  margin-top: 1.375rem;

  @media (max-width: ${breakpoints.biggest}) {
    font-size: ${fontSizes._20};
    line-height: 1.875rem;
    margin-top: 1rem;
  }
`

export const ButtonWrapper = styled.div`
  & > a {
    margin-left: auto;
    margin-right: auto;
  }
`

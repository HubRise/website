import styled from "styled-components"

import { breakpoints, fontSizes } from "@utils/styles"

export const Title = styled.h2`
  font-size: 1.875rem;
  line-height: 2.75rem;
  font-weight: 600;

  @media (min-width: ${breakpoints.large}) {
    font-size: 2.25rem;
  }

  @media (min-width: ${breakpoints.biggest}) {
    font-size: ${fontSizes._42};
    line-height: 3.75rem;
  }
`

export const TitleHighlight = styled.span`
  font-size: ${fontSizes._42};

  @media (min-width: ${breakpoints.biggest}) {
    span {
      font-size: 3.75rem;
    }
  }
`

export const Description = styled.div`
  margin-top: 1rem;

  @media (min-width: ${breakpoints.biggest}) {
    margin-top: 1.25rem;
  }

  p {
    font-size: ${fontSizes._18};
    line-height: 1.625rem;

    @media (min-width: ${breakpoints.large}) {
      font-size: ${fontSizes._20};
      line-height: 1.875rem;
    }

    @media (min-width: ${breakpoints.biggest}) {
      font-size: ${fontSizes._24};
      line-height: 2rem;
    }
  }
`

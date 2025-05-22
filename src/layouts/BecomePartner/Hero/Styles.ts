import styled from "styled-components"

import { Container, Wrapper } from "@components/PageHero/Styles"
import { breakpoints, mixin } from "@utils/styles"

export const BecomePartnerHero = styled.div`
  ${Wrapper} {
    ${mixin.containerWrapper}
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    row-gap: 3.5rem;
  }

  @media (min-width: ${breakpoints.large}) {
    ${Wrapper} {
      text-align: left;

      & > div {
        flex-basis: 50%;

        h1 {
          max-width: 90%;
        }
      }
    }

    ${Container} {
      padding-left: 0;
      padding-right: 0;
    }
  }
`

import styled from "styled-components"

import { StyledPageHero, Wrapper } from "@components/PageHero/Styles"
import { breakpoints, mixin } from "@utils/styles"

export const CatalogManagerHero = styled.div`
  ${Wrapper} {
    ${mixin.containerWrapper};
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
      flex-wrap: nowrap;
      padding-right: 0;

      & > div {
        &:first-child {
          flex-basis: 45%;
        }

        &:last-child {
          flex-basis: 55%;
        }

        &:last-child img {
          position: relative;
          right: -6rem;
        }

        h1 {
          width: 120%;
        }
      }
    }

    ${StyledPageHero} {
      padding-left: 0;
      padding-right: 0;
    }
  }

  @media (min-width: ${breakpoints.extraLarge}) {
    ${Wrapper} {
      align-items: flex-start;

      & > div {
        &:last-child img {
          right: -9rem;
        }

        h1 {
          margin-top: 4rem;
        }
      }
    }
  }

  @media (min-width: ${breakpoints.biggest}) {
    ${Wrapper} {
      & > div {
        &:first-child {
          flex-basis: 50%;
        }

        &:last-child {
          flex-basis: 50%;
        }

        &:last-child img {
          right: 0;
        }

        h1 {
          width: 100%;
        }
      }
    }
  }
`

import styled, { css } from "styled-components"

import { boxShadows, breakpoints, colors } from "@utils/styles"

import { SidePosition } from "./types"

export const Container = styled.div<{ $side: SidePosition }>`
  background-color: ${colors.white};
  padding: 1rem;
  border-radius: 0.875rem;
  box-shadow: ${boxShadows.card};

  @media (min-width: ${breakpoints.medium}) {
    padding: 1.5rem;
  }

  @media (min-width: ${breakpoints.large}) {
    padding: 3.5rem 0;
    max-width: 90%;
    width: -moz-available;
    width: -webkit-fill-available;
    width: fill-available;

    ${({ $side }) =>
      $side === "left"
        ? css`
            margin-right: auto;
            border-radius: 0px 0.875rem 0.875rem 0px;

            ${Content} {
              margin-left: auto;
            }
          `
        : css`
            margin-left: auto;
            border-radius: 0.875rem 0px 0px 0.875rem;
          `}
  }
`

export const MainContant = styled.div`
  grid-area: main;
`

export const SecondaryContent = styled.div`
  grid-area: secondary;
`

export const Content = styled.div<{ $secondaryPosition: SidePosition }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${MainContant} {
    order: 2;
  }

  ${SecondaryContent} {
    order: 1;
  }

  @media (min-width: ${breakpoints.large}) {
    display: grid;
    gap: 4.5rem;
    max-width: 100rem;
    align-items: center;
    padding: 0 3rem;

    ${({ $secondaryPosition }) =>
      !$secondaryPosition &&
      css`
        grid-template-columns: 1fr;
        grid-template-areas: "main";
      `}

    ${({ $secondaryPosition }) =>
      $secondaryPosition && $secondaryPosition === "left"
        ? css`
            grid-template-columns: 1fr 1fr;
            grid-template-areas: "secondary main";
          `
        : css`
            grid-template-columns: 1fr 1fr;
            grid-template-areas: "main secondary";
          `}
  }

  @media (min-width: ${breakpoints.biggest}) {
    padding: 0 5rem;
  }
`

import styled, { css } from "styled-components"

import { colors } from "@utils/styles"

import { SidePosition } from "./types"

export const Container = styled.div<{ $side: SidePosition }>`
  margin: 3.875rem 0;
  padding: 3.875rem 0;
  max-width: 90%;
  background-color: ${colors.white};
  box-shadow:
    -4.61656px 43.8573px 17.3121px rgba(181, 181, 181, 0.01),
    -2.30828px 24.2369px 15.0038px rgba(181, 181, 181, 0.05),
    -1.15414px 10.3873px 10.3873px rgba(181, 181, 181, 0.09),
    0px 2.30828px 5.7707px rgba(181, 181, 181, 0.1);

  ${({ $side }) =>
    $side === "left"
      ? css`
          margin-right: auto;
          border-radius: 0px 14px 14px 0px;

          ${Content} {
            margin-left: auto;
          }
        `
      : css`
          margin-left: auto;
          border-radius: 14px 0px 0px 14px;
        `}
`

export const Content = styled.div<{ $secondaryPosition: SidePosition }>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "main";
  gap: 4.5rem;
  padding: 0 3rem;
  max-width: 102rem;
  align-items: center;

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
`

export const MainContant = styled.div`
  grid-area: main;
`

export const SecondaryContent = styled.div`
  grid-area: secondary;
`

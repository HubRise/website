import styled from "styled-components"

import { colors } from "@utils/styles"

export const Summary = styled.div`
  overflow: auto;
`

export const Table = styled.table`
  color: ${colors.lightGray};
  background-color: #fafafa;
`

export const Row = styled.tr`
  vertical-align: middle;
  height: 2rem;

  &:nth-child(even) {
    background: none;
  }
`

export const Url = styled.span`
  color: ${colors.primary};
  font-weight: 500;
`

export const Extra = styled.span`
  font-style: italic;
`

export const Cell = styled.td`
  color: ${colors.gray};

  &:first-of-type {
    width: 33%;
  }
`

export const CellOuter = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

export const CellInner = styled.div`
  white-space: nowrap;
`

import styled from "styled-components"

import { colors } from "@utils/styles"

export const Table = styled.table`
  border-collapse: collapse;
  margin-bottom: 1.5rem;
  width: 100%;
  background-color: ${colors.backgroundLightest};
  border: 1px solid ${colors.borderLighter};
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
  padding: 0.5rem 0.625rem 0.625rem;

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

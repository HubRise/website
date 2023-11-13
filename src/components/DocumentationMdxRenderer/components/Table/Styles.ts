import styled from "styled-components"

import { colors } from "@utils/styles"

export const StyledTable = styled.table`
  border-collapse: collapse;
  border-radius: 0;
  margin-bottom: 1rem;
  width: 100%;

  thead,
  tbody {
    border: 1px solid ${colors.borderLighter};
  }

  thead {
    color: ${colors.textDarkest};
    background-color: ${colors.backgroundLightest};
  }

  th {
    font-weight: 700;
    padding: 0.5rem 0.625rem 0.625rem;
    text-align: left;
  }

  tbody {
    background: none;
    color: ${colors.textDark};
  }

  tr {
    border: none;

    &:nth-child(2n) {
      background-color: ${colors.backgroundLight};
      border-bottom: 0;
    }
  }

  td {
    padding: 0.6rem;
  }
`

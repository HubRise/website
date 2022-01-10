import * as React from "react"

import { TableWrapper, StyledTable } from "./Styles"

const Table: React.FC = (tableProps) => (
  <TableWrapper>
    <StyledTable {...tableProps} />
  </TableWrapper>
)

export default Table

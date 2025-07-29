"use client"

import * as React from "react"

import { Row, Cell, CellInner, CellOuter, Extra, Url, Table } from "./Styles"

interface CallSummaryTableProps {
  endpoint: string
  shortEndpoint?: string
  accessLevel: string
  paginated?: boolean
}

const CallSummaryTable = ({ endpoint, shortEndpoint, accessLevel, paginated }: CallSummaryTableProps): JSX.Element => {
  const [url, extra] = shortEndpoint ? shortEndpoint.split(`(`) : []

  return (
    <Table>
      <tbody>
        <Row>
          <TableCell>Endpoint:</TableCell>
          <TableCell>
            <Url>{endpoint}</Url>
          </TableCell>
        </Row>
        {shortEndpoint && (
          <Row>
            <TableCell>Short endpoint:</TableCell>
            <TableCell>
              <Url>{url!}</Url>
              {extra! && <Extra>{`(${extra!}`}</Extra>}
            </TableCell>
          </Row>
        )}
        <Row>
          <TableCell>Access level:</TableCell>
          <TableCell>{accessLevel}</TableCell>
        </Row>
        {paginated && (
          <Row>
            <TableCell>Paginated:</TableCell>
            <TableCell>
              Yes (see <a href="/developers/api/general-concepts#pagination">pagination</a>)
            </TableCell>
          </Row>
        )}
      </tbody>
    </Table>
  )
}

export default CallSummaryTable

const TableCell = ({ children }: { children: React.ReactNode }) => {
  return (
    <Cell>
      <CellOuter>
        <CellInner>{children}</CellInner>
      </CellOuter>
    </Cell>
  )
}

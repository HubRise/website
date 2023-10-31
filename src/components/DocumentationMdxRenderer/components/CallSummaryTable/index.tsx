"use client"

import * as React from "react"

import { Row, Cell, CellInner, CellOuter, Extra, Url, Table } from "./Styles"

interface CallSummaryTableProps {
  endpoint: string
  shortEndpoint?: string
  accessLevel: string
}

const CallSummaryTable = ({ endpoint, shortEndpoint, accessLevel }: CallSummaryTableProps): JSX.Element => {
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

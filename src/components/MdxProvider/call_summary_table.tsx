import * as React from 'react'

interface CallSummaryTableProps {
  endpoint: string
  shortEndpoint?: string
  accessLevel: string
}

const CallSummaryTable = ({
  endpoint,
  shortEndpoint,
  accessLevel
}: CallSummaryTableProps): JSX.Element => {
  let url: string
  let extra: string

  if (shortEndpoint) {
    ;[url, extra] = shortEndpoint.split(`(`)
  }

  return (
    <div className="call-summary">
      <table className="call-summary__table">
        <tbody>
          <tr className="call-summary__row">
            <TableCell>Endpoint:</TableCell>
            <TableCell>
              <span className="call-summary__url">{endpoint}</span>
            </TableCell>
          </tr>
          {shortEndpoint && (
            <tr className="call-summary__row">
              <TableCell>Short endpoint:</TableCell>
              <TableCell>
                <span className="call-summary__url">{url!}</span>
                {extra! && (
                  <span className="call-summary__extra">{`(${extra!}`}</span>
                )}
              </TableCell>
            </tr>
          )}
          <tr className="call-summary__row">
            <TableCell>Access level:</TableCell>
            <TableCell>{accessLevel}</TableCell>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CallSummaryTable

const TableCell: React.FC = ({ children }) => {
  return (
    <td className="call-summary__cell">
      <div className="call-summary__cell-wrapper--outer">
        <div className="call-summary__cell-wrapper--inner">{children}</div>
      </div>
    </td>
  )
}

import React from 'react'
import PropTypes from 'prop-types'

const TableCell = ({ children }) => {
  return (
    <td>
      <div className="call-summary__cell-wrapper--outer">
        <div className="call-summary__cell-wrapper--inner">{children}</div>
      </div>
    </td>
  )
}

const CallSummaryTable = ({ endpoint, shortEndpoint, accessLevel }) => {
  let url
  let extra

  if (shortEndpoint) {
    const parts = shortEndpoint.split(`(`)
    url = parts[0]
    extra = parts[1]
  }

  return (
    <table className="call-summary">
      <tbody>
        <tr>
          <TableCell>Endpoint:</TableCell>
          <TableCell>
            <span className="call-summary__url">{endpoint}</span>
          </TableCell>
        </tr>
        {shortEndpoint && (
          <tr>
            <TableCell>Short endpoint:</TableCell>
            <TableCell>
              <span className="call-summary__url">{url}</span>
              {extra && (
                <span className="call-summary__extra">{`(${extra}`}</span>
              )}
            </TableCell>
          </tr>
        )}
        <tr>
          <TableCell>Access level:</TableCell>
          <TableCell>{accessLevel}</TableCell>
        </tr>
      </tbody>
    </table>
  )
}

CallSummaryTable.propTypes = {
  endpoint: PropTypes.string.isRequired,
  shortEndpoint: PropTypes.string,
  accessLevel: PropTypes.string.isRequired
}

CallSummaryTable.defaultProps = {
  shortEndpoint: null
}

export default CallSummaryTable

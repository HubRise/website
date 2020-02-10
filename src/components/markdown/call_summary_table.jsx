import React from 'react'
import PropTypes from 'prop-types'

const TableCell = ({ children }) => {
  return (
    <td className="call-summary__cell">
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
                <span className="call-summary__url">{url}</span>
                {extra && (
                  <span className="call-summary__extra">{`(${extra}`}</span>
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

CallSummaryTable.propTypes = {
  endpoint: PropTypes.string.isRequired,
  shortEndpoint: PropTypes.string,
  accessLevel: PropTypes.string.isRequired
}

CallSummaryTable.defaultProps = {
  shortEndpoint: null
}

export default CallSummaryTable

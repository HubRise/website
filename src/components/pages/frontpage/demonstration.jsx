import React from 'react'
import PropTypes from 'prop-types'

export const Demonstration = ({ videoFile, title, unsupported }) => {
  return (
    <section className="section">
      <div
        className={`
        section__in
        section__in_padding
        section__in_reverse
      `}
      >
        <h3 className="section__title">{title}</h3>
        <video className="index-video" width="400" controls>
          <source src={videoFile.publicURL} />
          {unsupported}
        </video>
      </div>
    </section>
  )
}

Demonstration.propTypes = {
  videoFile: PropTypes.shape({
    publicURL: PropTypes.string.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired,
  unsupported: PropTypes.string.isRequired
}

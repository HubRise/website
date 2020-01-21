import React from 'react'
import PropTypes from 'prop-types'

import Field from './field'

import { generateKey } from '../../utils'

const Row = ({ fields, formikProps }) => {
  const isSingleField = fields.length === 1
  return (
    <div className={`form__block${isSingleField ? '' : '-row'}`}>
      {fields.map((fieldProps, idx) => {
        const key = generateKey(fieldProps.id, idx)
        return isSingleField ? (
          <Field key={key} fieldProps={fieldProps} formikProps={formikProps} />
        ) : (
          <div key={key} className="form__block form__block_medium">
            <Field fieldProps={fieldProps} formikProps={formikProps} />
          </div>
        )
      })}
    </div>
  )
}

Row.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string,
      component: PropTypes.string.isRequired
    })
  ).isRequired,
  formikProps: PropTypes.object.isRequired
}

export default Row

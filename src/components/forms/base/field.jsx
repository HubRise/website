import React from 'react'
import PropTypes from 'prop-types'
import { Field, ErrorMessage } from 'formik'

const CompleteField = ({ fieldProps, formikProps }) => {
  const { name, component } = fieldProps
  const { touched, errors } = formikProps

  return (
    <div
      className={`${touched[name] ? (errors[name] ? 'error' : 'valid') : ''}`}
    >
      <label htmlFor={name} />
      <Field
        className={`form__${component}`}
        aria-invalid={touched[name] ? !!errors[name] : null}
        {...fieldProps}
      />
      <ErrorMessage
        name={name}
        render={(msg) => <p className="error__message">{msg}</p>}
      />
    </div>
  )
}

CompleteField.propTypes = {
  fieldProps: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    component: PropTypes.string.isRequired
  }).isRequired,
  formikProps: PropTypes.object.isRequired
}

export default CompleteField

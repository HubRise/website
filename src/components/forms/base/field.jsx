import React from 'react'
import PropTypes from 'prop-types'
import { Field, ErrorMessage } from 'formik'

const CompleteField = ({ fieldProps, formikProps }) => {
  const { name, component } = fieldProps
  const { touched, errors, submitCount } = formikProps

  return (
    <div
      className={`${
        touched[name] && submitCount > 0
          ? errors[name]
            ? 'error'
            : 'valid'
          : ''
      }`}
    >
      <label htmlFor={name} />
      <Field
        className={`form__${component}`}
        aria-invalid={touched[name] && submitCount > 0 ? !!errors[name] : null}
        {...fieldProps}
      />
      <ErrorMessage
        name={name}
        render={(msg) =>
          msg && submitCount > 0 ? (
            <p className="error__message">{msg}</p>
          ) : null
        }
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

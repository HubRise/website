import * as React from 'react'
import { Field as FormikField, ErrorMessage } from 'formik'

interface FieldProps {
  fieldProps: IField
  formikProps: any
}

export interface IField {
  id: string
  name: string
  type?: string
  component: string
}

const Field = ({ fieldProps, formikProps }: FieldProps): JSX.Element => {
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
      <FormikField
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

export default Field

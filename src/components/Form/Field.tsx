import { ErrorMessage } from "formik"

import { Error, StyledInput, FieldStatus, StyledField } from "./Styles"

interface FieldProps {
  fieldProps: IField
  formikProps: any
}

export interface IField {
  name: string
  component: "input" | "textarea"
  placeholder: string
}

const Field = ({ fieldProps, formikProps }: FieldProps): JSX.Element => {
  const { name, component, placeholder } = fieldProps
  const { touched, errors, submitCount } = formikProps

  const isSubmitted = touched[name] && submitCount > 0
  const status: FieldStatus = isSubmitted ? (errors[name] ? "error" : "valid") : "unsubmitted"

  const props = { $status: status, name, placeholder }
  const field = component === "input" ? <StyledInput.input {...props} /> : <StyledInput.textarea {...props} />

  return (
    <StyledField>
      {field}
      {status === "error" && <ErrorMessage name={name} render={(msg: string) => <Error>{msg}</Error>} />}
    </StyledField>
  )
}

export default Field

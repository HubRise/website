import * as React from "react"

import Row from "./Row"
import { StyledForm, Button } from "./Styles"

interface FormProps {
  buttonText: string
  rows: Array<any>
  formikProps: any
}

const Form = ({ buttonText, rows, formikProps }: FormProps): JSX.Element => {
  return (
    <StyledForm>
      {rows.map(({ fields }, index) => (
        <Row key={index} fields={fields} formikProps={formikProps} />
      ))}

      <Button type="submit" name="submit">
        {buttonText}
      </Button>
    </StyledForm>
  )
}

export default Form

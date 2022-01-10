import * as React from "react"

import Field, { IField } from "./Field"
import { StyledRow, Block } from "./Styles"

interface RowProps {
  fields: Array<IField>
  formikProps: any
}

const Row = ({ fields, formikProps }: RowProps): JSX.Element => {
  if (fields.length === 1) {
    return (
      <StyledRow>
        <Block>
          <Field fieldProps={fields[0]} formikProps={formikProps} />
        </Block>
      </StyledRow>
    )
  } else {
    return (
      <StyledRow>
        {fields.map((fieldProps, index) => {
          return (
            <Block key={index} $isMedium={true}>
              <Field fieldProps={fieldProps} formikProps={formikProps} />
            </Block>
          )
        })}
      </StyledRow>
    )
  }
}

export default Row

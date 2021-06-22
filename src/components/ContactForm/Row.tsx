import * as React from 'react'

import Field, { IField } from './Field'
import { generateKey } from '@utils/misc'

interface RowProps {
  fields: Array<IField>
  formikProps: any
}

const Row = ({ fields, formikProps }: RowProps): JSX.Element => {
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

export default Row

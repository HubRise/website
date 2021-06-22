import * as React from 'react'
import { Form as FormikForm } from 'formik'
import { TFunction } from 'i18next'

import Row from './Row'
import { generateKey } from '@utils/misc'

interface FormProps {
  buttonClasses?: Array<string>
  buttonText: string
  formProps?: any
  structure: Structure
  t: TFunction
  formikProps: any
}

interface Structure {
  formId: string
  sections: Array<any>
}

const Form = ({
  buttonClasses = [],
  buttonText,
  formProps = { classNames: null },
  structure,
  t,
  formikProps
}: FormProps): JSX.Element => {
  const { classNames: formClasses, ...otherFormProps } = formProps

  return (
    <FormikForm
      className={`form ${formClasses ? formClasses.join(' ') : ''}`}
      {...otherFormProps}
    >
      {defineContent(structure, t).map(({ subtitle, rows }, idx) => (
        <section key={generateKey(subtitle, idx)}>
          {subtitle && <h6 className="form__sub-title">{subtitle}</h6>}
          {rows.map(({ fields }) => (
            <Row
              key={generateKey(`${subtitle}${fields[0].id}`, idx)}
              fields={fields}
              formikProps={formikProps}
            />
          ))}
        </section>
      ))}
      <button
        className={`form__button ${
          buttonClasses ? buttonClasses.join(' ') : ''
        }`}
        type="submit"
        name="submit"
      >
        {buttonText || t(`forms.${structure.formId}.button`)}
      </button>
    </FormikForm>
  )
}

export default Form

function defineContent({ formId, sections }: Structure, t: TFunction) {
  return sections.map((section) => {
    if (section.subtitle_key) {
      section.subtitle = t(`forms.${formId}.${section.subtitle_key}`)
    }

    section.rows.forEach((row) => {
      row.fields.forEach((field) => {
        field.placeholder = t(`forms.placeholders.${field.id}`)
      })
    })

    return section
  })
}

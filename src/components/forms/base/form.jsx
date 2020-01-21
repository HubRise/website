import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'formik'

import Row from './row'

import { generateKey } from '../../utils'

function defineContent({ formId, sections }, t) {
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

const CompleteForm = ({
  buttonClasses,
  buttonText,
  formProps,
  structure,
  t,
  formikProps
}) => {
  const { classNames: formClasses, ...otherFormProps } = formProps

  return (
    <Form
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
    </Form>
  )
}

CompleteForm.propTypes = {
  structure: PropTypes.shape({
    formId: PropTypes.string,
    sections: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
  formProps: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string])
  ),
  buttonClasses: PropTypes.arrayOf(PropTypes.string),
  t: PropTypes.func.isRequired,
  formikProps: PropTypes.object.isRequired
}

CompleteForm.defaultProps = {
  formProps: { classNames: null },
  buttonClasses: []
}

export default CompleteForm

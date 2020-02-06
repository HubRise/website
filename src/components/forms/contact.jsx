import React from 'react'
import { withTranslation } from 'react-i18next'
import { withFormik } from 'formik'
import * as yup from 'yup'

import Form from './base/form'

const structure = {
  formId: `contact`,
  sections: [
    {
      rows: [
        {
          fields: [
            {
              id: `name`,
              name: `name`,
              type: `text`,
              component: `input`
            },
            {
              id: `email`,
              name: `email`,
              type: `email`,
              component: `input`
            }
          ]
        },
        {
          fields: [
            {
              id: `message`,
              name: `message`,
              component: `textarea`
            }
          ]
        }
      ]
    }
  ]
}
const Contact = ({ t, _i18n, ...formikProps }) => {
  return (
    <Form
      buttonClasses={[`form__button_full-width`, `form__button_modal`]}
      formProps={{
        id: `contact-us__form`,
        classNames: [`form form_modal`]
      }}
      structure={structure}
      t={t}
      formikProps={formikProps}
    />
  )
}

const createContactSchema = (t) => {
  const nameMinLength = 2
  const messageMinLength = 10

  return yup.object().shape({
    name: yup
      .string()
      .min(nameMinLength, t(`forms.validation.min`, { length: nameMinLength })),
    email: yup
      .string()
      .email(t(`forms.validation.email`))
      .required(t(`forms.validation.email_required`)),
    message: yup
      .string()
      .min(
        messageMinLength,
        t(`forms.validation.message_min`, { length: messageMinLength })
      )
      .required(t(`forms.validation.message_required`))
  })
}

const ContactEnhanced = withFormik({
  mapPropsToValues: () => ({
    name: ``,
    email: ``,
    message: ``
  }),
  validationSchema: ({ t }) => createContactSchema(t),
  handleSubmit: (values, { resetForm }) => {
    // window.alert(`Let's pretend its sent!`)
    fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      mode: 'cors',
      headers: {
        Authorization: `Bearer ${process.env.SEND_GRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [
              // { email: 'contact@hubrise.com' }
              { email: 'ivan.saranchenkov@gmail.com' }
            ]
          }
        ],
        from: { email: values.email },
        subject: 'Contact message',
        content: [
          {
            type: 'text/html',
            value: `<html><head></head><div><h2>${values.name}</h2><p>${values.message}</p></body></html>`
          }
        ]
      })
    }).catch(console.error)
    resetForm()
  }
})(Contact)

export default withTranslation()(ContactEnhanced)

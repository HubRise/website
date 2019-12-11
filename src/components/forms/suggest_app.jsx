import React from 'react'
import { withTranslation } from 'react-i18next'
import { withFormik } from 'formik'
import * as yup from 'yup'

import Form from './base/form'

const structure = {
  formId: `suggest_app`,
  sections: [
    {
      subtitle_key: `subtitles.contact`,
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
              id: `company`,
              name: `company`,
              type: `text`,
              component: `input`
            }
          ]
        },
        {
          fields: [
            {
              id: `email`,
              name: `email`,
              type: `email`,
              component: `input`
            },
            {
              id: `phone`,
              name: `phone`,
              type: `text`,
              component: `input`
            }
          ]
        }
      ]
    },
    {
      subtitle_key: `subtitles.app`,
      rows: [
        {
          fields: [
            {
              id: `app_name`,
              name: `app_name`,
              type: `text`,
              component: `input`
            },
            {
              id: `app_site`,
              name: `app_site`,
              type: `text`,
              component: `input`
            }
          ]
        },
        {
          fields: [
            {
              id: `app_contact`,
              name: `app_contact`,
              component: `textarea`
            }
          ]
        },
        {
          fields: [
            {
              id: `app_extra`,
              name: `app_extra`,
              component: `textarea`
            }
          ]
        }
      ]
    }
  ]
}

const SuggestApp = ({ t, _i18n, ...formikProps }) => {
  return (
    <Form
      buttonClasses={[`form__button_full-width`, `form__button_modal`]}
      formProps={{ id: `suggest-app__form`, classNames: [`form_modal`] }}
      structure={structure}
      t={t}
      formikProps={formikProps}
    />
  )
}

const createSuggestAppSchema = (t) => {
  const nameMinLength = 2
  const appNameMinLength = 2
  const appContactMinLength = 8

  return yup.object().shape({
    name: yup
      .string()
      .min(nameMinLength, t(`forms.validation.min`, { length: nameMinLength }))
      .required(t(`forms.validation.name_required`)),
    company: yup.string(),
    email: yup
      .string()
      .email(t(`forms.validation.email`))
      .required(t(`forms.validation.email_required`)),
    phone: yup.string(),
    app_name: yup
      .string()
      .min(appNameMinLength, t(`forms.validation.min`, { length: appNameMinLength }))
      .required(t(`forms.validation.app_name_required`)),
    app_site: yup.string(),
    app_contact: yup
      .string()
      .min(appContactMinLength, t(`forms.validation.min`, { length: appContactMinLength }))
      .required(t(`forms.validation.app_contact_required`)),
    app_extra: yup.string()
  })
}

const SuggestAppEnhanced = withFormik({
  mapPropsToValues: () => ({
    name: ``,
    company: ``,
    email: ``,
    phone: ``,
    app_name: ``,
    app_site: ``,
    app_contact: ``,
    app_extra: ``
  }),
  validationSchema: ({ t }) => createSuggestAppSchema(t),
  handleSubmit: (_values, { resetForm }) => {
    window.alert(`Let's pretend its sent!`)
    resetForm()
  }
})(SuggestApp)

export default withTranslation()(SuggestAppEnhanced)

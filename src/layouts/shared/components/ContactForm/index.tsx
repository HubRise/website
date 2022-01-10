import * as React from "react"
import { useTranslation } from "react-i18next"
import { Formik } from "formik"

import { useToast } from "../Toast"

import { yupSchema, encodeFormData, rows } from "./helpers"

import Form from "@layouts/shared/components/Form"
import { useLayoutContext } from "@layouts/shared/components/LayoutContext"

interface ContactFormProps {
  recaptchaSiteKey?: string
  contactMessageUrl: string
}

const ContactForm = ({ recaptchaSiteKey, contactMessageUrl }: ContactFormProps): JSX.Element => {
  const { forms } = useLayoutContext()
  const addToast = useToast()
  const { t } = useTranslation()

  function onSubmit(values, { setSubmitting }) {
    ;(window as any).grecaptcha.execute(recaptchaSiteKey, { action: "send_email" }).then((token) => {
      // Use application/x-www-form-urlencoded content type (instead of application/json)
      // to skip CORS preflight check, which has not been implemented on the server side.
      return fetch(contactMessageUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: encodeFormData({
          name: values.name,
          email: values.email,
          message: values.message,
          recaptchaResponse: token,
        }),
      })
        .then((response) => {
          if (response.ok) {
            addToast({
              variant: "success",
              title: t("misc.success"),
              text: t("misc.messages.email_send_success"),
            })
            forms.contact.toggle()
            console.log("Message sent successfully")
          } else {
            throw new Error(`${response.statusText}`)
          }
        })
        .catch((error) => {
          addToast({
            variant: "error",
            title: t("misc.failure"),
            text: t("misc.messages.email_send_failure"),
          })
          console.error(error)
          console.error("Message sending failed")
          setSubmitting(false)
        })
    })
  }

  return (
    <Formik
      initialValues={{
        name: ``,
        email: ``,
        message: ``,
      }}
      validationSchema={yupSchema(t)}
      onSubmit={onSubmit}
    >
      {(formikProps) => <Form buttonText={t(`forms.contact.button`)} rows={rows(t)} formikProps={formikProps} />}
    </Formik>
  )
}

export default ContactForm

import axios from "axios"
import { Formik } from "formik"
import type { FormikValues } from "formik"
import * as React from "react"

import Form from "@components/Form"
import { useLayoutContext } from "@components/LayoutContext"
import { useToast } from "@components/Toast"
import useTranslation from "@hooks/client/useTranslation"

import { yupSchema, rows } from "./helpers"

const ContactForm = (): JSX.Element => {
  const { forms } = useLayoutContext()
  const addToast = useToast()
  const { t } = useTranslation()

  async function onSubmit(values: FormikValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) {
    // AM 31/3/2025 - Disable recaptcha verification, due to time out errors on the client side
    // See https://docs.google.com/document/d/1x5BU3Ss8N7pDZA4cbKsNRZwIgd-6g7SgTbWEJ62p-eY/edit?tab=t.0
    // const recaptchaKeyId = process.env.NEXT_PUBLIC_RECAPTCHA_KEY_ID
    // const token = (await (window as any).grecaptcha.enterprise.execute(recaptchaKeyId)) as string
    const token = null // Remove this line when re-enabling recaptcha

    const { name, email, message } = values
    const response = await axios.post("/api/contact_us", { name, email, message, token })

    if (response.status === 200) {
      addToast({
        variant: "success",
        title: t("misc.success"),
        text: t("misc.messages.email_send_success"),
      })
      forms.contact.toggle()
      console.log("Message sent successfully")
    } else {
      addToast({
        variant: "error",
        title: t("misc.failure"),
        text: t("misc.messages.email_send_failure"),
      })
      console.error(response.statusText)
      console.error("Message sending failed")
      setSubmitting(false)
    }
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

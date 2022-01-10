import * as yup from "yup"
import { TFunction } from "i18next"

export const rows = (t: TFunction): Array<any> => [
  {
    fields: [
      {
        name: `name`,
        component: `input`,
        placeholder: t("forms.contact.placeholders.name"),
      },
      {
        name: `email`,
        component: `input`,
        placeholder: t("forms.contact.placeholders.email"),
      },
    ],
  },
  {
    fields: [
      {
        name: `message`,
        component: `textarea`,
        placeholder: t("forms.contact.placeholders.message"),
      },
    ],
  },
]

export const yupSchema = (t: TFunction): any => {
  const nameMinLength = 2
  const messageMinLength = 10

  return yup.object().shape({
    name: yup
      .string()
      .min(nameMinLength, t(`forms.validation.min`, { length: nameMinLength }))
      .required(t(`forms.validation.name_required`)),
    email: yup.string().email(t(`forms.validation.email`)).required(t(`forms.validation.email_required`)),
    message: yup
      .string()
      .min(messageMinLength, t(`forms.validation.message_min`, { length: messageMinLength }))
      .required(t(`forms.validation.message_required`)),
  })
}

export const encodeFormData = (params: Record<string, string>): string => {
  return Object.keys(params)
    .map((key) => {
      return encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
    })
    .join("&")
}

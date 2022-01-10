import * as React from "react"
import { useTranslation } from "react-i18next"

import { Styled404, Image, Link, Title } from "./Styles"

import Image404 from "@assets/images/404.png"
import SEO, { Meta } from "@layouts/shared/components/Seo"

const NotFound = (): JSX.Element => {
  const { t } = useTranslation()
  const meta: Meta = { title: t("layout.404.meta.title") }

  return (
    <>
      <SEO meta={meta} />

      <Styled404>
        <Title>{t("layout.404.title")}</Title>
        <Link to="/">{t("layout.404.text_link")}</Link>
        <Image alt="404 not found" src={Image404} />
      </Styled404>
    </>
  )
}

export default NotFound

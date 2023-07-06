import * as React from "react"
import { useTranslation } from "react-i18next"

import { Image } from "./Styles"

import Image404 from "@assets/images/404.png"
import SEO, { Meta } from "@layouts/shared/components/Seo"
import Block from "@layouts/shared/components/Block"
import { BlockContent, BlockContentLink } from "@layouts/shared/components/BlockContent"

const NotFound = (): JSX.Element => {
  const { t } = useTranslation()
  const meta: Meta = { title: t("layout.404.meta.title") }

  return (
    <>
      <SEO meta={meta} />

      <Block backgroundColor="white" title={t("layout.404.title")}>
        <BlockContent>
          <p>{t("layout.404.content.text_before_link")}</p>

          <p>
            <BlockContentLink to="/">{t("layout.404.content.text_link")}</BlockContentLink>
            {t("layout.404.content.text_after_link")}
          </p>

          <p>{t("layout.404.content.signature")}</p>

          <Image alt="404 not found" src={Image404} />
        </BlockContent>
      </Block>
    </>
  )
}

export default NotFound

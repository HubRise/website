"use client"

import Block from "@components/Block"
import { BlockContent, BlockContentLink } from "@components/BlockContent"
import useClientRoutes from "@hooks/client/useClientRoutes"
import useTranslation from "@hooks/client/useTranslation"

import { StyledImage } from "./Styles"

const PageNotFound = (): JSX.Element => {
  const { t } = useTranslation()
  const { home } = useClientRoutes()

  return (
    <>
      <Block backgroundColor="white" title={t("layout.404.title")}>
        <BlockContent>
          <p>{t("layout.404.content.text_before_link")}</p>

          <p>
            <BlockContentLink href={home}>{t("layout.404.content.text_link")}</BlockContentLink>
            {t("layout.404.content.text_after_link")}
          </p>

          <p>{t("layout.404.content.signature")}</p>

          <StyledImage alt="404 not found" src="/images/404.png" width={920} height={467} />
        </BlockContent>
      </Block>
    </>
  )
}

export default PageNotFound

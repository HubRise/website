"use client"

import Block from "@components/Block"
import useClientRoutes from "@hooks/client/useClientRoutes"
import useTranslation from "@hooks/client/useTranslation"
import { text } from "@utils/misc"

import { Content, ContentLink, StyledImage } from "./Styles"

const PageNotFound = (): JSX.Element => {
  const { t } = useTranslation()
  const { home } = useClientRoutes()

  return (
    <>
      <Block backgroundColor="white" title={t("layout.404.title")}>
        <Content>
          <p>{text(t("layout.404.content.text_before_link"))}</p>

          <p>
            <ContentLink href={home}>{t("layout.404.content.text_link")}</ContentLink>{" "}
            {text(t("layout.404.content.text_after_link"))}
          </p>

          <p>{text(t("layout.404.content.signature"))}</p>

          <StyledImage alt="404 not found" src="/images/404.png" width={920} height={467} />
        </Content>
      </Block>
    </>
  )
}

export default PageNotFound

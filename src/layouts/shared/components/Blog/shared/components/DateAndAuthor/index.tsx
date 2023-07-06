import * as React from "react"
import { useTranslation } from "react-i18next"

import { Container, StyledDate } from "./Styles"

import { BlogNode } from "@layouts/shared/components/Blog/shared/interface"

const DateAndAuthor = ({ frontmatter }: { frontmatter: BlogNode["frontmatter"] }): JSX.Element => {
  const { t } = useTranslation()

  const dateAsString = new Date(frontmatter.date).toLocaleDateString("en-GB")

  return (
    <Container>
      {t("misc.posted_on")} <StyledDate>{dateAsString}</StyledDate> {t("misc.by")} {frontmatter.author}
    </Container>
  )
}

export default DateAndAuthor

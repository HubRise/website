import * as React from "react"
import { useTranslation } from "react-i18next"

import { BlogNode } from "./interface"
import { Title, Header, DateValue, Excerpt, ReadMore, StyledPost } from "./Styles"

import DocumentationRenderer from "@layouts/shared/components/DocumentationRenderer"

interface PostProps {
  mdxNode: BlogNode
  showMore?: boolean
  showBody?: boolean
}

const Post = ({ mdxNode, showMore, showBody }: PostProps): JSX.Element => {
  const { t } = useTranslation()
  const { frontmatter, fields, body } = mdxNode

  const dateAsString = new Date(frontmatter.date).toLocaleDateString()

  return (
    <StyledPost>
      <Title>{frontmatter.title}</Title>

      <Header>
        {t("misc.posted_on")} <DateValue>{dateAsString}</DateValue> {t("misc.by")} {frontmatter.author}
      </Header>

      {showMore && (
        <>
          <Excerpt>{frontmatter.excerpt}</Excerpt>
          <ReadMore to={fields.path} addLocalePrefix={false}>
            {t("misc.read_more")}
          </ReadMore>
        </>
      )}

      {showBody && body && <DocumentationRenderer body={body} />}
    </StyledPost>
  )
}

export default Post

export type { BlogNode } from "./interface"

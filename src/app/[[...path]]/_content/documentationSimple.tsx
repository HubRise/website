import { renderDocumentationMdx } from "@components/DocumentationMdxRenderer"
import DocumentationSimple from "@layouts/DocumentationSimple"
import { ContentDirName } from "@utils/files"
import { Router } from "@utils/router"
import { Route, RouteName } from "@utils/router/types"

const documentationSimple = async (
  route: Route<RouteName, "documentation-simple">,
  router: Router,
): Promise<JSX.Element> => {
  const { language, context } = route
  const { frontMatter, content } = context

  const contentDirName: ContentDirName = `/${language}`
  const { mdxElement, contentImages } = await renderDocumentationMdx(
    content,
    contentDirName,
    router,
    language,
    route.href,
  )

  return (
    <DocumentationSimple title={frontMatter.title} contentImages={contentImages}>
      {mdxElement}
    </DocumentationSimple>
  )
}

export default documentationSimple

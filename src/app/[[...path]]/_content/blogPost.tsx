import { renderDocumentationMdx } from "@components/DocumentationMdxRenderer"
import BlogPost from "@layouts/BlogPost"
import contentImage from "@utils/contentImage"
import router from "@utils/router"
import { Route, RouteName } from "@utils/router/types"

const blogPost = async (route: Route<RouteName, "blog-post">): Promise<JSX.Element> => {
  const { language, context } = route
  const { mdFile, archives } = context
  const { mdxElement, contentImages } = await renderDocumentationMdx(mdFile.content, mdFile.contentDirName)

  const blogIndexUri = (await router()).getHref("blog", language)

  const bannerImage = mdFile.bannerFileName
    ? await contentImage(mdFile.contentDirName, mdFile.bannerFileName)
    : undefined

  return (
    <BlogPost
      blogIndexUri={blogIndexUri}
      mdFile={mdFile}
      bannerImage={bannerImage}
      archives={archives}
      contentImages={contentImages}
    >
      {mdxElement}
    </BlogPost>
  )
}

export default blogPost

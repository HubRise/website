import * as React from "react"

import { renderDocumentationMdx } from "@components/DocumentationMdxRenderer"
import Documentation from "@layouts/Documentation"
import contentImage from "@utils/contentImage"
import { Router } from "@utils/router"
import { Route, RouteName } from "@utils/router/types"

const documentation = async (route: Route<RouteName, "documentation">, router: Router): Promise<JSX.Element> => {
  const { mdFile, folder } = route.context
  const { mdxElement, headerLinks, contentImages } = await renderDocumentationMdx(
    mdFile.content,
    mdFile.contentDirName,
    router,
    mdFile.language,
    route.href,
  )

  const logoImage = folder.customisation.logo
    ? await contentImage(
        [`${folder.contentDirName}/${mdFile.language}/images`, `${folder.contentDirName}/images`],
        folder.customisation.logo,
      )
    : undefined

  const galleryImages = await Promise.all(
    (mdFile.frontMatter.gallery || []).map((image) =>
      contentImage([`${folder.contentDirName}/${mdFile.language}/images`, `${folder.contentDirName}/images`], image),
    ),
  )

  return (
    <Documentation
      mdFile={mdFile}
      folder={folder}
      headerLinks={headerLinks}
      logoImage={logoImage}
      galleryImages={galleryImages}
      contentImages={contentImages}
    >
      {mdxElement}
    </Documentation>
  )
}

export default documentation

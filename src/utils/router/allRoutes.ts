import { AppsYaml } from "@layouts/Apps/types"
import { DocumentationIndexYaml } from "@layouts/DocumentationIndex/types"
import { DocumentationSimpleFrontMatter } from "@layouts/DocumentationSimple/types"
import { FrontpageYaml } from "@layouts/Frontpage/types"
import { PricingYaml } from "@layouts/Pricing/types"
import { BlogArchives } from "@utils/BlogIndexer/types"
import DocIndexer, { Folder } from "@utils/DocIndexer"
import { ContentDirName, readMdFile, readYamlFile } from "@utils/files"

import BlogIndexer from "../BlogIndexer"
import { Href } from "../DocIndexer/types"
import { allLanguages, defaultLanguage } from "../locales"

import executeWithTimestampCache from "./executeWithTimestampCache"
import type { FallbackRoutes, RouteNameDynamic, Routes } from "./types"
import { createRoute } from "./types"

export const fallbackRoutes: FallbackRoutes = {
  apps_page: "apps",
  blog_archive: "blog",
  blog_post: "blog",
  developers_page: "developers",
  docs_page: "docs",
  default: "frontpage",
}

const staticRoutes = async (): Promise<Routes> => {
  // eslint-disable-next-line max-len
  // prettier-ignore
  return [
    createRoute({ href: "/", language: "en", name: "frontpage", layout: "frontpage", context: { yaml: await readYamlFile<FrontpageYaml>("/en", "frontpage") } }),
    createRoute({ href: "/apps", language: "en", name: "apps", layout: "apps", context: { yaml: await readYamlFile<AppsYaml>("/en", "apps") } }),
    createRoute({ href: "/pricing", language: "en", name: "pricing", layout: "pricing", context: { yaml: await readYamlFile<PricingYaml>("/en", "pricing") } }),
    createRoute({ href: "/developers", language: "en", name: "developers", layout: "documentation-index", context: { yaml: await readYamlFile<DocumentationIndexYaml>("/en", "developers") } }),
    createRoute({ href: "/faqs", language: "en", name: "faqs", layout: "documentation-simple", context: await readMdFile<DocumentationSimpleFrontMatter>("/en", "faqs") }),
    createRoute({ href: "/branding", language: "en", name: "branding", layout: "documentation-simple", context: await readMdFile<DocumentationSimpleFrontMatter>("/en", "branding") }),
    createRoute({ href: "/contributing", language: "en", name: "contributing", layout: "documentation-index", context: { yaml: await readYamlFile<DocumentationIndexYaml>("/en", "contributing") } }),
    createRoute({ href: "/fr", language: "fr", name: "frontpage", layout: "frontpage", context: { yaml: await readYamlFile<FrontpageYaml>("/fr", "frontpage") } }),
    createRoute({ href: "/fr/apps", language: "fr", name: "apps", layout: "apps", context: { yaml: await readYamlFile<AppsYaml>("/fr", "apps") } }),
    createRoute({ href: "/fr/tarifs", language: "fr", name: "pricing", layout: "pricing", context: { yaml: await readYamlFile<PricingYaml>("/fr", "pricing") } }),
    createRoute({ href: "/fr/developers", language: "fr", name: "developers", layout: "documentation-index", context: { yaml: await readYamlFile<DocumentationIndexYaml>("/fr", "developers") } }),
    createRoute({ href: "/fr/faqs", language: "fr", name: "faqs", layout: "documentation-simple", context: await readMdFile<DocumentationSimpleFrontMatter>("/fr", "faqs") }),
    createRoute({ href: "/fr/branding", language: "fr", name: "branding", layout: "documentation-simple", context: await readMdFile<DocumentationSimpleFrontMatter>("/fr", "branding") }),
    createRoute({ href: "/fr/contributing", language: "fr", name: "contributing", layout: "documentation-index", context: { yaml: await readYamlFile<DocumentationIndexYaml>("/fr", "contributing") } }),
  ]
}

const blogRoutes = async (contentDirName: ContentDirName): Promise<Routes> => {
  const indexer = new BlogIndexer(contentDirName)
  await indexer.initialize()

  const routes: Routes = []
  for (const language of allLanguages) {
    const mdFiles = indexer.mdFiles[language]
    if (!mdFiles) continue

    const mainBlogUri: Href = language === defaultLanguage ? "/blog" : `/${language}/blog`
    const archives: BlogArchives = {
      years: indexer.allYears(language).map((year) => ({ year, uri: `${mainBlogUri}/${year}` })),
    }

    routes.push(
      createRoute({
        href: mainBlogUri,
        language,
        name: "blog",
        layout: "blog-index",
        context: { mdFiles: indexer.allMdFiles(language), archives },
      }),
    )

    indexer.allYears(language).forEach((year) => {
      routes.push(
        createRoute({
          href: `${mainBlogUri}/${year}`,
          language,
          name: "blog_archive",
          params: { year: year },
          layout: "blog-index",
          context: { mdFiles: indexer.mdFilesByYear(language, year), archives },
        }),
      )
    })

    for (const mdFile of mdFiles) {
      routes.push(
        createRoute({
          href: mdFile.uri,
          language,
          name: "blog_post",
          params: { contentDirName: mdFile.contentDirName, basename: mdFile.baseName },
          layout: "blog-post",
          context: { mdFile, archives },
        }),
      )
    }
  }
  return routes
}

const docRoutes = async (contentDirName: ContentDirName, name: RouteNameDynamic): Promise<Routes> => {
  const indexer = new DocIndexer(contentDirName)
  await indexer.initialize()

  const routes: Routes = []
  const traverse = (folder: Folder) => {
    for (const mdFile of Object.values(folder.mdFiles).flat()) {
      const { uri: href, language } = mdFile
      routes.push(
        createRoute({
          href,
          language,
          name,
          params: { contentDirName: folder.contentDirName, basename: mdFile.basename },
          layout: "documentation",
          context: { mdFile: mdFile.toPlainObject(), folder: folder.toPlainObject(language) },
        }),
      )
    }
    for (const subfolder of Object.values(folder.subfolders)) {
      traverse(subfolder)
    }
  }
  traverse(indexer.root)
  return routes
}

const buildRoutes = async (): Promise<Routes> => {
  console.log("Building routes...")
  return [
    ...(await staticRoutes()),
    ...(await blogRoutes("/blog")),
    ...(await docRoutes("/apps", "apps_page")),
    ...(await docRoutes("/contributing", "contributing_page")),
    ...(await docRoutes("/developers", "developers_page")),
    ...(await docRoutes("/docs", "docs_page")),
    ...(await docRoutes("/legal", "legal_page")),
  ]
}

const allRoutes = executeWithTimestampCache(buildRoutes, async () => {
  const contentHotReload = await import("content-hot-reload.json")
  return contentHotReload.timestamp
})

export default allRoutes

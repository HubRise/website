import { GetInTouchYaml } from "@components/GetInTouch/types"
import { TestimonialsYaml } from "@layouts/Testimonials/types"
import DocIndexer, { Folder } from "@utils/DocIndexer"
import { ContentDirName, readYamlFile } from "@utils/files"

import BlogIndexer from "../BlogIndexer"
import { Href } from "../DocIndexer/types"
import { allLanguages, defaultLanguage, Language } from "../locales"

import executeWithTimestampCache from "./executeWithTimestampCache"
import { FallbackRoutes, LayoutName, RouteNameDynamic, Routes, createRoute, RouteName, Route, Context } from "./types"

export const fallbackRoutes: FallbackRoutes = {
  apps_page: "apps",
  blog_archive: "blog",
  blog_post: "blog",
  developers_page: "developers",
  docs_page: "docs",
  default: "frontpage",
}

export const staticRoutes = async (): Promise<Routes> => {
  type ExtraContext<L extends LayoutName> = Omit<Context<L>, "context">
  type ExtraContextFn<L extends LayoutName> = (lang: Language) => ExtraContext<L>

  // Returns a pair of routes, one for each language.
  const routePair = async <R extends RouteName, L extends LayoutName>(
    enPath: Href,
    frPath: Href,
    name: R,
    layout: L,
    extraContextFn: ExtraContextFn<L>,
  ): Promise<[Route<R, L>, Route<R, L>]> => {
    const singleRoute = async <R extends RouteName, L extends LayoutName>(
      href: Href,
      language: Language,
      name: R,
      layout: L,
      extraContext: ExtraContext<L>,
    ): Promise<Route<R, L>> =>
      ({
        href,
        language,
        name,
        layout,
        context: { yaml: await readYamlFile(`/${language}`, name) },
        ...extraContext,
      }) as Route<R, L>

    return Promise.all([
      singleRoute<R, L>(enPath, "en", name, layout, extraContextFn("en")),
      singleRoute<R, L>(frPath, "fr", name, layout, extraContextFn("fr")),
    ])
  }

  // Preload shared YAML files
  const shared = {
    en: {
      getInTouch: { getInTouch: { yaml: await readYamlFile<GetInTouchYaml>("/en", "get-in-touch") } },
      testimonials: { testimonials: { yaml: await readYamlFile<TestimonialsYaml>("/en", "testimonials") } },
    },
    fr: {
      getInTouch: { getInTouch: { yaml: await readYamlFile<GetInTouchYaml>("/fr", "get-in-touch") } },
      testimonials: { testimonials: { yaml: await readYamlFile<TestimonialsYaml>("/fr", "testimonials") } },
    },
  } as const

  // Create the static routes
  const nope = () => ({})
  // prettier-ignore
  const routePairs = await Promise.all([
    routePair("/", "/fr", "frontpage", "frontpage", (lang) => shared[lang].testimonials),
    routePair("/apps", "/fr/apps", "apps", "apps", nope),
    routePair("/pricing", "/fr/tarifs", "pricing", "pricing", nope),
    routePair("/developers", "/fr/developers", "developers", "documentation-index", nope),
    routePair("/faqs", "/fr/faqs", "faqs", "faqs", (lang) => shared[lang].getInTouch),
    routePair("/become-partner", "/fr/devenir-partenaire", "become-partner", "become-partner", (lang) => ({ ...shared[lang].getInTouch, ...shared[lang].testimonials })),
    routePair("/branding", "/fr/marque", "branding", "branding", nope),
    routePair("/catalog-manager", "/fr/catalog-manager", "catalog-manager", "catalog-manager", (lang) => shared[lang].getInTouch),
    routePair("/dashboard", "/fr/dashboard", "dashboard", "dashboard", (lang) => shared[lang].getInTouch),
    routePair("/contributing", "/fr/contribuer", "contributing", "documentation-index", nope),
    routePair("/testimonials", "/fr/temoignages", "testimonials", "testimonials", nope),
    routePair("/partners", "/fr/partenaires", "partners", "partners", nope),
    routePair("/contact-us", "/fr/contactez-nous", "contact-us", "contact-us", nope),
    routePair("/orderline", "/fr/orderline", "orderline", "orderline", (lang) => shared[lang].getInTouch),
  ])

  return routePairs.flat()
}

const blogRoutes = async (contentDirName: ContentDirName): Promise<Routes> => {
  const indexer = new BlogIndexer(contentDirName)
  await indexer.initialize()

  const routes: Routes = []
  for (const language of allLanguages) {
    const mdFiles = indexer.mdFiles[language]
    if (!mdFiles) continue

    const mainBlogUri: Href = language === defaultLanguage ? "/blog" : `/${language}/blog`

    routes.push(
      createRoute({
        href: mainBlogUri,
        language,
        name: "blog",
        layout: "blog-index",
        context: { mdFiles: indexer.allMdFiles(language) },
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
          context: { mdFiles: indexer.mdFilesByYear(language, year) },
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
          context: { mdFile, mdFiles: indexer.allMdFiles(language) },
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
  const routes = await Promise.all([
    staticRoutes(),
    blogRoutes("/blog"),
    docRoutes("/apps", "apps_page"),
    docRoutes("/contributing", "contributing_page"),
    docRoutes("/developers", "developers_page"),
    docRoutes("/docs", "docs_page"),
    docRoutes("/legal", "legal_page"),
  ])
  return routes.flat()
}

const allRoutes = executeWithTimestampCache(buildRoutes, async () => {
  const contentHotReload = await import("content-hot-reload.json")
  return contentHotReload.timestamp
})

export default allRoutes

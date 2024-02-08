import { AppsYaml } from "@layouts/Apps/types"
import { DocumentationIndexYaml } from "@layouts/DocumentationIndex/types"
import { DocumentationSimpleFrontMatter } from "@layouts/DocumentationSimple/types"
import { FrontpageYaml } from "@layouts/Frontpage/types"
import { PricingYaml } from "@layouts/Pricing/types"
import { BlogArchives, BlogMdFile } from "@utils/BlogIndexer/types"
import { Href, DocMdFile, DocFolder } from "@utils/DocIndexer/types"
import { ContentDirName } from "@utils/files"
import { Language } from "@utils/locales"

// Route name and params

export type RouteNameStatic =
  | "apps"
  | "blog"
  | "branding"
  | "contributing"
  | "developers"
  | "docs"
  | "faqs"
  | "frontpage"
  | "pricing"
export type RouteNameDocumentation =
  | "apps_page"
  | "blog_post"
  | "contributing_page"
  | "developers_page"
  | "docs_page"
  | "legal_page"
export type RouteNameDynamic = "blog_archive" | RouteNameDocumentation
export type RouteName = RouteNameStatic | RouteNameDynamic

export type RouteParamsDynamic<R extends RouteNameDynamic> = R extends "blog_archive"
  ? { year: number }
  : R extends RouteNameDocumentation
  ? { contentDirName: ContentDirName; basename: string }
  : never
type RouteParams<R extends RouteName> = R extends RouteNameDynamic ? { params: RouteParamsDynamic<R> } : object

// Layout and context

export type LayoutName =
  | "apps"
  | "blog-index"
  | "blog-post"
  | "documentation"
  | "documentation-index"
  | "documentation-simple"
  | "frontpage"
  | "pricing"
export type Context<L extends LayoutName> = L extends "apps"
  ? { context: { yaml: AppsYaml } }
  : L extends "blog-index"
  ? { context: { mdFiles: Array<BlogMdFile>; archives: BlogArchives } }
  : L extends "blog-post"
  ? { context: { mdFile: BlogMdFile; archives: BlogArchives } }
  : L extends "documentation"
  ? { context: { mdFile: DocMdFile; folder: DocFolder } }
  : L extends "documentation-index"
  ? { context: { yaml: DocumentationIndexYaml } }
  : L extends "documentation-simple"
  ? { context: { content: string; frontMatter: DocumentationSimpleFrontMatter } }
  : L extends "frontpage"
  ? { context: { yaml: FrontpageYaml } }
  : L extends "pricing"
  ? { context: { yaml: PricingYaml } }
  : never

// Main types

export type Route<R extends RouteName, L extends LayoutName> = {
  href: Href
  language: Language
  name: R
} & RouteParams<R> & {
    layout: L
  } & Context<L>

export type Routes = Array<Route<RouteName, LayoutName>>

export type FallbackRoutes = { [K in RouteName]?: RouteName } & { default: RouteName }

/**
 * createRoute enforces that a route object adheres to the Route type.
 * This function is useful for catching missing or extraneous properties at compile time.
 *
 * @param route - The route object to validate.
 * @returns The validated route object.
 *
 * @example
 * // This will throw a TypeScript error if the object is missing required fields.
 * const r = createRoute({ href: "/", language: "en", name: "frontpage", layout: "documentation" });
 */
export function createRoute<R extends RouteName, L extends LayoutName>(route: Route<R, L>): Route<R, L> {
  return route
}

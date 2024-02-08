import { FallbackRoutes, LayoutName, Route, RouteName, Routes } from "./types"

import { Router } from "./index"

let router: Router

beforeEach(() => {
  // eslint-disable-next-line max-len
  // prettier-ignore
  const routes = [
    { href: "/", language: "en", name: "frontpage", layout: "frontpage" },
    { href: "/apps", language: "en", name: "apps", layout: "apps" },
    { href: "/apps/uber", language: "en", name: "apps_page", params: { contentDirName: "/apps/uber", basename: "overview" }, layout: "documentation" },
    { href: "/apps/uber/connect", language: "en", name: "apps_page", params: { contentDirName: "/apps/uber", basename: "connect" }, layout: "documentation" },
    { href: "/apps/uber/faqs", language: "en", name: "apps_page", params: { contentDirName: "/apps/uber", basename: "faqs" }, layout: "documentation" },
    { href: "/pricing", language: "en", name: "pricing", layout: "pricing" },
    { href: "/fr", language: "fr", name: "frontpage", layout: "frontpage" },
    { href: "/fr/apps", language: "fr", name: "apps", layout: "apps" },
    { href: "/fr/apps/kezia", language: "fr", name: "apps_page", params: { contentDirName: "/apps/kezia", basename: "overview" }, layout: "documentation" },
    { href: "/fr/apps/uber", language: "fr", name: "apps_page", params: { contentDirName: "/apps/uber", basename: "overview" }, layout: "documentation" },
    { href: "/fr/apps/uber/connexion", language: "fr", name: "apps_page", params: { contentDirName: "/apps/uber", basename: "connect" }, layout: "documentation" },
    { href: "/fr/faqs", language: "fr", name: "faqs", layout: "documentation-simple" },
    { href: "/fr/tarifs", language: "fr", name: "pricing", layout: "pricing" },
  ] as any as Routes
  const fallbackRoutes: FallbackRoutes = { apps_page: "apps", docs_page: "docs", default: "frontpage" }
  router = new Router(routes, fallbackRoutes)
})

describe("getHref", () => {
  it("should return href for static route", () => {
    const href = router.getHref("frontpage", "en")
    expect(href).toEqual("/")
  })

  it("should return href for dynamic route", () => {
    const href = router.getHref("apps_page", "fr", { contentDirName: "/apps/uber", basename: "overview" })
    expect(href).toEqual("/fr/apps/uber")
  })

  it("should raise an error for non-existent route", () => {
    expect(() => router.getHref("faqs", "en")).toThrow("Route 'faqs' not found for 'en' language with params {}")
  })
})

describe("getRouteFromHref", () => {
  it("should return correct route from href", () => {
    const route = router.getRouteFromHref("/fr/tarifs")
    expect(route).toEqual(
      expect.objectContaining({
        language: "fr",
        name: "pricing",
        href: "/fr/tarifs",
      }),
    )
  })

  it("should return undefined for non-existent href", () => {
    const route = router.getRouteFromHref("/non-existent-href" as any)
    expect(route).toBeUndefined()
  })
})

describe("changeLanguage", () => {
  const route = (href: string): Route<RouteName, LayoutName> => {
    const route = router.getRouteFromHref(href)
    expect(route).toBeDefined()
    return route!
  }

  it("should translate static routes", () => {
    const targetRoute = router.changeLanguage(route("/pricing"), "fr")
    expect(targetRoute.href).toEqual("/fr/tarifs")
  })

  it("should translate dynamic routes", () => {
    const targetRoute = router.changeLanguage(route("/apps/uber"), "fr")
    expect(targetRoute.href).toEqual("/fr/apps/uber")
  })

  it("should fallback from apps_page to apps", () => {
    const targetRoute = router.changeLanguage(route("/fr/apps/kezia"), "en")
    expect(targetRoute.href).toEqual("/apps")
  })

  it("should fallback to the default route when no fallback route is found", () => {
    const targetRoute = router.changeLanguage(route("/fr/faqs"), "en")
    expect(targetRoute.href).toEqual("/")
  })
})

describe("findDocumentationRoute", () => {
  it("should find route", () => {
    const route = router.findDocumentationRoute("/apps/uber", "overview", "fr")
    expect(route).toBeDefined()
    expect(route!.href).toEqual("/fr/apps/uber")
  })
})

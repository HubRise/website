import { fireEvent, screen, waitFor } from "@testing-library/react"
import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from "vitest"

import { readYamlFile } from "@utils/files"
import { render } from "@utils/test-helpers/render"

import { IntegrationsYaml } from "./types"

import Apps from "."

const yaml = await readYamlFile<IntegrationsYaml>("/en", "apps")
const logoImages = {}

const mockReplace = vi.fn()
const mockSearchParams = { current: new URLSearchParams() }

vi.mock("next/navigation", () => ({
  useRouter: () => ({ replace: mockReplace }),
  usePathname: () => "/apps",
  useSearchParams: () => mockSearchParams.current,
}))

const scrollIntoViewMock = vi.fn()
const originalScrollIntoView = Element.prototype.scrollIntoView
beforeAll(() => (Element.prototype.scrollIntoView = scrollIntoViewMock))
afterAll(() => (Element.prototype.scrollIntoView = originalScrollIntoView))

const renderPage = (urlParams?: string) => {
  mockSearchParams.current = new URLSearchParams(urlParams || "")
  return render(<Apps language="en" yaml={yaml} logoImages={logoImages} />)
}

beforeEach(() => {
  mockReplace.mockClear()
  scrollIntoViewMock.mockClear()
})

describe("Filters and displays apps", () => {
  it("Renders all apps by default", () => {
    renderPage()

    const totalApps = yaml.content.categories.reduce((sum, category) => sum + category.apps.length, 0)
    expect(screen.getAllByTestId("apps:result").length).toBe(totalApps)
  })

  it("Renders only apps from the category in URL", () => {
    const category = yaml.content.categories[0]
    renderPage(`category=${category.slug}`)

    expect(screen.getAllByTestId("apps:result").length).toBe(category.apps.length)
    expect(screen.getByText(category.title, { selector: "h2" })).toBeInTheDocument()
  })

  it("Renders only apps from the country in URL", () => {
    const country = yaml.content.countries.find((c) => c.code === "FR")!
    renderPage(`country=${country.code}`)

    const expectedApps = yaml.content.categories
      .flatMap((category) => category.apps)
      .filter((app) => !app.country || app.country.includes(country.code))
    expect(screen.getAllByTestId("apps:result").length).toBe(expectedApps.length)
  })

  it("Renders apps filtered by name", () => {
    renderPage()

    const app = yaml.content.categories[0].apps[0]
    const searchInput = screen.getByPlaceholderText("Search by app name")
    fireEvent.change(searchInput, { target: { value: app.title } })

    expect(screen.getAllByTestId("apps:result").length).toBe(1)
    expect(screen.getByText(app.description.substring(0, 20), { selector: "div", exact: false })).toBeInTheDocument()
  })

  it("Renders 'no apps found' message", () => {
    renderPage()

    const searchInput = screen.getByPlaceholderText("Search by app name")
    fireEvent.change(searchInput, { target: { value: "NoAppWithThisName" } })

    expect(screen.getByText("No apps found", { selector: "div" })).toBeInTheDocument()
    expect(screen.queryAllByTestId("apps:result").length).toBe(0)
  })

  it("Calls scrollIntoView when search filter is applied", async () => {
    renderPage()

    const app = yaml.content.categories[0].apps[0]
    const searchInput = screen.getByPlaceholderText("Search by app name")
    fireEvent.change(searchInput, { target: { value: app.title } })

    await waitFor(() => document.getElementById("apps-results"))
    expect(scrollIntoViewMock).toHaveBeenCalled()
  })
})

describe("URL param updates", () => {
  it("Updates URL when category is selected", () => {
    renderPage()

    const category = yaml.content.categories[0]
    fireEvent.click(screen.getByText(category.title, { selector: "li" }))

    expect(mockReplace).toHaveBeenCalledWith(`/apps?category=${category.slug}`, { scroll: false })
  })

  it("Removes category param when All Apps is selected", () => {
    renderPage("category=point-of-sale")

    fireEvent.click(screen.getByText(yaml.content.all_apps, { selector: "li" }))

    expect(mockReplace).toHaveBeenCalledWith("/apps", { scroll: false })
  })

  it("Updates URL when country is selected", () => {
    renderPage()

    const country = yaml.content.countries.find((c) => c.code === "FR")!
    fireEvent.click(screen.getByText(country.title, { selector: "li" }))

    expect(mockReplace).toHaveBeenCalledWith(`/apps?country=${country.code}`, { scroll: false })
  })

  it("Removes country param when All countries is selected", () => {
    renderPage("country=FR")

    const allCountries = yaml.content.countries[0]
    fireEvent.click(screen.getByText(allCountries.title, { selector: "li" }))

    expect(mockReplace).toHaveBeenCalledWith("/apps", { scroll: false })
  })

  it("Preserves existing params when updating", () => {
    renderPage("category=point-of-sale")

    const country = yaml.content.countries.find((c) => c.code === "FR")!
    fireEvent.click(screen.getByText(country.title, { selector: "li" }))

    expect(mockReplace).toHaveBeenCalledWith(`/apps?category=point-of-sale&country=${country.code}`, { scroll: false })
  })

  it("Calls scrollIntoView when category is changed", async () => {
    renderPage()

    const category = yaml.content.categories[0]
    fireEvent.click(screen.getByText(category.title, { selector: "li" }))

    await waitFor(() => expect(scrollIntoViewMock).toHaveBeenCalled())
  })
})

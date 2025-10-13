import { fireEvent, screen, waitFor } from "@testing-library/react"
// import mockRouter from "next-router-mock"
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest"

import { readYamlFile } from "@utils/files"
import { render } from "@utils/test-helpers/render"

import { IntegrationsYaml } from "./types"

import Apps from "."

describe("Renders Integrations page", async () => {
  const yaml = await readYamlFile<IntegrationsYaml>("/en", "apps")
  const logoImages = {}

  const scrollIntoViewMock = vi.fn()
  const originalScrollIntoView = Element.prototype.scrollIntoView
  beforeAll(() => (Element.prototype.scrollIntoView = scrollIntoViewMock))
  afterAll(() => (Element.prototype.scrollIntoView = originalScrollIntoView))

  it("Renders all apps", () => {
    render(<Apps language="en" yaml={yaml} logoImages={logoImages} />)

    yaml.content.categories.map((category) => {
      expect(screen.getByText(category.title, { selector: "a" })).toBeInTheDocument()
    })
  })

  it("Renders only apps from one category", async () => {
    render(<Apps language="en" yaml={yaml} logoImages={logoImages} />)

    const category = yaml.content.categories[0]
    fireEvent.click(screen.getByText(category.title, { selector: "li" }), { target: { value: category.title } })

    expect(screen.getAllByTestId("apps:result").length).toBe(category.apps.length)
    expect(screen.getByText(category.title, { selector: "a" })).toBeInTheDocument()
  })

  it("Renders a single app", () => {
    render(<Apps language="en" yaml={yaml} logoImages={logoImages} />)

    const app = yaml.content.categories[0].apps[0]
    const searchInput = screen.getByPlaceholderText("Search by app name")
    fireEvent.change(searchInput, { target: { value: app.title } })

    expect(screen.getAllByTestId("apps:result").length).toBe(1)
    expect(screen.getByText(app.description.substring(0, 20), { selector: "div", exact: false })).toBeInTheDocument()
  })

  it("Renders no app found", () => {
    render(<Apps language="en" yaml={yaml} logoImages={logoImages} />)

    const searchInput = screen.getByPlaceholderText("Search by app name")
    fireEvent.change(searchInput, { target: { value: "NoAppWithThisName" } })
    expect(
      screen.getByText("No apps found", {
        selector: "div",
      }),
    ).toBeInTheDocument()
  })

  it("Calls scrollIntoView when a filter is applied", async () => {
    render(<Apps language="en" yaml={yaml} logoImages={logoImages} />)

    const app = yaml.content.categories[0].apps[0]
    const searchInput = screen.getByPlaceholderText("Search by app name")
    fireEvent.change(searchInput, { target: { value: app.title } })

    await waitFor(() => document.getElementById("apps-results"))
    expect(scrollIntoViewMock).toHaveBeenCalled()
  })
})

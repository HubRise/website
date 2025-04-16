import { fireEvent, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import contentImage, { ContentImage } from "@utils/contentImage"
import { readYamlFile } from "@utils/files"
import { render } from "@utils/test-helpers/render"

import { AppsYaml } from "./types"

import Apps from "."

describe("Renders Integrations page", async () => {
  const yaml = await readYamlFile<AppsYaml>("/en", "apps")

  const logoImages: { [logo: string]: ContentImage } = {}
  const apps = yaml.content.categories.flatMap((category) => category.apps)
  await Promise.all(
    apps.map(async (app) => {
      if (!app.logo) return
      logoImages[app.logo] = await contentImage("/images/app-logos", app.logo)
    }),
  )

  it("Renders all apps", () => {
    render(<Apps language="en" yaml={yaml} logoImages={logoImages} />)

    yaml.content.categories.map((category) => {
      expect(screen.getByText(category.title, { selector: "a" })).toBeInTheDocument()
    })
  })

  it("Renders only apps from Point of Sales categories", () => {
    render(<Apps language="en" yaml={yaml} logoImages={logoImages} />)
    const scrollIntoViewMock = vi.fn()
    Element.prototype.scrollIntoView = scrollIntoViewMock

    const categoryTitle = "Point of Sales"
    fireEvent.click(screen.getByText(categoryTitle, { selector: "li" }), { target: { value: categoryTitle } })

    expect(screen.getByText(categoryTitle, { selector: "a" })).toBeInTheDocument()
    expect(screen.queryByText("Online Ordering", { selector: "a" })).not.toBeInTheDocument()
  })

  it("Renders only Glovo app", () => {
    render(<Apps language="en" yaml={yaml} logoImages={logoImages} />)

    const searchInput = screen.getByPlaceholderText("Search by app name")
    fireEvent.change(searchInput, { target: { value: "Glovo" } })
    expect(
      screen.getByText("Glovo is an online food ordering and delivery platform for local restaurants.", {
        selector: "div",
        exact: false,
      }),
    ).toBeInTheDocument()
  })

  it("Renders no app found", () => {
    render(<Apps language="en" yaml={yaml} logoImages={logoImages} />)

    const searchInput = screen.getByPlaceholderText("Search by app name")
    fireEvent.change(searchInput, { target: { value: "No apps" } })
    expect(
      screen.getByText("No apps found", {
        selector: "div",
      }),
    ).toBeInTheDocument()
  })
})

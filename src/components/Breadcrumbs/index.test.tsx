import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { DocLink } from "@utils/DocIndexer/types"
import { render } from "@utils/test-helpers/render"

import Breadcrumbs from "."

const breadcrumbs: Array<DocLink> = [
  { label: "Developers", uri: "/developers" },
  { label: "Conventions and special cases", uri: "/" },
]

describe("Breadcrumbs component", () => {
  it("Breadcrumbs component renders correctly in document", () => {
    render(<Breadcrumbs breadcrumbs={breadcrumbs} />)

    expect(screen.getByText("Developers")).toBeInTheDocument()
    expect(screen.getByText("Conventions and special cases")).toBeInTheDocument()
  })
})

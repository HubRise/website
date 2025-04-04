import { render } from "@utils/jest-helpers/render"

import Breadcrumbs from "."

const BreadcrumbsComponent = render(<Breadcrumbs breadcrumbs={[{ label: "test", uri: "/" }]} />)

describe("test", () => {
  test("test", () => {
    expect(BreadcrumbsComponent).not.toBeUndefined()
  })
})

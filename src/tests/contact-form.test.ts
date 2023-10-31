import { createMocks } from "node-mocks-http"

import { POST } from "../app/api/contact_us/route"

jest.mock("nodemailer")

describe("/api/contact_us", () => {
  it("should return 400 on failed recaptcha", async () => {
    const { req } = createMocks({
      method: "POST",
      body: {
        recaptchaResponse: "fakeRecaptchaResponse",
        name: "John Doe",
        email: "john@example.com",
        message: "Hello, world!",
      },
    })

    const response = await POST(req)

    expect(response.status).toEqual(400)
  })
})

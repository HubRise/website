import axios from "axios"
import { createMocks } from "node-mocks-http"
import nodemailer from "nodemailer"

import { POST } from "./route"

jest.mock("axios")
jest.mock("nodemailer")

describe("/api/contact_us", () => {
  const mockedAxiosPost = axios.post as jest.MockedFunction<typeof axios.post>
  const mockedCreateTransport = nodemailer.createTransport as jest.MockedFunction<typeof nodemailer.createTransport>

  const sendRequest = async () => {
    const { req } = createMocks({
      method: "POST",
      body: {
        recaptchaResponse: "someRecaptchaResponse",
        name: "John Doe",
        email: "john@example.com",
        message: "Hello, world!",
      },
    })
    const response = await POST(req)
    return response
  }

  const mockRecaptcha = (success: boolean) => {
    mockedAxiosPost.mockResolvedValueOnce({ data: { success } })
  }

  const mockSendGrid = (success: boolean) => {
    const sendMailMock = jest.fn().mockResolvedValueOnce({ rejected: success ? [] : ["john@example.com"] })
    mockedCreateTransport.mockReturnValueOnce({ sendMail: sendMailMock } as any)
  }

  it("should return 400 on failed recaptcha", async () => {
    mockRecaptcha(false)

    const response = await sendRequest()

    expect(response.status).toEqual(400)
    expect(await response.json()).toEqual({
      error: 'Captcha validation failed: {"success":false}. RECAPTCHA_SECRET_KEY: undefined',
    })
  })

  it("should return 400 on valid recaptcha but failed SendGrid", async () => {
    mockRecaptcha(true)
    mockSendGrid(false)

    const response = await sendRequest()

    expect(response.status).toEqual(400)
    expect(await response.json()).toEqual({ error: 'SendGrid error: {"rejected":["john@example.com"]}' })
  })

  it("should return 200 on valid Recaptcha and SendGrid responses", async () => {
    mockRecaptcha(true)
    mockSendGrid(true)

    const response = await sendRequest()

    expect(response.status).toEqual(200)
    expect(await response.json()).toEqual({ message: "email sent" })
  })
})

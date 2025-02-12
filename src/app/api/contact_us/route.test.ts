import axios from "axios"
import { createRequest } from "node-mocks-http"
import nodemailer from "nodemailer"

import { POST } from "./route"

jest.mock("axios")
jest.mock("nodemailer")

describe("/api/contact_us", () => {
  const mockedAxiosPost = axios.post as jest.MockedFunction<typeof axios.post>
  const mockedCreateTransport = nodemailer.createTransport as jest.MockedFunction<typeof nodemailer.createTransport>

  const sendRequest = async () => {
    const req = createRequest({
      method: "POST",
      body: {
        token: "someTokenX",
        name: "John Doe",
        email: "john@example.com",
        message: "Hello, world!",
      },
    })
    return POST(req)
  }

  const mockRecaptcha = (valid: boolean, score = 0.9) => {
    mockedAxiosPost.mockResolvedValueOnce({
      data: {
        tokenProperties: { valid },
        riskAnalysis: { score },
      },
    })
  }

  const mockSendGrid = (success: boolean) => {
    const sendMailMock = jest.fn().mockResolvedValueOnce({ rejected: success ? [] : ["john@example.com"] })
    mockedCreateTransport.mockReturnValueOnce({ sendMail: sendMailMock } as any)
  }

  it("should return 400 on invalid token", async () => {
    mockRecaptcha(false)

    const response = await sendRequest()

    expect(response.status).toBe(400)
    expect(await response.json()).toMatchObject({
      error: expect.stringContaining("Captcha validation failed"),
    })
  })

  it("should return 400 on valid token but low score", async () => {
    mockRecaptcha(true, 0.1)

    const response = await sendRequest()

    expect(response.status).toBe(400)
    expect(await response.json()).toMatchObject({
      error: expect.stringContaining("Captcha validation failed"),
    })
  })

  it("should return 400 when recaptcha is valid but SendGrid fails", async () => {
    mockRecaptcha(true, 0.9)
    mockSendGrid(false)

    const response = await sendRequest()

    expect(response.status).toBe(400)
    expect(await response.json()).toMatchObject({
      error: expect.stringContaining("SendGrid error"),
    })
  })

  it("should return 200 on valid Recaptcha and SendGrid responses", async () => {
    mockRecaptcha(true, 0.9)
    mockSendGrid(true)

    const response = await sendRequest()

    expect(response.status).toBe(200)
    expect(await response.json()).toEqual({ message: "email sent" })
  })
})

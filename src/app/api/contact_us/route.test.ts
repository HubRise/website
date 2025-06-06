import axios from "axios"
import { createRequest } from "node-mocks-http"
import nodemailer from "nodemailer"
import { describe, expect, it, MockedFunction, vi } from "vitest"

import { POST } from "./route"

vi.mock("axios")
vi.mock("nodemailer")

describe("/api/contact_us", () => {
  const mockedAxiosPost = axios.post as MockedFunction<typeof axios.post>
  const mockedCreateTransport = nodemailer.createTransport as MockedFunction<typeof nodemailer.createTransport>

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
    const sendMailMock = vi.fn().mockResolvedValueOnce({ rejected: success ? [] : ["john@example.com"] })
    mockedCreateTransport.mockReturnValueOnce({ sendMail: sendMailMock } as any)
  }

  // 30/3/2025: WE ARE DISABLING CAPTCHA VALIDATION FOR THE TIME BEING
  // See https://docs.google.com/document/d/1x5BU3Ss8N7pDZA4cbKsNRZwIgd-6g7SgTbWEJ62p-eY/edit?tab=t.0
  it.skip("should return 400 on invalid token (CAPTCHA temporarily disabled)", async () => {
    mockRecaptcha(false)

    const response = await sendRequest()

    expect(response.status).toBe(400)
    expect(await response.json()).toMatchObject({
      error: expect.stringContaining("Captcha validation failed"),
    })
  })

  // 30/3/2025: WE ARE DISABLING CAPTCHA VALIDATION FOR THE TIME BEING
  // See https://docs.google.com/document/d/1x5BU3Ss8N7pDZA4cbKsNRZwIgd-6g7SgTbWEJ62p-eY/edit?tab=t.0
  it.skip("should return 400 on valid token but low score (CAPTCHA temporarily disabled)", async () => {
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

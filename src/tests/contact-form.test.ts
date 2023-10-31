import { POST, sendEmail } from "../app/api/contact_us/route"
import { createMocks } from "node-mocks-http"
import nodemailer from "nodemailer"

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

describe("sendEmail", () => {
  it("should send an email", async () => {
    const name = "John Doe"
    const email = "john@example.com"
    const message = "Hello, World!"

    const sendMailMock = jest.fn()

    jest.spyOn(nodemailer, "createTransport").mockReturnValue({
      sendMail: sendMailMock,
    } as any)

    await sendEmail(name, email, message)

    expect(sendMailMock).toHaveBeenCalledWith({
      from: email,
      to: process.env.CONTACT_EMAIL,
      subject: "Message from hubrise.com",
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })
  })
})

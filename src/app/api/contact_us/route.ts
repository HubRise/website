import axios from "axios"
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const verifyRecaptcha = async (recaptchaResponse: string) => {
  const secret = process.env.RECAPTCHA_SECRET_KEY
  const response = await axios.post("https://www.google.com/recaptcha/api/siteverify", null, {
    params: {
      secret,
      response: recaptchaResponse,
    },
  })

  return response?.data?.success
}

const sendEmail = async (name: string, email: string, message: string) => {
  const transporter = nodemailer.createTransport({
    service: "SendGrid",
    auth: {
      user: process.env.SENDGRID_USERNAME,
      pass: process.env.SENDGRID_PASSWORD,
    },
  })

  await transporter.sendMail({
    from: email,
    to: process.env.CONTACT_EMAIL,
    subject: "Message from hubrise.com",
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  })
}

export async function POST(req: Request) {
  const body = req.json != null ? await req.json() : req.body

  const { recaptchaResponse, name, email, message } = body

  const isRecaptchaValid = await verifyRecaptcha(recaptchaResponse)
  if (!isRecaptchaValid) {
    return NextResponse.json({ error: "Captcha validation failed" }, { status: 400 })
  }

  await sendEmail(name, email, message)

  return NextResponse.json({ message: "email sent" }, { status: 200 })
}

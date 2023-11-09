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

  if (!response.data.success) {
    throw new Error(`Captcha validation failed: ${JSON.stringify(response.data)}`)
  }
}

const sendEmail = async (name: string, email: string, message: string) => {
  const transporter = nodemailer.createTransport({
    service: "SendGrid",
    auth: {
      user: process.env.SENDGRID_USERNAME,
      pass: process.env.SENDGRID_PASSWORD,
    },
  })

  const response = await transporter.sendMail({
    from: email,
    to: process.env.CONTACT_EMAIL,
    subject: "Message from hubrise.com",
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  })

  if (response.rejected.length > 0) {
    throw new Error(`SendGrid error: ${JSON.stringify(response)}`)
  }
}

export async function POST(req: Request) {
  const body = req.json != null ? await req.json() : req.body
  const { recaptchaResponse, name, email, message } = body
  console.log("Sending email", { recaptchaResponse, name, email, message })

  try {
    await verifyRecaptcha(recaptchaResponse)
    await sendEmail(name, email, message)
  } catch (error: any) {
    console.error(error)
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  return NextResponse.json({ message: "email sent" }, { status: 200 })
}

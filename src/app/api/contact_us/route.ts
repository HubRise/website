import axios from "axios"
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const SCORE_THRESHOLD = 0.3

const verifyRecaptcha = async (token: string) => {
  const apiKey = process.env.RECAPTCHA_API_KEY
  const projectID = process.env.RECAPTCHA_PROJECT_ID
  const keyId = process.env.NEXT_PUBLIC_RECAPTCHA_KEY_ID
  const response = await axios.post(
    `https://recaptchaenterprise.googleapis.com/v1/projects/${projectID}/assessments?key=${apiKey}`,
    {
      event: {
        token,
        expectedAction: "send_email",
        siteKey: keyId,
      },
    },
  )

  const isTokenValid = response.data.tokenProperties?.valid
  const riskScore = response.data.riskAnalysis?.score ?? 0

  if (!isTokenValid || riskScore < SCORE_THRESHOLD) {
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
  const { token, name, email, message } = body
  console.log("Sending email", { token, name, email, message })

  try {
    await verifyRecaptcha(token)
    await sendEmail(name, email, message)
  } catch (error: any) {
    console.error(error)
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  return NextResponse.json({ message: "email sent" }, { status: 200 })
}

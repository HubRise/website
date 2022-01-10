const express = require("express")
const morgan = require("morgan")
const request = require("request")
const cors = require("cors")

require("dotenv").config({ path: ".env" })

console.log(`RECAPTCHA_SECRET_KEY = ${process.env.RECAPTCHA_SECRET_KEY}`)
console.log(`SEND_GRID_API_KEY = ${process.env.SEND_GRID_API_KEY}`)
console.log(`CONTACT_EMAIL = ${process.env.CONTACT_EMAIL}`)

const app = express()
app.use(cors())
app.use(morgan("combined"))
app.use(express.json())

function sendEmail({ email, name, message }) {
  return new Promise((resolve, reject) => {
    request(
      {
        uri: "https://api.sendgrid.com/v3/mail/send",
        method: "POST",
        body: {
          personalizations: [
            {
              to: [{ email: process.env.CONTACT_EMAIL }],
            },
          ],
          from: {
            name: name,
            email: email,
          },
          subject: "Message from hubrise.com",
          content: [
            {
              type: "text/html",
              value: `<html><head></head><body>${message}</body></html>`,
            },
          ],
        },
        json: true,
        headers: {
          Authorization: `Bearer ${process.env.SEND_GRID_API_KEY}`,
          "Content-Type": "application/json",
        },
      },
      (error, response, body) => {
        if (error) {
          reject(error)
        } else if (response.body && response.body.errors) {
          reject(response.body.errors)
        } else {
          resolve()
        }
      },
    )
  })
}

function verifyCaptcha(recaptchaResponse) {
  return new Promise((resolve, reject) => {
    request(
      {
        uri: "https://www.google.com/recaptcha/api/siteverify",
        method: "POST",
        qs: {
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: recaptchaResponse,
        },
        json: true,
      },
      (error, response, body) => {
        if (error) {
          reject(error)
        } else {
          resolve(body)
        }
      },
    )
  })
}

app.post("/api/mail/send", async (req, res, next) => {
  verifyCaptcha(req.body.recaptchaResponse)
    .then((recaptchaResult) => {
      const { success, score } = recaptchaResult
      return success && score > 0.5
    })
    .then((isRecaptchaValid) => {
      if (!isRecaptchaValid) {
        console.error(`STOP!!!! ${isRecaptchaValid}`)
        return
      }

      return sendEmail(req.body).then(() => {
        res.status(200).send("Success")
      })
    })
    .catch((error) => {
      console.error(error)
      res.status(500).send("Server internal error")
    })
})

module.exports = app

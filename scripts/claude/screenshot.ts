// Takes a full-page screenshot of the website and saves it to ./screenshots/
// Usage: yarn screenshot [url] [options]
// Examples:
//   yarn screenshot /en
//   yarn screenshot /en --mobile
//   yarn screenshot /en --tablet
//   yarn screenshot /en --width=1920 --height=1080
//   yarn screenshot /en --width=390 --height=844 custom-filename.png

import * as fs from "fs"
import * as path from "path"

import { chromium } from "@playwright/test"

interface ViewportSize {
  width: number
  height: number
}

const PRESETS: Record<string, ViewportSize> = {
  mobile: { width: 390, height: 844 }, // iPhone 14 Pro
  tablet: { width: 768, height: 1024 }, // iPad
  desktop: { width: 1280, height: 720 }, // Default desktop
}

async function takeScreenshot(url: string = "/", viewport: ViewportSize, filename?: string): Promise<void> {
  // Create screenshots directory at project root
  const screenshotsDir = path.join(process.cwd(), "screenshots")
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true })
  }

  console.log(`Taking screenshot of ${url} at ${viewport.width}x${viewport.height}...`)

  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({
    viewport,
  })
  const page = await context.newPage()

  try {
    await page.goto(`http://localhost:3000${url}`)
    await page.waitForLoadState("networkidle")

    const now = new Date()
    const timestamp = now.toISOString().slice(0, 19).replace(/[-:]/g, "").replace("T", "_")
    const urlSlug = url.replace(/\//g, "-").replace(/^-|-$/g, "") || "home"
    const viewportSlug = `${viewport.width}x${viewport.height}`
    const screenshotName = filename || `${urlSlug}-${viewportSlug}-${timestamp}.png`
    const screenshotPath = path.join(screenshotsDir, screenshotName)

    await page.screenshot({
      path: screenshotPath,
      fullPage: true,
    })

    console.log(`Screenshot saved to: ./${path.relative(process.cwd(), screenshotPath)}`)
  } catch (error) {
    console.error("Screenshot failed:", error)
    throw error
  } finally {
    await browser.close()
  }
}

// Parse command line arguments
const args = process.argv.slice(2)
const url = args.find((arg) => !arg.startsWith("--") && !arg.endsWith(".png")) || "/"
const customFilename = args.find((arg) => arg.endsWith(".png"))

// Parse viewport options
let viewport = PRESETS.desktop

if (args.includes("--mobile")) {
  viewport = PRESETS.mobile
} else if (args.includes("--tablet")) {
  viewport = PRESETS.tablet
} else {
  // Check for custom dimensions
  const widthArg = args.find((arg) => arg.startsWith("--width="))
  const heightArg = args.find((arg) => arg.startsWith("--height="))

  if (widthArg && heightArg) {
    viewport = {
      width: parseInt(widthArg.split("=")[1]),
      height: parseInt(heightArg.split("=")[1]),
    }
  }
}

takeScreenshot(url, viewport, customFilename).catch(console.error)

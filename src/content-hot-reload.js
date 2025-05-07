const fs = require("fs")
const { join } = require("path")

const chokidar = require("chokidar")

const contentDir = "./content"
const tempFile = join(__dirname, "content-hot-reload.json")

const watcher = chokidar.watch(contentDir)

// Force hot page reload by updating a file all pages depend on.
const writeTempFile = () => fs.writeFileSync(tempFile, JSON.stringify({ timestamp: Date.now() }, null, 2))
writeTempFile() // Create temp file on startup

if (process.argv.includes("--watch")) {
  watcher.on("ready", () => {
    console.log(`Watching ${contentDir} for changes...`)

    watcher.on("all", (event, path) => {
      console.log(`${event} event received for ${path}`)
      writeTempFile()
    })
  })
} else {
  // The script was only run to create the temp file.
  process.exit(0)
}

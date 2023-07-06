import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:8000",
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
  },
  video: false, // Disable video recording
})

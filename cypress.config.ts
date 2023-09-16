import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    defaultCommandTimeout: +process.env.CYPRESS_DEFAULT_COMMAND_TIMEOUT || 4000,
    taskTimeout: 10000,
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
  },
  // video: true,
})

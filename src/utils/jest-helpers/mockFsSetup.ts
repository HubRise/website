import { PathLike } from "fs"
import * as fs from "fs/promises"

import { mocked } from "jest-mock"

type MockEntry = { type: "file"; name: string } | { type: "dir"; name: string }

interface MockConfig {
  readdirResponses: Record<string, MockEntry[]>
  readFileResponses: Record<string, string>
}

export function setupFsMocks(config: MockConfig) {
  const { readdirResponses, readFileResponses } = config

  const findResponse = <T>(path: PathLike | fs.FileHandle, responses: Record<string, T>): T => {
    const responseKey = Object.keys(responses).find((key) => path.toString().endsWith(key))
    if (!responseKey) {
      throw new Error(`No mock response for path: ${path}`)
    }
    return responses[responseKey]
  }

  // Set up fs.readdir mock
  const readdirMock = mocked(fs.readdir)
  readdirMock.mockImplementation((path) => {
    const response = findResponse(path, readdirResponses)
    const convertedResponse = response.map((entry) => ({
      name: entry.name,
      isFile: () => entry.type === "file",
      isDirectory: () => entry.type === "dir",
    }))
    return convertedResponse as any
  })

  // Set up fs.readFile mock
  const readFileMock = mocked(fs.readFile)
  readFileMock.mockImplementation((path) => {
    return findResponse(path, readFileResponses) as any
  })
}

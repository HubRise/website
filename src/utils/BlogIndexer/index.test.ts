import * as fs from "fs/promises"

import { mocked } from "jest-mock"

import { setupFsMocks } from "@utils/jest-helpers/mockFsSetup"

import BlogIndexer from "./index"

jest.mock("fs/promises")

describe("BlogIndexer", () => {
  let indexer: BlogIndexer

  beforeEach(() => {
    indexer = new BlogIndexer("/blog")
    mocked(fs.readdir).mockClear()
    mocked(fs.readFile).mockClear()
  })

  it("initializes and indexes blog posts", async () => {
    setupFsMocks({
      readdirResponses: {
        "/blog": [{ type: "dir", name: "test-post" }],
        "/blog/test-post": [{ type: "dir", name: "en" }],
        "/blog/test-post/en": [
          { type: "file", name: "__post.md" },
          { type: "file", name: "__banner.png" },
        ],
      },
      readFileResponses: {
        "/blog/test-post/en/__post.md":
          "---\ntitle: Test Post\npath_override: post-testing\ndate: 2023-01-01\nauthor: Bob\n---\nContent here",
      },
    })

    await indexer.initialize()

    expect(indexer.mdFiles).toEqual({
      en: [
        {
          contentDirName: "/blog/test-post/en",
          baseName: "__post",
          uri: "/blog/post-testing",
          language: "en",
          frontMatter: { title: "Test Post", path_override: "post-testing", date: "2023-01-01", author: "Bob" },
          content: "Content here",
          bannerFileName: "__banner.png",
        },
      ],
    })
  })

  describe("post retrieval", () => {
    beforeEach(async () => {
      setupFsMocks({
        readdirResponses: {
          "/blog": [
            { type: "dir", name: "post1" },
            { type: "dir", name: "post2" },
            { type: "dir", name: "post3" },
          ],
          "/blog/post1": [{ type: "dir", name: "en" }],
          "/blog/post2": [{ type: "dir", name: "en" }],
          "/blog/post3": [{ type: "dir", name: "en" }],
          "/blog/post1/en": [{ type: "file", name: "__post.md" }],
          "/blog/post2/en": [{ type: "file", name: "__post.md" }],
          "/blog/post3/en": [{ type: "file", name: "__post.md" }],
        },
        readFileResponses: {
          "/blog/post1/en/__post.md": "---\npath_override: post-1\ndate: 2023-01-01\n---\n",
          "/blog/post2/en/__post.md": "---\npath_override: post-2\ndate: 2022-02-02\n---\n",
          "/blog/post3/en/__post.md": "---\npath_override: post-3\ndate: 2023-01-10\n---\n",
        },
      })

      await indexer.initialize()
    })

    it("returns all years", () => {
      expect(indexer.allYears("en")).toEqual([2023, 2022])
    })

    it("retrieves the most recent posts", () => {
      expect(indexer.allMdFiles("en").map((mdFile) => mdFile.frontMatter.date)).toEqual([
        "2023-01-10",
        "2023-01-01",
        "2022-02-02",
      ])
    })

    it("retrieves posts by year", () => {
      expect(indexer.mdFilesByYear("en", 2022).map((mdFile) => mdFile.frontMatter.date)).toEqual(["2022-02-02"])
    })
  })
})

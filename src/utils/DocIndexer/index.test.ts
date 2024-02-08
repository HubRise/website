import * as fs from "fs/promises"

import { mocked } from "jest-mock"

import { setupFsMocks } from "@utils/jest-helpers/mockFsSetup"

import DocIndexer from "./index"

jest.mock("fs/promises")

describe("DocIndexer", () => {
  let indexer: DocIndexer

  beforeEach(() => {
    indexer = new DocIndexer("/apps")
    mocked(fs.readdir).mockClear()
    mocked(fs.readFile).mockClear()
  })

  it("indexes a folder", async () => {
    setupFsMocks({
      readdirResponses: {
        "/apps": [{ type: "dir", name: "en" }],
        "/apps/en": [{ type: "file", name: "file1.md" }],
      },
      readFileResponses: {
        "/apps/en/customization.yaml": "name: Apps",
        "/apps/en/file1.md": "---\n---",
      },
    })

    await indexer.initialize()

    expect(indexer.root.name("en")).toEqual("Apps")
    expect(indexer.root.mdFiles).toEqual({
      en: [
        {
          contentDirName: "/apps/en",
          basename: "file1",
          uri: "/apps/file1",
          language: "en",
          frontMatter: {},
          content: "",
        },
      ],
    })
  })

  it("uses path_override in MD files", async () => {
    setupFsMocks({
      readdirResponses: {
        "/apps": [{ type: "dir", name: "fr" }],
        "/apps/fr": [
          { type: "file", name: "overview.md" },
          { type: "file", name: "file1.md" },
        ],
      },
      readFileResponses: {
        "/apps/fr/customization.yaml": "name: Logiciels",
        "/apps/fr/overview.md": '---\npath_override: "/"\n---',
        "/apps/fr/file1.md": "---\npath_override: fichier1\n---",
      },
    })

    await indexer.initialize()

    expect(indexer.root.name("fr")).toEqual("Logiciels")
    expect(indexer.root.mdFiles).toEqual({
      fr: [
        {
          contentDirName: "/apps/fr",
          basename: "overview",
          uri: "/fr/apps",
          language: "fr",
          frontMatter: { path_override: "/" },
          content: "",
        },
        {
          contentDirName: "/apps/fr",
          basename: "file1",
          uri: "/fr/apps/fichier1",
          language: "fr",
          frontMatter: { path_override: "fichier1" },
          content: "",
        },
      ],
    })
  })

  it("uses path_override in customization.yaml", async () => {
    setupFsMocks({
      readdirResponses: {
        "/apps": [{ type: "dir", name: "fr" }],
        "/apps/fr": [{ type: "file", name: "file1.md" }],
      },
      readFileResponses: {
        "/apps/fr/customization.yaml": "name: Logiciels\npath_override: logiciels",
        "/apps/fr/file1.md": "---\npath_override: fichier1\n---",
      },
    })

    await indexer.initialize()

    expect(indexer.root.name("fr")).toEqual("Logiciels")
    expect(indexer.root.mdFiles).toEqual({
      fr: [
        {
          contentDirName: "/apps/fr",
          basename: "file1",
          uri: "/fr/logiciels/fichier1",
          language: "fr",
          frontMatter: { path_override: "fichier1" },
          content: "",
        },
      ],
    })
  })

  it("uses copy_files_from in customization.yaml", async () => {
    setupFsMocks({
      readdirResponses: {
        "/apps": [
          { type: "dir", name: "en" },
          { type: "dir", name: "fr" },
        ],
        "/apps/en": [
          { type: "file", name: "file1.md" },
          { type: "file", name: "file3.md" },
        ],
        "/apps/fr": [
          { type: "file", name: "file2.md" },
          { type: "file", name: "file3.md" },
        ],
      },
      readFileResponses: {
        "/apps/en/customization.yaml": "name: Apps",
        "/apps/en/file1.md": "---\n---",
        "/apps/en/file3.md": "---\n---",
        "/apps/fr/customization.yaml": "name: Logiciels\ncopy_files_from: en",
        "/apps/fr/file2.md": "---\n---",
        "/apps/fr/file3.md": "---\n---",
      },
    })

    await indexer.initialize()

    expect(indexer.root.name("en")).toEqual("Apps")
    expect(indexer.root.name("fr")).toEqual("Logiciels")
    expect(indexer.root.mdFiles).toEqual({
      en: [
        {
          contentDirName: "/apps/en",
          basename: "file1",
          uri: "/apps/file1",
          language: "en",
          frontMatter: {},
          content: "",
        },
        {
          contentDirName: "/apps/en",
          basename: "file3",
          uri: "/apps/file3",
          language: "en",
          frontMatter: {},
          content: "",
        },
      ],
      fr: [
        {
          contentDirName: "/apps/fr",
          basename: "file2",
          uri: "/fr/apps/file2",
          language: "fr",
          frontMatter: {},
          content: "",
        },
        {
          contentDirName: "/apps/fr",
          basename: "file3",
          uri: "/fr/apps/file3",
          language: "fr",
          frontMatter: {},
          content: "",
        },
        {
          contentDirName: "/apps/en",
          basename: "file1",
          uri: "/fr/apps/file1",
          language: "fr",
          copyFromLanguage: "en",
          frontMatter: {},
          content: "",
        },
      ],
    })
  })

  it("indexes subfolders", async () => {
    setupFsMocks({
      readdirResponses: {
        "/apps": [{ type: "dir", name: "faqs" }],
        "/apps/faqs": [{ type: "dir", name: "fr" }],
        "/apps/faqs/fr": [{ type: "file", name: "file1.md" }],
      },
      readFileResponses: {
        "/apps/faqs/fr/customization.yaml": "name: FAQs",
        "/apps/faqs/fr/file1.md": "---\n---",
      },
    })

    await indexer.initialize()

    expect(indexer.root.subfolders?.faqs?.name("fr")).toEqual("FAQs")
    expect(indexer.root.subfolders?.faqs?.mdFiles).toEqual({
      fr: [
        {
          contentDirName: "/apps/faqs/fr",
          basename: "file1",
          uri: "/fr/apps/faqs/file1",
          language: "fr",
          frontMatter: {},
          content: "",
        },
      ],
    })
  })

  it("allow files with the same name to be present in both language folders", async () => {
    setupFsMocks({
      readdirResponses: {
        "/apps": [{ type: "dir", name: "faqs" }],
        "/apps/faqs": [
          { type: "dir", name: "en" },
          { type: "dir", name: "fr" },
        ],
        "/apps/faqs/en": [{ type: "file", name: "file1.md" }],
        "/apps/faqs/fr": [{ type: "file", name: "file1.md" }],
      },
      readFileResponses: {
        "/apps/faqs/en/customization.yaml": "name: FAQs",
        "/apps/faqs/en/file1.md": "---\n---",
        "/apps/faqs/fr/customization.yaml": "name: Foire aux questions",
        "/apps/faqs/fr/file1.md": "---\npath_override: fichier1\n---",
      },
    })

    await indexer.initialize()

    expect(indexer.root.subfolders?.faqs?.name("en")).toEqual("FAQs")
    expect(indexer.root.subfolders?.faqs?.name("fr")).toEqual("Foire aux questions")
    expect(indexer.root.subfolders?.faqs?.mdFiles).toEqual({
      en: [
        {
          contentDirName: "/apps/faqs/en",
          basename: "file1",
          uri: "/apps/faqs/file1",
          language: "en",
          frontMatter: {},
          content: "",
        },
      ],
      fr: [
        {
          contentDirName: "/apps/faqs/fr",
          basename: "file1",
          uri: "/fr/apps/faqs/fichier1",
          language: "fr",
          frontMatter: {
            path_override: "fichier1",
          },
          content: "",
        },
      ],
    })
  })

  it("calculates breadcrumbs", async () => {
    setupFsMocks({
      readdirResponses: {
        "/apps": [
          { type: "dir", name: "fr" },
          { type: "dir", name: "faqs" },
        ],
        "/apps/fr": [],
        "/apps/faqs": [{ type: "dir", name: "fr" }],
        "/apps/faqs/fr": [{ type: "file", name: "file1.md" }],
      },
      readFileResponses: {
        "/apps/fr/customization.yaml": "name: Logiciels",
        "/apps/faqs/fr/customization.yaml": "name: Foire aux questions",
        "/apps/faqs/fr/file1.md": "---\ntitle: Fichier 1\npath_override: fichier1\n---",
      },
    })

    await indexer.initialize()

    const mdFile = indexer.root.subfolders?.faqs?.mdFiles?.fr?.[0]
    expect(mdFile?.breadcrumbs).toEqual([
      {
        label: "Logiciels",
        uri: "/fr/apps",
      },
      {
        label: "Foire aux questions",
        uri: "/fr/apps/faqs",
      },
      {
        label: "Fichier 1",
        uri: "/fr/apps/faqs/fichier1",
      },
    ])
  })

  it("calculates a folder links", async () => {
    setupFsMocks({
      readdirResponses: {
        "/apps": [{ type: "dir", name: "fr" }],
        "/apps/fr": [
          // Sorted according to frontmatter position, not filesystem order
          { type: "file", name: "file2.md" },
          { type: "file", name: "file1.md" },
        ],
      },
      readFileResponses: {
        "/apps/fr/customization.yaml": "name: Logiciels",
        "/apps/fr/file1.md": "---\ntitle: Fichier 1\npath_override: fichier1\nposition: 1\n---",
        "/apps/fr/file2.md": "---\ntitle: Fichier 2\npath_override: fichier2\nposition: 2\n---",
      },
    })

    await indexer.initialize()

    expect(indexer.root.folderLinks("fr")).toEqual([
      {
        label: "Fichier 1",
        uri: "/fr/apps/fichier1",
      },
      {
        label: "Fichier 2",
        uri: "/fr/apps/fichier2",
      },
    ])
  })
})

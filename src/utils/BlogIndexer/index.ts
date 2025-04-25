import { ContentDirName, listEntries, readMdFile } from "@utils/files"
import { allLanguages, defaultLanguage, Language } from "@utils/locales"

import { Href } from "../DocIndexer/types"

import { BlogFrontMatter, BlogMdFile } from "./types"

class BlogIndexer {
  mdFiles: Partial<Record<Language, Array<BlogMdFile>>> = {}

  constructor(private contentDirName: ContentDirName) {}

  async initialize() {
    const postNames = await listEntries(this.contentDirName, "directories")
    for (const postName of postNames) {
      const postDirName: ContentDirName = `${this.contentDirName}/${postName}`
      await this.indexPostFolder(postDirName)
    }
  }

  private async indexPostFolder(postDirName: ContentDirName): Promise<void> {
    const languages = await listEntries(postDirName, "directories")
    for (const language of languages) {
      if (this.isLanguageFolder(language)) {
        const languageDirName: ContentDirName = `${postDirName}/${language}`
        await this.indexLanguageFolder(languageDirName, language)
      }
    }
  }

  private isLanguageFolder(folderName: string): folderName is Language {
    return allLanguages.includes(folderName as Language)
  }

  private async indexLanguageFolder(languageDirName: ContentDirName, language: Language): Promise<void> {
    const filenames = await listEntries(languageDirName, "files")
    for (const filename of filenames) {
      if (filename === "__post.md") {
        const baseName = filename.replace(/\.md$/, "")
        const { frontMatter, content } = await readMdFile<BlogFrontMatter>(languageDirName, baseName)

        const uriPart = frontMatter.path_override
        const uri: Href = language === defaultLanguage ? `/blog/${uriPart}` : `/${language}/blog/${uriPart}`

        this.mdFiles[language] ||= []
        this.mdFiles[language]!.push({
          contentDirName: languageDirName,
          baseName,
          uri,
          language,
          frontMatter,
          content,
          bannerFileName: filenames.find((filename) => /^__banner\.(jpg|png|webp)$/.test(filename)),
        })
        // Sort by date, most recent first
        this.mdFiles[language]!.sort((a, b) => this.parseDate(b).comparable - this.parseDate(a).comparable)
      }
    }
  }

  allYears(language: Language): Array<number> {
    const years = new Set<number>()
    this.mdFiles[language]?.forEach((mdFile) => years.add(this.parseDate(mdFile).year))
    return Array.from(years).sort((a, b) => b - a)
  }

  allMdFiles(language: Language): Array<BlogMdFile> {
    return this.mdFiles[language]!
  }

  mdFilesByYear(language: Language, year: number): Array<BlogMdFile> {
    return this.mdFiles[language]!.filter((mdFile) => this.parseDate(mdFile).year === year)
  }

  private parseDate(mdFile: BlogMdFile): { year: number; comparable: number } {
    const date = new Date(mdFile.frontMatter.date)
    return {
      year: date.getFullYear(),
      comparable: date.getTime(),
    }
  }
}

export default BlogIndexer

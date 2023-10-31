import * as path from "path"

import type { ContentDirName } from "@utils/files"
import { listEntries, readMdFile, readYamlFile } from "@utils/files"
import { allLanguages, defaultLanguage, Language } from "@utils/locales"

import { DocFrontMatter, DocLink, DocMdFile, DocFolder, Href, FolderCustomisation } from "./types"

export class Folder {
  public parent: Folder | null = null
  public subfolders: Record<string, Folder> = {}
  public mdFiles: Partial<Record<Language, Array<MdFile>>> = {}
  public customisations: Partial<Record<Language, FolderCustomisation>> = {}

  constructor(public contentDirName: ContentDirName) {
    // Prevent a circular reference in the JSON output
    Object.defineProperty(this, "parent", { enumerable: false, writable: true })
  }

  name(language: Language): string {
    const name = this.customisations[language]?.name
    if (!name) {
      throw new Error(`Missing name for ${this.contentDirName} in ${language}`)
    }
    return name
  }

  uri(language: Language): Href {
    const part = this.customisations[language]?.path_override || (this.contentDirName.split("/").pop() as string)
    if (this.parent) {
      return path.join(this.parent.uri(language), part) as Href
    } else {
      return language === defaultLanguage ? `/${part}` : `/${language}/${part}`
    }
  }

  breadcrumbs(language: Language): Array<DocLink> {
    const breadcrumbs: Array<DocLink> = this.parent?.breadcrumbs(language) || []
    return breadcrumbs.concat({ label: this.name(language), uri: this.uri(language) })
  }

  folderLinks(language: Language): Array<DocLink> {
    const defaultPosition = Number.MAX_SAFE_INTEGER
    return (this.mdFiles[language] || [])
      .sort((a, b) => (a.frontMatter.position || defaultPosition) - (b.frontMatter.position || defaultPosition))
      .map((mdFile) => ({ label: mdFile.frontMatter.title, uri: mdFile.uri }))
  }

  /**
   * Returns a JSON-serializable object
   */
  toPlainObject(language: Language): DocFolder {
    return {
      contentDirName: this.contentDirName,
      name: this.name(language),
      uri: this.uri(language),
      folderLinks: this.folderLinks(language),
      customisation: this.customisations[language]!,
    }
  }
}

export class MdFile {
  constructor(
    public folder: Folder,
    public contentDirName: ContentDirName,
    public basename: string,
    public uri: Href,
    public language: Language,
    public copyFromLanguage: Language | undefined,
    public frontMatter: DocFrontMatter,
    public content: string,
  ) {
    // Prevent a circular reference in the JSON output
    Object.defineProperty(this, "folder", { enumerable: false, writable: true })
  }

  get breadcrumbs(): Array<DocLink> {
    return this.folder.breadcrumbs(this.language).concat({ label: this.frontMatter.title, uri: this.uri })
  }

  /**
   * Returns a JSON-serializable object
   */
  toPlainObject(): DocMdFile {
    return {
      contentDirName: this.contentDirName,
      baseName: this.basename,
      uri: this.uri,
      language: this.language,
      copyFromLanguage: this.copyFromLanguage,
      frontMatter: this.frontMatter,
      content: this.content,
      breadcrumbs: this.breadcrumbs,
    }
  }
}

class DocIndexer {
  root: Folder

  constructor(contentDirName: ContentDirName) {
    this.root = DocIndexer.createFolder(contentDirName)
  }

  async initialize() {
    await this.indexFolder(this.root)
  }

  private static createFolder(contentDirName: ContentDirName): Folder {
    const folder = new Folder(contentDirName)
    // Prevent a circular reference in the JSON output
    Object.defineProperty(folder, "parent", { enumerable: false, writable: true })
    Object.defineProperty(folder, "mdFiles", { enumerable: false, writable: true })
    return folder
  }

  private async indexFolder(folder: Folder): Promise<void> {
    const dirNames = await listEntries(folder.contentDirName, "directories")

    // Language folders first, to get their customisation
    for (const language of dirNames.filter(this.isLanguageFolder)) {
      const contentDirName = [folder.contentDirName, language].join("/") as ContentDirName
      const customisation = await this.readCustomizationYaml(contentDirName)

      // Skip folders without customization.yaml
      if (!customisation) continue

      folder.customisations[language] = customisation
      await this.indexLanguageFolder(contentDirName, folder, language, customisation)
    }

    // Then the other folders
    for (const dirName of dirNames.filter((dirName) => !this.isLanguageFolder(dirName))) {
      const contentDirName = [folder.contentDirName, dirName].join("/") as ContentDirName
      const subfolder: Folder = DocIndexer.createFolder(contentDirName)
      folder.subfolders[dirName] = subfolder
      subfolder.parent = folder
      await this.indexFolder(subfolder)
    }
  }

  private async indexLanguageFolder(
    contentDirName: ContentDirName,
    parentFolder: Folder,
    language: Language,
    customisation: FolderCustomisation,
  ): Promise<void> {
    await this.handleMdFiles(contentDirName, parentFolder, language)

    if (customisation.copy_files_from) {
      const copyFromContentDirName = contentDirName.replace(
        new RegExp(`/${language}$`),
        `/${customisation.copy_files_from}`,
      ) as ContentDirName
      await this.handleMdFiles(copyFromContentDirName, parentFolder, language, customisation.copy_files_from)
    }
  }

  private isLanguageFolder(folderName: string): folderName is Language {
    return allLanguages.includes(folderName as Language)
  }

  private async handleMdFiles(
    contentDirName: ContentDirName,
    folder: Folder,
    language: Language,
    copyFromLanguage?: Language,
  ) {
    const filenames = await listEntries(contentDirName, "files")

    for (const filename of filenames) {
      if (filename.endsWith(".md")) {
        // Files created through copyFromLanguage should not override existing files
        if (copyFromLanguage && folder.mdFiles[language]?.some(({ basename }) => basename === this.basename(filename)))
          continue
        await this.handleMdFile(contentDirName, filename, folder, language, copyFromLanguage)
      }
    }
  }

  private async handleMdFile(
    contentDirName: ContentDirName,
    filename: string,
    folder: Folder,
    language: Language,
    copyFromLanguage?: Language,
  ): Promise<void> {
    const basename = this.basename(filename)
    const { frontMatter, content } = await readMdFile<DocFrontMatter>(contentDirName, basename)

    let uri: Href = folder.uri(language)
    if (frontMatter.path_override !== "/") {
      uri = path.join(uri, frontMatter.path_override || basename) as Href
    }

    folder.mdFiles[language] ||= []
    folder.mdFiles[language]!.push(
      new MdFile(
        folder,
        contentDirName,
        basename,
        uri,
        language,
        copyFromLanguage,
        frontMatter as DocFrontMatter,
        content,
      ),
    )
  }

  private async readCustomizationYaml(contentDirName: ContentDirName): Promise<FolderCustomisation | undefined> {
    return await readYamlFile<FolderCustomisation>(contentDirName, "customization", true)
  }

  private basename(filename: string): string {
    return filename.replace(/\.md$/, "")
  }
}

export default DocIndexer

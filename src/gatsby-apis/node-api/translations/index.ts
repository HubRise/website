import path from 'path'
import fs from 'fs'
import * as rimraf from 'rimraf'
import * as yaml from 'js-yaml'

export const onPostBuild = copyTranslationsToJson
export const onPostBootstrap = copyTranslationsToJson

function copyTranslationsToJson(): void {
  try {
    const sourcePath = path.resolve(process.cwd(), `src/i18n/resources`)
    const targetPath = path.resolve(process.cwd(), `public/locales`)

    const locales = fs.readdirSync(sourcePath)

    if (fs.existsSync(targetPath)) {
      rimraf.sync(targetPath)
    }

    fs.mkdirSync(targetPath)

    locales.forEach((locale) => {
      fs.mkdirSync(path.join(targetPath, locale))

      const translations = fs.readdirSync(path.join(sourcePath, locale))

      translations.forEach((name) => {
        const [content] = yaml.loadAll(
          fs.readFileSync(path.join(sourcePath, locale, name), 'utf8')
        )

        fs.writeFileSync(
          path.join(targetPath, locale, name.replace(`yml`, `json`)),
          JSON.stringify(content, null, 2)
        )
      })
    })
  } catch (e) {
    console.error(e)
  }
}

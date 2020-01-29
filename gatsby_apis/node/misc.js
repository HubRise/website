const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const rimraf = require('rimraf')

const copyTranslations = () => {
  try {
    const source = path.resolve(process.cwd(), `src/i18n/resources`)
    const target = path.resolve(process.cwd(), `public/locales`)

    const locales = fs.readdirSync(source)

    if (fs.existsSync(target)) {
      rimraf.sync(target)
    }

    fs.mkdirSync(target)

    locales.forEach((locale) => {
      fs.mkdirSync(path.join(target, locale))

      const translations = fs.readdirSync(path.join(source, locale))

      translations.forEach((name) => {
        const [content] = yaml.safeLoadAll(
          fs.readFileSync(path.join(source, locale, name), 'utf8')
        )

        fs.writeFileSync(
          path.join(target, locale, name.replace(`yml`, `json`)),
          JSON.stringify(content, null, 2)
        )
      })
    })
  } catch (e) {
    console.error(e)
  }
}

module.exports = { copyTranslations }

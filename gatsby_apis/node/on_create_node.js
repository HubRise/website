const fs = require(`fs`)
const path = require(`path`)
const yaml = require('js-yaml')
const locales = require('../../src/i18n/locales')

function normalizePath(filePath) {
  return filePath.split(path.sep).join(path.posix.sep)
}

function getContentLangFromPath(relativePath) {
  const defaultLocale = Object.values(locales).find((locale) => locale.default)
  const defaultLang = defaultLocale ? defaultLocale.code : 'en'

  const contentLocale = Object.values(locales).find((locale) => {
    const langPath = path.posix.sep + locale.code + path.posix.sep
    return relativePath.includes(langPath)
  })

  return contentLocale ? contentLocale.code : defaultLang
}

const onCreateNode = ({ node, actions }) => {
  if (node.internal.type === `Mdx`) {
    const { createNodeField } = actions
    const { fileAbsolutePath, frontmatter } = node
    const config = yaml.safeLoad(
      fs.readFileSync(
        path.join(path.dirname(fileAbsolutePath), `customization.yaml`),
        `utf-8`
      )
    )

    let fileName = path.basename(
      fileAbsolutePath,
      path.extname(fileAbsolutePath)
    )

    if (config.base_path === '/blog') {
      /** "2020-01-29_article-title" -> "article-title" */
      fileName = fileName.slice(11)
    }

    const slug =
      (config.base_path === `/` ? `` : config.base_path) +
      (frontmatter.path_override ? frontmatter.path_override : `/${fileName}/`)

    createNodeField({
      node,
      name: `slug`,
      value: slug.replace(/_/g, `-`)
    })

    const relativePath = normalizePath(
      path.posix.sep + path.relative(process.cwd(), fileAbsolutePath)
    )

    createNodeField({
      node,
      name: `contentLang`,
      value: getContentLangFromPath(relativePath)
    })
  }
}

module.exports = onCreateNode

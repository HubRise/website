const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const { flattenDeep } = require('lodash')
const { partialRight } = require('lodash/fp')

const locales = require(path.join(process.cwd(), `src/i18n/locales.js`))
const allLocaleCodes = Object.keys(locales)
const { getDefaultLocale } = require(path.join(__dirname, `utils`))

const pathToLayouts = path.join(process.cwd(), `src/layouts`)
const pathToContent = path.join(process.cwd(), `content`)

const getLayout = (name) => path.join(pathToLayouts, `${name}.jsx`)

const getMdxContent = async (pathToPages, graphql) => {
  const glob = `"${pathToPages}/*"`
  const { data, errors } = await graphql(`
    query loadMdxDataForCreatingPages {
      allMdx (
        filter: { fileAbsolutePath: { glob: ${glob} }}
      ) {
        nodes {
          id
          fileAbsolutePath
          fields {
            slug
          }
          frontmatter {
            layout
            gallery
            path_override
            meta {
              description
              title
            }
          }
        }
      }
    }
  `)

  if (errors) {
    return Promise.reject(errors)
  }

  return data
}

const createPageFromMdxNode = (node, locale, actions) => {
  const { id, fileAbsolutePath, frontmatter, fields } = node
  const { layout, meta } = frontmatter
  const currentDirectory = path.dirname(fileAbsolutePath)
  const parentDirectory = path.dirname(currentDirectory)
  const pathToImages = `${parentDirectory}/images`
  const config = yaml.safeLoad(
    fs.readFileSync(path.join(currentDirectory, `customization.yaml`), `utf-8`)
  )

  actions.createPage({
    path: (locale.default ? `` : locale.code) + fields.slug,
    component: getLayout(layout),
    context: {
      id,
      currentAndSiblingPagesFilter: {
        fileAbsolutePath: { glob: `${currentDirectory}/*` }
      },
      imagesFilter: {
        absolutePath: { glob: `${pathToImages}/**/*` }
      },
      meta,
      config,
      lang: locale.code
    }
  })
}

const _createPages = async (
  pathToPages,
  locale,
  actions,
  graphql
) => {
  const { allMdx: { nodes: mdxNodes } } = await getMdxContent(pathToPages, graphql)

  mdxNodes.forEach((node) => createPageFromMdxNode(node, locale, actions))
}

const createPagesForEachChapter = (
  pathToContent,
  locale,
  createPagesForLocale
) => {
  return fs.readdirSync(pathToContent).map((chapterName) => {
    const pathToChapter = path.join(pathToContent, chapterName)
    const nestedChapters = fs.readdirSync(pathToChapter)
      .filter((subdir) => subdir !== `images` && !allLocaleCodes.includes(subdir))

    if (nestedChapters.length > 0) {
      return createPagesForEachChapter(pathToChapter, locale, createPagesForLocale)
    }

    const pathToLocalizedPages = path.join(pathToChapter, locale.code)

    if (fs.existsSync(pathToLocalizedPages)) {
      return createPagesForLocale(pathToLocalizedPages)
    }

    // Current locale is default and respective folder with pages is missing -
    // don't create anything in that case.
    if (locale.default) return

    const pathToPagesInDefaulLocale = path.join(
      pathToChapter,
      getDefaultLocale().code
    )

    // For every other locale, fallback to content in default locale, if available.
    if (fs.existsSync(pathToPagesInDefaulLocale)) {
      return createPagesForLocale(pathToPagesInDefaulLocale)
    }
  })
}

const createPages = async ({ actions, graphql }) => {
  const createPagePromises = Object.values(locales)
    .map(function createPagesForEachLocale (locale) {
      const createPagesForLocale = partialRight(_createPages, [locale, actions, graphql])

      return createPagesForEachChapter(pathToContent, locale, createPagesForLocale)
    })

  try {
    await Promise.all(flattenDeep(createPagePromises))
  } catch (error) {
    console.error(`An error occurred while creating pages from MDX`, error)
  }
}

module.exports = createPages

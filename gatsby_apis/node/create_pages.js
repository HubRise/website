const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const { flattenDeep } = require('lodash')
const { partialRight } = require('lodash/fp')

const locales = require(path.join(process.cwd(), `src/i18n/locales.json`))
const {
  getDirectoriesRecursive,
  getDefaultLocale
} = require(path.join(process.cwd(), `gatsby_apis/node/utils`))

const pathToLayouts = path.join(process.cwd(), `src/layouts`)
const pathToContent = path.join(process.cwd(), `src/content`)
const chapters = fs.readdirSync(pathToContent)

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
          frontmatter {
            layout
            gallery
            path_override
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
  const { id, fileAbsolutePath, frontmatter } = node
  const { layout, gallery, path_override: pathOverride } = frontmatter
  const parentDir = path.dirname(fileAbsolutePath)
  const fileName = path.basename(fileAbsolutePath, `.md`).replace(/_/g, `-`)
  const pathToImages = `${parentDir}/images`
  const config = yaml.safeLoad(
    fs.readFileSync(path.join(parentDir, `customization.yaml`), `utf-8`)
  )
  const slug = config.base_path + (pathOverride || `/${fileName}/`)

  actions.createPage({
    path: (locale.default ? `` : locale.code) + slug,
    component: getLayout(layout),
    context: {
      id,
      currentAndSiblingPagesFilter: {
        fileAbsolutePath: { glob: `${parentDir}/*` }
      },
      galleryImagesFilter: {
        absolutePath: { glob: `${pathToImages}/*` },
        base: { in: gallery || [] }
      },
      logoAbsolutePath: {
        eq: config.logo
          ? `${pathToImages}/${config.logo}`
          : ``
      },
      ...config
    }
  })
}

const _createPages = (
  pathToPages,
  locale,
  actions,
  graphql
) => {
  const subdirectories = getDirectoriesRecursive(pathToPages)

  return subdirectories
    .map(async function createPagesInSubdirectories (path) {
      const { allMdx: { nodes: mdxNodes } } = await getMdxContent(path, graphql)

      mdxNodes.forEach((node) => createPageFromMdxNode(node, locale, actions))
    })
}

const createPages = async ({ graphql, actions }) => {
  const createPagePromises = Object.values(locales)
    .map(function createPagesForEachLocale (locale) {
      const createPagesForLocale = partialRight(_createPages, [locale, actions, graphql])

      return chapters.map(function createPagesForEachChapter (chapterName) {
        const pathToChapter = path.join(pathToContent, chapterName)
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

        // For every other locale, fallback to content in default locale.
        if (fs.existsSync(pathToPagesInDefaulLocale)) {
          return createPagesForLocale(pathToPagesInDefaulLocale)
        }
      })
    })

  try {
    await Promise.all(flattenDeep(createPagePromises))
  } catch (e) {
    console.error(`An error occurred while creating pages from MDX`, e)
  }
}

module.exports = createPages

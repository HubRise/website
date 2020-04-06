const fs = require('fs')
const path = require('path')
const util = require('util')
const yaml = require('js-yaml')

const locales = require('../../src/i18n/locales')
const { parseFolder } = require('./content_parser')

const allLocaleCodes = Object.keys(locales)
const { getDefaultLocale } = require(path.join(__dirname, `utils`))

const pathToLayouts = path.join(process.cwd(), `src/layouts`)
const pathToContent = path.join(process.cwd(), `content`)

const getLayout = (name) => path.join(pathToLayouts, `${name}.jsx`)

function normalizePath(filePath) {
  return filePath.split(path.sep).join(path.posix.sep)
}

/** Get content from MDX files of certain directory */
const getMdxContent = async (pathToDirectory, graphql) => {
  /** this glob matches all files inside directory */
  const glob = `"${pathToDirectory}/*"`

  const { data, errors } = await graphql(`
    query loadMdxDataForCreatingPages {
      allMdx (
        filter: { fileAbsolutePath: { glob: ${normalizePath(glob)} }}
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

  const relativePath = normalizePath(
    path.posix.sep + path.relative(process.cwd(), fileAbsolutePath)
  )

  actions.createPage({
    path: (locale.default ? `` : locale.code) + fields.slug,
    component: getLayout(layout),
    context: {
      id,
      currentAndSiblingPagesFilter: {
        fileAbsolutePath: { glob: normalizePath(`${currentDirectory}/*`) }
      },
      imagesFilter: {
        absolutePath: { glob: normalizePath(`${pathToImages}/**/*`) }
      },
      meta,
      config,
      lang: locale.code,
      relativePath
    }
  })
}

const getDirectoriesWithMdxFiles = () => {
  const mdxDirectories = new Map()

  const parseDirectory = ({ pathToDirectory, locale }) => {
    const filenames = fs.readdirSync(pathToDirectory)

    console.log('filenames', filenames)

    return filenames.forEach((fileName) => {
      const pathToFile = path.join(pathToDirectory, fileName)

      const isNestedFolderName = (filename) =>
        filename !== 'images' && !allLocaleCodes.includes(filename)

      const nestedFolderList = !isNestedFolderName(fileName)
        ? []
        : fs.readdirSync(pathToFile).filter(isNestedFolderName)

      if (nestedFolderList.length > 0) {
        /** Search recursively in nested directories */
        return parseDirectory({ pathToDirectory: pathToFile, locale })
      }

      const pathToLocalizedPages =
        fileName === locale.code
          ? pathToFile
          : path.join(pathToFile, locale.code)

      console.log('pathToLocalizedPages', pathToLocalizedPages)
      if (fs.existsSync(pathToLocalizedPages)) {
        mdxDirectories.set(pathToLocalizedPages, {
          path: pathToLocalizedPages,
          locale
        })
        return
      }

      // Current locale is default and respective folder with pages is missing -
      // don't create anything in that case.
      if (locale.default) return

      const pathToPagesInDefaultLocale = path.join(
        pathToFile,
        getDefaultLocale().code
      )

      // For every other locale, fallback to content in default locale, if available.
      if (fs.existsSync(pathToPagesInDefaultLocale)) {
        mdxDirectories.set(pathToPagesInDefaultLocale, {
          path: pathToPagesInDefaultLocale,
          locale
        })
      }
    })
  }

  Object.values(locales).forEach((locale) =>
    parseDirectory({ pathToDirectory: pathToContent, locale })
  )

  return Array.from(mdxDirectories.values())
}

const getBlogPostList = async (graphql) => {
  const { data, errors } = await graphql(`
    query getPostList {
      allMdx(filter: { fields: { slug: { glob: "/blog/*" } } }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              meta {
                description
                title
              }
              date
              layout
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

const getArchiveInfoFromPostDate = (date) => {
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    isCurrentYear: date.getFullYear() === new Date().getFullYear()
  }
}

const generateArchiveList = (postDateList) => {
  const sortedDates = [...postDateList].sort((a, b) => b - a)
  const archiveMap = new Map()

  sortedDates.forEach((date) => {
    const archiveInfo = getArchiveInfoFromPostDate(date)
    const archiveKey = archiveInfo.isCurrentYear
      ? [archiveInfo.year, archiveInfo.month].join('_')
      : archiveInfo.year.toString()

    if (!archiveMap.has(archiveKey)) {
      archiveMap.set(archiveKey, archiveInfo)
    }
  })

  return Array.from(archiveMap.values())
}

const createBlogPages = async ({ actions, graphql }) => {
  const {
    allMdx: { edges: postList }
  } = await getBlogPostList(graphql)

  const archiveList = generateArchiveList(
    postList.map((post) => new Date(post.node.frontmatter.date))
  )

  const BLOG_PAGE_PATH = '/blog'

  Object.values(locales).forEach((locale) => {
    actions.createPage({
      path: (locale.default ? `` : locale.code) + BLOG_PAGE_PATH,
      component: getLayout('blog'),
      context: {
        config: null,
        lang: locale.code
      }
    })

    archiveList.forEach((archive) => {
      actions.createPage({
        path:
          (locale.default ? `` : locale.code) +
          (archive.isCurrentYear
            ? `${BLOG_PAGE_PATH}/${archive.year}/${archive.month + 1}`
            : `${BLOG_PAGE_PATH}/${archive.year}`),
        component: getLayout('blog'),
        context: {
          config: null,
          lang: locale.code,
          archive
        }
      })
    })
  })
}

const createPages = async ({ actions, graphql }) => {
  const directoriesWithMdxFiles = getDirectoriesWithMdxFiles()

  // const parsedContent = await parseFolder(
  //   process.cwd(),
  //   `content`,
  //   allLocaleCodes
  // )
  // console.log(util.inspect(parsedContent, { colors: true, depth: 25 }))

  console.log('directoriesWithMdxFiles', directoriesWithMdxFiles)

  const promises = directoriesWithMdxFiles.map(async (directory) => {
    const {
      allMdx: { nodes: mdxNodes }
    } = await getMdxContent(directory.path, graphql)
    mdxNodes.forEach((node) =>
      createPageFromMdxNode(node, directory.locale, actions)
    )
  })

  const blogPromise = createBlogPages({ actions, graphql })

  try {
    await Promise.all([...promises, blogPromise])
  } catch (error) {
    console.error(`An error occurred while creating pages from MDX`, error)
  }
}

module.exports = createPages

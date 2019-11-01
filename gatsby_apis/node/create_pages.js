const fs = require('fs')
const path = require('path')
const locales = require(path.resolve(process.cwd(), 'src/i18n/locales.json'))

const templates = path.resolve(process.cwd(), `src/templates`)
const getTemplate = (name) => path.join(templates, `${name || 'doc'}.jsx`)

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data, errors } = await graphql(`
    query loadMdxDataForCreatingPages {
      allMdx {
        nodes {
          id
          frontmatter {
            template
            gallery
            pathOverride
          }
          fileAbsolutePath
          fields {
            slug
            appId
          }
        }
      }
    }
  `)

  if (errors) {
    return Promise.reject(errors)
  }

  data.allMdx.nodes.forEach(({ id, fileAbsolutePath, fields, frontmatter }) => {
    const { template, gallery, pathOverride } = frontmatter
    const parentDir = path.dirname(fileAbsolutePath)
    const fileName = path.basename(fileAbsolutePath, `.md`).replace(/_/g, `-`)
    const pathToConfig = path.join(parentDir, `customization.json`)
    const config = fs.existsSync(pathToConfig) && JSON.parse(
      fs.readFileSync(pathToConfig, `utf-8`)
    )
    const slug = config
      ? config.basePath + (pathOverride || `/${fileName}/`)
      : fields.slug

    Object.values(locales).forEach((props) => {
      createPage({
        path: (props.default ? `` : props.code) + slug,
        component: getTemplate(template),
        context: {
          id,
          currentAndSiblingPagesFilter: {
            fileAbsolutePath: { glob: `${parentDir}/*` }
          },
          galleryImagesFilter: {
            base: { in: gallery || [null] }
          },
          logoAbsolutePath: {
            eq: config.logoFileName
              ? `${parentDir}/images/${config.logoFileName}`
              : ``
          },
          ...config
        }
      })
    })
  })
}

module.exports = createPages

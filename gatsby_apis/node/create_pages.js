const fs = require('fs')
const path = require('path')
const locales = require(path.resolve(process.cwd(), 'src/i18n/locales.json'))

const layouts = path.resolve(process.cwd(), `src/layouts`)
const getLayout = (name) => path.join(layouts, `${name}.jsx`)

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data, errors } = await graphql(`
    query loadMdxDataForCreatingPages {
      allMdx {
        nodes {
          id
          frontmatter {
            layout
            gallery
            path_override
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
    const { layout, gallery, path_override: pathOverride } = frontmatter
    const parentDir = path.dirname(fileAbsolutePath)
    const fileName = path.basename(fileAbsolutePath, `.md`).replace(/_/g, `-`)
    const pathToImages = `${parentDir}/images`
    const pathToConfig = path.join(parentDir, `customization.json`)
    const config = fs.existsSync(pathToConfig) && JSON.parse(
      fs.readFileSync(pathToConfig, `utf-8`)
    )
    const slug = config
      ? config.base_path + (pathOverride || `/${fileName}/`)
      : fields.slug

    Object.values(locales).forEach((props) => {
      createPage({
        path: (props.default ? `` : props.code) + slug,
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
    })
  })
}

module.exports = createPages

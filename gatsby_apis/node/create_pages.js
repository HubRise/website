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
            logo
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
    const { slug } = fields
    const { template, gallery, logo } = frontmatter

    Object.values(locales).forEach((props) => {
      createPage({
        path: (props.default ? `` : props.code) + slug,
        component: getTemplate(template),
        context: {
          id,
          currentAndSiblingPagesFilter: {
            fileAbsolutePath: { glob: `${path.dirname(fileAbsolutePath)}/*` }
          },
          galleryImagesFilter: {
            base: { in: gallery || [null] }
          },
          logoRelativePath: { eq: logo || `` }
        }
      })
    })
  })
}

module.exports = createPages

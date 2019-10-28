const path = require('path')
const locales = require(path.resolve(process.cwd(), 'src/i18n/locales.json'))

const templates = path.resolve(process.cwd(), `src/templates`)
const getTemplate = (name) => path.join(templates, `${name || 'doc'}.jsx`)

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query loadMdxDataForCreatingPages {
      allMdx {
        nodes {
          id
          frontmatter {
            template
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

  if (result.errors) {
    return Promise.reject(result.errors)
  }

  result.data.allMdx.nodes.forEach(({ id, fileAbsolutePath, fields, frontmatter }) => {
    const { slug, appId } = fields
    const component = getTemplate(frontmatter.template)

    Object.values(locales).forEach((props) => {
      createPage({
        path: (props.default ? `` : props.code) + slug,
        component,
        context: {
          id,
          currentAndSiblingPagesFilter: {
            fileAbsolutePath: { glob: `${path.dirname(fileAbsolutePath)}/*` }
          },
          appImagesFilter: {
            relativeDirectory: appId
              ? { regex: `/${appId}/images/` }
              : { eq: null }
          }
        }
      })
    })
  })
}

module.exports = createPages

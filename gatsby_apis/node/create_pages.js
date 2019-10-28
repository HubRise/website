const path = require('path')
const locales = require(path.resolve(process.cwd(), 'src/i18n/locales.json'))

const templates = path.resolve(process.cwd(), `src/templates`)
const docsTemplate = path.join(templates, `api/index.jsx`)
const faqTemplate = path.join(templates, `faq.jsx`)
const appTemplate = path.join(templates, `app/index.jsx`)

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query loadMdxDataForCreatingPages{
      allMdx {
        nodes {
          id
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

  result.data.allMdx.nodes.forEach(({ id, fileAbsolutePath, fields }) => {
    const { slug, appId } = fields
    const parentDirectoryPath = path.dirname(fileAbsolutePath)
    const siblingPagesFilter = {
      id: { ne: id },
      fileAbsolutePath: { glob: `${parentDirectoryPath}/*` }
    }

    if (appId) {
      const isOverviewPage = slug.match(new RegExp(`${appId}/$`))

      if (isOverviewPage) {
        // Generate app overview page.
        createPage({
          path: `fr${slug}`,
          component: appTemplate,
          context: {
            id,
            appImagesFilter: {
              relativeDirectory: { regex: `/${appId}/` },
              sourceInstanceName: { eq: `images` }
            },
            siblingPagesFilter
          }
        })
      } else {
        // Generate related help page.
        createPage({
          path: `fr${slug}`,
          component: docsTemplate,
          context: {
            id,
            appLogoRelativePath: { regex: `/apps/${appId}/logo/` },
            siblingPagesFilter
          }
        })
      }

      return
    }

    if (slug.includes(`faq`)) {
      return createPage({
        path: `fr${slug}`,
        component: faqTemplate,
        context: { id }
      })
    }

    Object.values(locales).forEach((props) => {
      createPage({
        path: (props.default ? `` : props.code) + slug,
        component: docsTemplate,
        context: {
          id,
          appLogoRelativePath: { eq: null },
          siblingPagesFilter
        }
      })
    })
  })
}

module.exports = createPages

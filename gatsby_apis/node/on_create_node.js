const fs = require(`fs`)
const path = require(`path`)
const yaml = require('js-yaml')

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
  }
}

module.exports = onCreateNode

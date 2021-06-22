import * as yaml from 'js-yaml'
import { CreateNodeArgs, CreateResolversArgs } from 'gatsby'

export async function onCreateNode({
  node,
  actions,
  loadNodeContent,
  createNodeId,
  createContentDigest
}: CreateNodeArgs) {
  if (
    node.internal.type === 'File' &&
    (node.base as string).endsWith(`.yaml`)
  ) {
    const content = await loadNodeContent(node)
    const id = createNodeId(`${node.id} >>> Yaml`)

    const yamlNode = {
      id,
      children: [],
      parent: node.id,
      internal: {
        content,
        contentDigest: createContentDigest(content),
        type: 'Yaml'
      }
    }

    const { createNode, createParentChildLink } = actions
    createNode(yamlNode)
    // @ts-ignore - child node has a too restrictive type. See https://github.com/gatsbyjs/gatsby/issues/19993
    createParentChildLink({ parent: node, child: yamlNode })
  }
}

export async function createResolvers({
  createResolvers
}: CreateResolversArgs) {
  createResolvers({
    Yaml: {
      parsedContent: {
        type: `JSON`,
        resolve: (source) => yaml.load(source.internal.content)
      }
    }
  })
}

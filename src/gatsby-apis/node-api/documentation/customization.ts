import { GraphQLFunction } from "../util/types"
import { LocaleCode } from "../../../utils/locales"

export interface Customization {
  name: string
  path_override?: string
  logo?: string
  copy_files_from?: LocaleCode
}

export type CustomizationMap = Map<string, Customization>

interface CustomizationGQL {
  allFile: {
    nodes: Array<{
      relativeDirectory: string
      childYaml: {
        parsedContent: Customization
      }
    }>
  }
}

/**
 * Returns a map allowing to find a Customization by its directory path relative to /content (eg "apps/deliveroo/en")
 * @param graphql
 */
export async function generateCustomizationMap(graphql: GraphQLFunction): Promise<CustomizationMap> {
  const { data, errors } = await graphql<CustomizationGQL>(`
    query generateCustomizationMap {
      allFile(filter: { name: { eq: "customization" } }) {
        nodes {
          relativeDirectory
          childYaml {
            parsedContent
          }
        }
      }
    }
  `)
  if (errors) throw errors
  if (!data) throw "GraphQL returned no data"

  const result = new Map<string, Customization>()
  for (const node of data.allFile.nodes) {
    if (!node.childYaml.parsedContent) {
      throw `The content/${node.relativeDirectory}/customization.yaml file is empty. It must at least define a "name".`
    }
    result.set(node.relativeDirectory, node.childYaml.parsedContent)
  }
  return result
}

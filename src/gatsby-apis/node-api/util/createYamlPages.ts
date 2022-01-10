import { CreatePagesArgs } from "gatsby"

import { YamlContext } from "../../../utils/context"
import { LocaleCode, localeCodes } from "../../../utils/locales"

import { generateLanguagePaths, parseRelativePath } from "./locale"
import { pathWithLocale } from "./urls"
import { getLayoutPath } from "./layout"

interface YamlData {
  allFile: {
    nodes: Array<YamlNode>
  }
}

interface YamlNode {
  absolutePath
  id
  childYaml: {
    parsedContent: any
  }
}

export async function createYamlPages(yamlFile: string, layoutName: string, args: CreatePagesArgs): Promise<void> {
  const { actions, graphql } = args

  const { data, errors } = await graphql<YamlData>(`
    query {
      allFile(filter: { base: { eq: "${yamlFile}" } }) {
        nodes {
          absolutePath
          id
          childYaml {
            parsedContent
          }
        }
      }
    }
  `)

  if (errors) throw errors
  if (!data) throw "GraphQL returned no data"

  const getNode = (localeCode: LocaleCode): YamlNode => {
    const node = data.allFile.nodes.find((node) => parseRelativePath(node.absolutePath).localeCode === localeCode)
    if (!node) throw `No ${yamlFile} file found for locale ${localeCode}`
    return node
  }

  const getPath = (localeCode: LocaleCode): string => {
    return pathWithLocale(localeCode, getNode(localeCode).childYaml.parsedContent.path)
  }

  localeCodes.forEach((localeCode) => {
    const node = getNode(localeCode)

    actions.createPage<YamlContext>({
      path: pathWithLocale(localeCode, node.childYaml.parsedContent.path),
      component: getLayoutPath(layoutName),
      context: {
        id: node.id,
        languagePaths: generateLanguagePaths(localeCode, getPath),
        localeCode,
      },
    })
  })
}

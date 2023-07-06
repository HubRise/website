import { GatsbyNode } from "gatsby"

const plugins = [
  require(`./404`),
  require(`./apps`),
  require(`./blog`),
  require(`./documentation`),
  require(`./frontpage`),
  require(`./pricing`),
  require(`./redirects`),
  require(`./yaml-transformer`),
]

async function runApiForPlugins(api: keyof GatsbyNode, helpers: any) {
  await Promise.all(plugins.map((plugin) => plugin[api] && plugin[api](helpers)))
}

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = async (helpers) => {
  await runApiForPlugins(`createSchemaCustomization`, helpers)
}

export const onCreateNode: GatsbyNode["onCreateNode"] = async (helpers) => {
  await runApiForPlugins(`onCreateNode`, helpers)
}

export const createPages: GatsbyNode["createPages"] = async (helpers) => {
  await runApiForPlugins(`createPages`, helpers)
}

export const createResolvers: GatsbyNode["createResolvers"] = async (helpers) => {
  await runApiForPlugins(`createResolvers`, helpers)
}

export const onPostBuild: GatsbyNode["onPostBuild"] = async (helpers) => {
  await runApiForPlugins(`onPostBuild`, helpers)
}

export const onPostBootstrap: GatsbyNode["onPostBootstrap"] = async (helpers) => {
  await runApiForPlugins(`onPostBootstrap`, helpers)
}

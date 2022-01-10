"use strict"

require("./util/gatsby-inspector")

require("source-map-support").install()
require("ts-node").register()

const plugins = [
  require(`./404`),
  require(`./apps`),
  require(`./blog`),
  require(`./documentation`),
  require(`./frontpage`),
  require(`./pricing`),
  require(`./redirects`),
  require(`./translations`),
  require(`./yaml-transformer`),
]

async function runApiForPlugins(api, helpers) {
  await Promise.all(plugins.map((plugin) => plugin[api] && plugin[api](helpers)))
}

exports.createSchemaCustomization = async (helpers) => {
  await runApiForPlugins(`createSchemaCustomization`, helpers)
}

exports.onCreateNode = async (helpers) => {
  await runApiForPlugins(`onCreateNode`, helpers)
}

exports.createPages = async (helpers) => {
  await runApiForPlugins(`createPages`, helpers)
}

exports.createResolvers = async (helpers) => {
  await runApiForPlugins(`createResolvers`, helpers)
}

exports.onPostBuild = async (helpers) => {
  await runApiForPlugins(`onPostBuild`, helpers)
}

exports.onPostBootstrap = async (helpers) => {
  await runApiForPlugins(`onPostBootstrap`, helpers)
}
